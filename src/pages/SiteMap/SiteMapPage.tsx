import { Breadcrumb } from '@codegouvfr/react-dsfr/Breadcrumb'
import { Grid } from 'components/Grid'

import { Link } from '@tanstack/react-router'

export function SiteMapPage() {
  return (
    <Grid>
      <Breadcrumb
        currentPageLabel="Plan du site"
        homeLinkProps={{}}
        segments={[]}
      />
      <h2>Plan du site</h2>
      <ul>
        <li>
          <Link to="/mentions-legales">Mentions légales</Link>
        </li>
        <li>
          <Link to="/accessibilite">Accessibilité</Link>
        </li>
        <li>
          <Link to="/securite">Sécurité</Link>
        </li>
      </ul>
    </Grid>
  )
}
