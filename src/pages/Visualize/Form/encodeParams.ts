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
}) => {
  const { source, data, metadata, nomenclature } = params

  const decodedNomenclature = nomenclature
    ? Object.entries(nomenclature).reduce<Record<string, string>>(
        (acc, [name, uri]) => ({
          ...acc,
          [name]: decodeURIComponent(uri),
        }),
        {}
      )
    : {}

  return {
    sourceUrl: source ? decodeURIComponent(source) : undefined,
    metadataUrl: metadata ? decodeURIComponent(metadata) : undefined,
    dataUrl: data ? decodeURIComponent(data) : undefined,
    nomenclature: decodedNomenclature,
  }
}
