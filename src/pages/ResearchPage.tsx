import { ArrowRight, ClipboardPenLine } from 'lucide-react'
import { researchDecisions, researchPlaceholders } from '../data/research'
import { useI18n } from '../i18n/context'
import { PageIntro, Reveal, Section, SectionHeading } from '../components/UI'

export function ResearchPage() {
  const { t } = useI18n()
  return <>
    <PageIntro eyebrow={t('research.eyebrow')} title={t('research.title')} lead={t('research.lead')} tone="green" />
    <Section><div className="research-stack">{researchDecisions.map((item, index) => <Reveal key={item.key} className="research-card"><span className="research-index">0{index + 1}</span><div><small>{t('research.finding')}</small><strong>{t(`research.${item.key}.f` as never)}</strong></div><ArrowRight /><div><small>{t('research.decision')}</small><strong>{t(`research.${item.key}.d` as never)}</strong></div><ArrowRight /><div><small>{t('research.response')}</small><strong>{t(`research.${item.key}.r` as never)}</strong></div></Reveal>)}</div></Section>
    <Section className="surface-section"><SectionHeading title={t('research.placeholderTitle')} /><div className="placeholder-grid">{researchPlaceholders.map(key => <Reveal key={key} className="placeholder-card"><ClipboardPenLine /><h3>{t(`research.${key}` as never)}</h3><p>{t('research.placeholder')}</p></Reveal>)}</div></Section>
  </>
}
