import type { FormInputs } from './VisualizeForm'

//TODO Remove this and use Zod with Form everywhere
export const encodeParams = (data: FormInputs) => {
  return {
    nomenclature: data.nomenclature.reduce<Record<string, string>>(
      (acc, { name, uri }) => ({ ...acc, [name]: encodeURIComponent(uri) }),
      {}
    ),
    source: encodeURIComponent(data.source),
    metadata: encodeURIComponent(data.metadata),
    data: encodeURIComponent(data.data),
  }
}
