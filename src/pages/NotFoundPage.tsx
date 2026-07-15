import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { PageIntro, Section } from '../components/UI'

export function NotFoundPage() {
  const { t, locale } = useI18n()
  const copy = locale === 'zh-CN'
    ? { eyebrow: '找不到页面', title: '这条小路还没有长出来。', lead: '你访问的页面不存在，或已经移动到新的位置。', button: '返回首页' }
    : { eyebrow: 'Page not found', title: 'This path has not grown yet.', lead: 'The page you requested does not exist or has moved to a new location.', button: 'Return home' }
  return <><PageIntro eyebrow={copy.eyebrow} title={copy.title} lead={copy.lead} tone="green" /><Section><Link className="button button-primary" to="/">{copy.button}</Link><span className="sr-only">{t('nav.home')}</span></Section></>
}
