import type { FormInputs } from './VisualizeForm'

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

export const decodeParams = (params: {
  nomenclature?: Record<string, string>
  source?: string
  metadata?: string
  data?: string
}): FormInputs => {
  const { source, data, metadata, nomenclature } = params

  const decodedNomenclature = nomenclature
    ? Object.entries(nomenclature).map(([name, uri]) => ({
        name,
        uri: decodeURIComponent(uri),
      }))
    : []

  return {
    source: source ? decodeURIComponent(source) : '',
    metadata: metadata ? decodeURIComponent(metadata) : '',
    data: data ? decodeURIComponent(data) : '',
    nomenclature: decodedNomenclature,
  }
}
