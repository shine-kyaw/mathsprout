import { Check, CircleDashed, SearchCheck } from 'lucide-react'
import { prototypeEvidence, type EvidenceStatus } from '../data/game'
import { useI18n } from '../i18n/context'

const icon: Record<EvidenceStatus, typeof Check> = { 'verified-in-bundle': Check, 'needs-live-check': SearchCheck, planned: CircleDashed }

export function EvidenceList() {
  const { t } = useI18n()
  return <div className="evidence-list">{prototypeEvidence.map(item => {
    const Icon = icon[item.status]
    const label = item.status === 'verified-in-bundle' ? t('common.current') : item.status === 'needs-live-check' ? t('common.verify') : t('common.planned')
    return <article key={item.key} className={`evidence-item evidence-${item.status}`}><Icon aria-hidden="true" /><div><strong>{t(item.key)}</strong><span>{label}</span></div></article>
  })}</div>
}
