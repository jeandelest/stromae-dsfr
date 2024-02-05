import { Orchestrator } from 'components/Orchestrator/Orchestrator'
import { VisualizeForm } from './Form/VisualizeForm'
import { visualizeRoute } from './route'
import { axiosGet } from 'utils/axios'

export function VisualizePage() {
  const loaderResults = visualizeRoute.useLoaderData()

  if (loaderResults) {
    const { source, data, nomenclature } = loaderResults
    const getReferentiel = (name: string) => {
      return axiosGet<Array<unknown>>(nomenclature[name])
    }

    return (
      <Orchestrator
        source={source}
        data={data}
        getReferentiel={getReferentiel}
      />
    )
  }

  return <VisualizeForm />
}
