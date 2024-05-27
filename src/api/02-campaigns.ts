/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.1-SNAPSHOT
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
  CampaignCreation,
  CampaignSummary,
  DeleteCampaignByIdParams,
} from '../model/api'
import { stromaeInstance } from './axiosInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * Authorized roles: ADMIN / WEBCLIENT / REVIEWER / REVIEWER_ALTERNATIVE / INTERVIEWER /
 * @summary Get campaign list for the current user
 */
export const getInterviewerCampaignList = (
  options?: SecondParameter<typeof stromaeInstance>,
  signal?: AbortSignal
) => {
  return stromaeInstance<CampaignSummary[]>(
    { url: `/api/campaigns`, method: 'GET', signal },
    options
  )
}

export const getGetInterviewerCampaignListQueryKey = () => {
  return [`/api/campaigns`] as const
}

export const getGetInterviewerCampaignListQueryOptions = <
  TData = Awaited<ReturnType<typeof getInterviewerCampaignList>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getInterviewerCampaignList>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof stromaeInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetInterviewerCampaignListQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getInterviewerCampaignList>>
  > = ({ signal }) => getInterviewerCampaignList(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getInterviewerCampaignList>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetInterviewerCampaignListQueryResult = NonNullable<
  Awaited<ReturnType<typeof getInterviewerCampaignList>>
>
export type GetInterviewerCampaignListQueryError = unknown

/**
 * @summary Get campaign list for the current user
 */
export const useGetInterviewerCampaignList = <
  TData = Awaited<ReturnType<typeof getInterviewerCampaignList>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getInterviewerCampaignList>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetInterviewerCampaignListQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Authorized roles: ADMIN / WEBCLIENT /
 * @deprecated
 * @summary Create a campaign
 */
export const createCampaign = (
  campaignCreation: CampaignCreation,
  options?: SecondParameter<typeof stromaeInstance>
) => {
  return stromaeInstance<void>(
    {
      url: `/api/campaigns`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: campaignCreation,
    },
    options
  )
}

export const getCreateCampaignMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createCampaign>>,
    TError,
    { data: CampaignCreation },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof createCampaign>>,
  TError,
  { data: CampaignCreation },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createCampaign>>,
    { data: CampaignCreation }
  > = (props) => {
    const { data } = props ?? {}

    return createCampaign(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreateCampaignMutationResult = NonNullable<
  Awaited<ReturnType<typeof createCampaign>>
>
export type CreateCampaignMutationBody = CampaignCreation
export type CreateCampaignMutationError = unknown

/**
 * @deprecated
 * @summary Create a campaign
 */
export const useCreateCampaign = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createCampaign>>,
    TError,
    { data: CampaignCreation },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof createCampaign>>,
  TError,
  { data: CampaignCreation },
  TContext
> => {
  const mutationOptions = getCreateCampaignMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * Authorized roles: ADMIN / WEBCLIENT /
 * @summary Create a campaign
 */
export const createCampaignV2 = (
  campaignCreation: CampaignCreation,
  options?: SecondParameter<typeof stromaeInstance>
) => {
  return stromaeInstance<void>(
    {
      url: `/api/campaign`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: campaignCreation,
    },
    options
  )
}

export const getCreateCampaignV2MutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createCampaignV2>>,
    TError,
    { data: CampaignCreation },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof createCampaignV2>>,
  TError,
  { data: CampaignCreation },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createCampaignV2>>,
    { data: CampaignCreation }
  > = (props) => {
    const { data } = props ?? {}

    return createCampaignV2(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreateCampaignV2MutationResult = NonNullable<
  Awaited<ReturnType<typeof createCampaignV2>>
>
export type CreateCampaignV2MutationBody = CampaignCreation
export type CreateCampaignV2MutationError = unknown

/**
 * @summary Create a campaign
 */
export const useCreateCampaignV2 = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createCampaignV2>>,
    TError,
    { data: CampaignCreation },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof createCampaignV2>>,
  TError,
  { data: CampaignCreation },
  TContext
> => {
  const mutationOptions = getCreateCampaignV2MutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * Authorized roles: ADMIN / WEBCLIENT /
 * @summary Get list of all campaigns
 */
export const getListCampaign = (
  options?: SecondParameter<typeof stromaeInstance>,
  signal?: AbortSignal
) => {
  return stromaeInstance<CampaignSummary[]>(
    { url: `/api/admin/campaigns`, method: 'GET', signal },
    options
  )
}

export const getGetListCampaignQueryKey = () => {
  return [`/api/admin/campaigns`] as const
}

export const getGetListCampaignQueryOptions = <
  TData = Awaited<ReturnType<typeof getListCampaign>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getListCampaign>>, TError, TData>
  >
  request?: SecondParameter<typeof stromaeInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetListCampaignQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getListCampaign>>> = ({
    signal,
  }) => getListCampaign(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getListCampaign>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetListCampaignQueryResult = NonNullable<
  Awaited<ReturnType<typeof getListCampaign>>
>
export type GetListCampaignQueryError = unknown

/**
 * @summary Get list of all campaigns
 */
export const useGetListCampaign = <
  TData = Awaited<ReturnType<typeof getListCampaign>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getListCampaign>>, TError, TData>
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetListCampaignQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Authorized roles: ADMIN / WEBCLIENT /
 * @summary Delete a campaign
 */
export const deleteCampaignById = (
  id: string,
  params: DeleteCampaignByIdParams,
  options?: SecondParameter<typeof stromaeInstance>
) => {
  return stromaeInstance<void>(
    { url: `/api/campaign/${id}`, method: 'DELETE', params },
    options
  )
}

export const getDeleteCampaignByIdMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteCampaignById>>,
    TError,
    { id: string; params: DeleteCampaignByIdParams },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteCampaignById>>,
  TError,
  { id: string; params: DeleteCampaignByIdParams },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteCampaignById>>,
    { id: string; params: DeleteCampaignByIdParams }
  > = (props) => {
    const { id, params } = props ?? {}

    return deleteCampaignById(id, params, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteCampaignByIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteCampaignById>>
>

export type DeleteCampaignByIdMutationError = unknown

/**
 * @summary Delete a campaign
 */
export const useDeleteCampaignById = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteCampaignById>>,
    TError,
    { id: string; params: DeleteCampaignByIdParams },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteCampaignById>>,
  TError,
  { id: string; params: DeleteCampaignByIdParams },
  TContext
> => {
  const mutationOptions = getDeleteCampaignByIdMutationOptions(options)

  return useMutation(mutationOptions)
}
