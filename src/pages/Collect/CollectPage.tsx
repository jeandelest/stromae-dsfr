import { collectRoute } from './route'

export function CollectPage() {
  const params = collectRoute.useParams()

  const loaderResults = collectRoute.useLoaderData()

  console.log({ params, loaderResults })
  return <>CollectPage</>
}
