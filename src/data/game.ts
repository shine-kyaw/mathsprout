import type { TranslationKey } from '../i18n/en'

export type EvidenceStatus = 'verified-in-bundle' | 'needs-live-check' | 'planned'

export const liveGameUrl = 'https://team-06-game-ivory.vercel.app/'

export const worlds = [
  { id: 'seedling-meadow', en: 'Seedling Meadow', zh: '幼苗草地', accent: 'green', skills: { en: ['Counting', 'Quantity matching'], zh: ['数数', '数量匹配'] } },
  { id: 'builders-forest', en: "Builders’ Forest", zh: '建造森林', accent: 'blue', skills: { en: ['Shapes', 'Patterns'], zh: ['图形', '规律'] } },
  { id: 'river-bridge', en: 'River Bridge', zh: '河流桥梁', accent: 'teal', skills: { en: ['Addition', 'Number bonds'], zh: ['加法', '数的组成'] } },
  { id: 'harvest-valley', en: 'Harvest Valley', zh: '丰收山谷', accent: 'purple', skills: { en: ['Subtraction', 'Missing quantities'], zh: ['减法', '缺少的数量'] } },
  { id: 'mountain-market', en: 'Mountain Market', zh: '山间集市', accent: 'blue', skills: { en: ['Comparison', 'Measurement'], zh: ['比较', '测量'] } },
  { id: 'orchard-village', en: 'Orchard Village', zh: '果园村', accent: 'green', skills: { en: ['Equal groups', 'Sharing'], zh: ['相等分组', '平均分'] } },
  { id: 'great-garden-festival', en: 'Great Garden Festival', zh: '花园庆典', accent: 'purple', skills: { en: ['Mixed problems', 'Building projects'], zh: ['综合问题', '搭建项目'] } },
]

export const prototypeEvidence: Array<{ key: TranslationKey; status: EvidenceStatus }> = [
  { key: 'evidence.bilingual', status: 'verified-in-bundle' as const },
  { key: 'evidence.structure', status: 'verified-in-bundle' as const },
  { key: 'evidence.mathematics', status: 'verified-in-bundle' as const },
  { key: 'evidence.settings', status: 'verified-in-bundle' as const },
  { key: 'evidence.devices', status: 'needs-live-check' as const },
  { key: 'evidence.starting', status: 'planned' as const },
  { key: 'evidence.formats', status: 'planned' as const },
]
