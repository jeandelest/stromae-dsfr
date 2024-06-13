import type { LunaticSource } from '@inseefr/lunatic'
import { createRoute } from '@tanstack/react-router'
import { getGetQuestionnaireDataQueryOptions } from 'api/03-questionnaires'
import { getGetMetadataByQuestionnaireIdQueryOptions } from 'api/05-metadata'
import { getGetSurveyUnitByIdQueryOptions } from 'api/06-survey-units'
import type { SurveyUnitData } from 'model/SurveyUnitData'
import { rootRoute } from 'router/router'
import { ErrorComponent } from 'shared/components/Error/ErrorComponent'
import { protectedRouteLoader } from 'shared/loader/protectedLoader'
import { ReviewPage } from './ReviewPage'

export const reviewPath =
  '/questionnaire/review/$questionnaireId/unite-enquetee/$surveyUnitId'

export const reviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: reviewPath,
  component: ReviewPage,
  beforeLoad: protectedRouteLoader,
  loader: ({
    params: { questionnaireId, surveyUnitId },
    context: { queryClient },
  }) => {
    document.title = "Questionnaire | Filière d'Enquête"

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
    return <ErrorComponent error={error} redirectTo={undefined} />
  },
})
