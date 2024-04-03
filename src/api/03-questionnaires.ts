/**
 * Generated by orval v6.26.0 🍺
 * Do not edit manually.
 * queen-application
 * API for Queen/Stromae
 * OpenAPI spec version: 4.2.1
 */
import { useMutation, useQuery } from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import type {
  QuestionnaireModelCreationData,
  QuestionnaireModelIdDto,
  QuestionnaireModelValueDto,
  SurveyUnitOkNokDto,
} from '../model/api'
import { stromaeInstance } from './axiosInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * Authorized roles: ADMIN / WEBCLIENT / REVIEWER / REVIEWER_ALTERNATIVE / INTERVIEWER /
 * @summary Search questionnaire ids linked to survey units
 */
export const getQuestionnaireModelIdBySurveyUnits = (
  getQuestionnaireModelIdBySurveyUnitsBody: string[],
  options?: SecondParameter<typeof stromaeInstance>
) => {
  return stromaeInstance<SurveyUnitOkNokDto>(
    {
      url: `/api/survey-units/questionnaire-model-id`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: getQuestionnaireModelIdBySurveyUnitsBody,
    },
    options
  )
}

export const getGetQuestionnaireModelIdBySurveyUnitsMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof getQuestionnaireModelIdBySurveyUnits>>,
    TError,
    { data: string[] },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof getQuestionnaireModelIdBySurveyUnits>>,
  TError,
  { data: string[] },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof getQuestionnaireModelIdBySurveyUnits>>,
    { data: string[] }
  > = (props) => {
    const { data } = props ?? {}

    return getQuestionnaireModelIdBySurveyUnits(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type GetQuestionnaireModelIdBySurveyUnitsMutationResult = NonNullable<
  Awaited<ReturnType<typeof getQuestionnaireModelIdBySurveyUnits>>
>
export type GetQuestionnaireModelIdBySurveyUnitsMutationBody = string[]
export type GetQuestionnaireModelIdBySurveyUnitsMutationError = unknown

/**
 * @summary Search questionnaire ids linked to survey units
 */
export const useGetQuestionnaireModelIdBySurveyUnits = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof getQuestionnaireModelIdBySurveyUnits>>,
    TError,
    { data: string[] },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof getQuestionnaireModelIdBySurveyUnits>>,
  TError,
  { data: string[] },
  TContext
> => {
  const mutationOptions =
    getGetQuestionnaireModelIdBySurveyUnitsMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * Authorized roles: ADMIN / WEBCLIENT /
 * @summary Create a Questionnaire Model
 */
export const createQuestionnaire = (
  questionnaireModelCreationData: QuestionnaireModelCreationData,
  options?: SecondParameter<typeof stromaeInstance>
) => {
  return stromaeInstance<void>(
    {
      url: `/api/questionnaire-models`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: questionnaireModelCreationData,
    },
    options
  )
}

export const getCreateQuestionnaireMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createQuestionnaire>>,
    TError,
    { data: QuestionnaireModelCreationData },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof createQuestionnaire>>,
  TError,
  { data: QuestionnaireModelCreationData },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createQuestionnaire>>,
    { data: QuestionnaireModelCreationData }
  > = (props) => {
    const { data } = props ?? {}

    return createQuestionnaire(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreateQuestionnaireMutationResult = NonNullable<
  Awaited<ReturnType<typeof createQuestionnaire>>
>
export type CreateQuestionnaireMutationBody = QuestionnaireModelCreationData
export type CreateQuestionnaireMutationError = unknown

/**
 * @summary Create a Questionnaire Model
 */
export const useCreateQuestionnaire = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createQuestionnaire>>,
    TError,
    { data: QuestionnaireModelCreationData },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof createQuestionnaire>>,
  TError,
  { data: QuestionnaireModelCreationData },
  TContext
> => {
  const mutationOptions = getCreateQuestionnaireMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * Authorized roles: ADMIN / WEBCLIENT / REVIEWER / REVIEWER_ALTERNATIVE / INTERVIEWER / SURVEY_UNIT /
 * @summary Get questionnnaire
 */
export const getQuestionnaireData = (
  id: string,
  options?: SecondParameter<typeof stromaeInstance>,
  signal?: AbortSignal
) => {
  return stromaeInstance<QuestionnaireModelValueDto>(
    { url: `/api/questionnaire/${id}`, method: 'GET', signal },
    options
  )
}

export const getGetQuestionnaireDataQueryKey = (id: string) => {
  return [`/api/questionnaire/${id}`] as const
}

export const getGetQuestionnaireDataQueryOptions = <
  TData = Awaited<ReturnType<typeof getQuestionnaireData>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getQuestionnaireData>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetQuestionnaireDataQueryKey(id)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getQuestionnaireData>>
  > = ({ signal }) => getQuestionnaireData(id, requestOptions, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getQuestionnaireData>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetQuestionnaireDataQueryResult = NonNullable<
  Awaited<ReturnType<typeof getQuestionnaireData>>
>
export type GetQuestionnaireDataQueryError = unknown

/**
 * @summary Get questionnnaire
 */
export const useGetQuestionnaireData = <
  TData = Awaited<ReturnType<typeof getQuestionnaireData>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getQuestionnaireData>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetQuestionnaireDataQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Authorized roles: ADMIN / WEBCLIENT / REVIEWER / REVIEWER_ALTERNATIVE / INTERVIEWER /
 * @summary Get questionnaire list for a campaign
 */
export const getQuestionnaireDatasByCampaignId = (
  id: string,
  options?: SecondParameter<typeof stromaeInstance>,
  signal?: AbortSignal
) => {
  return stromaeInstance<QuestionnaireModelValueDto[]>(
    { url: `/api/campaign/${id}/questionnaires`, method: 'GET', signal },
    options
  )
}

export const getGetQuestionnaireDatasByCampaignIdQueryKey = (id: string) => {
  return [`/api/campaign/${id}/questionnaires`] as const
}

export const getGetQuestionnaireDatasByCampaignIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getQuestionnaireDatasByCampaignId>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getQuestionnaireDatasByCampaignId>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetQuestionnaireDatasByCampaignIdQueryKey(id)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getQuestionnaireDatasByCampaignId>>
  > = ({ signal }) =>
    getQuestionnaireDatasByCampaignId(id, requestOptions, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getQuestionnaireDatasByCampaignId>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetQuestionnaireDatasByCampaignIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getQuestionnaireDatasByCampaignId>>
>
export type GetQuestionnaireDatasByCampaignIdQueryError = unknown

/**
 * @summary Get questionnaire list for a campaign
 */
export const useGetQuestionnaireDatasByCampaignId = <
  TData = Awaited<ReturnType<typeof getQuestionnaireDatasByCampaignId>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getQuestionnaireDatasByCampaignId>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetQuestionnaireDatasByCampaignIdQueryOptions(
    id,
    options
  )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Authorized roles: ADMIN / WEBCLIENT / REVIEWER / REVIEWER_ALTERNATIVE / INTERVIEWER /
 * @summary Get list of questionnaire ids for a campaign
 */
export const getQuestionnaireIdsByCampaignId = (
  id: string,
  options?: SecondParameter<typeof stromaeInstance>,
  signal?: AbortSignal
) => {
  return stromaeInstance<QuestionnaireModelIdDto[]>(
    { url: `/api/campaign/${id}/questionnaire-id`, method: 'GET', signal },
    options
  )
}

export const getGetQuestionnaireIdsByCampaignIdQueryKey = (id: string) => {
  return [`/api/campaign/${id}/questionnaire-id`] as const
}

export const getGetQuestionnaireIdsByCampaignIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getQuestionnaireIdsByCampaignId>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getQuestionnaireIdsByCampaignId>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetQuestionnaireIdsByCampaignIdQueryKey(id)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getQuestionnaireIdsByCampaignId>>
  > = ({ signal }) =>
    getQuestionnaireIdsByCampaignId(id, requestOptions, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getQuestionnaireIdsByCampaignId>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetQuestionnaireIdsByCampaignIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getQuestionnaireIdsByCampaignId>>
>
export type GetQuestionnaireIdsByCampaignIdQueryError = unknown

/**
 * @summary Get list of questionnaire ids for a campaign
 */
export const useGetQuestionnaireIdsByCampaignId = <
  TData = Awaited<ReturnType<typeof getQuestionnaireIdsByCampaignId>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getQuestionnaireIdsByCampaignId>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetQuestionnaireIdsByCampaignIdQueryOptions(
    id,
    options
  )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}