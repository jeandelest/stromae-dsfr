import type { PageType } from './Page'

export type StateData = {
  state: 'INIT' | 'COMPLETED' | 'VALIDATED' | 'TOEXTRACT' | 'EXTRACTED' | null
  date: number
  currentPage: PageType
}
