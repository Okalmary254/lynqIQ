import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Database, Code, Server, Cloud, BarChart3, ArrowRight, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import './Services.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay }
})

const services = [
  { icon: Database, title: 'Data Science & AI', desc: 'Turn raw data into actionable intelligence with our advanced analytics solutions.', link: '/services/data-science', items: ['Predictive Analytics', 'Machine Learning Models', 'Natural Language Processing', 'Computer Vision'], meta: ['4–12 Week Projects', 'PhD-Level Team'] },
  { icon: Code, title: 'Software Engineering', desc: 'Build scalable, secure applications tailored to your business requirements.', link: '/services/software-dev', items: ['Web & Mobile Apps', 'Cloud-Native Architecture', 'Microservices', 'API Development'], meta: ['Agile Development', 'Senior Engineers'] },
  { icon: Server, title: 'Enterprise IT', desc: 'Comprehensive infrastructure management with 24/7 monitoring.', link: '/services/it-support', items: ['Network Management', 'Cloud Migration', 'Cybersecurity', 'DevOps Automation'], meta: ['24/7 Support', 'Certified Engineers'] },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'Cloud strategy, migration, and managed services across AWS, Azure, and GCP.', link: '/services/cloud-solutions', items: ['Cloud Migration', 'Infrastructure as Code', 'Cost Optimization', 'Multi-Cloud Strategy'], meta: ['AWS Certified', 'Azure Partner'] },
  { icon: BarChart3, title: 'Technology Consulting', desc: 'Strategic guidance to align your technology investments with business goals.', link: '/services/consulting', items: ['Digital Strategy', 'Technology Roadmap', 'Architecture Review', 'Change Management'], meta: ['C-Suite Experience', 'Rapid Delivery'] },
]

const steps = [
  { n: '01', title: 'Discovery Workshop', desc: 'Intensive sessions to understand your business objectives, technical requirements, and success metrics.', items: ['Requirement analysis', 'Feasibility study', 'Solution architecture'] },
  { n: '02', title: 'Prototyping', desc: 'Rapid development of proof-of-concept to validate technical approach and user experience.', items: ['Wireframes & mockups', 'Technical spike', 'Stakeholder review'] },
  { n: '03', title: 'Agile Development', desc: 'Iterative development with continuous integration and regular client demos.', items: ['2-week sprints', 'Automated testing', 'Progress tracking'] },
  { n: '04', title: 'Deployment & Scaling', desc: 'Seamless launch with performance optimization and scaling strategies.', items: ['CI/CD pipelines', 'Load testing', 'Maintenance planning'] },
]

export default function Services() {
  return (
    <div>
      <PageHero label="What We Offer" title="Transformative Technology Services"
        subtitle="End-to-end solutions designed to solve complex business challenges and drive digital innovation." />

      <section className="section">
        <div className="container">
          <motion.div {...fadeUp()}>
            <span className="label">Our Solutions</span>
            <h2 className="heading-lg">Comprehensive Services</h2>
            <p className="section-sub">Tailored to your industry needs.</p>
          </motion.div>
          <div className="services-grid">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div key={s.title} className="service-card" {...fadeUp(i * 0.1)}>
                  <div className="service-card__top">
                    <div className="service-card__icon"><Icon size={22} /></div>
                    <div className="service-card__meta">
                      {s.meta.map(m => <span key={m}>{m}</span>)}
                    </div>
                  </div>
                  <h3 className="heading-md">{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul>
                    {s.items.map(item => <li key={item}><CheckCircle size={13} />{item}</li>)}
                  </ul>
                  <Link to={s.link} className="btn btn-ghost">Explore <ArrowRight size={14} /></Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section services-method">
        <div className="container">
          <motion.div {...fadeUp()}>
            <span className="label">Our Methodology</span>
            <h2 className="heading-lg">How We Deliver</h2>
            <p className="section-sub">A proven framework for successful project execution.</p>
          </motion.div>
          <div className="services-method__grid">
            {steps.map((s, i) => (
              <motion.div key={s.n} className="services-method__step" {...fadeUp(i * 0.1)}>
                <span className="services-method__num">{s.n}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <ul>
                  {s.items.map(item => <li key={item}><CheckCircle size={12} />{item}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-cta">
        <div className="container">
          <motion.div className="services-cta__inner" {...fadeUp()}>
            <h2 className="heading-lg">Ready to Transform Your Business?</h2>
            <p>Schedule a free consultation with our technology experts.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Book Consultation <ArrowRight size={15} /></Link>
              <a href="tel:+254743874690" className="btn btn-outline">Call Us Now</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
