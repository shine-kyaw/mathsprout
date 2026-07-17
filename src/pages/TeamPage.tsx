import { ArrowRight, UsersRound } from 'lucide-react'
import { team } from '../data/team'
import { useI18n } from '../i18n/context'
import { ContributionMatrix } from '../components/ContributionMatrix'
import { TeamMemberCard } from '../components/TeamMemberCard'
import { PageIntro, Reveal, Section, SectionHeading } from '../components/UI'

export function TeamPage() {
  const { t } = useI18n()
  return <>
    <PageIntro eyebrow={t('team.eyebrow')} title={t('team.title')} lead={t('team.lead')} tone="blue" />
    <Section><div className="team-grid">{team.map((member, i) => <Reveal key={member.id}><TeamMemberCard member={member} index={i} /></Reveal>)}</div></Section>
    <Section className="surface-section"><SectionHeading eyebrow={t('team.matrixEyebrow')} title={t('team.matrixTitle')} lead={t('team.matrixLead')} /><ContributionMatrix /></Section>
    <Section><Reveal className="how-panel"><UsersRound /><div><SectionHeading title={t('team.howTitle')} /><p>{t('team.howText')}</p><div className="process-flow">{['research','ideation','organization','development','testing','presentation'].map((step, i) => <span key={step}>{t(`team.process.${step}` as never)}{i < 5 && <ArrowRight aria-hidden="true" />}</span>)}</div></div></Reveal></Section>
  </>
}
