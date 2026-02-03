import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout({ children }) {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[70px]">
        {children}
      </main>
      <Footer />
    </div>
  )
}
