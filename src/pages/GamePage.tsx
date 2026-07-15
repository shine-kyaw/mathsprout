import { BarChart3, Languages, ShieldCheck, Volume2 } from 'lucide-react'
import { useI18n } from '../i18n/context'
import { PageIntro, Reveal, Section, SectionHeading } from '../components/UI'
import { WorldMap } from '../components/WorldMap'

export function GamePage() {
  const { t } = useI18n()
  return <>
    <PageIntro eyebrow={t('game.eyebrow')} title={t('game.title')} lead={t('game.lead')} tone="blue" />
    <Section><SectionHeading title={t('game.mapTitle')} lead={t('game.mapLead')} /><WorldMap /></Section>
    <Section className="surface-section">
      <div className="split-grid">
        <Reveal><span className="eyebrow">{t('common.current')}</span><h2>{t('game.flowTitle')}</h2><p className="flow-line">{t('game.flow')}</p></Reveal>
        <Reveal className="parent-card"><ShieldCheck aria-hidden="true" /><h3>{t('game.parentTitle')}</h3><p>{t('game.parentText')}</p><div className="mini-features"><span><Languages aria-hidden="true" /> EN / 简体中文</span><span><BarChart3 aria-hidden="true" /> {t('game.localProgress')}</span><span><Volume2 aria-hidden="true" /> {t('game.soundSpeech')}</span></div></Reveal>
      </div>
    </Section>
    <Section>
      <div className="split-grid screenshot-area">
        <Reveal><SectionHeading title={t('game.shotsTitle')} lead={t('game.shotsText')} /><div className="empty-gallery"><div className="browser-bar" aria-hidden="true"><i /><i /><i /></div><img src="/mathsprout-logo.jpeg" alt={t('game.logoAlt')} width="86" height="86" /><strong>{t('common.verify')}</strong></div></Reveal>
        <Reveal className="audit-note"><span className="status-badge status-in-progress">{t('common.verify')}</span><h2>{t('game.loadingTitle')}</h2><p>{t('game.loadingText')}</p></Reveal>
      </div>
    </Section>
  </>
}
