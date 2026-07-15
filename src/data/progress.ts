export type ProgressStatus = 'completed' | 'in-progress' | 'planned'
export type ProgressItem = { key: string; status: ProgressStatus; note: string }

export const progress: ProgressItem[] = [
  { key: 'idea', status: 'completed', note: 'The core nature-and-building mathematics concept is established.' },
  { key: 'research', status: 'in-progress', note: 'Research records and team evidence still need to be added.' },
  { key: 'concept', status: 'completed', note: 'The product concept, worlds and mathematics structure are defined.' },
  { key: 'brand', status: 'completed', note: 'The MathSprout identity and official logo are in use.' },
  { key: 'prototype', status: 'in-progress', note: 'A deployed prototype and production bundle exist; a complete live-device audit is still required.' },
  { key: 'bilingual', status: 'in-progress', note: 'English and Simplified Chinese interface strings are present in the deployed bundle.' },
  { key: 'placement', status: 'planned', note: 'The planned placement flow is not present in the inspected deployment bundle.' },
  { key: 'formats', status: 'planned', note: 'Additional puzzle and board-game formats remain planned.' },
  { key: 'testing', status: 'planned', note: 'No completed user-testing results have been supplied.' },
]
