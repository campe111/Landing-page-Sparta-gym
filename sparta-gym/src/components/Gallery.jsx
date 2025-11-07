import { useState } from 'react'

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Zona de musculación en Sparta Gym',
  },
  {
    src: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=80',
    alt: 'Clase de funcional en grupo',
  },
  {
    src: 'https://images.unsplash.com/photo-1571731956672-643b007ea19b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Entrenamiento HIIT con pesas rusas',
  },
  {
    src: '/fondo-gym.jpg',
    alt: 'Instalaciones de Sparta Gym Olavarría',
  },
]

function Gallery() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % galleryItems.length)
  const prev = () => setIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)

  return (
    <section className="section section--alt" id="galeria" aria-labelledby="gallery-heading">
      <div className="container gallery">
        <div className="gallery__header">
          <span className="section__eyebrow">Galería</span>
          <h2 id="gallery-heading">Viví la experiencia Sparta</h2>
          <p>Instalaciones premium, luz natural y un ambiente pensado para que entrenes sin distracciones.</p>
        </div>
        <div className="gallery__slider">
          <button type="button" className="gallery__control" onClick={prev} aria-label="Imagen anterior">
            ‹
          </button>
          <div className="gallery__viewport" role="list">
            {galleryItems.map((item, itemIndex) => (
              <figure
                key={item.alt}
                className={`gallery__item ${itemIndex === index ? 'is-active' : ''}`}
                role="listitem"
                aria-hidden={itemIndex !== index}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
              </figure>
            ))}
          </div>
          <button type="button" className="gallery__control" onClick={next} aria-label="Imagen siguiente">
            ›
          </button>
        </div>
        <div className="gallery__dots" role="tablist" aria-label="Seleccionar imagen">
          {galleryItems.map((item, itemIndex) => (
            <button
              key={item.alt}
              type="button"
              className={`gallery__dot ${itemIndex === index ? 'is-active' : ''}`}
              onClick={() => setIndex(itemIndex)}
              aria-label={`Ver imagen ${itemIndex + 1}`}
              aria-selected={itemIndex === index}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

