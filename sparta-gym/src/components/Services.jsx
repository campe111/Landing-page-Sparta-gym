const services = [
  {
    title: 'Funcional',
    description:
      'Circuitos de alta energía combinando fuerza, coordinación y movilidad para resultados medibles desde la primera semana.',
    icon: '🔥',
  },
  {
    title: 'Musculación',
    description:
      'Sala equipada con máquinas de última generación, seguimiento personalizado y rutinas basadas en progresión real.',
    icon: '🏋️',
  },
  {
    title: 'HIIT',
    description:
      'Intervalos de alta intensidad ideales para quemar grasa y mejorar tu capacidad cardiovascular en sesiones cortas.',
    icon: '⚡',
  },
]

function Services() {
  return (
    <section className="section" id="servicios" aria-labelledby="services-heading">
      <div className="container">
        <span className="section__eyebrow">Servicios</span>
        <h2 id="services-heading">Programas para cada objetivo</h2>
        <div className="grid services__grid">
          {services.map((service) => (
            <article key={service.title} className="card card--service">
              <span className="card__icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

