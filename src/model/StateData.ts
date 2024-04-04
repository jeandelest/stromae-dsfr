import type { PageType } from './Page'

export type StateData = {
  state?: 'INIT' | 'COMPLETED' | 'VALIDATED' | 'TOEXTRACT' | 'EXTRACTED'
  date?: number
  currentPage?: PageType
}
