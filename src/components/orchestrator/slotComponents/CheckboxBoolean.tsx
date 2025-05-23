import { useId } from 'react'

import { Checkbox } from '@codegouvfr/react-dsfr/Checkbox'
import type { LunaticSlotComponents } from '@inseefr/lunatic'

import { useQuestionId } from './Question'
import { getErrorStates } from './utils/errorStates'

/**
 * @deprecated will be replaced by a Switch
 */
export const CheckboxBoolean: LunaticSlotComponents['CheckboxBoolean'] = (
  props,
) => {
  const {
    disabled,
    checked,
    onChange,
    label,
    declarations,
    description,
    errors,
    readOnly,
  } = props

  const id = useId()
  const questionId = useQuestionId()

  const { state, stateRelatedMessage } = getErrorStates(errors)

  if (declarations) {
    //TODO throw and handle globaly errors in an alert with a condition to avoid to display alert in prod
    console.error('Only declaration in Question are displayed')
  }

  return (
    <Checkbox
      id={id}
      disabled={disabled || readOnly}
      options={[
        {
          label: label && <span>{label}</span>,
          hintText: description,
          nativeInputProps: {
            onChange: onChange,
            checked: checked,
            ...(state === 'error'
              ? {
                  'aria-invalid': true,
                  /**
                   * Note that the error message ID follows the format `${id}-messages` because this is the convention used by the underlying library react-dsfr.
                   * See: https://github.com/codegouvfr/react-dsfr/blob/4c41367febcb78307f261df1b761fedb52c8a905/src/shared/Fieldset.tsx#L101
                   */ 'aria-errormessage': `${id}-messages`,
                }
              : {}),
          },
        },
      ]}
      aria-labelledby={questionId}
      state={state}
      stateRelatedMessage={stateRelatedMessage}
    />
  )
}
