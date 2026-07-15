import { worlds } from '../data/game'
import { useI18n } from '../i18n/context'

export function WorldMap() {
  const { locale, t } = useI18n()
  return <ol className="world-map" aria-label={t('a11y.worldConcept')}>
    <svg className="world-path" viewBox="0 0 1000 360" aria-hidden="true"><path d="M75 270 C190 60 290 65 380 220 S590 355 680 165 850 50 930 145" /><path className="path-dash" d="M75 270 C190 60 290 65 380 220 S590 355 680 165 850 50 930 145" /></svg>
    {worlds.map((world, index) => <li key={world.id} className={`world-node node-${index + 1} accent-${world.accent}`}>
      <span className="world-number">{index + 1}</span>
      <div><strong>{locale === 'zh-CN' ? world.zh : world.en}</strong><small>{world.skills[locale === 'zh-CN' ? 'zh' : 'en'].join(' · ')}</small></div>
    </li>)}
  </ol>
}
