import { VisualizeForm } from './Form/VisualizeForm'
import { visualizeRoute } from 'router/router'

export function VisualizePage() {
  const data = visualizeRoute.useLoaderData()

  if (data.source)
    return <>Orchestrator</>

  return <VisualizeForm />
}
