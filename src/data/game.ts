import type { TranslationKey } from '../i18n/en'

export type EvidenceStatus = 'verified-in-bundle' | 'needs-live-check' | 'planned'

export const liveGameUrl = 'https://team-06-game-ivory.vercel.app/'

export const worlds = [
  { id: 'seedling-meadow', en: 'Seedling Meadow', zh: '幼苗草地', accent: 'green', skills: { en: ['Numbers 1–5', 'Counting', 'Quantity matching'], zh: ['数字 1–5', '数数', '数量匹配'] }, example: { en: 'Count seeds and match each group to its number.', zh: '数一数种子，并把每组种子与相应数字配对。' } },
  { id: 'builders-forest', en: "Builders’ Forest", zh: '建造森林', accent: 'blue', skills: { en: ['Numbers to 10', 'Shapes', 'Patterns'], zh: ['10 以内数字', '图形', '规律'] }, example: { en: 'Use shapes and patterns to complete forest structures.', zh: '运用图形和规律完成森林建筑。' } },
  { id: 'river-bridge', en: 'River Bridge', zh: '河流桥梁', accent: 'teal', skills: { en: ['Addition within 10', 'Number bonds'], zh: ['10 以内加法', '数的组成'] }, example: { en: 'Combine visible groups to repair a bridge.', zh: '合并看得见的数量，修复河上的桥梁。' } },
  { id: 'harvest-valley', en: 'Harvest Valley', zh: '丰收山谷', accent: 'purple', skills: { en: ['Subtraction within 10', 'Missing quantities'], zh: ['10 以内减法', '缺少的数量'] }, example: { en: 'Take away harvested objects and find what remains.', zh: '拿走收获的物品，找出还剩多少。' } },
  { id: 'mountain-market', en: 'Mountain Market', zh: '山间集市', accent: 'blue', skills: { en: ['Comparison', 'Measurement', 'Spatial fit'], zh: ['比较', '测量', '空间匹配'] }, example: { en: 'Compare groups and measure objects at the market.', zh: '在集市中比较数量并测量物品。' } },
  { id: 'orchard-village', en: 'Orchard Village', zh: '果园村', accent: 'green', skills: { en: ['Equal groups', 'Fair sharing', 'Counting by twos'], zh: ['相等分组', '平均分', '两个两个地数'] }, example: { en: 'Share fruit fairly and arrange equal rows.', zh: '公平分配水果，并把它们排成相等的行。' } },
  { id: 'great-garden-festival', en: 'Great Garden Festival', zh: '花园庆典', accent: 'purple', skills: { en: ['Mixed review', 'Problem-solving', 'Build missions'], zh: ['综合复习', '解决问题', '搭建任务'] }, example: { en: 'Use several mathematics ideas in one final build mission.', zh: '在最终搭建任务中综合运用多种数学知识。' } },
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
