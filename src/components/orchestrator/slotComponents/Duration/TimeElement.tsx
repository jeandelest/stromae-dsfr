import { fr } from '@codegouvfr/react-dsfr'
import { type NumberFormatValues, NumericFormat } from 'react-number-format'

import { CustomInputDsfr } from '../shared/CustomInputDsfr'
import type { DurationKey, TimeDuration } from './type'

type TimeElementProps = {
  id: string
  durationValues: TimeDuration
  disabled: boolean | undefined
  readOnly: boolean | undefined
  onValueChange: (
    values: NumberFormatValues,
    key: DurationKey<'PTnHnM'>,
  ) => void
}

export function TimeElement(props: Readonly<TimeElementProps>) {
  const { id, disabled, durationValues, onValueChange, readOnly } = props
  return (
    <>
      <div
        className={fr.cx(
          'fr-fieldset__element',
          'fr-fieldset__element--inline',
          'fr-fieldset__element--number',
        )}
      >
        <NumericFormat
          customInput={CustomInputDsfr}
          disabled={disabled}
          readOnly={readOnly}
          allowNegative={false}
          dsfrProps={{ label: 'Heures' }}
          inputMode="numeric"
          allowLeadingZeros={false}
          decimalScale={0}
          isAllowed={({ floatValue }) =>
            floatValue === undefined || floatValue >= 0
          }
          onValueChange={(values) => onValueChange(values, 'hours')}
          id={`${id}-hours`}
          value={durationValues.hours}
        />
      </div>
      <div
        className={fr.cx(
          'fr-fieldset__element',
          'fr-fieldset__element--inline',
          'fr-fieldset__element--number',
        )}
      >
        <NumericFormat
          customInput={CustomInputDsfr}
          disabled={disabled}
          readOnly={readOnly}
          allowNegative={false}
          dsfrProps={{
            label: 'Minutes',
          }}
          allowLeadingZeros
          decimalScale={0}
          isAllowed={({ floatValue }) =>
            floatValue === undefined || (floatValue >= 0 && floatValue <= 59)
          }
          onValueChange={(values) => onValueChange(values, 'minutes')}
          id={`${id}-minutes`}
          inputMode="numeric"
          value={durationValues.minutes}
        />
      </div>
    </>
  )
}
