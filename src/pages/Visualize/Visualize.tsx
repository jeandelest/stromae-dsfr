import { Orchestrator } from 'components/Orchestrator/Orchestrator'
import { VisualizeForm } from './Form/VisualizeForm'
import { visualizeRoute } from './route'
import { axiosGet } from 'utils/axios'

export function VisualizePage() {
  const loaderResults = visualizeRoute.useLoaderData()

  if (!loaderResults) {
    return <VisualizeForm />
  }
  const { source, surveyUnitData, nomenclature } = loaderResults

  const getReferentiel = (name: string) => {
    return nomenclature
      ? axiosGet<Array<unknown>>(nomenclature[name])
      : Promise.reject(new Error('No nomenclature provided'))
  }

  return (
    <Orchestrator
      source={source}
      surveyUnitData={surveyUnitData}
      getReferentiel={getReferentiel}
    />
  )
}
