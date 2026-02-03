import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  quickLinks: [
    { href: "/", label: "Home", hash: "#home" },
    { href: "/", label: "Holistic Therapy", hash: "#holistic-therapy" },
    { href: "/", label: "Platforms", hash: "#platforms" },
    { href: "/", label: "Compare", hash: "#comparison" },
    { href: "/", label: "FAQ", hash: "#faq" },
  ],
  legal: [
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#contact", label: "Contact Us" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  const handleLinkClick = (e, hash) => {
    if (hash) {
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
    }
  }

  return (
    <footer className="bg-secondary-slate text-white mt-auto">
      <div className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Therapy Platform Compare</h4>
            <p className="text-gray-300 leading-relaxed">
              Helping you find the perfect online therapy platform for your mental health journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link.hash)}
                    className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-300 hover:text-white transition-colors hover:pl-2 duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            )
          })}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          <p className="mb-2">&copy; 2026 Therapy Platform Compare. All rights reserved.</p>
          <p className="mb-2 text-xs opacity-80">Last Updated: February 2026</p>
          <p className="text-xs italic">
            This site provides information only. Consult healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
