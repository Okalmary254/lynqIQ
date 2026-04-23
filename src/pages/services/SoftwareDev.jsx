import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Smartphone, Globe, Cloud, Layers } from 'lucide-react'
import PageHero from '../../components/PageHero'
import '../ServiceDetail.css'

const offerings = [
  { icon: Globe, title: 'Web Applications', desc: 'Modern, performant web apps built with React, Vue, or Next.js.' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Cross-platform mobile applications for iOS and Android.' },
  { icon: Cloud, title: 'Cloud-Native Architecture', desc: 'Scalable microservices and serverless solutions on AWS or Azure.' },
  { icon: Layers, title: 'API Development', desc: 'RESTful and GraphQL APIs designed for reliability and developer experience.' },
]

export default function SoftwareDev() {
  return (
    <div>
      <PageHero label="Software Engineering" title="Scalable Software Built for Your Business"
        subtitle="From web apps to cloud-native microservices — we engineer robust solutions with senior engineers and agile methodology." />
      <section className="section">
        <div className="container">
          <span className="label">What We Build</span>
          <h2 className="heading-lg" style={{ marginBottom: '48px' }}>Our Engineering Services</h2>
          <div className="sd-grid">
            {offerings.map((o, i) => {
              const Icon = o.icon
              return (
                <motion.div key={o.title} className="sd-card"
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}>
                  <div className="sd-card__icon"><Icon size={20} /></div>
                  <h3>{o.title}</h3>
                  <p>{o.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="section sd-why">
        <div className="container">
          <div className="sd-why__grid">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="label">Why LynqIQ</span>
              <h2 className="heading-lg">Senior Engineers, Agile Delivery</h2>
              <p>We deliver production-grade software on time, with clean code, comprehensive tests, and full documentation.</p>
              <ul className="sd-checklist">
                {['Agile 2-week sprint cycles', 'Senior engineers on every project', 'Automated testing & CI/CD', 'Full source code ownership', 'Post-launch support included'].map(item => (
                  <li key={item}><CheckCircle size={15} />{item}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>Start Your Project <ArrowRight size={15} /></Link>
            </motion.div>
            <div className="sd-stat-block">
              {[['50+', 'Projects delivered'], ['<2 weeks', 'Average sprint cycle'], ['100%', 'Source code handed over']].map(([val, label]) => (
                <div key={label} className="sd-stat"><strong>{val}</strong><span>{label}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
