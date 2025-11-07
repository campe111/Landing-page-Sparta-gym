import './App.css'

function App() {
  const clases = [
    {
      titulo: 'Funcional',
      descripcion:
        'Entrenamientos dinámicos que combinan fuerza, resistencia y coordinación para mejorar el rendimiento diario.',
    },
    {
      titulo: 'HIIT',
      descripcion:
        'Sesiones cortas e intensas que aceleran el metabolismo y queman grasa en tiempo récord.',
    },
    {
      titulo: 'Boxeo Fitness',
      descripcion:
        'Golpes y combinaciones con técnica segura para liberar estrés mientras fortaleces todo tu cuerpo.',
    },
  ]

  const beneficios = [
    {
      titulo: 'Plan personalizado',
      texto:
        'Evaluamos tu estado físico y objetivos para diseñar una rutina y alimentación adaptadas a ti.',
    },
    {
      titulo: 'Tecnología de punta',
      texto:
        'Equipo profesional, seguimiento con apps y sala de musculación renovada recientemente.',
    },
    {
      titulo: 'Acompañamiento constante',
      texto:
        'Coach asignado, clases con cupos limitados y comunidad que impulsa tu disciplina diaria.',
    },
  ]

  const planes = [
    {
      nombre: 'Starter',
      precio: '$25',
      caracteristicas: ['3 visitas por semana', 'Evaluación inicial', 'Acceso a sala de musculación'],
    },
    {
      nombre: 'Pro',
      precio: '$39',
      caracteristicas: ['Acceso ilimitado', 'Clases grupales premium', 'Sesión mensual con nutricionista'],
      destacado: true,
    },
    {
      nombre: 'Elite',
      precio: '$55',
      caracteristicas: ['Plan Pro +', 'Entrenador personal semanal', 'Suplementación básica incluida'],
    },
  ]

  return (
    <div className="pagina">
      <header className="hero">
        <nav className="nav">
          <span className="logo">Sparta Gym</span>
          <div className="nav-links">
            <a href="#clases">Clases</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#planes">Planes</a>
            <a href="#contacto">Contacto</a>
          </div>
          <a className="btn sec" href="#planes">
            Reserva tu lugar
          </a>
        </nav>

        <div className="hero-contenido">
          <div className="hero-texto">
            <h1>Entrena como un guerrero, supera tus límites</h1>
            <p>
              Conviértete en tu mejor versión con nuestros programas diseñados por entrenadores
              certificados y la motivación de una comunidad que no se rinde.
            </p>
            <div className="hero-acciones">
              <a className="btn pri" href="#planes">
                Conoce los planes
              </a>
              <a className="btn sec" href="#clases">
                Explora las clases
              </a>
            </div>
            <ul className="meta">
              <li>500+ miembros activos</li>
              <li>Horarios extendidos 6:00 - 23:00</li>
              <li>Sede central en Av. Independencia 345</li>
            </ul>
          </div>
          <div className="hero-card">
            <p className="hero-card__titulo">Agenda tu prueba gratuita</p>
            <form className="hero-form">
              <label>
                Nombre
                <input type="text" name="nombre" placeholder="Escribe tu nombre" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="tu@email.com" />
              </label>
              <label>
                Objetivo principal
                <select name="objetivo">
                  <option value="fuerza">Ganar fuerza</option>
                  <option value="bajar-peso">Bajar de peso</option>
                  <option value="rendimiento">Mejorar rendimiento</option>
                  <option value="salud">Salud integral</option>
                </select>
              </label>
              <button type="submit" className="btn pri">
                Enviar
              </button>
              <small>Nos comunicaremos en menos de 24 horas.</small>
            </form>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="clases">
          <span className="section-subtitle">Clases destacadas</span>
          <h2>Programas diseñados para cada objetivo</h2>
          <div className="grid tarjetas">
            {clases.map((clase) => (
              <article className="tarjeta" key={clase.titulo}>
                <h3>{clase.titulo}</h3>
                <p>{clase.descripcion}</p>
                <a href="#contacto" className="link">
                  Cupos limitados
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section alt" id="beneficios">
          <span className="section-subtitle">Por qué elegirnos</span>
          <h2>Todo lo que necesitas para progresar sin excusas</h2>
          <div className="grid beneficios">
            {beneficios.map((beneficio) => (
              <article className="beneficio" key={beneficio.titulo}>
                <h3>{beneficio.titulo}</h3>
                <p>{beneficio.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="planes">
          <span className="section-subtitle">Planes flexibles</span>
          <h2>Elige el plan que mejor se adapta a ti</h2>
          <div className="grid planes">
            {planes.map((plan) => (
              <article className={`plan ${plan.destacado ? 'destacado' : ''}`} key={plan.nombre}>
                <h3>{plan.nombre}</h3>
                <p className="precio">{plan.precio}/mes</p>
                <ul>
                  {plan.caracteristicas.map((caracteristica) => (
                    <li key={caracteristica}>{caracteristica}</li>
                  ))}
                </ul>
                <a className="btn pri" href="#contacto">
                  Empieza hoy
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section alt testimonios" id="testimonios">
          <span className="section-subtitle">Historias reales</span>
          <h2>Resultados visibles en pocas semanas</h2>
          <div className="grid testimonios-grid">
            <figure>
              <blockquote>
                “En tres meses bajé 8 kilos y ahora tengo la energía para seguir el ritmo del trabajo y la familia.”
              </blockquote>
              <figcaption>Laura P. · Plan Pro</figcaption>
            </figure>
            <figure>
              <blockquote>
                “El equipo de coaches está atento a cada progreso. El ambiente es motivador y profesional.”
              </blockquote>
              <figcaption>Diego M. · Plan Elite</figcaption>
            </figure>
          </div>
        </section>

        <section className="section cta" id="contacto">
          <div className="cta-contenido">
            <h2>¿Listo para el cambio?</h2>
            <p>
              Agenda una visita guiada y recibe una clase gratuita. Estamos ubicados a metros del metrobus y
              contamos con estacionamiento propio.
            </p>
          </div>
          <a className="btn pri" href="tel:+5491122334455">
            Llamar ahora
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Sparta Gym. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="mailto:contacto@spartagym.com">contacto@spartagym.com</a>
          <a href="https://maps.app.goo.gl/" target="_blank" rel="noreferrer">
            Ver ubicación
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
