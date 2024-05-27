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

      <h3>Copyright</h3>
      <p>
        Toute reproduction pour un usage autre que strictement privé des marques
        et logos affichés sur le présent site est rigoureusement interdite.
      </p>

      <h3>Informations éditeurs</h3>
      <p>
        Institut National de la Statistique et des Études Économiques CS 70058
      </p>

      <p>88 avenue Verdier</p>
      <p> 92541 MONTROUGE CEDEX FRANCE</p>
      <p>Tél. : 01 87 69 50 00</p>
      <p>
        Conformément à la réglementation, la déclaration nécessaire a été
        effectuée auprès de la Commission nationale de l'informatique et des
        libertés.
      </p>

      <h3>Données nominatives</h3>
      <p>
        <a href="https://www.insee.fr/fr/information/3719162">
          Données à caractère personnel
        </a>
      </p>
    </Grid>
  )
}
