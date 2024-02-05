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
  loader: async ({
    context: { queryClient },
    deps: { sourceUrl, dataUrl, metadataUrl, nomenclature },
  }) => {
    document.title = 'Visualisation'
    if (!sourceUrl) {
      return
    }

    const sourceQueryOption = queryOptions({
      queryKey: [sourceUrl],
      queryFn: () => axiosGet<LunaticSource>(sourceUrl),
    })

    const dataQueryOption = queryOptions({
      queryKey: [dataUrl],
      queryFn: () => (dataUrl ? axiosGet<LunaticData>(dataUrl) : null),
    })

    //TODO Type metadata
    const metadataQueryOption = queryOptions({
      queryKey: [metadataUrl],
      queryFn: () => (metadataUrl ? axiosGet<unknown>(metadataUrl) : null),
    })

    const sourcePr = queryClient.ensureQueryData(sourceQueryOption)
    const dataPr = queryClient.ensureQueryData(dataQueryOption)
    const metadataPr = queryClient.ensureQueryData(metadataQueryOption)

    const [source, data, metadata] = await Promise.all([
      sourcePr,
      dataPr,
      metadataPr,
    ])
    return { source, data, metadata, nomenclature }
  },
})
