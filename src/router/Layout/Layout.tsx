import { Header } from './Header'
import { Footer } from './Footer'
import type { PropsWithChildren } from 'react'
import { LogoutPathProvider } from 'shared/hooks/useLogoutUrl'

export function Layout(props: PropsWithChildren) {
  const { children } = props
  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <LogoutPathProvider>
        <Header />
        <main id="contenu" role="main">
          {children}
        </main>
        <Footer />
      </LogoutPathProvider>
    </div>
  )
}
