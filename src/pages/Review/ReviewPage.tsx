import { reviewRoute } from './route'

export function ReviewPage() {
  const params = reviewRoute.useParams()

  const loaderResults = reviewRoute.useLoaderData()

  console.log({ params, loaderResults })

  return <>Review Page</>
}
