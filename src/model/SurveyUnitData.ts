import type { LunaticData } from '@inseefr/lunatic'
import type { StateData } from './StateData'

export type SurveyUnitData = {
  stateData?: StateData
  data?: LunaticData
  personalization?: Array<unknown>
}
