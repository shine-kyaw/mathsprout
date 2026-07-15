import { progress } from '../data/progress'
import { useI18n } from '../i18n/context'
import { PageIntro, Reveal, Section, StatusBadge } from '../components/UI'

export function ProgressPage() {
  const { t } = useI18n()
  return <>
    <PageIntro eyebrow={t('progress.eyebrow')} title={t('progress.title')} lead={t('progress.lead')} tone="purple" />
    <Section><div className="timeline">{progress.map((item, index) => <Reveal key={item.key} className="timeline-item"><div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div><article><StatusBadge status={item.status} /><h2>{t(`progress.${item.key}` as never)}</h2><p>{t(`progress.${item.key}.note` as never)}</p></article></Reveal>)}</div></Section>
  </>
}
