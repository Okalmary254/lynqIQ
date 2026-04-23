import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import CaseStudies from './pages/CaseStudies'
import DataScience from './pages/services/DataScience'
import SoftwareDev from './pages/services/SoftwareDev'
import ITSupport from './pages/services/ITSupport'
import CloudSolutions from './pages/services/CloudSolutions'
import Consulting from './pages/services/Consulting'
import Privacy from './pages/legal/Privacy'
import Terms from './pages/legal/Terms'
import Cookies from './pages/legal/Cookies'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppInner() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/services/data-science" element={<DataScience />} />
          <Route path="/services/software-dev" element={<SoftwareDev />} />
          <Route path="/services/it-support" element={<ITSupport />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
