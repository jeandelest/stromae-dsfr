import { fr } from '@codegouvfr/react-dsfr';
import Button from '@codegouvfr/react-dsfr/Button';
import TechnicalError from '@codegouvfr/react-dsfr/dsfr/artwork/pictograms/system/technical-error.svg';
import { Container } from 'components/Container';


const getErrorInformations = (code: 301 | 404 | undefined) => {
  switch (code) {
    case 404:
    default:
      return { title: "Page non trouvée", subtitle: "La page que vous cherchez est introuvable. Excusez-nous pour la gêne occasionnée.", paragraph: "Si vous avez tapé l’adresse web dans le navigateur, vérifiez qu’elle est correcte. La page n’est peut-être plus disponible. Dans ce cas, pour continuer votre visite vous pouvez retourner sur la page d’accueil. Sinon contactez-nous pour que l’on puisse vous aider." }
  }
}

export function ErrorPage(props: { code: 301 | 404 | undefined }) {

  const { code } = props

  const { title, subtitle, paragraph } = getErrorInformations(code);

  return (
    <Container>
      <div className={fr.cx(
        'fr-grid-row',
        'fr-grid-row--center',
        'fr-grid-row--middle',
      )}>
        <div className={fr.cx('fr-col-lg-6', 'fr-col-12')}>
          <h1>{title}</h1>
          <span>Erreur {code}</span>
          <p className={fr.cx('fr-mt-3w', 'fr-text--lead')}>{subtitle}</p>
          <p className={fr.cx('fr-mt-3w')}>{paragraph}</p>
          <Button
            size="large"
            linkProps={{
              to: '/',
            }}
          >
            Retourner à la page d'accueil
          </Button>

        </div>
        <div className={fr.cx(
          'fr-col-lg-3',
          'fr-col-offset-lg-1',
          'fr-col-8',
          'fr-mt-6w',
          'fr-col--middle'
        )}>
          <svg
            className={fr.cx('fr-artwork')}
            aria-hidden="true"
            viewBox="0 0 80 80"
            width="200"
            height="200"
          >
            <use
              className={fr.cx('fr-artwork-decorative')}
              xlinkHref={`${TechnicalError}#artwork-decorative`}
            ></use>
            <use
              className={fr.cx('fr-artwork-minor')}
              xlinkHref={`${TechnicalError}#artwork-minor`}
            ></use>
            <use
              className={fr.cx('fr-artwork-major')}
              xlinkHref={`${TechnicalError}#artwork-major`}
            ></use>
          </svg>
        </div>
      </div>
    </Container>
  )
}