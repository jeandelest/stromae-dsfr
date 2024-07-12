import { fr } from '@codegouvfr/react-dsfr'
import { declareComponentKeys, useTranslation } from 'i18n'
import { useDocumentTitle } from 'shared/hooks/useDocumentTitle'

export function ValidationPage() {
  const { t } = useTranslation({ ValidationPage })

  useDocumentTitle(t('document title'))

  return (
    <div className={fr.cx('fr-my-4w')}>
      <h1>{t('title')}</h1>
      <p>{t('paragraph')}</p>
    </div>
  )
}

const { i18n } = declareComponentKeys<
  'title' | 'paragraph' | 'document title'
>()({
  ValidationPage,
})

export type I18n = typeof i18n
