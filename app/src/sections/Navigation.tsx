import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navLinks.map(link => link.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(9, 9, 23, 0.95)' : 'rgba(9, 9, 23, 0.7)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid rgba(212, 213, 214, 0.1)',
      }}
    >
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold text-offwhite cursor-hover"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Abanob
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="px-3 py-2 text-base transition-colors duration-200 cursor-hover"
              style={{
                color: activeSection === href.slice(1) ? '#854CE6' : '#F2F3F4',
                borderBottom: activeSection === href.slice(1) ? '2px solid #854CE6' : '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                if (activeSection !== href.slice(1)) {
                  e.currentTarget.style.color = '#854CE6'
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== href.slice(1)) {
                  e.currentTarget.style.color = '#F2F3F4'
                }
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-pill text-sm font-normal transition-all duration-200 cursor-hover"
            style={{
              background: '#F2F3F4',
              color: '#090917',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#854CE6'
              e.currentTarget.style.color = '#F2F3F4'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(133, 76, 230, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#F2F3F4'
              e.currentTarget.style.color = '#090917'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Let&apos;s Talk
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-offwhite cursor-hover"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden py-4 px-6"
          style={{
            background: 'rgba(9, 9, 23, 0.98)',
            borderTop: '1px solid rgba(212, 213, 214, 0.1)',
          }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="py-3 text-base transition-colors duration-200"
                style={{
                  color: activeSection === href.slice(1) ? '#854CE6' : '#F2F3F4',
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-2 inline-flex items-center justify-center h-12 px-6 rounded-pill text-base font-normal"
              style={{
                background: '#854CE6',
                color: '#F2F3F4',
              }}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
