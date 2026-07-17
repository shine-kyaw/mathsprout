import { contributionRows } from '../data/team'
import { useI18n } from '../i18n/context'

export function ContributionMatrix() {
  const { locale, t } = useI18n(); const language = locale === 'zh-CN' ? 'zh' : 'en'
  return <div className="matrix-wrap"><table className="contribution-matrix"><caption className="sr-only">{t('team.matrixTitle')}</caption><thead><tr><th>{t('team.area')}</th><th>Sienna</th><th>Shine</th><th>Annie</th></tr></thead><tbody>{contributionRows.map(row => <tr key={row.area.en}><th>{row.area[language]}</th>{(['sienna','shine','annie'] as const).map(name => <td key={name}><span className={`matrix-state state-${row[name]}`}>{t(`team.state.${row[name]}`)}</span></td>)}</tr>)}</tbody></table></div>
}
