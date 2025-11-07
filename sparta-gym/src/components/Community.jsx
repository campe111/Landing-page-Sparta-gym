const testimonials = [
  {
    quote:
      'Sparta me dio la confianza que necesitaba para competir otra vez. Los entrenadores te acompañan en cada paso.',
    name: 'Martín · Musculación',
  },
  {
    quote: 'En 8 semanas bajé 6 kg y mejoré mi resistencia. El ambiente es motivador y súper profesional.',
    name: 'Agus · HIIT',
  },
  {
    quote: 'Las clases funcionales son intensas pero divertidas. La comunidad te empuja a dar siempre más.',
    name: 'Lau · Funcional',
  },
]

const highlights = [
  { label: 'Eventos mensuales', value: 'Meet & Train' },
  { label: 'Grupo exclusivo', value: 'Comunidad WhatsApp' },
  { label: 'Retos Spartan', value: 'Ranking semanal' },
]

function Community() {
  return (
    <section className="section" id="comunidad" aria-labelledby="community-heading">
      <div className="container community__layout">
        <div className="community__intro">
          <span className="section__eyebrow">Comunidad</span>
          <h2 id="community-heading">Entrená rodeado de energía positiva</h2>
          <p>
            Creamos experiencias que fortalecen tu disciplina: desde desafíos mensuales hasta seguimiento cercano en
            grupos privados. Cada entrenamiento suma, y lo hacés acompañado.
          </p>
          <ul className="community__highlights">
            {highlights.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="community__testimonials">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="card card--testimonial">
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Community

