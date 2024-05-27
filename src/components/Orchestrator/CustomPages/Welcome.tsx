import { fr } from '@codegouvfr/react-dsfr'
import { WelcomeModal } from './WelcomeModal'
import type { useStromaeNavigation } from '../useStromaeNavigation'
import { useEffect } from 'react'
import type { PageType } from 'model/Page'

export function Welcome(props: {
  initialCurrentPage: PageType | undefined
  goToPage: ReturnType<typeof useStromaeNavigation>['goToPage']
}) {
  const { initialCurrentPage, goToPage } = props

  useEffect(() => {
    // Reset the scroll on component unmount
    return () => {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      <div className={fr.cx('fr-my-4w')}>
        <h1>Bienvenue sur le questionnaire de votre enquête</h1>
        <p className={fr.cx('fr-text--lead')}>
          Cette enquête permet de connaître plus d'informations sur le domaine
          concerné
        </p>
        <h2>Qui doit répondre à ce questionnaire ?</h2>
        <ul>
          <li>Alice Doe</li>
          <li>Bernard Doe</li>
          <li>Charlotte Doe</li>
        </ul>
      </div>
      {initialCurrentPage && (
        <WelcomeModal goBack={() => goToPage({ page: initialCurrentPage })} />
      )}
    </>
  )
}
