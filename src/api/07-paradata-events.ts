/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.10-SNAPSHOT
 */
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import type { AddParadataBody } from '../model/api'
import { stromaeInstance } from './axiosInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * Authorized roles: ADMIN / WEBCLIENT / REVIEWER / REVIEWER_ALTERNATIVE / INTERVIEWER / SURVEY_UNIT /
 * @summary Create paradata event for a survey unit
 */
export const addParadata = (
  addParadataBody: AddParadataBody,
  options?: SecondParameter<typeof stromaeInstance>
) => {
  return stromaeInstance<void>(
    {
      url: `/api/paradata`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: addParadataBody,
    },
    options
  )
}

export const getAddParadataMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addParadata>>,
    TError,
    { data: AddParadataBody },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof addParadata>>,
  TError,
  { data: AddParadataBody },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof addParadata>>,
    { data: AddParadataBody }
  > = (props) => {
    const { data } = props ?? {}

    return addParadata(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type AddParadataMutationResult = NonNullable<
  Awaited<ReturnType<typeof addParadata>>
>
export type AddParadataMutationBody = AddParadataBody
export type AddParadataMutationError = unknown

/**
 * @summary Create paradata event for a survey unit
 */
export const useAddParadata = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addParadata>>,
    TError,
    { data: AddParadataBody },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof addParadata>>,
  TError,
  { data: AddParadataBody },
  TContext
> => {
  const mutationOptions = getAddParadataMutationOptions(options)

  return useMutation(mutationOptions)
}
