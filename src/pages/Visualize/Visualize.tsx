import { Orchestrator } from 'components/Orchestrator/Orchestrator';
import { VisualizeForm } from './Form/VisualizeForm'
import { visualizeRoute } from 'router/router'

export function VisualizePage() {
  const data = visualizeRoute.useLoaderData()

  console.log(data);

  if (data.source)
    return <Orchestrator source={data.source} data={data.data} />


  return <VisualizeForm />
}
