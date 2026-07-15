import { useEffect, useRef, useState, type ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ExternalLink, Menu, X } from 'lucide-react'
import { useI18n } from '../i18n/context'
import { liveGameUrl } from '../data/game'

const nav = [
  ['/', 'nav.home'], ['/game', 'nav.game'], ['/mathematics', 'nav.math'], ['/starting-point', 'nav.placement'],
  ['/research', 'nav.research'], ['/team', 'nav.team'], ['/progress', 'nav.progress'],
] as const

export function SiteShell({ children }: { children: ReactNode }) {
  const { t, locale, setLocale } = useI18n()
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLElement>(null)
  const location = useLocation()
  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
    const routeKey = nav.find(([path]) => path === location.pathname)?.[1]
    document.title = routeKey ? `${t(routeKey)} — MathSprout` : t('meta.title')
    window.setTimeout(() => document.querySelector<HTMLElement>('main h1')?.focus(), 0)
  }, [location.pathname, locale, t])
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus() }
      if (event.key === 'Tab' && mobileNav.current) {
        const items = Array.from(mobileNav.current.querySelectorAll<HTMLElement>('a, button:not([disabled])'))
        const first = items[0]
        const last = items[items.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.setTimeout(() => mobileNav.current?.querySelector<HTMLElement>('a')?.focus(), 0)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = previousOverflow }
  }, [open])
  return <div className="site-root">
    <a className="skip-link" href="#main">{t('a11y.skip')}</a>
    <header className="site-header">
      <div className="shell nav-shell">
        <NavLink to="/" className="brand-link" aria-label={t('a11y.home')}>
          <span className="brand-mark" aria-hidden="true" /><span>MathSprout</span>
        </NavLink>
        <nav className="desktop-nav" aria-label={t('a11y.primaryNav')}>
          {nav.map(([to, key]) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{t(key)}</NavLink>)}
        </nav>
        <div className="nav-actions">
          <div className="language-switch" role="group" aria-label={t('language.label')}>
            <button lang="en" className={locale === 'en' ? 'active' : ''} onClick={() => setLocale('en')} aria-pressed={locale === 'en'}>{t('language.en')}</button>
            <button lang="zh-CN" className={locale === 'zh-CN' ? 'active' : ''} onClick={() => setLocale('zh-CN')} aria-pressed={locale === 'zh-CN'}>{t('language.zh')}</button>
          </div>
          <a className="button button-primary nav-play" href={liveGameUrl} target="_blank" rel="noreferrer">{t('nav.play')} <ExternalLink size={16} aria-hidden="true" /><span className="sr-only">{t('a11y.newTab')}</span></a>
          <button ref={menuButton} className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? t('nav.close') : t('nav.menu')}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
        </div>
      </div>
      {open && <nav ref={mobileNav} id="mobile-navigation" className="mobile-nav" aria-label={t('a11y.mobileNav')}>
        {nav.map(([to, key]) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{t(key)}</NavLink>)}
        <a href={liveGameUrl} className="button button-primary" target="_blank" rel="noreferrer">{t('nav.play')} <ExternalLink size={16} aria-hidden="true" /><span className="sr-only">{t('a11y.newTab')}</span></a>
      </nav>}
    </header>
    <main id="main" tabIndex={-1}>{children}</main>
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><span className="brand-mark" aria-hidden="true" /><strong>MathSprout</strong><p>{t('footer.line')}</p></div>
        <div><span className="status-dot" />{t('footer.status')}</div>
        <div className="footer-links">{nav.slice(0, 5).map(([to, key]) => <NavLink key={to} to={to}>{t(key)}</NavLink>)}</div>
      </div>
    </footer>
  </div>
}
