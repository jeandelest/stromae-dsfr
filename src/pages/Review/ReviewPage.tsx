import { useQueryClient } from '@tanstack/react-query'
import { getGetNomenclatureByIdQueryOptions } from 'api/04-nomenclatures'
import { Orchestrator } from 'shared/components/Orchestrator/Orchestrator'
import type { LunaticGetReferentiel } from 'shared/components/Orchestrator/utils/lunaticType'
import { reviewRoute } from './route'

export function ReviewPage() {
  const queryClient = useQueryClient()

  const loaderResults = reviewRoute.useLoaderData()

  const { source, surveyUnitData } = loaderResults

  const getReferentiel: LunaticGetReferentiel = (name: string) =>
    queryClient
      .ensureQueryData(getGetNomenclatureByIdQueryOptions(name))
      .then((result) => result)

  return (
    <Orchestrator
      mode="review"
      source={source}
      surveyUnitData={surveyUnitData}
      getReferentiel={getReferentiel}
    />
  )
}
