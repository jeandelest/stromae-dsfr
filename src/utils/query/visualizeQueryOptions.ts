import type { LunaticSource } from '@inseefr/lunatic'
import { queryOptions } from '@tanstack/react-query'
import type { SurveyUnitData } from 'model/SurveyUnitData'
import axios from 'axios'
import type { Nomenclature } from 'components/Orchestrator/utils/lunaticType'

function axiosGet<T>(url: string) {
  return axios.get<T>(url).then(({ data }) => data)
}

export const sourceQueryOptions = (sourceUrl: string) =>
  queryOptions({
    queryKey: [sourceUrl],
    queryFn: () => axiosGet<LunaticSource>(sourceUrl),
  })

export const surveyUnitDataQueryOptions = (surveyUnitDataUrl: string) =>
  queryOptions({
    queryKey: [surveyUnitDataUrl],
    queryFn: () => axiosGet<SurveyUnitData>(surveyUnitDataUrl),
  })

//TODO Type metadata
export const metadataQueryOptions = (metadataUrl: string) =>
  queryOptions({
    queryKey: [metadataUrl],
    queryFn: () => axiosGet<unknown>(metadataUrl),
  })

export const nomenclatureQueryOptions = (nomenclatureUrl: string) =>
  queryOptions({
    queryKey: [nomenclatureUrl],
    queryFn: () => axiosGet<Nomenclature>(nomenclatureUrl),
  })
