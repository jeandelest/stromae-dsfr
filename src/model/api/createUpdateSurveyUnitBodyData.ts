/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.1-SNAPSHOT
 */
import type { CreateUpdateSurveyUnitBodyDataCOLLECTED } from './createUpdateSurveyUnitBodyDataCOLLECTED'

/**
 * Validation of survey unit data
 */
export type CreateUpdateSurveyUnitBodyData = {
  CALCULATED?: unknown
  /** Validation of survey unit collected data */
  COLLECTED?: CreateUpdateSurveyUnitBodyDataCOLLECTED
  EXTERNAL?: unknown
}
