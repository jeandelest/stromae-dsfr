/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.1-SNAPSHOT
 */
import type { GetDataBySurveyUnit200COLLECTED } from './getDataBySurveyUnit200COLLECTED'

/**
 * Validation of survey unit data
 */
export type GetDataBySurveyUnit200 = {
  CALCULATED?: unknown
  /** Validation of survey unit collected data */
  COLLECTED?: GetDataBySurveyUnit200COLLECTED
  EXTERNAL?: unknown
}
