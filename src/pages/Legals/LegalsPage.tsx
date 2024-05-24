import { Breadcrumb } from '@codegouvfr/react-dsfr/Breadcrumb'
import { Grid } from 'components/Grid'

export function LegalPage() {
  return (
    <Grid>
      <Breadcrumb
        currentPageLabel="Mentions Légales"
        homeLinkProps={{}}
        segments={[]}
      />
      <h2>Mentions légales</h2>
    </Grid>
  )
}
