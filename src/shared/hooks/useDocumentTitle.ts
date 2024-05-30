import { useEffect, type ReactNode } from 'react'
import { renderToString } from 'react-dom/server'

export function useDocumentTitle(title: string) {
  useEffect(() => {
    const prevTitle = document.title

    document.title = title

    return () => {
      document.title = prevTitle
    }
  }, [title])
}

export function useSequenceTitle(sequenceLabel: ReactNode) {
  //TODO get the name of the site (in metadata.json I hope)
  /**
   * This is a dirty, sequenceLabel is today a LabelType VTL|MD,
   * it will be replaced by VTL only so we will be able to just sequenceLabel.toString()
   */
  return useDocumentTitle(
    `${renderToString(sequenceLabel)} | Filière d'Enquête`
  )
}
