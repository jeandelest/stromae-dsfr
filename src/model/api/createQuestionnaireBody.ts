/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.1-SNAPSHOT
 */
import type { CreateQuestionnaireBodyValue } from './createQuestionnaireBodyValue'

export type CreateQuestionnaireBody = {
  idQuestionnaireModel?: string
  label: string
  requiredNomenclatureIds?: string[]
  value: CreateQuestionnaireBodyValue
}
