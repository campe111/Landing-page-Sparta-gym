import { useState, useEffect, useRef } from 'react'

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
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  // Crear array infinito duplicando los entrenadores para efecto loop
  const infiniteTrainers = [...trainers, ...trainers, ...trainers]

  const next = () => {
    setCurrentIndex((prev) => {
      if (prev >= trainers.length * 2 - 1) {
        // Si llegamos al final del array duplicado, saltamos al inicio del segundo grupo
        return trainers.length
      }
      return prev + 1
    })
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000)
  }

  const prev = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        // Si estamos al inicio, saltamos al final del segundo grupo
        return trainers.length * 2 - 1
      }
      return prev - 1
    })
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000)
  }

  const goToIndex = (index) => {
    // Ajustar al segundo grupo de entrenadores para efecto infinito
    setCurrentIndex(index + trainers.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000)
  }

  // Auto-play infinito - inicializar en el segundo grupo
  useEffect(() => {
    setCurrentIndex(trainers.length)
  }, []) // Solo al montar el componente

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = prev + 1
          // Si llegamos al final del segundo grupo, saltamos al inicio del segundo grupo
          if (next >= trainers.length * 2) {
            return trainers.length
          }
          return next
        })
      }, 3000) // Cambia cada 3 segundos
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, trainers.length])

  return (
    <section className="section section--alt" id="entrenadores" aria-labelledby="trainers-heading">
      <div className="container">
        <span className="section__eyebrow">Team Sparta</span>
        <h2 id="trainers-heading">Entrenadores que te llevan al siguiente nivel</h2>
        <div className="trainers__carousel">
          <div className="trainers__slider">
            <button 
              type="button" 
              className="trainers__control" 
              onClick={prev} 
              aria-label="Entrenador anterior"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              ‹
            </button>
            <div 
              className="trainers__viewport"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div 
                className="trainers__track"
                style={{ transform: `translateX(-${currentIndex * (100 / 9)}%)` }}
              >
                {infiniteTrainers.map((trainer, index) => {
                  const realIndex = index % trainers.length
                  return (
                    <article
                      key={`${trainer.name}-${index}`}
                      className="card card--trainer trainers__item"
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
                  )
                })}
              </div>
            </div>
            <button 
              type="button" 
              className="trainers__control" 
              onClick={next} 
              aria-label="Entrenador siguiente"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              ›
            </button>
          </div>
          <div className="trainers__dots">
            {trainers.map((trainer, index) => {
              // Calcular el índice real del segundo grupo
              const realIndex = currentIndex % trainers.length
              return (
                <button
                  key={trainer.name}
                  type="button"
                  className={`trainers__dot ${index === realIndex ? 'is-active' : ''}`}
                  onClick={() => goToIndex(index)}
                  aria-label={`Ver entrenador ${index + 1}`}
                  aria-selected={index === realIndex}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trainers

