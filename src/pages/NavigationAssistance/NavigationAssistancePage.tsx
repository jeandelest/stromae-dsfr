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
    </Grid>
  )
}
