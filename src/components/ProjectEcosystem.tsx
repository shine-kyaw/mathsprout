import { ExternalLink, FlaskConical, Gamepad2, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { liveGameUrl } from '../data/game'
import { reportUrl } from '../data/research'
import { useI18n } from '../i18n/context'
import { Reveal } from './UI'

export function ProjectEcosystem() {
  const { t } = useI18n()
  const items = [
    { key: 'play', Icon: Gamepad2, href: liveGameUrl, external: true },
    { key: 'research', Icon: FlaskConical, href: reportUrl, external: true },
    { key: 'team', Icon: UsersRound, href: '/team', external: false },
  ] as const
  return <div className="ecosystem-grid">{items.map(({ key, Icon, href, external }) => <Reveal key={key} className={`ecosystem-card ecosystem-${key}`}><Icon /><h3>{t(`home.ecosystem.${key}.title` as never)}</h3><p>{t(`home.ecosystem.${key}.body` as never)}</p>{external ? <a className="text-link" href={href} target="_blank" rel="noreferrer">{t(`home.ecosystem.${key}.cta` as never)} <ExternalLink size={16} /><span className="sr-only"> ({t('a11y.newTab')})</span></a> : <Link className="text-link" to={href}>{t(`home.ecosystem.${key}.cta` as never)} →</Link>}</Reveal>)}</div>
}
