import type { LunaticSource } from '@inseefr/lunatic'
import { queryOptions } from '@tanstack/react-query'
import type { SurveyUnitData } from 'model/SurveyUnitData'
import axios, { type AxiosRequestConfig } from 'axios'
import type { Nomenclature } from 'shared/components/Orchestrator/utils/lunaticType'

function axiosGet<T>(url: string, options?: AxiosRequestConfig) {
  return axios.get<T>(url, options).then(({ data }) => data)
}

export const sourceQueryOptions = (
  sourceUrl: string,
  options?: AxiosRequestConfig
) =>
  queryOptions({
    queryKey: [sourceUrl],
    queryFn: () => axiosGet<LunaticSource>(sourceUrl, options),
  })

export const surveyUnitDataQueryOptions = (
  surveyUnitDataUrl: string,
  options?: AxiosRequestConfig
) =>
  queryOptions({
    queryKey: [surveyUnitDataUrl],
    queryFn: () => axiosGet<SurveyUnitData>(surveyUnitDataUrl, options),
  })

//TODO Type metadata
export const metadataQueryOptions = (
  metadataUrl: string,
  options?: AxiosRequestConfig
) =>
  queryOptions({
    queryKey: [metadataUrl],
    queryFn: () => axiosGet<unknown>(metadataUrl, options),
  })

export const nomenclatureQueryOptions = (
  nomenclatureUrl: string,
  options?: AxiosRequestConfig
) =>
  queryOptions({
    queryKey: [nomenclatureUrl],
    queryFn: () => axiosGet<Nomenclature>(nomenclatureUrl, options),
  })
