import { Orchestrator } from 'components/Orchestrator/Orchestrator'
import { VisualizeForm } from './Form/VisualizeForm'
import { visualizeRoute } from './route'
import { useQueryClient } from '@tanstack/react-query'
import { nomenclatureQueryOptions } from 'utils/query/visualizeQueryOptions'

export function VisualizePage() {
  const loaderResults = visualizeRoute.useLoaderData()
  const queryClient = useQueryClient()

  if (!loaderResults) {
    return <VisualizeForm />
  }
  const { source, surveyUnitData, nomenclature } = loaderResults

  const getReferentiel = (name: string) => {
    if (!nomenclature) {
      return Promise.reject(new Error('No nomenclature provided'))
    }

    if (!nomenclature[name]) {
      return Promise.reject(
        new Error(`The nomenclature ${name} is not provided`)
      )
    }
    return queryClient.ensureQueryData(
      nomenclatureQueryOptions(nomenclature[name])
    )
  }

  return (
    <Orchestrator
      mode="visualize"
      source={source}
      surveyUnitData={surveyUnitData}
      getReferentiel={getReferentiel}
    />
  )
}
