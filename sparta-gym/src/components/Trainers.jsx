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
  return (
    <section className="section section--alt" id="entrenadores" aria-labelledby="trainers-heading">
      <div className="container">
        <span className="section__eyebrow">Team Sparta</span>
        <h2 id="trainers-heading">Entrenadores que te llevan al siguiente nivel</h2>
        <div className="grid trainers__grid">
          {trainers.map((trainer) => (
            <article key={trainer.name} className="card card--trainer">
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
      </div>
    </section>
  )
}

export default Trainers

