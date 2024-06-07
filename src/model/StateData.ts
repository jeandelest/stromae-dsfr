import { type Extends } from 'tsafe/Extends'
import { assert } from 'tsafe/assert'
import type { PageType } from './Page'
import type { StateDataDto, StateDataInput } from './api'

export type StateData = {
  state: 'INIT' | 'COMPLETED' | 'VALIDATED' | 'TOEXTRACT' | 'EXTRACTED'
  date: number
  currentPage: PageType
}

assert<Extends<StateData, StateDataInput>>()
assert<Extends<StateData, StateDataDto>>()
