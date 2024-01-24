import { fr } from '@codegouvfr/react-dsfr'
import { Footer as DSFRFooter } from '@codegouvfr/react-dsfr/Footer'
import logoInsee from 'assets/logo-insee.png'

export function Footer() {
  return (
    <DSFRFooter
      accessibility="partially compliant"
      contentDescription={`
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. 
                    `}
      license={
        <>
          Ce site utilise les applications Insee 'Stromae' et 'Lunatic', qui
          sont sous{' '}
          <a
            title="licence MIT - nouvelle fenêtre"
            href="https://github.com/InseeFr/Stromae/blob/v3-master/LICENSE"
            target="_blank"
          >
            licence MIT
          </a>, en s’appuyant sur le système de design de l'Etat disponible sous{' '}
          <a
            href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
            title="licence etalab-2.0 - nouvelle fenêtre"
            target="_blank"
          >
            licence etalab-2.0
          </a>.
        </>
      }
      websiteMapLinkProps={{
        to: 'plan-du-site',
      }}
      accessibilityLinkProps={{
        to: '/accessibilite',
      }}
      termsLinkProps={{
        to: '/mentions-legales',
      }}
      operatorLogo={{
        alt: 'Insee, mesurer pour comprendre',
        imgUrl: logoInsee,
        orientation: 'vertical',
      }}
      bottomItems={[
        { text: 'Sécurité', linkProps: { to: '/securite' } },
        {
          text: 'Aide à la navigation ',
          linkProps: { to: '/aide-a-la-navigation' },
        },
        <span className={fr.cx("fr-footer__bottom-link")}>Stromae : {import.meta.env.VITE_APP_VERSION} | Lunatic : {import.meta.env.VITE_LUNATIC_VERSION.replace('^', '')}</span>
      ]}
    />
  )
}
