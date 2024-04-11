import { Orchestrator } from 'components/Orchestrator/Orchestrator'
import { collectRoute } from './route'
import { useQueryClient } from '@tanstack/react-query'
import { getGetNomenclatureByIdQueryOptions } from 'api/04-nomenclatures'
import type {
  LunaticGetReferentiel,
  Nomenclature,
} from 'components/Orchestrator/utils/lunaticType'
import {
  getGenerateDepositProofQueryOptions,
  useSetStateData,
  useUpdateCollectedData,
} from 'api/06-survey-units'
import type { LunaticData } from '@inseefr/lunatic'
import type { StateData } from 'model/StateData'
import { useDocumentTitle } from 'hooks/useDocumentTitle'
import { useSetLogoutQuestionnaire } from 'hooks/useLogoutUrl'

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

  const mutationUpdateCollectedData = useUpdateCollectedData()

  const mutationUpdateStateData = useSetStateData()

  const updateCollectedData = (params: {
    data: NonNullable<LunaticData['COLLECTED']>
    onSuccess?: () => void
  }) =>
    mutationUpdateCollectedData.mutate(
      { id: surveyUnitId, data: params.data },
      { onSuccess: params.onSuccess }
    )

  const updateStateData = (params: { stateData: StateData }) =>
    mutationUpdateStateData.mutate({ id: surveyUnitId, data: params.stateData })

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
      updateCollectedData={updateCollectedData}
      updateStateData={updateStateData}
      getDepositProof={getDepositProof}
    />
  )
}
