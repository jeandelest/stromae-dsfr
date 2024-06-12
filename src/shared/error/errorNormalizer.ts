import { AxiosError } from 'axios'
import { declareComponentKeys, getTranslation } from 'i18n'
import { NotFoundError } from './notFoundError'

type ErrorNormalized = {
  title: string
  subtitle: string
  paragraph: string
  code?: number
}

const { t } = getTranslation('errorNormalizer')

export function errorNormalizer(error: unknown): ErrorNormalized {
  if (error instanceof NotFoundError) {
    return {
      title: t('notFound.title'),
      subtitle: t('notFound.subtitle'),
      paragraph: t('notFound.paragraph'),
      code: 404,
    }
  }

  if (error instanceof AxiosError) {
    if (!error.response) {
      return {
        title: t('connectionError.title'),
        subtitle: t('connectionError.subtitle'),
        paragraph: t('connectionError.paragraph'),
      }
    }
    const status = error.response.status
    switch (status) {
      case 404:
        return {
          title: t('resourceNotFound.title'),
          subtitle: t('resourceNotFound.subtitle'),
          paragraph: t('resourceNotFound.paragraph'),
          code: status,
        }
      case 401:
        return {
          title: t('unauthorized.title'),
          subtitle: t('unauthorized.subtitle'),
          paragraph: t('unauthorized.paragraph'),
          code: status,
        }
      case 403:
        return {
          title: t('forbidden.title'),
          subtitle: t('forbidden.subtitle'),
          paragraph: t('forbidden.paragraph'),
          code: status,
        }
      case 400:
        return {
          title: t('badRequest.title'),
          subtitle: t('badRequest.subtitle'),
          paragraph: t('badRequest.paragraph'),
          code: status,
        }
      case 500:
        return {
          title: t('serverError.title'),
          subtitle: t('serverError.subtitle'),
          paragraph: t('serverError.paragraph'),
          code: status,
        }
      default:
        return {
          title: t('unhandledError.title'),
          subtitle: t('unhandledError.subtitle'),
          paragraph: t('unhandledError.paragraph'),
          code: status,
        }
    }
  }
  return {
    title: t('unknownError.title'),
    subtitle: t('unknownError.subtitle'),
    paragraph: t('unknownError.paragraph'),
  }
}

type GenerateKeys<BaseKey extends string> =
  `${BaseKey}.${Exclude<keyof ErrorNormalized, 'code'>}`

type AllErrorKeys =
  | GenerateKeys<'notFound'>
  | GenerateKeys<'connectionError'>
  | GenerateKeys<'resourceNotFound'>
  | GenerateKeys<'unauthorized'>
  | GenerateKeys<'forbidden'>
  | GenerateKeys<'badRequest'>
  | GenerateKeys<'serverError'>
  | GenerateKeys<'unhandledError'>
  | GenerateKeys<'unknownError'>

const { i18n } = declareComponentKeys<AllErrorKeys>()('errorNormalizer')

export type I18n = typeof i18n
