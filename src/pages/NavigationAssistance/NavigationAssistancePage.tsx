import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb'
import { Grid } from 'components/Grid'

export function NavigationAssistancePage() {
  return (
    <Grid>
      <Breadcrumb
        currentPageLabel="Aide à la navigation"
        homeLinkProps={{
          to: '/',
        }}
        segments={[]}
      />
      <h2>Aide à la navigation</h2>
      <p>
        Les boutons « Précédent » et « Continuer » vous permettent de naviguer
        dans le questionnaire.
      </p>
      <p>
        Vos réponses sont enregistrées à chaque fois que vous changez de page
        mais ne sont pas transmises. Tant que vous ne l'avez pas transmis, vous
        pouvez revenir sur le questionnaire à tout moment, pour le compléter ou
        le finaliser.
      </p>
      <p>
        Le bouton « Envoyer mes réponses », accessible à la fin du
        questionnaire, vous permet de transmettre votre questionnaire renseigné
        à nos services et de télécharger votre accusé de réception.
      </p>
    </Grid>
  )
}
