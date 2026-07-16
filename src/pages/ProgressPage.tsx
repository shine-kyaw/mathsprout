import { progress, type ProgressStatus } from '../data/progress'
import { useI18n } from '../i18n/context'
import { PageIntro, Reveal, Section, SectionHeading, StatusBadge } from '../components/UI'

const groups: Array<{ status: ProgressStatus; title: string; lead: string }> = [
  { status: 'completed', title: 'progress.establishedTitle', lead: 'progress.establishedLead' },
  { status: 'in-progress', title: 'progress.inProgressTitle', lead: 'progress.inProgressLead' },
  { status: 'planned', title: 'progress.plannedTitle', lead: 'progress.plannedLead' },
]

export function ProgressPage() {
  const { t } = useI18n()
  return <><PageIntro eyebrow={t('progress.eyebrow')} title={t('progress.title')} lead={t('progress.lead')} tone="purple" />{groups.map((group, index) => <Section key={group.status} className={index % 2 ? 'surface-section' : ''}><SectionHeading title={t(group.title as never)} lead={t(group.lead as never)} /><div className="roadmap-grid">{progress.filter(item => item.status === group.status).map(item => <Reveal key={item.key} className="roadmap-card"><StatusBadge status={item.status} /><h3>{t(`progress.${item.key}` as never)}</h3><p>{t(`progress.${item.key}.note` as never)}</p></Reveal>)}</div></Section>)}</>
}
