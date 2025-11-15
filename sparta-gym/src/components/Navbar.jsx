import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#entrenadores', label: 'Entrenadores' },
  { href: '#comunidad', label: 'Comunidad' },
  { href: '#galeria', label: 'Galería' },
  { href: '#ubicacion', label: 'Ubicación' },
]

function Navbar({ whatsappLink }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Calcular progreso de scroll
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = (window.scrollY / windowHeight) * 100
      document.documentElement.style.setProperty('--scroll-progress', `${scrollProgress}%`)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Inicializar al cargar
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Cerrar menú al cambiar de sección
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleInicioClick = (e) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (href) => {
    if (href === '#inicio') {
      handleInicioClick({ preventDefault: () => {} })
    } else {
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="inicio">
      <div className="container">
        <div className="navbar__content">
          <a href="#inicio" className="navbar__logo" aria-label="Sparta Gym Olavarría" onClick={handleInicioClick}>
            <span className="navbar__logo-text">Sparta Gym Olavarría</span>
          </a>
          
          <button 
            className="navbar__toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`navbar__links ${mobileMenuOpen ? 'navbar__links--open' : ''}`} aria-label="Secciones principales">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="navbar__link"
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </a>
            ))}
            <a 
              className="btn btn--primary navbar__cta-mobile" 
              href={whatsappLink} 
              target="_blank" 
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Empeza Hoy
            </a>
          </nav>
          
          <a className="btn btn--primary navbar__cta-desktop" href={whatsappLink} target="_blank" rel="noreferrer">
            Empeza Hoy
          </a>
        </div>
      </div>
    </header>
  )
}

Navbar.propTypes = {
  whatsappLink: PropTypes.string.isRequired,
}

export default Navbar

