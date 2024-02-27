import type { LunaticSource } from '@inseefr/lunatic'
import { queryOptions } from '@tanstack/react-query'
import type { SurveyUnitData } from 'model/SurveyUnitData'
import { axiosGet } from 'utils/axios'

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
