import { Outlet } from 'react-router-dom'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Header from '../components/layout/Header.tsx'
import Footer from '../components/layout/Footer.tsx'

export default function DefaultLayout() {
  useScrollToTop()
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto  ">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
