import type { LunaticState } from '@inseefr/lunatic'

export type StromaePage = 'welcomePage' | 'validationPage' | 'endPage'

export type PageType = StromaePage | LunaticState['pageTag']

export type InternalPageType = StromaePage | 'lunaticPage'
