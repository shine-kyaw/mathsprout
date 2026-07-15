import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, Clock3, CircleDashed, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { liveGameUrl } from '../data/game'
import type { ProgressStatus } from '../data/progress'

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 12 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .14 }} transition={{ duration: .32, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>
}

export function PageIntro({ eyebrow, title, lead, tone = 'green' }: { eyebrow: string; title: string; lead: string; tone?: string }) {
  return <section className={`page-intro tone-${tone}`}><div className="shell"><Reveal className="page-intro-copy"><span className="eyebrow">{eyebrow}</span><h1 tabIndex={-1}>{title}</h1><p className="lead">{lead}</p></Reveal></div></section>
}

export function Section({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`section ${className}`}><div className="shell">{children}</div></section>
}

export function SectionHeading({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return <Reveal className="section-heading">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{lead && <p>{lead}</p>}</Reveal>
}

export function PlayButton({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n()
  return <a className={`button button-primary ${compact ? 'compact' : ''}`} href={liveGameUrl} target="_blank" rel="noreferrer">{t('common.play')} <ExternalLink size={17} aria-hidden="true" /><span className="sr-only">{t('a11y.newTab')}</span></a>
}

export function ExploreButton({ to = '/game' }: { to?: string }) {
  const { t } = useI18n()
  return <Link className="button button-secondary" to={to}>{t('common.explore')} <ArrowRight size={17} /></Link>
}

export function StatusBadge({ status }: { status: ProgressStatus }) {
  const { t } = useI18n()
  const Icon = status === 'completed' ? Check : status === 'in-progress' ? Clock3 : CircleDashed
  return <span className={`status-badge status-${status}`}><Icon size={14} />{t(`status.${status}`)}</span>
}

export function LeafIcon({ variant = 0 }: { variant?: number }) {
  return <span className={`leaf-icon leaf-${variant}`} aria-hidden="true"><i /><i /></span>
}
