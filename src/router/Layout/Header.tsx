import { useOidc } from 'oidc'
import { Header as DsfrHeader } from '@codegouvfr/react-dsfr/Header'
import logoInsee from 'assets/logo-insee.png'
import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display'
import { Badge } from '@codegouvfr/react-dsfr/Badge'
import { useLogoutUrl } from 'hooks/useLogoutUrl'
import { executePreLogoutActions } from 'utils/prelogout'

export function Header() {
  const { isUserLoggedIn, logout } = useOidc()

  const logoutUrl = useLogoutUrl()
  return (
    <DsfrHeader
      brandTop={
        <>
          République
          <br />
          Française
        </>
      }
      homeLinkProps={{
        to: '/',
        title:
          "Accueil - Nom de l’entité (ministère, secrétariat d'état, gouvernement)",
      }}
      quickAccessItems={[
        headerFooterDisplayItem,
        {
          iconId: 'fr-icon-mail-fill',
          linkProps: {
            href: 'mailto:mail@assistance.fr',
          },
          text: "Contacter l'assistance",
        },
        ...(!isUserLoggedIn
          ? []
          : [
              {
                iconId: 'ri-account-box-line',
                buttonProps: {
                  onClick: async () => {
                    await executePreLogoutActions()
                    logout({
                      redirectTo: 'specific url',
                      url: logoutUrl,
                    })
                  },
                },
                text: 'Se déconnecter',
              } as const,
            ]),
      ]}
      serviceTagline="Application de collecte internet"
      serviceTitle={
        <>
          Filière d'enquête{' '}
          <Badge as="span" noIcon severity="success">
            Beta
          </Badge>
        </>
      }
      operatorLogo={{
        alt: 'Insee, mesurer pour comprendre',
        imgUrl: logoInsee,
        orientation: 'vertical',
      }}
    />
  )
}
