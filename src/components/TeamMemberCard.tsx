import { useState } from 'react'
import { ChevronDown, Quote } from 'lucide-react'
import type { TeamMember } from '../data/team'
import { useI18n } from '../i18n/context'

export function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const { locale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const language = locale === 'zh-CN' ? 'zh' : 'en'
  const panelId = `member-${member.id}-details`
  return <article className={`team-card team-${index + 1}`}>
    <div className="member-card-head"><div className="member-avatar">{member.initials}</div><span className="member-role">{member.role[language]}</span></div>
    <h2>{member.name}</h2>
    <p>{member.biography[language]}</p>
    {member.quote && <blockquote><Quote size={16} aria-hidden="true" />{member.quote}</blockquote>}
    <button className="member-toggle" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(v => !v)}>{open ? t('team.hideDetails') : t('team.viewDetails')}<ChevronDown className={open ? 'rotated' : ''} size={18} /></button>
    <div id={panelId} className="member-details" hidden={!open}>
      <h3>{t('team.contributions')}</h3><ul>{member.contributions[language].map(item => <li key={item}>{item}</li>)}</ul>
      <h3>{t('team.skills')}</h3><div className="skill-chips">{member.skills[language].map(item => <span key={item}>{item}</span>)}</div>
    </div>
  </article>
}
