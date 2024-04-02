import { fr } from '@codegouvfr/react-dsfr'
import Accordion from '@codegouvfr/react-dsfr/Accordion'
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
      <div className={fr.cx('fr-mb-1w')}>
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

        <h3>En savoir plus sur l'enquête</h3>
        <div className={fr.cx('fr-accordions-group')}>
          <Accordion label="Connaître le cadre légal de l'enquête">
            Vu l'avis favorable du Conseil national de l'information
            statistique, cette enquête, reconnue d’intérêt général et de qualité
            statistique, est obligatoire, en application de la loi n° 51-711 du
            7 juin 1951 sur l'obligation, la coordination et le secret en
            matière de statistiques. Visa n°2021A054EC du Ministre de
            l'Économie, des Finances et de la Relance, valable pour l'année 2021
            - Arrêté en date du 23/11/2020. Les réponses à ce questionnaire sont
            protégées par le secret statistique et destinées à L’Institut
            national de la statistique et des études économiques (Insee). Le
            règlement général 2016/679 du 27 avril 2016 sur la protection des
            données (RGPD) ainsi que la loi n° 78-17 du 6 janvier 1978 relative
            à l'informatique, aux fichiers et aux libertés, s'appliquent à la
            présente enquête. Ils garantissent aux personnes concernées un droit
            d'accès, de limitation ou de rectification pour les données les
            concernant. Ce droit peut être exercé auprès de l'Insee.
          </Accordion>
        </div>
      </div>
      {initialCurrentPage && (
        <WelcomeModal goBack={() => goToPage({ page: initialCurrentPage })} />
      )}
    </>
  )
}
