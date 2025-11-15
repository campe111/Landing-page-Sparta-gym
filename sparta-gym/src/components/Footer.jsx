import PropTypes from 'prop-types'

function Footer({ whatsappLink }) {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__brand">
          <a href="#inicio" className="footer__logo" aria-label="Volver al inicio">
            Sparta Gym Olavarría
          </a>
          <p>Entrenamientos diseñados para transformar tu cuerpo y tu mentalidad.</p>
        </div>
        <div className="footer__links">
          <div>
            <h4>Contacto</h4>
            <a href="tel:+5492284586577">+54 9 2284 58-6577</a>
            <a href="mailto:hola@spartagym.com">hola@spartagym.com</a>
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp directo
            </a>
          </div>
          <div>
            <h4>Seguinos</h4>
            <a href="https://www.instagram.com/spartagymolavarria" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
        <div className="footer__legal">
          <p>© {new Date().getFullYear()} Sparta Gym Olavarría. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  whatsappLink: PropTypes.string.isRequired,
}

export default Footer

