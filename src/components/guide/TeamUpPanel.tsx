import { useState } from 'react'
import { Check, Handshake, ShieldCheck, Sparkles, Star } from 'lucide-react'
import type { TeamUpGuide } from '../../types'
import { cx } from '../../lib/cx'
import { Panel } from '../ui/Panel'
import { SectionHead } from '../ui/SectionHead'
import { ControlBadge } from '../ui/ControlBadge'
import { RichText } from '../ui/RichText'

/**
 * Painel de Team-Up — primeira decisão da partida depois do V principal.
 * Mostra as duas opções do herói, o efeito base (sempre ativo), o aprimorado
 * (com o parceiro no time) e a recomendação de escolha para cada caso.
 */
export function TeamUpPanel({ teamUps }: { teamUps: TeamUpGuide }) {
  const [selected, setSelected] = useState(teamUps.recommended)
  const [partnerIn, setPartnerIn] = useState(false)

  return (
    <Panel id="guia-teamup" full className="teamup-panel">
      <SectionHead
        kicker="Team-Up ativo · Temporada 10"
        title="Dupla de combate: escolha na spawn"
        description={teamUps.summary}
        icon={Handshake}
      />

      <div className="teamup-best">
        <span className="teamup-best-icon" aria-hidden="true">
          <Star size={16} />
        </span>
        <div>
          <p className="teamup-best-label">Melhor escolha</p>
          <p className="teamup-best-name">
            <RichText text={teamUps.recommended} />
          </p>
          <p className="teamup-best-reason">
            <RichText text={teamUps.recommendedReason} />
          </p>
        </div>
      </div>

      <div className="teamup-toolbar">
        <p className="teamup-caption">
          No jogo o efeito <strong>base</strong> fica sempre ativo; o <strong>aprimorado</strong> acende sozinho
          quando o parceiro entra no time. Você pode trocar de Team-Up na sala de spawn a qualquer respawn.
        </p>
        <div className="teamup-toggle" role="group" aria-label="Simular parceiro no time">
          <button type="button" className={cx(!partnerIn && 'is-active')} aria-pressed={!partnerIn} onClick={() => setPartnerIn(false)}>
            Sem parceiro
          </button>
          <button type="button" className={cx(partnerIn && 'is-active')} aria-pressed={partnerIn} onClick={() => setPartnerIn(true)}>
            Com parceiro
          </button>
        </div>
      </div>

      <div className="teamup-grid">
        {teamUps.options.map((option) => {
          const isRecommended = option.name === teamUps.recommended
          const isSelected = option.name === selected

          return (
            <article
              key={option.name}
              className={cx('teamup-card', isRecommended && 'is-recommended', isSelected && 'is-selected')}
              data-partner={partnerIn}
            >
              <div className="teamup-card-head">
                <span className="teamup-icon">
                  <img src={option.iconUrl} alt="" width={150} height={150} loading="lazy" />
                </span>

                <div className="teamup-title">
                  <p className="kicker">{isRecommended ? 'Melhor no geral' : 'Alternativa'}</p>
                  <div className="teamup-name-row">
                    <h4>
                      <RichText text={option.name} />
                    </h4>
                    <ControlBadge token={option.input} />
                  </div>
                  <p className="teamup-partner">
                    <img src={option.partnerPortraitUrl} alt="" width={50} height={40} loading="lazy" />
                    <span>
                      Parceiro: <strong>{option.partner}</strong> · {option.partnerRole}
                    </span>
                  </p>
                </div>
              </div>

              <div className="teamup-effects">
                <div className="teamup-effect is-base">
                  <p className="teamup-effect-label">
                    <ShieldCheck size={13} aria-hidden="true" /> Base · sempre ativo
                  </p>
                  <p>
                    <RichText text={option.baseEffect} />
                  </p>
                </div>

                <div className="teamup-effect is-enhanced">
                  <p className="teamup-effect-label">
                    <Sparkles size={13} aria-hidden="true" /> Aprimorado · com {option.partner}
                  </p>
                  <p>
                    <RichText text={option.enhancedEffect} />
                  </p>
                </div>
              </div>

              <div className="teamup-notes">
                <p>
                  <strong>Escolha quando:</strong> <RichText text={option.bestFor} />
                </p>
                <p>
                  <strong>Formação mais fácil:</strong> <RichText text={option.easySetup} />
                </p>
              </div>

              <button
                type="button"
                className="teamup-equip"
                aria-pressed={isSelected}
                onClick={() => setSelected(option.name)}
              >
                {isSelected ? <Check size={14} aria-hidden="true" /> : null}
                {isSelected ? 'Em uso' : 'Usar este'}
              </button>
            </article>
          )
        })}
      </div>
    </Panel>
  )
}
