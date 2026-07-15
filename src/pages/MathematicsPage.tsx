import { ChartNoAxesColumnIncreasing, CirclePlus, Grid2X2, Ruler, Scale, Shapes, Sigma } from 'lucide-react'
import { useI18n } from '../i18n/context'
import { PageIntro, Reveal, Section, SectionHeading } from '../components/UI'

export function MathematicsPage() {
  const { t } = useI18n()
  const areas = [
    [Sigma, 'math.count.title', 'math.count.body', 'teal'], [Scale, 'math.compare.title', 'math.compare.body', 'green'],
    [CirclePlus, 'math.add.title', 'math.add.body', 'blue'], [Grid2X2, 'math.pattern.title', 'math.pattern.body', 'purple'],
    [Shapes, 'math.shape.title', 'math.shape.body', 'blue'], [Ruler, 'math.measure.title', 'math.measure.body', 'green'],
    [ChartNoAxesColumnIncreasing, 'math.groups.title', 'math.groups.body', 'purple'],
  ]
  return <>
    <PageIntro eyebrow={t('math.eyebrow')} title={t('math.title')} lead={t('math.lead')} tone="green" />
    <Section><div className="math-grid">{areas.map(([Icon, title, body, color], i) => { const C = Icon as typeof Sigma; return <Reveal key={String(title)} className={`math-card accent-${color}`}><div className="math-card-top"><C /><span>0{i + 1}</span></div><h2>{t(title as never)}</h2><p>{t(body as never)}</p>{i === 6 && <span className="status-badge status-planned">{t('common.planned')}</span>}</Reveal> })}</div></Section>
    <Section className="surface-section"><Reveal className="boundary-panel"><div className="boundary-mark">≠</div><div><SectionHeading title={t('math.boundaryTitle')} /><p>{t('math.boundaryText')}</p></div></Reveal></Section>
  </>
}
