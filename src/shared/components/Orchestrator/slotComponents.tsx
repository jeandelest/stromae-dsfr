/* eslint-disable react-refresh/only-export-components */
import type { LunaticSlotComponents } from '@inseefr/lunatic'
import { slotComponents as dsfrSlotsComponents } from '@inseefr/lunatic-dsfr'
import { useSequenceTitle } from 'shared/hooks/useDocumentTitle'
import { assert } from 'tsafe/assert'

const Sequence: LunaticSlotComponents['Sequence'] = (props) => {
  const DsfrSequence = dsfrSlotsComponents['Sequence']

  assert(DsfrSequence !== undefined)

  useSequenceTitle(props.label)

  return <DsfrSequence {...props} />
}

export const slotComponents = { ...dsfrSlotsComponents, Sequence }
