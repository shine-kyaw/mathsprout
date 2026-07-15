import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { en, type TranslationKey } from './en'
import { zhCN } from './zh-CN'

type Locale = 'en' | 'zh-CN'
type I18nValue = { locale: Locale; setLocale: (locale: Locale) => void; t: (key: TranslationKey) => string }

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    try { return localStorage.getItem('mathsprout-site-locale') === 'zh-CN' ? 'zh-CN' : 'en' }
    catch { return 'en' }
  })
  useEffect(() => {
    document.documentElement.lang = locale === 'zh-CN' ? 'zh-CN' : 'en'
    document.title = locale === 'zh-CN' ? zhCN['meta.title'] : en['meta.title']
    document.querySelector('meta[name="description"]')?.setAttribute('content', locale === 'zh-CN' ? zhCN['meta.description'] : en['meta.description'])
    try { localStorage.setItem('mathsprout-site-locale', locale) } catch { /* Language still works for this session. */ }
  }, [locale])
  const value = useMemo<I18nValue>(() => ({ locale, setLocale, t: key => locale === 'zh-CN' ? zhCN[key] : en[key] }), [locale])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const value = useContext(I18nContext)
  if (!value) throw new Error('useI18n must be used inside I18nProvider')
  return value
}
