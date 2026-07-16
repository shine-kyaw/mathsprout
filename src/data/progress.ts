export type ProgressStatus = 'completed' | 'in-progress' | 'planned'
export type ProgressItem = { key: string; status: ProgressStatus }

export const progress: ProgressItem[] = [
  { key: 'idea', status: 'completed' }, { key: 'brand', status: 'completed' }, { key: 'research', status: 'completed' },
  { key: 'prototype', status: 'completed' }, { key: 'structure', status: 'completed' }, { key: 'parent', status: 'completed' },
  { key: 'refinement', status: 'in-progress' }, { key: 'placement', status: 'in-progress' }, { key: 'verification', status: 'in-progress' },
  { key: 'testing', status: 'planned' }, { key: 'interviews', status: 'planned' }, { key: 'formats', status: 'planned' },
  { key: 'pilot', status: 'planned' }, { key: 'commercial', status: 'planned' },
]
