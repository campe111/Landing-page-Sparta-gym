const services = [
  {
    title: 'Musculación',
    description:
      'Sala equipada con máquinas de última generación, seguimiento personalizado y rutinas basadas en progresión real.',
    icon: '🏋️',
  },
  {
    title: 'Kickboxing y boxeo',
    description:
      'Técnicas de combate que combinan fuerza, resistencia y estrategia para desarrollar habilidades defensivas y mejorar tu condición física.',
    instagram: 'https://www.instagram.com/sparta_kickboxing/',
    whatsapp: 'https://wa.me/5492284684340',
    icon: '🥊',
  },
  {
    title: 'Muay thai',
    description:
      'Arte marcial tailandés completo que trabaja todo el cuerpo, mejorando agilidad, coordinación y fuerza mental.',
    instagram: 'https://www.instagram.com/rasolavarria/',
    whatsapp: 'https://wa.me/2284599844',
    icon: '👊',
  },
  {
    title: 'Funcional',
    description:
      'Circuitos de alta energía combinando fuerza, coordinación y movilidad para resultados medibles desde la primera semana.',
    icon: '🔥',
  },
  {
    title: 'Taekwondo',
    description:
      'Arte marcial coreano que desarrolla flexibilidad, equilibrio y disciplina a través de técnicas de patadas y movimientos precisos.',
    icon: '🦵',
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
              {(service.instagram || service.whatsapp) && (
                <div className="card__links">
                  {service.instagram && (
                    <a
                      href={service.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="card__link card__link--instagram"
                      aria-label={`Instagram ${service.title}`}
                    >
                      Instagram
                    </a>
                  )}
                  {service.whatsapp && (
                    <a
                      href={service.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="card__link card__link--whatsapp"
                      aria-label={`WhatsApp ${service.title}`}
                    >
                      WhatsApp
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

