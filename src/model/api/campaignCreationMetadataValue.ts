/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.1-SNAPSHOT
 */
import type { CampaignCreationMetadataValueVariablesItem } from './campaignCreationMetadataValueVariablesItem'

export type CampaignCreationMetadataValue = {
  /** @pattern ^(household|business)$ */
  inseeContext?: string
  /** @minItems 0 */
  variables?: CampaignCreationMetadataValueVariablesItem[]
  [key: string]: any
}
