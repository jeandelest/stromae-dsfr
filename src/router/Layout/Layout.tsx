import type { PropsWithChildren } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout(props: PropsWithChildren) {
  const { children } = props
  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <main id="contenu" role="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
