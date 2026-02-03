import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home", hash: "#home" },
  { href: "/", label: "Holistic Therapy", hash: "#holistic-therapy" },
  { href: "/", label: "Platforms", hash: "#platforms" },
  { href: "/", label: "Compare", hash: "#comparison" },
  { href: "/", label: "FAQ", hash: "#faq" },
  { href: "/", label: "Contact", hash: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Load dark mode preference
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light"
    setIsDarkMode(theme === "dark")
    document.documentElement.setAttribute("data-theme", theme)
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark"
    setIsDarkMode(!isDarkMode)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  // Handle smooth scroll for hash links
  const handleNavClick = (e, hash) => {
    if (hash && location.pathname === "/") {
      e.preventDefault()
      const element = document.querySelector(hash)
      if (element) {
        const headerHeight = 70
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
      setIsMenuOpen(false)
    } else {
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300",
        isScrolled && "shadow-md"
      )}
    >
      <nav className="container mx-auto px-5 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-primary-indigo hover:text-primary-dark transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Therapy Platform Compare
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="text-foreground font-medium py-2 relative group transition-colors hover:text-primary-indigo"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-indigo transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-11 h-11 rounded-full border-2 border-border flex items-center justify-center hover:border-primary-indigo hover:scale-110 transition-all duration-300 relative overflow-hidden"
            aria-label="Toggle dark mode"
          >
            <Sun
              className={cn(
                "w-5 h-5 absolute transition-all duration-300",
                isDarkMode
                  ? "rotate-180 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              )}
            />
            <Moon
              className={cn(
                "w-5 h-5 absolute transition-all duration-300",
                isDarkMode
                  ? "rotate-0 scale-100 opacity-100"
                  : "rotate-180 scale-0 opacity-0"
              )}
            />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 p-2"
            aria-label="Toggle navigation menu"
          >
            <span
              className={cn(
                "w-6 h-0.5 bg-foreground transition-all duration-300",
                isMenuOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-foreground transition-all duration-300",
                isMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-foreground transition-all duration-300",
                isMenuOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed top-[70px] left-0 right-0 bg-background border-t border-border shadow-lg transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-5 py-8">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.hash)}
                  className="text-lg text-foreground font-medium py-2 block hover:text-primary-indigo transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
