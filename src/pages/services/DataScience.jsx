import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, BarChart3, Brain, Eye, MessageSquare } from 'lucide-react'
import PageHero from '../../components/PageHero'
import '../../pages/ServiceDetail.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.55, delay }
})

const offerings = [
  { icon: BarChart3, title: 'Predictive Analytics', desc: 'Forecast business outcomes with precision using historical data and advanced statistical models.' },
  { icon: Brain, title: 'Machine Learning', desc: 'Custom ML pipelines trained on your data to automate decisions and surface hidden insights.' },
  { icon: MessageSquare, title: 'Natural Language Processing', desc: 'Extract meaning from text data — customer feedback, contracts, emails, and more.' },
  { icon: Eye, title: 'Computer Vision', desc: 'Automate visual inspection, document digitization, and image classification at scale.' },
]

export default function DataScience() {
  return (
    <div>
      <PageHero label="Data Science & AI" title="Turn Data Into Your Competitive Advantage"
        subtitle="Advanced analytics and machine learning solutions built by a PhD-level team with deep industry expertise." />
      <section className="section">
        <div className="container">
          <span className="label">Our Offerings</span>
          <h2 className="heading-lg" style={{ marginBottom: '48px' }}>What We Deliver</h2>
          <div className="sd-grid">
            {offerings.map((o, i) => {
              const Icon = o.icon
              return (
                <motion.div key={o.title} className="sd-card" {...fadeUp(i * 0.1)}>
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
            <motion.div {...fadeUp()}>
              <span className="label">Why LynqIQ</span>
              <h2 className="heading-lg">Built for Real Business Impact</h2>
              <p>We don't just build models — we build solutions that integrate into your workflows and deliver measurable ROI from day one.</p>
              <ul className="sd-checklist">
                {['4–12 week delivery timelines', 'PhD-level data science team', 'Industry-specific model training', 'Full MLOps and monitoring', 'Explainable AI reporting'].map(item => (
                  <li key={item}><CheckCircle size={15} />{item}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>Start Your Project <ArrowRight size={15} /></Link>
            </motion.div>
            <motion.div className="sd-stat-block" {...fadeUp(0.15)}>
              {[['40%', 'Avg fraud reduction for fintech clients'], ['30%', 'Wait time reduction in healthcare'], ['25%', 'Inventory turnover improvement in retail']].map(([val, label]) => (
                <div key={label} className="sd-stat">
                  <strong>{val}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
