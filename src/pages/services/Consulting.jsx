import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Map, TrendingUp, Users, Settings } from 'lucide-react'
import PageHero from '../../components/PageHero'
import '../ServiceDetail.css'

const offerings = [
  { icon: Map, title: 'Digital Strategy', desc: 'Holistic technology strategy aligned to your 3–5 year business objectives.' },
  { icon: TrendingUp, title: 'Technology Roadmap', desc: 'Prioritized, sequenced plans to modernize systems and capabilities.' },
  { icon: Users, title: 'Change Management', desc: 'Organizational readiness, training, and adoption frameworks for technology change.' },
  { icon: Settings, title: 'Architecture Review', desc: 'Independent assessment of your current systems with actionable improvement recommendations.' },
]

const stats = [
  ['5+', 'Years combined advisory experience'],
  ['3x', 'Average ROI on consulting engagements'],
  ['2 weeks', 'To first deliverable'],
]

export default function Consulting() {
  return (
    <div>
      <PageHero label="Technology Consulting" title="Strategic Guidance to Align Technology & Growth"
        subtitle="C-suite advisory, digital strategy, and technology roadmaps that create sustainable competitive advantage." />
      <section className="section">
        <div className="container">
          <span className="label">Advisory Services</span>
          <h2 className="heading-lg" style={{ marginBottom: '48px' }}>Strategic Technology Advisory</h2>
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
              <span className="label">Our Approach</span>
              <h2 className="heading-lg">Insight-Driven, Outcome-Focused</h2>
              <p>We combine deep technical expertise with business acumen to deliver recommendations that are practical, not just theoretical.</p>
              <ul className="sd-checklist">
                {['C-suite experienced advisors', 'Rapid 2-week assessment sprints', 'Vendor-neutral recommendations', 'Hands-on implementation support', 'ROI-focused prioritization'].map(item => (
                  <li key={item}><CheckCircle size={15} />{item}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>Book a Strategy Session <ArrowRight size={15} /></Link>
            </motion.div>
            <div className="sd-stat-block">
              {stats.map(([val, label]) => (
                <div key={label} className="sd-stat"><strong>{val}</strong><span>{label}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
