import { useState } from 'react'

const trainers = [
  {
    name: 'Valentina Ortiz',
    specialty: 'Entrenadora funcional',
    description: 'Crea planes personalizados para mejorar la movilidad y fuerza total del cuerpo.',
    photo:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Lucas Fernández',
    specialty: 'Coach de musculación',
    description: 'Especialista en hipertrofia y progresión de cargas con foco en técnica perfecta.',
    photo:
      'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Camila Duarte',
    specialty: 'Instructora HIIT y cardio',
    description: 'Sesiones dinámicas que aceleran el metabolismo y potencian tu resistencia.',
    photo:
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80',
  },
]

function Trainers() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % trainers.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + trainers.length) % trainers.length)

  return (
    <section className="section section--alt" id="entrenadores" aria-labelledby="trainers-heading">
      <div className="container">
        <span className="section__eyebrow">Team Sparta</span>
        <h2 id="trainers-heading">Entrenadores que te llevan al siguiente nivel</h2>
        <div className="trainers__carousel">
          <div className="trainers__slider">
            <button type="button" className="trainers__control" onClick={prev} aria-label="Entrenador anterior">
              ‹
            </button>
            <div className="trainers__viewport">
              {trainers.map((trainer, index) => (
                <article
                  key={trainer.name}
                  className={`card card--trainer trainers__item ${index === currentIndex ? 'is-active' : ''}`}
                  aria-hidden={index !== currentIndex}
                >
                  <div className="card__media">
                    <img src={trainer.photo} alt={trainer.name} loading="lazy" />
                  </div>
                  <div className="card__body">
                    <h3>{trainer.name}</h3>
                    <p className="card__subtitle">{trainer.specialty}</p>
                    <p>{trainer.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <button type="button" className="trainers__control" onClick={next} aria-label="Entrenador siguiente">
              ›
            </button>
          </div>
          <div className="trainers__dots">
            {trainers.map((trainer, index) => (
              <button
                key={trainer.name}
                type="button"
                className={`trainers__dot ${index === currentIndex ? 'is-active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ver entrenador ${index + 1}`}
                aria-selected={index === currentIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trainers

