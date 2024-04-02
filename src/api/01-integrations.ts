/**
 * Generated by orval v6.26.0 🍺
 * Do not edit manually.
 * queen-application
 * API for Queen/Stromae
 * OpenAPI spec version: 4.2.1
 */
import { useMutation } from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query'
import type {
  IntegrateContextBody,
  IntegrateXmlContextBody,
  IntegrationResultsDto,
} from '../model/api'
import { stromaeInstance } from './axiosInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * Authorized roles: ADMIN / WEBCLIENT /
 * @deprecated
 * @summary Integrates the context of a campaign (XML Version - will be removed in a future version)
 */
export const integrateXmlContext = (
  integrateXmlContextBody: IntegrateXmlContextBody,
  options?: SecondParameter<typeof stromaeInstance>
) => {
  const formData = new FormData()
  formData.append('file', integrateXmlContextBody.file)

  return stromaeInstance<IntegrationResultsDto>(
    {
      url: `/api/campaign/xml/context`,
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: formData,
    },
    options
  )
}

export const getIntegrateXmlContextMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof integrateXmlContext>>,
    TError,
    { data: IntegrateXmlContextBody },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof integrateXmlContext>>,
  TError,
  { data: IntegrateXmlContextBody },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof integrateXmlContext>>,
    { data: IntegrateXmlContextBody }
  > = (props) => {
    const { data } = props ?? {}

    return integrateXmlContext(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type IntegrateXmlContextMutationResult = NonNullable<
  Awaited<ReturnType<typeof integrateXmlContext>>
>
export type IntegrateXmlContextMutationBody = IntegrateXmlContextBody
export type IntegrateXmlContextMutationError = unknown

/**
 * @deprecated
 * @summary Integrates the context of a campaign (XML Version - will be removed in a future version)
 */
export const useIntegrateXmlContext = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof integrateXmlContext>>,
    TError,
    { data: IntegrateXmlContextBody },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof integrateXmlContext>>,
  TError,
  { data: IntegrateXmlContextBody },
  TContext
> => {
  const mutationOptions = getIntegrateXmlContextMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * Authorized roles: ADMIN / WEBCLIENT /
 * @summary Integrates the context of a campaign (JSON version)
 */
export const integrateContext = (
  integrateContextBody: IntegrateContextBody,
  options?: SecondParameter<typeof stromaeInstance>
) => {
  const formData = new FormData()
  formData.append('file', integrateContextBody.file)

  return stromaeInstance<IntegrationResultsDto>(
    {
      url: `/api/campaign/context`,
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: formData,
    },
    options
  )
}

export const getIntegrateContextMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof integrateContext>>,
    TError,
    { data: IntegrateContextBody },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof integrateContext>>,
  TError,
  { data: IntegrateContextBody },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof integrateContext>>,
    { data: IntegrateContextBody }
  > = (props) => {
    const { data } = props ?? {}

    return integrateContext(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type IntegrateContextMutationResult = NonNullable<
  Awaited<ReturnType<typeof integrateContext>>
>
export type IntegrateContextMutationBody = IntegrateContextBody
export type IntegrateContextMutationError = unknown

/**
 * @summary Integrates the context of a campaign (JSON version)
 */
export const useIntegrateContext = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof integrateContext>>,
    TError,
    { data: IntegrateContextBody },
    TContext
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof integrateContext>>,
  TError,
  { data: IntegrateContextBody },
  TContext
> => {
  const mutationOptions = getIntegrateContextMutationOptions(options)

  return useMutation(mutationOptions)
}
