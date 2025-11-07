import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Trainers from './components/Trainers'
import Community from './components/Community'
import Gallery from './components/Gallery'
import Location from './components/Location'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const whatsappNumber = '542284676233'
  const whatsappMessage = encodeURIComponent('Hola Sparta Gym Olavarría 👋 Quiero reservar mi clase de prueba.')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="app">
      <Navbar whatsappLink={whatsappLink} />
      <main>
        <Hero whatsappLink={whatsappLink} />
        <Services />
        <Trainers />
        <Community />
        <Gallery />
        <Location whatsappLink={whatsappLink} />
        <ContactForm whatsappNumber={whatsappNumber} />
      </main>
      <Footer whatsappLink={whatsappLink} />
      <WhatsAppButton whatsappLink={whatsappLink} />
    </div>
  )
}

export default App
