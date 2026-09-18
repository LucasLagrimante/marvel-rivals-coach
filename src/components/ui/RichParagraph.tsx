import { cx } from '../../lib/cx'
import { More } from './More'
import { RichText } from './RichText'

const DEFAULT_THRESHOLD = 230

/**
 * Parágrafo com clamp visual e "Ver mais" automático quando o texto é longo.
 * Mantém a primeira leitura curta sem perder o conteúdo completo.
 */
export function RichParagraph({
  text,
  clamp = 3,
  threshold = DEFAULT_THRESHOLD,
  className,
  moreLabel = 'Ver mais',
}: {
  text: string
  clamp?: 2 | 3 | 4 | 5
  threshold?: number
  className?: string
  moreLabel?: string
}) {
  if (text.length <= threshold) {
    return (
      <p className={className}>
        <RichText text={text} />
      </p>
    )
  }

  return (
    <More
      label={moreLabel}
      className="more-paragraph"
      collapsed={
        <p className={cx(className, `clamp-${clamp}`)}>
          <RichText text={text} />
        </p>
      }
    >
      <p className={className}>
        <RichText text={text} />
      </p>
    </More>
  )
}
