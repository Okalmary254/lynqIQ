import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import './CaseStudies.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay }
})

const cases = [
  {
    tag: 'Financial Services', title: 'AI-Powered Risk Assessment',
    client: 'Leading African Bank',
    summary: 'Deployed advanced ML models to transform fraud detection capabilities, dramatically reducing investigation overhead while improving accuracy.',
    outcomes: ['40% reduction in false positives', 'Real-time transaction scoring at <50ms', '3x faster fraud investigation cycle', 'KES 12M saved annually'],
    tech: ['Python', 'TensorFlow', 'Apache Kafka', 'PostgreSQL', 'AWS'],
    duration: '8 weeks',
  },
  {
    tag: 'Healthcare', title: 'Patient Data Analytics',
    client: 'Regional Hospital Network',
    summary: 'Built a predictive analytics platform that optimized resource allocation across a multi-facility hospital network.',
    outcomes: ['30% reduction in patient wait times', '22% improvement in bed utilization', 'Predictive staffing reduced overtime by 18%', 'Unified patient data from 5 facilities'],
    tech: ['Python', 'Tableau', 'Azure', 'SQL Server', 'Power BI'],
    duration: '12 weeks',
  },
  {
    tag: 'Retail', title: 'Inventory Optimization',
    client: 'Regional Retail Chain',
    summary: 'Designed and implemented an end-to-end supply chain intelligence system with demand forecasting and automated reorder triggers.',
    outcomes: ['25% increase in inventory turnover', '18% reduction in stockouts', 'Automated reordering for 2000+ SKUs', 'ROI achieved within 4 months'],
    tech: ['Python', 'Scikit-learn', 'React', 'Flask', 'PostgreSQL'],
    duration: '10 weeks',
  },
]

export default function CaseStudies() {
  return (
    <div>
      <PageHero label="Success Stories" title="Transforming Businesses Across Africa"
        subtitle="Real projects, measurable outcomes. See how we have helped organizations achieve their technology goals." />

      <section className="section">
        <div className="container">
          <div className="cases__list">
            {cases.map((c, i) => (
              <motion.div key={c.title} className="cases__card" {...fadeUp(i * 0.1)}>
                <div className="cases__card-left">
                  <span className="cases__tag">{c.tag}</span>
                  <h2 className="heading-md">{c.title}</h2>
                  <span className="cases__client">{c.client}</span>
                  <p>{c.summary}</p>
                  <div className="cases__tech">
                    {c.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                  <span className="cases__duration">⏱ {c.duration}</span>
                </div>
                <div className="cases__card-right">
                  <h4>Key Outcomes</h4>
                  <ul>
                    {c.outcomes.map(o => <li key={o}>{o}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cases-cta">
        <div className="container">
          <motion.div className="cases-cta__inner" {...fadeUp()}>
            <h2 className="heading-lg">Ready to Write Your Success Story?</h2>
            <p>Let us discuss how we can deliver measurable results for your organization.</p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '32px' }}>Book a Free Consultation <ArrowRight size={15} /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
