#!/usr/bin/env node
/**
 * Radar visual — matriz de QA do Marvel Rivals Coach.
 *
 * Sobe o build de produção com `vite preview`, abre o Chrome headless via CDP e
 * varre 15 larguras x 7 alturas nas rotas principais. Falha (rc=1) quando encontra
 * overflow horizontal, corte no banner, imagem local quebrada, stat-tile fora do
 * card ou sistema de mecânica ausente.
 *
 * Uso: node scripts/radar_qa.cjs [--report <dir>] [--routes menu,gorr,...]
 * Requer: google-chrome no PATH e build atualizado em dist/ (npm run build).
 * Saída: JSON completo em <report>/radar-<timestamp>.json e prints em <report>/*.png
 */
const fs = require('node:fs/promises')
const path = require('node:path')
const net = require('node:net')
const { spawn } = require('node:child_process')

const ROOT = path.resolve(__dirname, '..')
const VITE = path.join(ROOT, 'node_modules/vite/bin/vite.js')
const REPORT_DIR = process.env.RADAR_REPORT_DIR || path.join(ROOT, 'audit', 'radar')
const WIDTHS = [2560, 1920, 1600, 1440, 1366, 1280, 1100, 1024, 980, 860, 760, 713, 640, 480, 390]
const HEIGHTS = [720, 800, 900, 1080, 1440, 2400, 4320]
const ROUTES = [
  { path: '/', name: 'menu' },
  { path: '/herois/gorr', name: 'Gorr', expectedStats: 4, primary: 'Symbiote Swarm & Overhealth', secondary: 'Ciclo dos Berserkers' },
  { path: '/herois/jubilee', name: 'Jubilee', expectedStats: 4, primary: 'Sparkle Mark', secondary: 'Blooming Ball e gestão de energia' },
  { path: '/herois/phoenix', name: 'Phoenix', expectedStats: 4, primary: 'Sparks', secondary: 'Controle e deslocamento' },
  { path: '/herois/elsa-bloodstone', name: 'Elsa Bloodstone', expectedStats: 4 },
  { path: '/herois/deadpool', name: 'Deadpool', expectedStats: 5 },
]
const SCREENSHOT_WIDTHS = [1440, 1024, 390]

let preview
let chrome
let socket
let previewLog = ''
let chromeLog = ''

function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
function freePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.once('error', reject)
    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port
      server.close(error => error ? reject(error) : resolve(port))
    })
  })
}
function spawnLogged(command, args, options, sink) {
  const child = spawn(command, args, { ...options, detached: true, stdio: ['ignore', 'pipe', 'pipe'] })
  child.stdout.on('data', chunk => { sink.value = (sink.value + chunk.toString()).slice(-8000) })
  child.stderr.on('data', chunk => { sink.value = (sink.value + chunk.toString()).slice(-8000) })
  return child
}
async function waitFor(label, probe, child, log, timeoutMs = 25000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    if (child.exitCode !== null) throw new Error(`${label} exited ${child.exitCode}: ${log.value}`)
    try {
      const value = await probe()
      if (value) return value
    } catch {}
    await wait(200)
  }
  throw new Error(`Timed out waiting for ${label}: ${log.value}`)
}
async function terminate(child) {
  if (!child?.pid) return
  try { process.kill(-child.pid, 'SIGTERM') } catch {}
  await Promise.race([new Promise(resolve => child.once('exit', resolve)), wait(4000)])
  try { process.kill(-child.pid, 'SIGKILL') } catch {}
}
function connectCdp(url) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url)
    ws.addEventListener('open', () => resolve(ws), { once: true })
    ws.addEventListener('error', reject, { once: true })
  })
}

