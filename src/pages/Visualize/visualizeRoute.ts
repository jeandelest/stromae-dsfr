import { createRoute } from '@tanstack/react-router'
import { rootRoute } from 'router/router'
import { VisualizePage } from './Visualize'
import { z } from 'zod'
import { type LunaticData, type LunaticSource } from '@inseefr/lunatic'
import { queryOptions } from '@tanstack/react-query'
import { axiosGet } from 'utils/axios'
import { decodeParams } from './Form/encodeParams'

export const visualizeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'visualize',
  component: VisualizePage,
  validateSearch: z.object({
    source: z.string().optional(),
    metadata: z.string().optional(),
    data: z.string().optional(),
    nomenclature: z.record(z.string()).optional(),
  }),
  loaderDeps: ({ search }) => decodeParams(search),
  loader: ({
    context: { queryClient },
    deps: { source, data, metadata, nomenclature },
  }) => {
    if (!source) {
      return
    }

    return queryClient.ensureQueryData(
      visualizeQueryOptions({
        sourceUrl: source,
        dataUrl: data,
        metadataUrl: metadata,
        nomenclature,
      })
    )
  },
})
const visualizeQueryOptions = (params: {
  sourceUrl: string
  dataUrl: string
  metadataUrl: string
  nomenclature: {
    name: string
    uri: string
  }[]
}) => {
  const { sourceUrl, dataUrl, metadataUrl, nomenclature } = params
  return queryOptions({
    queryKey: [sourceUrl, dataUrl, metadataUrl, nomenclature],
    queryFn: async () => {
       const sourcePromise = axiosGet<LunaticSource>(sourceUrl)
      const dataPromise = dataUrl === '' ? undefined : axiosGet<LunaticData>(dataUrl)
      //TODO TYPE THIS
      const metadataPromise =
        metadataUrl === '' ? undefined : axiosGet<unknown>(metadataUrl)

      const [source, data, metadata] = await Promise.all([
        sourcePromise,
        dataPromise,
        metadataPromise,
      ])

      return { source, data, metadata, nomenclature }
    },
  })
}
