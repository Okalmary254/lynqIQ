import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Shield, Network, Server, Headphones } from 'lucide-react'
import PageHero from '../../components/PageHero'
import '../ServiceDetail.css'

const offerings = [
  { icon: Headphones, title: 'Helpdesk Support', desc: '24/7 first and second-line support with guaranteed SLAs and fast resolution times.' },
  { icon: Network, title: 'Network Management', desc: 'Design, deployment, and monitoring of enterprise networks with proactive alerting.' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Threat assessment, penetration testing, and ongoing security monitoring.' },
  { icon: Server, title: 'DevOps Automation', desc: 'CI/CD pipelines, infrastructure as code, and cloud automation to accelerate delivery.' },
]

export default function ITSupport() {
  return (
    <div>
      <PageHero label="Enterprise IT Support" title="24/7 Infrastructure Management You Can Count On"
        subtitle="Proactive monitoring, helpdesk, network management, and cybersecurity with guaranteed SLAs." />
      <section className="section">
        <div className="container">
          <span className="label">What We Manage</span>
          <h2 className="heading-lg" style={{ marginBottom: '48px' }}>Enterprise IT Services</h2>
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
              <span className="label">Our SLA Commitment</span>
              <h2 className="heading-lg">Always On, Always Reliable</h2>
              <p>We back our services with contractual SLAs and transparent reporting dashboards so you always know your infrastructure status.</p>
              <ul className="sd-checklist">
                {['99.9% uptime SLA guarantee', '<30 minute critical response time', 'Monthly infrastructure reports', 'Dedicated account manager', 'Proactive threat monitoring'].map(item => (
                  <li key={item}><CheckCircle size={15} />{item}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>Get IT Support <ArrowRight size={15} /></Link>
            </motion.div>
            <div className="sd-stat-block">
              {[['99.9%', 'Uptime SLA'], ['<30min', 'Critical response time'], ['24/7', 'Monitoring coverage']].map(([val, label]) => (
                <div key={label} className="sd-stat"><strong>{val}</strong><span>{label}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
