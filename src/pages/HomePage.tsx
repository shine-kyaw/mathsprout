import { ArrowUpRight, Blocks, FlaskConical, Sprout, UsersRound, WholeWord } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { EvidenceList } from '../components/EvidenceList'
import { ProjectEcosystem } from '../components/ProjectEcosystem'
import { LeafIcon, PlayButton, Reveal, Section, SectionHeading } from '../components/UI'

export function HomePage() {
  const { t } = useI18n(); const logo = `${import.meta.env.BASE_URL}mathsprout-logo.jpeg`
  return <>
    <section className="hero">
      <div className="hero-orb orb-one" aria-hidden="true" /><div className="hero-orb orb-two" aria-hidden="true" />
      <div className="shell hero-grid">
        <Reveal className="hero-copy"><span className="eyebrow">{t('home.eyebrow')}</span><h1 tabIndex={-1}>{t('home.title')}</h1><p className="lead">{t('home.lead')}</p><div className="button-row"><PlayButton /><Link className="button button-secondary" to="/research"><FlaskConical size={17} />{t('home.researchCta')}</Link><Link className="button button-quiet" to="/team"><UsersRound size={17} />{t('home.teamCta')}</Link></div><div className="hero-notes"><div><span className="pulse-dot" /><strong>{t('home.audit')}</strong><p>{t('home.auditText')}</p></div><div><LeafIcon /><strong>{t('home.for')}</strong><p>{t('home.forText')}</p></div></div></Reveal>
        <Reveal className="hero-visual"><div className="logo-frame"><img src={logo} alt={t('game.logoAlt')} width="2364" height="1290" /></div><div className="math-chip chip-a">2 + 3 = 5</div><div className="math-chip chip-b">● ● ●</div><div className="math-chip chip-c">△ ○ □</div></Reveal>
      </div>
    </section>
    <Section><SectionHeading eyebrow={t('home.ecosystemEyebrow')} title={t('home.ecosystemTitle')} lead={t('home.ecosystemLead')} /><ProjectEcosystem /></Section>
    <Section className="snapshot-section"><SectionHeading title={t('home.snapshotTitle')} lead={t('home.snapshotLead')} /><div className="snapshot-grid">{[['7','home.stat.worlds'],['35','home.stat.levels'],['105','home.stat.rounds'],['2','home.stat.languages'],['✓','home.stat.local'],['0','home.stat.ads']].map(([value,key]) => <Reveal key={key} className="snapshot-item"><strong>{value}</strong><span>{t(key as never)}</span></Reveal>)}</div></Section>
    <Section className="three-principles"><SectionHeading title={t('home.threeTitle')} /><div className="principle-grid">{[[WholeWord,'home.count','home.countText','teal'],[Blocks,'home.build','home.buildText','blue'],[Sprout,'home.grow','home.growText','green']].map(([Icon,title,body,color]) => {const C=Icon as typeof Sprout; return <Reveal key={String(title)} className={`principle-card accent-${color}`}><C /><h3>{t(title as never)}</h3><p>{t(body as never)}</p></Reveal>})}</div></Section>
    <Section className="surface-section"><SectionHeading title={t('home.evidenceTitle')} lead={t('home.evidenceLead')} /><EvidenceList /><Link to="/progress" className="text-link">{t('nav.progress')} <ArrowUpRight size={17} /></Link></Section>
  </>
}
