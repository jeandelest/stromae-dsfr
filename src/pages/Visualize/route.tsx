import { createRoute } from '@tanstack/react-router'
import { rootRoute } from 'router/router'
import { ErrorComponent } from 'shared/components/Error/ErrorComponent'
import {
  metadataQueryOptions,
  sourceQueryOptions,
  surveyUnitDataQueryOptions,
} from 'shared/query/visualizeQueryOptions'
import { z } from 'zod'
import { VisualizePage } from './Visualize'

const visualizeSearchSchema = z
  .object({
    source: z.string().transform(decodeURIComponent).optional(),
    metadata: z.string().transform(decodeURIComponent).optional(),
    data: z.string().transform(decodeURIComponent).optional(),
    nomenclature: z.record(z.string().transform(decodeURIComponent)).optional(),
  })
  .optional()

export const visualizeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'visualize',
  component: VisualizePage,
  validateSearch: visualizeSearchSchema,
  loaderDeps: ({ search }) => ({
    sourceUrl: search?.source,
    surveyUnitDataUrl: search?.data,
    metadataUrl: search?.metadata,
    nomenclature: search?.nomenclature,
  }),
  loader: async ({
    context: { queryClient },
    deps: { sourceUrl, surveyUnitDataUrl, metadataUrl, nomenclature },
    abortController,
  }) => {
    //TODO get name (Filière d'Enquête) in metadata
    document.title = "Visualisation | Filière d'Enquête"
    if (!sourceUrl) {
      return
    }

    const sourcePr = queryClient.ensureQueryData(
      sourceQueryOptions(sourceUrl, { signal: abortController.signal })
    )

    const surveyUnitDataPr = surveyUnitDataUrl
      ? queryClient.ensureQueryData(
          surveyUnitDataQueryOptions(surveyUnitDataUrl, {
            signal: abortController.signal,
          })
        )
      : Promise.resolve(undefined)

    const metadataPr = metadataUrl
      ? queryClient.ensureQueryData(
          metadataQueryOptions(metadataUrl, { signal: abortController.signal })
        )
      : Promise.resolve(undefined)

    return Promise.all([sourcePr, surveyUnitDataPr, metadataPr]).then(
      ([source, surveyUnitData, metadata]) => {
        return { source, surveyUnitData, metadata, nomenclature }
      }
    )
  },
  errorComponent: ({ error, reset }) => (
    <ErrorComponent error={error} reset={reset} redirectTo="visualizeForm" />
  ),
})
