import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import './Navbar.css'

const servicesMenu = [
  { to: '/services/data-science', label: 'Data Science & AI' },
  { to: '/services/software-dev', label: 'Software Engineering' },
  { to: '/services/it-support', label: 'Enterprise IT Support' },
  { to: '/services/cloud-solutions', label: 'Cloud Solutions' },
  { to: '/services/consulting', label: 'Technology Consulting' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          Lynq<span>IQ</span>.
        </Link>
        <nav className="navbar__links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          <div className="navbar__dropdown" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <NavLink to="/services" className={({ isActive }) => `navbar__dropdown-trigger ${isActive ? 'active' : ''}`}>
              Services <ChevronDown size={14} />
            </NavLink>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div className="navbar__dropdown-menu"
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }}>
                  {servicesMenu.map(item => (
                    <Link key={item.to} to={item.to} className="navbar__dropdown-item">{item.label}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <NavLink to="/case-studies" className={({ isActive }) => isActive ? 'active' : ''}>Case Studies</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>
        <div className="navbar__actions">
          <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>Book Consultation</Link>
          <button className="navbar__burger" onClick={() => setMobileOpen(v => !v)} aria-label="Menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}>
            <div className="navbar__mobile-inner">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              {servicesMenu.map(s => (<NavLink key={s.to} to={s.to} className="navbar__mobile-sub">{s.label}</NavLink>))}
              <NavLink to="/case-studies">Case Studies</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '8px' }}>Book Consultation</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
