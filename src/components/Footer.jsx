import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">Lynq<span>IQ</span>.</Link>
            <p>We deliver innovative technology solutions that drive business growth and digital transformation across Africa and beyond.</p>
            <div className="footer__contact-details">
              <span><MapPin size={14} /> GTC Towers, Nairobi, Kenya</span>
              <a href="mailto:lynqiq@zohomail.jp"><Mail size={14} /> lynqiq@zohomail.jp</a>
              <a href="tel:+254743874690"><Phone size={14} /> +254 743 874 690</a>
              <span><Clock size={14} /> Mon–Fri: 8:00 AM – 5:00 PM</span>
            </div>
          </div>
          <div className="footer__col">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/careers">Careers</Link>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <Link to="/services/data-science">Data Science & AI</Link>
            <Link to="/services/software-dev">Software Development</Link>
            <Link to="/services/it-support">IT Support</Link>
            <Link to="/services/cloud-solutions">Cloud Solutions</Link>
            <Link to="/services/consulting">Technology Consulting</Link>
          </div>
          <div className="footer__col footer__newsletter">
            <h4>Stay Updated</h4>
            <p>Get the latest technology insights and company news.</p>
            <form className="footer__form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" />
              <button type="submit" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: '13px' }}>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2026 LynqIQ. All rights reserved.</p>
          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
