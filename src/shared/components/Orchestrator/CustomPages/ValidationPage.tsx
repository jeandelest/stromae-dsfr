import { declareComponentKeys, useTranslation } from '@/i18n'
import { useDocumentTitle } from '@/shared/hooks/useDocumentTitle'
import { fr } from '@codegouvfr/react-dsfr'

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { i18n } = declareComponentKeys<
  'title' | 'paragraph' | 'document title'
>()({
  ValidationPage,
})

export type I18n = typeof i18n
