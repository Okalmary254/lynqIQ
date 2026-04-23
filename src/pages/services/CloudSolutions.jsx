import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Cloud, GitBranch, DollarSign, Layers } from 'lucide-react'
import PageHero from '../../components/PageHero'
import '../ServiceDetail.css'

const offerings = [
  { icon: Cloud, title: 'Cloud Migration', desc: 'Lift-and-shift or re-architect — we move your workloads safely to AWS or Azure.' },
  { icon: GitBranch, title: 'Infrastructure as Code', desc: 'Terraform and CloudFormation templates for reproducible, version-controlled infrastructure.' },
  { icon: DollarSign, title: 'Cost Optimization', desc: 'Audit and right-size your cloud spend with automated savings recommendations.' },
  { icon: Layers, title: 'Multi-Cloud Strategy', desc: 'Design resilient architectures that span multiple cloud providers.' },
]

export default function CloudSolutions() {
  return (
    <div>
      <PageHero label="Cloud Solutions" title="Cloud Strategy, Migration & Managed Services"
        subtitle="Accelerate your journey to the cloud with certified AWS and Azure engineers who deliver results, not just plans." />
      <section className="section">
        <div className="container">
          <span className="label">Cloud Services</span>
          <h2 className="heading-lg" style={{ marginBottom: '48px' }}>End-to-End Cloud Expertise</h2>
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
              <span className="label">Certifications</span>
              <h2 className="heading-lg">Certified Cloud Engineers</h2>
              <p>Our cloud team holds certifications across AWS, Azure, and Google Cloud — ensuring best practices in every deployment.</p>
              <ul className="sd-checklist">
                {['AWS Certified Solutions Architect', 'Azure Administrator Associate', 'Zero-downtime migrations', 'Security-first architecture', 'Ongoing managed services'].map(item => (
                  <li key={item}><CheckCircle size={15} />{item}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>Start Cloud Journey <ArrowRight size={15} /></Link>
            </motion.div>
            <div className="sd-stat-block">
              {[['AWS', 'Certified partner'], ['Azure', 'Certified engineers'], ['30%', 'Avg cloud cost savings achieved']].map(([val, label]) => (
                <div key={label} className="sd-stat"><strong>{val}</strong><span>{label}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
