import type { FormInputs } from './VisualizeForm'

export const encodeParams = (data: FormInputs) => {
  return {
    nomenclature: data.nomenclature.reduce(
      (acc, { name, uri }) => ({ ...acc, [name]: encodeURIComponent(uri) }),
      {}
    ),
    source: encodeURIComponent(data.source),
    metadata: encodeURIComponent(data.metadata),
    data: encodeURIComponent(data.data),
  }
}
