/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.1-SNAPSHOT
 */
import type { IntegrationResultsCampaign } from './integrationResultsCampaign'
import type { IntegrationResultsNomenclaturesItem } from './integrationResultsNomenclaturesItem'
import type { IntegrationResultsQuestionnaireModelsItem } from './integrationResultsQuestionnaireModelsItem'

export interface IntegrationResults {
  campaign?: IntegrationResultsCampaign
  nomenclatures?: IntegrationResultsNomenclaturesItem[]
  questionnaireModels?: IntegrationResultsQuestionnaireModelsItem[]
}
