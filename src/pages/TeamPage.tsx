import { PencilLine, UsersRound } from 'lucide-react'
import { team } from '../data/team'
import { useI18n } from '../i18n/context'
import { PageIntro, Reveal, Section, SectionHeading } from '../components/UI'

export function TeamPage() {
  const { t } = useI18n()
  return <>
    <PageIntro eyebrow={t('team.eyebrow')} title={t('team.title')} lead={t('team.lead')} tone="blue" />
    <Section><div className="team-grid">{team.map((member, i) => <Reveal key={member.id} className={`team-card team-${i + 1}`}><div className="member-avatar">{member.initials}<span><PencilLine /></span></div><h2>{member.name}</h2><dl><div><dt>{t('team.role')}</dt><dd>{t('team.add')}</dd></div><div><dt>{t('team.bio')}</dt><dd>{t('team.add')}</dd></div><div><dt>{t('team.contributions')}</dt><dd>{t('team.add')}</dd></div><div><dt>{t('team.skills')}</dt><dd>{t('team.add')}</dd></div></dl></Reveal>)}</div></Section>
    <Section className="surface-section"><Reveal className="how-panel"><UsersRound /><div><SectionHeading title={t('team.howTitle')} /><p>{t('team.howText')}</p></div></Reveal></Section>
  </>
}
