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

export type LunaticOverview = ReturnType<typeof useLunatic>['overview']

export type LunaticPageTag = ReturnType<typeof useLunatic>['pageTag']

export type LunaticComponentProps = ReturnType<
  ReturnType<typeof useLunatic>['getComponents']
>
