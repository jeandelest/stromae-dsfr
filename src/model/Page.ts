import type { useLunatic } from '@inseefr/lunatic'

export type StromaePage =
  | 'welcomePage'
  | 'validationPage'
  | 'endPage'
  | 'downloadPage'

export type PageType = StromaePage | ReturnType<typeof useLunatic>['pageTag']

export type InternalPageType = StromaePage | 'lunaticPage'
