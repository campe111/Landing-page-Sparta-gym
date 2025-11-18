import { useState } from 'react'
import PropTypes from 'prop-types'

const objectives = ['Bajar de peso', 'Ganar masa muscular', 'Mejorar resistencia', 'Recuperación / Salud']

function ContactForm({ whatsappNumber }) {
  const [formData, setFormData] = useState({ name: '', email: '', goal: objectives[0], message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!formData.name.trim()) {
      setStatus('Por favor ingresá tu nombre para poder contactarte.')
      return
    }

    const message = encodeURIComponent(
      `Hola Sparta Gym Olavarría 👋 Soy ${formData.name}.
Email: ${formData.email || 'sin email'}.
Objetivo: ${formData.goal}.
Mensaje: ${formData.message || 'Me interesa comenzar a entrenar.'}`,
    )

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
    setStatus('Estamos abriendo WhatsApp para continuar la conversación 💪')
    setFormData({ name: '', email: '', goal: objectives[0], message: '' })
  }

  return (
    <section className="section section--contact" id="contacto" aria-labelledby="contact-heading">
      <div className="container contact">
        <div className="contact__intro">
          <span className="section__eyebrow">Contacto</span>
          <h2 id="contact-heading">Escribinos y empeza hoy mismo</h2>
          <p>
            Completá el formulario y te respondemos en minutos. También podés escribirnos directo al whatsapp: {' '}
            <a href="tel:+5492284586577" style={{ color: '#ff5252', textDecoration: 'underline' }}>
              +54 9 2284 58-6577
            </a>.
          </p>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="input">
            <span>Nombre</span>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="input">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="input">
            <span>Objetivo</span>
            <select name="goal" value={formData.goal} onChange={handleChange}>
              {objectives.map((objective) => (
                <option key={objective} value={objective}>
                  {objective}
                </option>
              ))}
            </select>
          </label>
          <label className="input input--textarea">
            <span>Mensaje</span>
            <textarea
              name="message"
              rows="4"
              placeholder="Contanos en qué querés mejorar"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn btn--primary">
            Enviar por WhatsApp
          </button>
          {status && <p className="contact__status">{status}</p>}
        </form>
      </div>
    </section>
  )
}

ContactForm.propTypes = {
  whatsappNumber: PropTypes.string.isRequired,
}

export default ContactForm

