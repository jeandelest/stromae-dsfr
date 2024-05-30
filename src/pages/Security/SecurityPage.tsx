import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb'
import { Grid } from 'shared/components/Grid'

export function SecurityPage() {
  return (
    <Grid>
      <Breadcrumb
        currentPageLabel="Sécurité"
        homeLinkProps={{}}
        segments={[]}
      />
      <h2>Sécurité</h2>
    </Grid>
  )
}