function parseArgs(argv) {
  const args = { reportDir: REPORT_DIR, routes: null }
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--report') args.reportDir = path.resolve(argv[++i])
    else if (argv[i] === '--routes') args.routes = argv[++i].split(',').map(value => value.trim()).filter(Boolean)
  }
  return args
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const routes = args.routes ? ROUTES.filter(route => args.routes.includes(route.name.toLowerCase())) : ROUTES
  if (!routes.length) throw new Error(`nenhuma rota conhecida em --routes (disponiveis: ${ROUTES.map(r => r.name).join(',')})`)
  await fs.mkdir(args.reportDir, { recursive: true })
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const jsonPath = path.join(args.reportDir, `radar-${stamp}.json`)

  const previewPort = await freePort()
  const cdpPort = await freePort()
  const profile = `/tmp/marvel-coach-cdp-${process.pid}`
  const previewUrl = `http://127.0.0.1:${previewPort}`
  const cdpUrl = `http://127.0.0.1:${cdpPort}`
  const reports = []
  const failures = []
  const screenshots = []
  const previewSink = { value: '' }
  const chromeSink = { value: '' }

  try {
    preview = spawnLogged(process.execPath, [VITE, 'preview', '--host', '127.0.0.1', '--port', String(previewPort), '--strictPort'], { cwd: ROOT, env: process.env }, previewSink)
    await waitFor('Vite preview', async () => {
      const response = await fetch(previewUrl)
      return response.status === 200
    }, preview, previewSink)

    chrome = spawnLogged('/usr/bin/google-chrome', [
      '--headless=new', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--hide-scrollbars',
      `--remote-debugging-port=${cdpPort}`, `--user-data-dir=${profile}`, '--remote-allow-origins=*', 'about:blank',
    ], { cwd: ROOT, env: process.env }, chromeSink)
    await waitFor('Chrome CDP', async () => {
      const response = await fetch(`${cdpUrl}/json/version`)
      return response.ok ? response.json() : null
    }, chrome, chromeSink)

    const targets = await (await fetch(`${cdpUrl}/json/list`)).json()
    const page = targets.find(target => target.type === 'page')
    if (!page?.webSocketDebuggerUrl) throw new Error(`Chrome page target missing: ${JSON.stringify(targets)}`)
    socket = await connectCdp(page.webSocketDebuggerUrl)

    let sequence = 0
    const pending = new Map()
    const eventListeners = new Map()
    socket.addEventListener('message', event => {
      const message = JSON.parse(event.data)
      if (message.id) {
        const waiter = pending.get(message.id)
        if (waiter) {
          pending.delete(message.id)
          if (message.error) waiter.reject(new Error(`${waiter.method}: ${message.error.message}`))
          else waiter.resolve(message.result || {})
        }
      } else {
        for (const listener of eventListeners.get(message.method) || []) listener(message.params || {})
      }
    })
    function send(method, params = {}) {
      const id = ++sequence
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject, method })
        socket.send(JSON.stringify({ id, method, params }))
      })
    }
    function waitEvent(method, timeoutMs = 20000) {
      return new Promise((resolve, reject) => {
        const listeners = eventListeners.get(method) || new Set()
        eventListeners.set(method, listeners)
        const listener = value => {
          clearTimeout(timer)
          listeners.delete(listener)
          resolve(value)
        }
        const timer = setTimeout(() => {
          listeners.delete(listener)
          reject(new Error(`Timed out waiting for CDP event ${method}`))
        }, timeoutMs)
        listeners.add(listener)
      })
    }
    async function evaluate(expression, awaitPromise = false) {
      const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise, timeout: 15000 })
      if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || 'Runtime.evaluate failed')
      return result.result?.value
    }

    await send('Page.enable')
    await send('Runtime.enable')
    await send('Network.enable')
    await send('Network.setCacheDisabled', { cacheDisabled: true })

    for (const route of routes) {
      const firstWidth = WIDTHS[0]
      const url = `${previewUrl}${route.path}?qa=${route.name.toLowerCase()}-${firstWidth}`
      const load = waitEvent('Page.loadEventFired')
      await send('Page.navigate', { url })
      await load
      await wait(250)

      for (const height of HEIGHTS) for (const width of WIDTHS) {
        const mobile = width < 600
        await send('Emulation.setDeviceMetricsOverride', {
          width, height, deviceScaleFactor: mobile ? 2 : 1, mobile,
        })
        await send('Emulation.setTouchEmulationEnabled', { enabled: mobile, maxTouchPoints: mobile ? 5 : 1 })
        await wait(100)
        await evaluate(`(() => { for (const image of document.images) image.loading = 'eager'; })()`)
        await evaluate(`Promise.all(Array.from(document.images, image => image.complete ? true : new Promise(resolve => { const done = () => resolve(true); image.addEventListener('load', done, {once:true}); image.addEventListener('error', done, {once:true}); setTimeout(done, 5000); })))`, true)
        const metric = await evaluate(`(() => {
          const text = element => element ? (element.innerText || element.textContent || '').trim() : '';
          const box = element => { if (!element) return null; const r=element.getBoundingClientRect(); return {x:r.x,y:r.y,width:r.width,height:r.height,clientHeight:element.clientHeight,scrollHeight:element.scrollHeight}; };
          const primary = document.querySelector('.system-panel');
          const cards = [...document.querySelectorAll('#guia-mecanica .connected-card')];
          const copy = document.querySelector('.hero-copy');
          const copyRect = copy?.getBoundingClientRect();
          const hook = copy?.querySelector('.hero-hook');
          const stats = document.querySelector('.hero-stats');
          const banner = document.querySelector('.hero-banner');
          const statsGrid = stats ? {
            containerWidth: banner?.clientWidth ?? 0,
            columnCount: getComputedStyle(stats).gridTemplateColumns.trim().split(' ').filter(Boolean).length,
            tileCount: stats.querySelectorAll('.stat').length,
          } : null;
          const copyChildren = copy ? [...copy.children] : [];
          const childRects = copyChildren.map(element => element.getBoundingClientRect());
          const childBottoms = childRects.map(rect => rect.bottom);
          const childLefts = childRects.map(rect => rect.left);
          const childRights = childRects.map(rect => rect.right);
          const contentBottom = childBottoms.length ? Math.max(...childBottoms) : (copyRect?.top ?? null);
          const childBottom = copy ? Math.max(copyRect.bottom, ...childBottoms) : null;
          const childLeftOverflow = copy ? Math.max(0, copyRect.left - Math.min(copyRect.left, ...childLefts)) : 0;
          const childRightOverflow = copy ? Math.max(0, Math.max(copyRect.right, ...childRights) - copyRect.right) : 0;
          const bottomPadding = copy ? parseFloat(getComputedStyle(copy).paddingBottom) : 0;
          const bottomGap = copy ? copyRect.bottom - contentBottom : 0;
          const bottomPaddingLoss = Math.max(0, bottomPadding - bottomGap);
          return {
            title: document.title,
            h1: text(document.querySelector('h1')),
            innerWidth: window.innerWidth,
            viewportHeight: window.innerHeight,
            documentOverflow: document.documentElement.scrollHeight - document.documentElement.clientHeight,
            heroBanner: box(document.querySelector('.hero-banner')),
            clientWidth: document.documentElement.clientWidth,
            scrollWidth: document.documentElement.scrollWidth,
            heroCopy: copy ? {...box(copy), childBottom, childOverflow: childBottom - copyRect.bottom, childLeftOverflow, childRightOverflow, contentBottom, bottomGap, bottomPadding, bottomPaddingLoss} : null,
            heroHook: hook ? {...box(hook), lineClamp: getComputedStyle(hook).webkitLineClamp, text: text(hook)} : null,
            statsGrid,
            heroChildren: copy ? [...copy.children].map(element => { const r=element.getBoundingClientRect(); const style=getComputedStyle(element); return {tag:element.tagName,className:element.className,top:r.top,bottom:r.bottom,height:r.height,clientHeight:element.clientHeight,scrollHeight:element.scrollHeight,marginTop:style.marginTop,text:text(element).slice(0,100)}; }) : [],
            statsTiles: [...document.querySelectorAll('.hero-stats .stat')].map(element => { const r=element.getBoundingClientRect(); const dd=element.querySelector('dd'); return {label:text(element.querySelector('dt')),value:text(dd),top:r.top,bottom:r.bottom,left:r.left,right:r.right,height:r.height,valueScrollHeight:dd?.scrollHeight,valueClientHeight:dd?.clientHeight,valueScrollWidth:dd?.scrollWidth,valueClientWidth:dd?.clientWidth}; }),
            primarySystem: text(primary),
            secondaryCards: cards.map(text),
            roleTabs: [...document.querySelectorAll('.role-tab')].map(text),
            brokenLocalImages: [...document.images].filter(image => image.complete && image.naturalWidth === 0 && image.src.startsWith(location.origin)).map(image => image.src),
          };
        })()`)

        const row = { route: route.name, width, height, ...metric }
        reports.push(row)
        const problems = []
        if (metric.innerWidth !== width) problems.push(`innerWidth ${metric.innerWidth} != ${width}`)
        if (metric.scrollWidth > metric.clientWidth + 1) problems.push(`horizontal overflow ${metric.scrollWidth}-${metric.clientWidth}`)
        if (metric.brokenLocalImages.length) problems.push(`broken local images: ${metric.brokenLocalImages.length}`)
        if (route.name !== 'menu' && metric.h1.toLowerCase() !== route.name.toLowerCase()) problems.push(`h1=${JSON.stringify(metric.h1)}`)
        if (metric.heroCopy && metric.heroCopy.childOverflow > 1) problems.push(`hero-copy child clipped ${metric.heroCopy.childOverflow.toFixed(1)}px`)
        if (metric.heroCopy && Math.max(metric.heroCopy.childLeftOverflow, metric.heroCopy.childRightOverflow) > 1) problems.push(`hero-copy child horizontal clip ${Math.max(metric.heroCopy.childLeftOverflow, metric.heroCopy.childRightOverflow).toFixed(1)}px`)
        if (metric.heroCopy && metric.heroCopy.bottomPaddingLoss > 2) problems.push(`hero-copy lost bottom padding ${metric.heroCopy.bottomPaddingLoss.toFixed(1)}px`)
        if (metric.heroHook && width >= 768 && metric.heroHook.scrollHeight - metric.heroHook.clientHeight > 2) problems.push(`hero-hook hidden lines ${metric.heroHook.scrollHeight - metric.heroHook.clientHeight}px`)
        if (route.expectedStats !== undefined && metric.statsTiles.length !== route.expectedStats) problems.push(`expected ${route.expectedStats} banner stats; found ${metric.statsTiles.length}`)
        if (route.expectedStats !== undefined && metric.innerWidth > 660 && metric.statsGrid && metric.statsGrid.containerWidth >= 460 && metric.statsGrid.columnCount !== route.expectedStats) problems.push(`hero stats grid has ${metric.statsGrid.columnCount} columns for ${route.expectedStats} tiles`)
        if (metric.heroCopy && metric.statsTiles.some(tile => tile.left < metric.heroCopy.x - 1 || tile.right > metric.heroCopy.x + metric.heroCopy.width + 1 || tile.top < metric.heroCopy.y - 1 || tile.bottom > metric.heroCopy.y + metric.heroCopy.height + 1)) problems.push('banner stats outside hero-copy')

        if (route.primary) {
          if (!metric.primarySystem.toLowerCase().includes(route.primary.toLowerCase())) problems.push(`primary system missing ${route.primary}`)
          if (metric.secondaryCards.length !== 2) problems.push(`expected 2 mechanic cards; found ${metric.secondaryCards.length}`)
          if (!(metric.secondaryCards[1] || '').toLowerCase().includes(route.secondary.toLowerCase())) problems.push(`secondary system missing ${route.secondary}`)
        }
        if (route.name === 'Deadpool' && metric.roleTabs.length !== 3) problems.push(`expected 3 Deadpool role tabs; found ${metric.roleTabs.length}`)
        if (problems.length) failures.push({ route: route.name, width, height, problems })

        const captureWidth = SCREENSHOT_WIDTHS.includes(width) && (route.name === 'menu' || route.primary || route.name === 'Deadpool')
        if (height === 900 && captureWidth) {
          const filename = path.join(args.reportDir, `radar-${route.name.toLowerCase()}-${width}x${height}.png`)
          const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false, fromSurface: true })
          await fs.writeFile(filename, Buffer.from(shot.data, 'base64'))
          screenshots.push(filename)
        }
      }
    }

    const maxOf = values => values.length ? Math.max(...values) : 0
    const summaryByRoute = Object.fromEntries(routes.map(route => {
      const rows = reports.filter(row => row.route === route.name)
      return [route.name, {
        checked: rows.length,
        maxHorizontalOverflow: maxOf(rows.map(row => row.scrollWidth - row.clientWidth)),
        maxHeroCopyIntrinsicScrollOverflow: maxOf(rows.filter(row => row.heroCopy).map(row => row.heroCopy.scrollHeight - row.heroCopy.clientHeight)),
        maxHeroCopyBottomPaddingLoss: maxOf(rows.filter(row => row.heroCopy).map(row => row.heroCopy.bottomPaddingLoss)),
        maxHeroHookHiddenLines: maxOf(rows.filter(row => row.heroHook).map(row => row.heroHook.scrollHeight - row.heroHook.clientHeight)),
        maxHeroChildOverflow: maxOf(rows.filter(row => row.heroCopy).map(row => row.heroCopy.childOverflow)),
        maxWideMenuDocumentScroll: route.name === 'menu' ? maxOf(rows.filter(row => row.width >= 1024).map(row => row.documentOverflow)) : null,
        maxStackedMenuDocumentScroll: route.name === 'menu' ? maxOf(rows.filter(row => row.width < 1024).map(row => row.documentOverflow)) : null,
        brokenLocalImages: rows.reduce((sum, row) => sum + row.brokenLocalImages.length, 0),
      }]
    }))
    const report = {
      generatedAt: new Date().toISOString(),
      previewUrl,
      checked: reports.length,
      expected: routes.length * WIDTHS.length * HEIGHTS.length,
      widths: WIDTHS,
      heights: HEIGHTS,
      routes: routes.map(route => route.name),
      failures: failures.slice(0, 80),
      failureCount: failures.length,
      summaryByRoute,
      screenshots,
      rows: reports,
    }
    await fs.writeFile(jsonPath, JSON.stringify(report, null, 2))
    console.log(JSON.stringify({ jsonPath, checked: report.checked, expected: report.expected, failureCount: report.failureCount, summaryByRoute, screenshots }, null, 2))
    if (failures.length) process.exitCode = 1
  } finally {
    try { socket?.close() } catch {}
    await terminate(chrome)
    await terminate(preview)
    await fs.rm(profile, { recursive: true, force: true })
  }
}

main().catch(error => {
  console.error(error.stack || error)
  process.exitCode = 1
})
