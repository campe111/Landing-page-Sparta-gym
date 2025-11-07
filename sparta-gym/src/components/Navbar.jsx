import PropTypes from 'prop-types'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#entrenadores', label: 'Entrenadores' },
  { href: '#comunidad', label: 'Comunidad' },
  { href: '#galeria', label: 'Galería' },
  { href: '#ubicacion', label: 'Ubicación' },
]

function Navbar({ whatsappLink }) {
  return (
    <header className="navbar" id="inicio">
      <div className="container">
        <div className="navbar__content">
          <a href="#inicio" className="navbar__logo" aria-label="Sparta Gym Olavarría">
            <img src="/fondo-gym.jpg" alt="Logo Sparta Gym Olavarría" className="navbar__logo-image" />
            <span className="navbar__logo-text">Sparta Gym Olavarría</span>
          </a>
          <nav className="navbar__links" aria-label="Secciones principales">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="navbar__link">
                {link.label}
              </a>
            ))}
          </nav>
          <a className="btn btn--primary" href={whatsappLink} target="_blank" rel="noreferrer">
            Reservá tu clase
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

