/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.1-SNAPSHOT
 */
import type { SurveyUnitUpdateComment } from './surveyUnitUpdateComment'
import type { SurveyUnitUpdateData } from './surveyUnitUpdateData'
import type { SurveyUnitUpdatePersonalizationItem } from './surveyUnitUpdatePersonalizationItem'
import type { SurveyUnitUpdateStateData } from './surveyUnitUpdateStateData'

export interface SurveyUnitUpdate {
  comment?: SurveyUnitUpdateComment
  /** Validation of survey unit data */
  data?: SurveyUnitUpdateData
  /** Validation of personalizations for a survey unit */
  personalization?: SurveyUnitUpdatePersonalizationItem[]
  stateData?: SurveyUnitUpdateStateData
}
