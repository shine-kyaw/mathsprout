import { ExternalLink, Laptop, MessageSquareText, Tablet, TriangleAlert } from 'lucide-react'
import { useI18n } from '../i18n/context'
import { liveGameUrl } from '../data/game'
import { PageIntro, Reveal, Section, SectionHeading } from '../components/UI'

export function PlayPage() {
  const { t } = useI18n()
  const logo = `${import.meta.env.BASE_URL}mathsprout-logo.jpeg`
  return <>
    <PageIntro eyebrow={t('play.eyebrow')} title={t('play.title')} lead={t('play.lead')} tone="green" />
    <Section>
      <Reveal className="play-launch"><div className="play-logo"><img src={logo} alt={t('game.logoAlt')} width="140" height="140" /></div><div><div className="device-row"><span><Laptop aria-hidden="true" /> {t('play.desktop')}</span><span><Tablet aria-hidden="true" /> {t('play.tablet')}</span></div><h2>{t('common.play')}</h2><p>{t('play.statusText')}</p><a className="button button-primary" href={liveGameUrl} target="_blank" rel="noreferrer">{t('common.play')} <ExternalLink aria-hidden="true" /><span className="sr-only">{t('a11y.newTab')}</span></a></div></Reveal>
    </Section>
    <Section className="surface-section"><div className="split-grid"><Reveal><SectionHeading title={t('play.stepsTitle')} /><ol className="start-steps">{['play.step1', 'play.step2', 'play.step3', 'play.step4'].map((key, i) => <li key={key}><span>{i + 1}</span>{t(key as never)}</li>)}</ol></Reveal><Reveal className="prototype-alert"><TriangleAlert /><span className="eyebrow">{t('play.status')}</span><p>{t('play.statusText')}</p></Reveal></div></Section>
    <Section><Reveal className="contact-card"><MessageSquareText /><div><SectionHeading title={t('play.contactTitle')} /><p>{t('play.contactText')}</p><span>{t('play.contactPlaceholder')}</span></div></Reveal></Section>
  </>
}
