import { Orchestrator } from 'components/Orchestrator/Orchestrator'
import { VisualizeForm } from './Form/VisualizeForm'
import { visualizeRoute } from './visualizeRoute'

export function VisualizePage() {
  const loaderResults = visualizeRoute.useLoaderData()

  if (loaderResults) {
    const { source, data } = loaderResults
    return <Orchestrator source={source} data={data} />
  }

  return <VisualizeForm />
}
