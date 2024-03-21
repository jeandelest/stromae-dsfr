import { createRoute } from '@tanstack/react-router'
import { rootRoute } from 'router/router'
import { VisualizePage } from './Visualize'
import { z } from 'zod'

import {
  metadataQueryOptions,
  sourceQueryOptions,
  surveyUnitDataQueryOptions,
} from 'utils/query/visualizeQueryOptions'

export const visualizeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'visualize',
  component: VisualizePage,
  validateSearch: z.object({
    source: z.string().transform(decodeURIComponent).optional(),
    metadata: z.string().transform(decodeURIComponent).optional(),
    data: z.string().transform(decodeURIComponent).optional(),
    nomenclature: z.record(z.string().transform(decodeURIComponent)).optional(),
  }),
  loaderDeps: ({ search }) => ({
    sourceUrl: search.source,
    surveyUnitDataUrl: search.data,
    metadataUrl: search.metadata,
    nomenclature: search.nomenclature,
  }),
  loader: async ({
    context: { queryClient },
    deps: { sourceUrl, surveyUnitDataUrl, metadataUrl, nomenclature },
  }) => {
    //TODO get name (Filière d'Enquête) in metadata
    document.title = "Visualisation | Filière d'Enquête"

    if (!sourceUrl) {
      return
    }

    const sourcePr = queryClient.ensureQueryData(sourceQueryOptions(sourceUrl))

    const surveyUnitDataPr = surveyUnitDataUrl
      ? queryClient.ensureQueryData(
          surveyUnitDataQueryOptions(surveyUnitDataUrl)
        )
      : Promise.resolve(undefined)

    const metadataPr = metadataUrl
      ? queryClient.ensureQueryData(metadataQueryOptions(metadataUrl))
      : Promise.resolve(undefined)

    const [source, surveyUnitData, metadata] = await Promise.all([
      sourcePr,
      surveyUnitDataPr,
      metadataPr,
    ])
    return { source, surveyUnitData, metadata, nomenclature }
  },
})
