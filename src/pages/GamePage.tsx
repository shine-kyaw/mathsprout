import { BarChart3, Languages, ShieldCheck, Volume2, Database, TimerOff, Ban, ExternalLink } from 'lucide-react'
import { liveGameUrl } from '../data/game'
import { useI18n } from '../i18n/context'
import { PageIntro, Reveal, Section, SectionHeading } from '../components/UI'
import { WorldMap } from '../components/WorldMap'

export function GamePage() {
  const { t } = useI18n()
  return <>
    <PageIntro eyebrow={t('game.eyebrow')} title={t('game.title')} lead={t('game.lead')} tone="blue" />
    <Section><Reveal className="game-launch"><div><span className="feature-status feature-available">{t('feature.available')}</span><h2>{t('game.launchTitle')}</h2><p>{t('game.launchText')}</p></div><a className="button button-primary" href={liveGameUrl} target="_blank" rel="noreferrer">{t('common.play')} <ExternalLink size={17} /><span className="sr-only"> ({t('a11y.newTab')})</span></a></Reveal></Section>
    <Section className="surface-section"><SectionHeading title={t('game.mapTitle')} lead={t('game.mapLead')} /><WorldMap /></Section>
    <Section><div className="split-grid"><Reveal><span className="eyebrow">{t('common.current')}</span><h2>{t('game.flowTitle')}</h2><p className="flow-line">{t('game.flow')}</p><p>{t('game.roundMix')}</p></Reveal><Reveal className="parent-card"><ShieldCheck aria-hidden="true" /><h3>{t('game.parentTitle')}</h3><p>{t('game.parentText')}</p><div className="mini-features"><span><Languages /> EN / 简体中文</span><span><BarChart3 /> {t('game.localProgress')}</span><span><Volume2 /> {t('game.soundSpeech')}</span></div></Reveal></div></Section>
    <Section className="surface-section"><SectionHeading title={t('game.privacyTitle')} lead={t('game.privacyLead')} /><div className="privacy-grid">{[[Database,'game.privacy.local'],[Ban,'game.privacy.commercial'],[TimerOff,'game.privacy.pressure'],[ShieldCheck,'game.privacy.parent']].map(([Icon,key]) => {const C=Icon as typeof Database; return <Reveal key={String(key)} className="privacy-card"><C /><p>{t(key as never)}</p></Reveal>})}</div></Section>
    <Section><Reveal className="limitations-panel"><span className="feature-status feature-development">{t('feature.development')}</span><h2>{t('game.limitationsTitle')}</h2><p>{t('game.limitationsText')}</p></Reveal></Section>
  </>
}
