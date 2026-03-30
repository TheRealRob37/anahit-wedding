import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import RomanticQuote from './components/RomanticQuote'
import Countdown from './components/Countdown'
import WeddingCalendar from './components/WeddingCalendar'
import Timeline from './components/Timeline'
import EventDetails from './components/EventDetails'
import Gallery from './components/Gallery'
import DressCode from './components/DressCode'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import Admin from './components/Admin'

function useHash() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const handler = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])
  return hash
}

export default function App() {
  const hash = useHash()
  if (hash === '#/admin') return <Admin />

  return (
    <main>
      <Hero />
      <RomanticQuote />
      <Countdown />
      <WeddingCalendar />
      <Timeline />
      <EventDetails />
      <Gallery />
      <DressCode />
      <RSVP />
      <Footer />
    </main>
  )
}
