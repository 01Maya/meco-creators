'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMobileOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Features', id: 'features' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary/10'
          : 'bg-gradient-to-b from-background/80 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('hero')} 
          className="flex items-center gap-2 cursor-pointer group z-50"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300">
            M
          </div>
          <span className="text-lg font-bold text-foreground hidden sm:inline group-hover:text-primary transition-colors duration-300">Meco</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="px-4 py-2 text-foreground/70 hover:text-primary font-medium text-sm transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 ease-out"></span>
            </button>
          ))}
        </div>

        {/* Right side - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="px-4 py-2 text-foreground/70 hover:text-primary font-medium text-sm transition-colors duration-300">
            Login
          </button>
          <button className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground hover:text-primary transition-colors duration-300 p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-primary/10 animate-slide-down">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full text-left px-4 py-3 text-foreground/70 hover:text-primary hover:bg-primary/5 font-medium text-sm transition-all duration-300 rounded-lg"
              >
                {link.label}
              </button>
            ))}
            <div className="border-t border-primary/10 pt-3 mt-3 flex flex-col gap-2">
              <button className="w-full text-left px-4 py-3 text-foreground/70 hover:text-primary font-medium text-sm transition-colors duration-300">
                Login
              </button>
              <button className="w-full px-4 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary/40 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
