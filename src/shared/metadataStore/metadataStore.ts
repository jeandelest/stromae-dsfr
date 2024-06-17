import logoInsee from 'assets/logo-insee.png'

type Logo = {
  label: string
  url: string
}

export type MetadataStoreType = {
  label: string
  description: string
  mainLogo: Logo
  secondariesLogo?: Logo[]
}

const defaultState: MetadataStoreType = {
  label: "Filière d'enquête",
  description: 'Application de collecte internet',
  mainLogo: {
    label: "Logo de l'insee",
    url: logoInsee,
  },
}

let state: MetadataStoreType = defaultState
const listeners: Set<() => void> = new Set()

export const metadataStore = {
  getSnapshot(): MetadataStoreType {
    return state
  },
  updateMetadata(newState: Partial<MetadataStoreType>) {
    state = { ...state, ...newState }
    emitChange()
  },
  subscribe(listener: () => void): () => void {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  },
}

function emitChange(): void {
  listeners.forEach((listener) => listener())
}
