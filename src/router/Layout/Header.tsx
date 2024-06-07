import { Badge } from '@codegouvfr/react-dsfr/Badge'
import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display'
import { Header as DsfrHeader } from '@codegouvfr/react-dsfr/Header'
import { useMatchRoute, useSearch } from '@tanstack/react-router'
import logoInsee from 'assets/logo-insee.png'
import { useOidc } from 'oidc'
import { collectPath } from 'pages/Collect/route'
import { executePreLogoutActions } from 'shared/hooks/prelogout'

export function Header() {
  const { isUserLoggedIn, logout } = useOidc()

  /**
   * There is an issue with this part of code, search is not will type inferred with isCollectRoute, waiting for better solution
   */
  const matchRoute = useMatchRoute()
  const isCollectRoute = !!matchRoute({ to: collectPath })
  const search = useSearch({ strict: false })

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
            href: collectPath
              ? `${import.meta.env.VITE_PORTAIL_URL}${(search as any)['pathAssistance'] ?? ''}`
              : '',
            disabled: isCollectRoute,
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
                      url: `${import.meta.env.VITE_PORTAIL_URL}${(search as any)['pathLogout'] ?? ''}`,
                    })
                  },
                  disabled: !isCollectRoute,
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
