import { createRoute } from '@tanstack/react-router'
import { rootRoute } from 'router/router'
import { VisualizePage } from './Visualize'
import { z } from 'zod'
import { type LunaticSource } from '@inseefr/lunatic'
import { queryOptions } from '@tanstack/react-query'
import { axiosGet } from 'utils/axios'
import { decodeParams } from './Form/encodeParams'
import type { SurveyUnitData } from 'components/Orchestrator/type'

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
    deps: { sourceUrl, surveyUnitDataUrl, metadataUrl, nomenclature },
  }) => {
    document.title = 'Visualisation'
    if (!sourceUrl) {
      return
    }

    const sourceQueryOption = queryOptions({
      queryKey: [sourceUrl],
      queryFn: () => axiosGet<LunaticSource>(sourceUrl),
    })

    const surveyUnitDataQueryOption = queryOptions({
      queryKey: [surveyUnitDataUrl],
      queryFn: () =>
        surveyUnitDataUrl
          ? axiosGet<SurveyUnitData>(surveyUnitDataUrl)
          : undefined,
    })

    //TODO Type metadata
    const metadataQueryOption = queryOptions({
      queryKey: [metadataUrl],
      queryFn: () => (metadataUrl ? axiosGet<unknown>(metadataUrl) : undefined),
    })

    const sourcePr = queryClient.ensureQueryData(sourceQueryOption)
    const surveyUnitDataPr = queryClient.ensureQueryData(
      surveyUnitDataQueryOption
    )
    const metadataPr = queryClient.ensureQueryData(metadataQueryOption)

    const [source, surveyUnitData, metadata] = await Promise.all([
      sourcePr,
      surveyUnitDataPr,
      metadataPr,
    ])
    return { source, surveyUnitData, metadata, nomenclature }
  },
})
