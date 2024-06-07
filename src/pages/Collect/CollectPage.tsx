import type { LunaticData } from '@inseefr/lunatic'
import { useQueryClient } from '@tanstack/react-query'
import { getGetNomenclatureByIdQueryOptions } from 'api/04-nomenclatures'
import {
  getGenerateDepositProofQueryOptions,
  useUpdateSurveyUnitDataStateDataById,
} from 'api/06-survey-units'
import type { StateData } from 'model/StateData'
import { toast } from 'react-toastify'
import { Orchestrator } from 'shared/components/Orchestrator/Orchestrator'
import type {
  LunaticGetReferentiel,
  Nomenclature,
} from 'shared/components/Orchestrator/utils/lunaticType'
import { useDocumentTitle } from 'shared/hooks/useDocumentTitle'
import { useSetLogoutQuestionnaire } from 'shared/hooks/useLogoutUrl'
import { collectRoute } from './route'

export function CollectPage() {
  const { surveyUnitId, questionnaireId } = collectRoute.useParams()
  const queryClient = useQueryClient()

  useSetLogoutQuestionnaire(questionnaireId)

  const loaderResults = collectRoute.useLoaderData()

  //TODO -> use Metadata
  useDocumentTitle("Questionnaire | Filière d'Enquête")

  const { source, surveyUnitData } = loaderResults

  const getReferentiel: LunaticGetReferentiel = (name: string) =>
    queryClient
      .ensureQueryData(getGetNomenclatureByIdQueryOptions(name))
      .then((result) => result as unknown as Nomenclature) //waiting better type in backend, we can not use zod because nomenclature can be heavy

  const mutationUpdateDataStateData = useUpdateSurveyUnitDataStateDataById()

  const updateDataAndStateData = (params: {
    stateData: StateData
    data: LunaticData['COLLECTED']
    onSuccess?: () => void
  }) =>
    mutationUpdateDataStateData.mutate(
      {
        id: surveyUnitId,
        data: { data: params.data, stateData: params.stateData }, //Waiting for API to accept request with undefined data
      },
      {
        onSuccess: () => {
          params.onSuccess?.()
          params.data &&
            toast.success('Les données ont bien été sauvegardées', {})
        },
        onError: () =>
          toast.error(
            "Il y a eu une erreur, les données n'ont pas été sauvegardées"
          ),
      }
    )

  const getDepositProof = () =>
    queryClient
      .ensureQueryData(getGenerateDepositProofQueryOptions(surveyUnitId))
      .then((response) => {
        const fileName =
          (response.headers['content-disposition'].match(
            /filename="(.+?)"/
          )[1] as string) ?? 'document.pdf' //content-disposition is present in OpenAPI spec but not well inferred by type

        const url = URL.createObjectURL(response.data)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      })
      .catch((error) => {
        console.error('Error downloading PDF:', error)
      })

  return (
    <Orchestrator
      mode="collect"
      source={source}
      surveyUnitData={surveyUnitData}
      getReferentiel={getReferentiel}
      updateDataAndStateData={updateDataAndStateData}
      getDepositProof={getDepositProof}
    />
  )
}
