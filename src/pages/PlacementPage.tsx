import { CircleCheck, Gauge, PlayCircle, Route, Sparkles } from 'lucide-react'
import { useI18n } from '../i18n/context'
import { PageIntro, Reveal, Section, SectionHeading } from '../components/UI'

export function PlacementPage() {
  const { t } = useI18n()
  const steps = [[PlayCircle, 'placement.s1'], [Sparkles, 'placement.s2'], [Gauge, 'placement.s3'], [Route, 'placement.s4'], [CircleCheck, 'placement.s5']]
  return <>
    <PageIntro eyebrow={t('placement.eyebrow')} title={t('placement.title')} lead={t('placement.lead')} tone="purple" />
    <Section>
      <div className="placement-status"><span className="status-badge status-planned">{t('common.planned')}</span></div>
      <div className="placement-flow">{steps.map(([Icon, key], i) => { const C = Icon as typeof Gauge; return <Reveal key={String(key)} className="placement-step"><span>{i + 1}</span><C /><strong>{t(key as never)}</strong></Reveal> })}</div>
      <div className="principles-row">{['placement.noFail', 'placement.noRank', 'placement.noDiagnosis', 'placement.parentChoice'].map(key => <span key={key}><CircleCheck />{t(key as never)}</span>)}</div>
    </Section>
    <Section className="surface-section"><Reveal className="honesty-card"><SectionHeading title={t('placement.currentTitle')} /><p>{t('placement.currentText')}</p></Reveal></Section>
  </>
}
