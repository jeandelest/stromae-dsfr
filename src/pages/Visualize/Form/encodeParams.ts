import type { FormInputs } from './VisualizeForm'

//TODO Nomenclature need to change
export const encodeParams = (data: FormInputs) =>
  Object.fromEntries(
    Object.entries(data).map(([key, value]) => {
      if (key === 'nomenclatures') {
        // If the key is 'nomenclatures', encode each item in the array
        return [key, encodeURIComponent(JSON.stringify(value))]
      } else {
        // For other keys, simply encode the value
        return [key, encodeURIComponent(`${value}`)]
      }
    })
  )
