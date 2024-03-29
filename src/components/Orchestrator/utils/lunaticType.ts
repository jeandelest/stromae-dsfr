import type { useLunatic } from '@inseefr/lunatic'

export type LunaticGetReferentiel = Parameters<
  typeof useLunatic
>[2]['getReferentiel']

export type Nomenclature = Awaited<
  ReturnType<NonNullable<LunaticGetReferentiel>>
>

export type LunaticGoToPage = ReturnType<typeof useLunatic>['goToPage']

export type LunaticGoPreviousPage = ReturnType<
  typeof useLunatic
>['goPreviousPage']
export type LunaticGoNextPage = ReturnType<typeof useLunatic>['goNextPage']
