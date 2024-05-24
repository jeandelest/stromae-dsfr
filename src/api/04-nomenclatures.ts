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
  GetNomenclatureById200Item,
  PostNomenclatureBody,
} from '../model/api'
import { stromaeInstance } from './axiosInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * Authorized roles: ADMIN / WEBCLIENT /
 * @summary Create/update a nomenclature
 */
export const postNomenclature = (
  postNomenclatureBody: PostNomenclatureBody,
  options?: SecondParameter<typeof stromaeInstance>
) => {
  return stromaeInstance<void>(
    {
      url: `/api/nomenclature`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: postNomenclatureBody,
    },
    options
  )
}

export const getPostNomenclatureMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postNomenclature>>,
    TError,
    { data: PostNomenclatureBody },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof postNomenclature>>,
  TError,
  { data: PostNomenclatureBody },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postNomenclature>>,
    { data: PostNomenclatureBody }
  > = (props) => {
    const { data } = props ?? {}

    return postNomenclature(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostNomenclatureMutationResult = NonNullable<
  Awaited<ReturnType<typeof postNomenclature>>
>
export type PostNomenclatureMutationBody = PostNomenclatureBody
export type PostNomenclatureMutationError = unknown

/**
 * @summary Create/update a nomenclature
 */
export const usePostNomenclature = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postNomenclature>>,
    TError,
    { data: PostNomenclatureBody },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof postNomenclature>>,
  TError,
  { data: PostNomenclatureBody },
  TContext
> => {
  const mutationOptions = getPostNomenclatureMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * Authorized roles: ADMIN / WEBCLIENT / REVIEWER / REVIEWER_ALTERNATIVE / INTERVIEWER / SURVEY_UNIT /
 * @summary Get list of required nomenclature for a questionnaire
 */
export const getListRequiredNomenclatureByQuestionnaireId = (
  id: string,
  options?: SecondParameter<typeof stromaeInstance>,
  signal?: AbortSignal
) => {
  return stromaeInstance<string[]>(
    {
      url: `/api/questionnaire/${id}/required-nomenclatures`,
      method: 'GET',
      signal,
    },
    options
  )
}

export const getGetListRequiredNomenclatureByQuestionnaireIdQueryKey = (
  id: string
) => {
  return [`/api/questionnaire/${id}/required-nomenclatures`] as const
}

export const getGetListRequiredNomenclatureByQuestionnaireIdQueryOptions = <
  TData = Awaited<
    ReturnType<typeof getListRequiredNomenclatureByQuestionnaireId>
  >,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof getListRequiredNomenclatureByQuestionnaireId>
        >,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ??
    getGetListRequiredNomenclatureByQuestionnaireIdQueryKey(id)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getListRequiredNomenclatureByQuestionnaireId>>
  > = ({ signal }) =>
    getListRequiredNomenclatureByQuestionnaireId(id, requestOptions, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getListRequiredNomenclatureByQuestionnaireId>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetListRequiredNomenclatureByQuestionnaireIdQueryResult =
  NonNullable<
    Awaited<ReturnType<typeof getListRequiredNomenclatureByQuestionnaireId>>
  >
export type GetListRequiredNomenclatureByQuestionnaireIdQueryError = unknown

/**
 * @summary Get list of required nomenclature for a questionnaire
 */
export const useGetListRequiredNomenclatureByQuestionnaireId = <
  TData = Awaited<
    ReturnType<typeof getListRequiredNomenclatureByQuestionnaireId>
  >,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof getListRequiredNomenclatureByQuestionnaireId>
        >,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions =
    getGetListRequiredNomenclatureByQuestionnaireIdQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Authorized roles: ADMIN / WEBCLIENT / REVIEWER / REVIEWER_ALTERNATIVE / INTERVIEWER /
 * @summary Get all nomenclatures Ids
 */
export const getNomenclaturesId = (
  options?: SecondParameter<typeof stromaeInstance>,
  signal?: AbortSignal
) => {
  return stromaeInstance<string[]>(
    { url: `/api/nomenclatures`, method: 'GET', signal },
    options
  )
}

export const getGetNomenclaturesIdQueryKey = () => {
  return [`/api/nomenclatures`] as const
}

export const getGetNomenclaturesIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getNomenclaturesId>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getNomenclaturesId>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof stromaeInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetNomenclaturesIdQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getNomenclaturesId>>
  > = ({ signal }) => getNomenclaturesId(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getNomenclaturesId>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetNomenclaturesIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getNomenclaturesId>>
>
export type GetNomenclaturesIdQueryError = unknown

/**
 * @summary Get all nomenclatures Ids
 */
export const useGetNomenclaturesId = <
  TData = Awaited<ReturnType<typeof getNomenclaturesId>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getNomenclaturesId>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetNomenclaturesIdQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Authorized roles: ADMIN / WEBCLIENT / REVIEWER / REVIEWER_ALTERNATIVE / INTERVIEWER / SURVEY_UNIT /
 * @summary Get Nomenclature
 */
export const getNomenclatureById = (
  id: string,
  options?: SecondParameter<typeof stromaeInstance>,
  signal?: AbortSignal
) => {
  return stromaeInstance<GetNomenclatureById200Item[]>(
    { url: `/api/nomenclature/${id}`, method: 'GET', signal },
    options
  )
}

export const getGetNomenclatureByIdQueryKey = (id: string) => {
  return [`/api/nomenclature/${id}`] as const
}

export const getGetNomenclatureByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getNomenclatureById>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getNomenclatureById>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetNomenclatureByIdQueryKey(id)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getNomenclatureById>>
  > = ({ signal }) => getNomenclatureById(id, requestOptions, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getNomenclatureById>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetNomenclatureByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getNomenclatureById>>
>
export type GetNomenclatureByIdQueryError = unknown

/**
 * @summary Get Nomenclature
 */
export const useGetNomenclatureById = <
  TData = Awaited<ReturnType<typeof getNomenclatureById>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getNomenclatureById>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetNomenclatureByIdQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Authorized roles: ADMIN / WEBCLIENT / REVIEWER / REVIEWER_ALTERNATIVE / INTERVIEWER / SURVEY_UNIT /
 * @summary Get list of required nomenclatures for a campaign
 */
export const getListRequiredNomenclature = (
  id: string,
  options?: SecondParameter<typeof stromaeInstance>,
  signal?: AbortSignal
) => {
  return stromaeInstance<string[]>(
    {
      url: `/api/campaign/${id}/required-nomenclatures`,
      method: 'GET',
      signal,
    },
    options
  )
}

export const getGetListRequiredNomenclatureQueryKey = (id: string) => {
  return [`/api/campaign/${id}/required-nomenclatures`] as const
}

export const getGetListRequiredNomenclatureQueryOptions = <
  TData = Awaited<ReturnType<typeof getListRequiredNomenclature>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getListRequiredNomenclature>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetListRequiredNomenclatureQueryKey(id)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getListRequiredNomenclature>>
  > = ({ signal }) => getListRequiredNomenclature(id, requestOptions, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getListRequiredNomenclature>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetListRequiredNomenclatureQueryResult = NonNullable<
  Awaited<ReturnType<typeof getListRequiredNomenclature>>
>
export type GetListRequiredNomenclatureQueryError = unknown

/**
 * @summary Get list of required nomenclatures for a campaign
 */
export const useGetListRequiredNomenclature = <
  TData = Awaited<ReturnType<typeof getListRequiredNomenclature>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getListRequiredNomenclature>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetListRequiredNomenclatureQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}
