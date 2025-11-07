import PropTypes from 'prop-types'

function Location({ whatsappLink }) {
  return (
    <section className="section" id="ubicacion" aria-labelledby="location-heading">
      <div className="container location">
        <div className="location__info">
          <span className="section__eyebrow">Ubicación & contacto</span>
          <h2 id="location-heading">Estamos en el corazón de Olavarría</h2>
          <p>
            Encontranos en Av. Colón 1250, a metros del Parque Mitre. Contamos con estacionamiento propio, lockers y
            duchas. Escribinos y coordinamos tu primera clase sin cargo.
          </p>
          <ul className="location__details">
            <li>
              <span>Dirección</span>
              <strong>Av. Colón 1250 · Olavarría</strong>
            </li>
            <li>
              <span>Horarios</span>
              <strong>Lun a Vie 6:00 - 23:00 · Sáb 8:00 - 18:00</strong>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13017.54053738695!2d-60.332374!3d-36.8922006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bfc943dd985671%3A0x3ccb316f52c5ab07!2sOlavarr%C3%ADa%2C%20Buenos%20Aires%20Province!5e0!3m2!1sen!2sar!4v1730964371117!5m2!1sen!2sar"
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

