/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.1-SNAPSHOT
 */
import type { MetadataCreation } from './metadataCreation'

export interface CampaignCreation {
  id?: string
  label: string
  metadata?: MetadataCreation
  questionnaireIds: string[]
}
