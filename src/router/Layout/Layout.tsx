import { Outlet } from '@tanstack/react-router'
import { Header } from './Header'
import { Footer } from './Footer'
import { Container } from 'components/Container'

export function Layout() {
  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}
