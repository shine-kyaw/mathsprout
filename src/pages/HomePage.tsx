import { ArrowUpRight, Blocks, Sprout, WholeWord } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { EvidenceList } from '../components/EvidenceList'
import { ExploreButton, LeafIcon, PlayButton, Reveal, Section, SectionHeading } from '../components/UI'

export function HomePage() {
  const { t } = useI18n()
  return <>
    <section className="hero">
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      <div className="shell hero-grid">
        <Reveal className="hero-copy">
          <span className="eyebrow">{t('home.eyebrow')}</span>
          <h1 tabIndex={-1}>{t('home.title')}</h1>
          <p className="lead">{t('home.lead')}</p>
          <div className="button-row"><PlayButton /><ExploreButton /></div>
          <div className="hero-notes">
            <div><span className="pulse-dot" /><strong>{t('home.audit')}</strong><p>{t('home.auditText')}</p></div>
            <div><LeafIcon /><strong>{t('home.for')}</strong><p>{t('home.forText')}</p></div>
          </div>
        </Reveal>
        <Reveal className="hero-visual">
          <div className="logo-frame"><img src="/mathsprout-logo.jpeg" alt={t('game.logoAlt')} width="2364" height="1290" /></div>
          <div className="math-chip chip-a">2 + 3 = 5</div><div className="math-chip chip-b">● ● ●</div><div className="math-chip chip-c">△ ○ □</div>
        </Reveal>
      </div>
    </section>

    <Section className="three-principles">
      <SectionHeading title={t('home.threeTitle')} />
      <div className="principle-grid">
        {[[WholeWord, 'home.count', 'home.countText', 'teal'], [Blocks, 'home.build', 'home.buildText', 'blue'], [Sprout, 'home.grow', 'home.growText', 'green']].map(([Icon, title, body, color]) => {
          const C = Icon as typeof Sprout
          return <Reveal key={String(title)} className={`principle-card accent-${color}`}><C /><span>0{color === 'teal' ? 1 : color === 'blue' ? 2 : 3}</span><h3>{t(title as never)}</h3><p>{t(body as never)}</p></Reveal>
        })}
      </div>
    </Section>

    <Section className="surface-section">
      <SectionHeading title={t('home.evidenceTitle')} lead={t('home.evidenceLead')} />
      <EvidenceList />
      <Link to="/progress" className="text-link">{t('nav.progress')} <ArrowUpRight size={17} /></Link>
    </Section>

    <Section>
      <Reveal className="cta-panel"><div><span className="eyebrow">{t('nav.play')}</span><h2>{t('home.ctaTitle')}</h2><p>{t('home.ctaText')}</p></div><PlayButton /></Reveal>
    </Section>
  </>
}
