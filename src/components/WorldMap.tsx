import { useState } from 'react'
import { worlds } from '../data/game'
import { useI18n } from '../i18n/context'

export function WorldMap() {
  const { locale, t } = useI18n(); const language = locale === 'zh-CN' ? 'zh' : 'en'; const [active, setActive] = useState(0); const world = worlds[active]
  return <div className="world-explorer"><div className="world-tabs" role="tablist" aria-label={t('a11y.worldConcept')}>{worlds.map((item, index) => <button key={item.id} role="tab" aria-selected={active === index} aria-controls="world-detail" id={`world-tab-${index}`} className={`world-tab accent-${item.accent}`} onClick={() => setActive(index)}><span>{index + 1}</span>{item[language]}</button>)}</div><div id="world-detail" role="tabpanel" aria-labelledby={`world-tab-${active}`} className={`world-detail accent-${world.accent}`}><span className="world-kicker">{t('game.worldNumber')} {active + 1} · {t('feature.available')}</span><h3>{world[language]}</h3><div className="skill-chips">{world.skills[language].map(skill => <span key={skill}>{skill}</span>)}</div><p>{world.example[language]}</p><small>{t('game.worldStructure')}</small></div></div>
}
