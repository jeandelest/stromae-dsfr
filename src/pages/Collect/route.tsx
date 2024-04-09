import { createRoute } from '@tanstack/react-router'
import { rootRoute } from 'router/router'
import { CollectPage } from './CollectPage'
import { protectedRouteLoader } from 'router/loader/protectedLoader'
import { getGetQuestionnaireDataQueryOptions } from 'api/03-questionnaires'
import { getGetSurveyUnitByIdQueryOptions } from 'api/06-survey-units'
import { getGetMetadataByQuestionnaireIdQueryOptions } from 'api/05-metadata'
import { ErrorComponent } from 'components/Error/ErrorComponent'
import type { LunaticSource } from '@inseefr/lunatic'
import type { SurveyUnitData } from 'model/SurveyUnitData'

export const collectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/questionnaire/$questionnaireId/unite-enquetee/$surveyUnitId',
  component: CollectPage,
  beforeLoad: protectedRouteLoader,
  loader: ({
    params: { questionnaireId, surveyUnitId },
    context: { queryClient },
  }) => {
    const sourcePr = queryClient
      .ensureQueryData(getGetQuestionnaireDataQueryOptions(questionnaireId))
      .then((e) => e.value as unknown as LunaticSource) // We'd like to use zod, but the files are heavy.

    const surveyUnitDataPr = queryClient
      .ensureQueryData(getGetSurveyUnitByIdQueryOptions(surveyUnitId))
      .then((suData) => suData as SurveyUnitData) // data are heavy too

    //TODO use metadata and type
    const metadataPr = queryClient.ensureQueryData(
      getGetMetadataByQuestionnaireIdQueryOptions(questionnaireId)
    )

    return Promise.all([sourcePr, surveyUnitDataPr, metadataPr]).then(
      ([source, surveyUnitData, metadata]) => ({
        source,
        surveyUnitData,
        metadata,
      })
    )
  },
  errorComponent: ({ error }) => {
    return <ErrorComponent error={error} redirectTo="portal" />
  },
})
