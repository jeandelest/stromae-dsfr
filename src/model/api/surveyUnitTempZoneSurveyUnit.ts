/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.1-SNAPSHOT
 */
import type { SurveyUnitTempZoneSurveyUnitComment } from './surveyUnitTempZoneSurveyUnitComment'
import type { SurveyUnitTempZoneSurveyUnitData } from './surveyUnitTempZoneSurveyUnitData'
import type { SurveyUnitTempZoneSurveyUnitPersonalizationItem } from './surveyUnitTempZoneSurveyUnitPersonalizationItem'
import type { SurveyUnitTempZoneSurveyUnitStateData } from './surveyUnitTempZoneSurveyUnitStateData'

/**
 * Validation of survey unit temp zone
 */
export type SurveyUnitTempZoneSurveyUnit = {
  comment?: SurveyUnitTempZoneSurveyUnitComment
  /** Validation of survey unit data */
  data: SurveyUnitTempZoneSurveyUnitData
  /** Validation of personalizations for a survey unit */
  personalization?: SurveyUnitTempZoneSurveyUnitPersonalizationItem[]
  /** @minLength 1 */
  questionnaireId: string
  stateData: SurveyUnitTempZoneSurveyUnitStateData
}
