import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import './Contact.css'

export default function Contact() {
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      setForm({ name: '', email: '', company: '', service: '', message: '' })
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div>
      <PageHero label="Get In Touch" title="Let's Build Something Great Together"
        subtitle="Schedule a free consultation with our technology experts to discuss your project requirements." />

      <section className="section">
        <div className="container">
          <div className="contact__grid">
            <motion.div className="contact__info"
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <h2 className="heading-md">Contact Information</h2>
              <div className="contact__details">
                <div className="contact__detail"><div className="contact__detail-icon"><MapPin size={18} /></div><div><strong>Address</strong><span>GTC Towers, Nairobi, Kenya</span></div></div>
                <div className="contact__detail"><div className="contact__detail-icon"><Mail size={18} /></div><div><strong>Email</strong><a href="mailto:contact@lynqiq.com">contact@lynqiq.com</a></div></div>
                <div className="contact__detail"><div className="contact__detail-icon"><Phone size={18} /></div><div><strong>Phone</strong><a href="tel:+254743874690">+254 743 874 690</a></div></div>
                <div className="contact__detail"><div className="contact__detail-icon"><Clock size={18} /></div><div><strong>Working Hours</strong><span>Mon–Fri: 8:00 AM – 5:00 PM EAT</span></div></div>
              </div>
              <div className="contact__note">
                <strong>Free Initial Consultation</strong>
                <p>We offer a complimentary 60-minute consultation to understand your needs before proposing any solution.</p>
              </div>
            </motion.div>

            <motion.div className="contact__form-wrap"
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
              {sent ? (
                <div className="contact__success">
                  <CheckCircle size={40} color="var(--color-accent)" />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We will get back to you within one business day.</p>
                  <button className="btn btn-outline" onClick={() => setSent(false)}>Send Another</button>
                </div>
              ) : (
                <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
                  <div className="contact__form-row">
                    <div className="contact__field">
                      <label>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
                    </div>
                    <div className="contact__field">
                      <label>Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="contact__form-row">
                    <div className="contact__field">
                      <label>Company</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Your organization" />
                    </div>
                    <div className="contact__field">
                      <label>Service of Interest</label>
                      <select name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service</option>
                        <option>Data Science & AI</option>
                        <option>Software Engineering</option>
                        <option>Enterprise IT Support</option>
                        <option>Cloud Solutions</option>
                        <option>Technology Consulting</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="contact__field">
                    <label>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project or challenge..." />
                  </div>
                  {error && <p className="contact__error">{error}</p>}
                  <button type="submit" className="btn btn-primary" disabled={sending} style={{ width: '100%', justifyContent: 'center' }}>
                    {sending ? 'Sending...' : <><Send size={15} /> Send Message</>}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
