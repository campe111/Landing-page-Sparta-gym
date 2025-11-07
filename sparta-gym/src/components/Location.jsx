import PropTypes from 'prop-types'

function Location({ whatsappLink }) {
  return (
    <section className="section" id="ubicacion" aria-labelledby="location-heading">
      <div className="container location">
        <div className="location__info">
          <span className="section__eyebrow">Ubicación & contacto</span>
          <h2 id="location-heading">Estamos en el corazón del barrio Jardín</h2>
          <p>
            Encontranos en el barrio Jardín, te dejamos las coordenadas.
          </p>
          <ul className="location__details">
            <li>
              <span>Dirección</span>
              <strong>Barrio Jardín · Olavarría</strong>
            </li>
            <li>
              <span>Horarios</span>
              <strong>Lun a Vie 9:00 - 22:00 · Sáb 9:00 - 13:00</strong>
            </li>
            <li>
              <span>Instagram</span>
              <a href="https://www.instagram.com/spartagymolavarria" target="_blank" rel="noreferrer">
                @SpartaGymOlavarria
              </a>
            </li>
          </ul>
          <div className="location__cta">
            <a className="btn btn--primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Reservá por WhatsApp
            </a>
            <a className="btn btn--ghost" href="tel:+542284676233">
              Llamanos ahora
            </a>
          </div>
        </div>
        <div className="location__map" aria-label="Mapa de Sparta Gym Olavarría">
          <iframe
            title="Sparta Gym Olavarría"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d324.29157346925953!2d-60.29995939999999!3d-36.889047299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959447004244e925%3A0x3f48edd3e9a448d3!2sSPARTA%20GYM!5e0!3m2!1ses-419!2sar!4v1731010800000!5m2!1ses-419!2sar"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

Location.propTypes = {
  whatsappLink: PropTypes.string.isRequired,
}

export default Location

