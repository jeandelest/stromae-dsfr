import { VisualizeForm } from './Form/VisualizeForm'
import { visualizeRoute } from 'router/router'

export function VisualizePage() {
  const data = visualizeRoute.useLoaderData()

  console.log(data);

  if (data.source)
    return <>Orchestrator</>


  return <VisualizeForm />
}
