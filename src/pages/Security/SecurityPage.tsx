import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb'
import { Grid } from 'components/Grid'

export function SecurityPage() {
  return (
    <Grid>
      <Breadcrumb
        currentPageLabel="Sécurité"
        homeLinkProps={{
          to: '/',
        }}
        segments={[]}
      />
      <h2>Sécurité</h2>
    </Grid>
  )
}
