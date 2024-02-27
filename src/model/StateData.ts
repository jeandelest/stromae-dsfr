import type { useLunatic } from '@inseefr/lunatic'

export type StateData = {
  state: 'INIT' | 'COMPLETED' | 'VALIDATED' | 'TOEXTRACT' | 'EXTRACTED' | null
  date: number
  currentPage:
    | 'welcomePage'
    | 'validationPage'
    | 'endPage'
    | ReturnType<typeof useLunatic>['pageTag'] // We hope Lunatic will better type this with template literal type
}
