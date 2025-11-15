import PropTypes from 'prop-types'

function Hero({ whatsappLink }) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__content">
        <div className="hero__text">
          <p className="hero__eyebrow">Sparta Gym Olavarría</p>
          <h1 id="hero-heading">Transformá tu cuerpo. Entrená en Sparta.</h1>
          <p>
            Musculación, artes marciales y entrenamiento funcional con instructores certificados. Sumate a la comunidad
            que no conoce límites y conquistá tus objetivos.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Empeza Hoy
            </a>
            <a className="btn btn--ghost" href="#servicios">
              Ver servicios
            </a>
          </div>
          <ul className="hero__stats" aria-label="Datos destacados de Sparta Gym">
            <li>
              <strong>+450</strong>
              <span>Miembros activos</span>
            </li>
            <li>
              <strong>12</strong>
              <span>Clases diarias</span>
            </li>
            <li>
              <strong>24/7</strong>
              <span>Acceso musculación</span>
            </li>
          </ul>
        </div>
        <div className="hero__card" role="presentation">
          <div className="hero__card-inner">
            <p className="hero__card-title">Plan de 6 semanas</p>
            <ul>
              <li>Evaluación inicial 1:1</li>
              <li>Rutinas personalizadas</li>
              <li>Seguimiento semanal</li>
            </ul>
            <a className="btn btn--secondary" href={whatsappLink} target="_blank" rel="noreferrer">
              Quiero info
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  whatsappLink: PropTypes.string.isRequired,
}

export default Hero

