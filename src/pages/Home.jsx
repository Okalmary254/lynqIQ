import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Database, Code, Server, Cloud, BarChart3, CheckCircle } from 'lucide-react'
import './Home.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay }
})

const stats = [
  { value: '100+', label: 'Satisfied Clients' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<30min', label: 'Response Time' },
  { value: '20+', label: 'Certified Experts' },
]

const services = [
  { icon: Database, title: 'Data Science & AI', desc: 'Transform raw data into actionable intelligence with advanced analytics and machine learning.', link: '/services/data-science', items: ['Predictive Analytics', 'Machine Learning', 'Business Intelligence', 'Data Visualization'] },
  { icon: Code, title: 'Software Engineering', desc: 'Build scalable, secure applications tailored to your business requirements and user needs.', link: '/services/software-dev', items: ['Custom Software', 'Web & Mobile Apps', 'Cloud-Native Solutions', 'API Integration'] },
  { icon: Server, title: 'Enterprise IT', desc: '24/7 infrastructure management with guaranteed SLAs and proactive monitoring.', link: '/services/it-support', items: ['Helpdesk Support', 'Network Management', 'Cloud Services', 'Security Solutions'] },
]

const caseStudies = [
  { tag: 'Financial Services', title: 'AI-Powered Risk Assessment', stat: '40%', statLabel: 'Reduction in fraud false positives', desc: 'Advanced ML models deployed for a leading African bank.' },
  { tag: 'Healthcare', title: 'Patient Data Analytics', stat: '30%', statLabel: 'Reduction in patient wait times', desc: 'Optimized hospital resource allocation through predictive analytics.' },
  { tag: 'Retail', title: 'Inventory Optimization', stat: '25%', statLabel: 'Increase in inventory turnover', desc: 'End-to-end supply chain intelligence for a regional retail chain.' },
]

const steps = [
  { n: '01', title: 'Discovery', desc: 'Deep dive into your business objectives, challenges, and technical requirements.' },
  { n: '02', title: 'Development', desc: 'Agile implementation with continuous feedback loops and regular demos.' },
  { n: '03', title: 'Deployment', desc: 'Seamless transition to production with comprehensive training and documentation.' },
  { n: '04', title: 'Optimisation', desc: 'Ongoing enhancement, performance monitoring, and scalability planning.' },
]

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="home-hero">
        <div className="container home-hero__inner">
          <motion.div className="home-hero__content"
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <span className="label">Trusted by 100+ businesses</span>
            <h1 className="heading-xl home-hero__heading">
              Digital Transformation<br />
              <em>Powered by Innovation</em>
            </h1>
            <p className="home-hero__sub">
              LynqIQ delivers cutting-edge technology solutions to help enterprises harness data, optimize operations, and accelerate growth in the digital age.
            </p>
            <div className="home-hero__cta">
              <Link to="/services" className="btn btn-primary">Explore Solutions <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn btn-outline">Book Consultation</Link>
            </div>
            <div className="home-hero__badges">
              <span><CheckCircle size={14} /> 5+ Years Experience</span>
              <span><CheckCircle size={14} /> Industry-Specific Solutions</span>
              <span><CheckCircle size={14} /> Proven Methodologies</span>
            </div>
          </motion.div>
          <motion.div className="home-hero__visual"
            initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.2 }}>
            <div className="home-hero__card">
              <div className="home-hero__card-header">
                <span className="home-hero__dot" style={{ background: '#ff5f57' }} />
                <span className="home-hero__dot" style={{ background: '#febc2e' }} />
                <span className="home-hero__dot" style={{ background: '#28c840' }} />
              </div>
              <div className="home-hero__code">
                <span className="c-muted">// LynqIQ Intelligence Stack</span>{'\n'}
                <span className="c-key">const</span> <span className="c-var">solution</span> = {'{'}
                  {'\n  '}<span className="c-str">data</span>: <span className="c-val">analyze(rawData),</span>
                  {'\n  '}<span className="c-str">model</span>: <span className="c-val">train(mlPipeline),</span>
                  {'\n  '}<span className="c-str">deploy</span>: <span className="c-val">scale(cloud),</span>
                {'\n'}{'}'}
                {'\n\n'}<span className="c-muted">// Result → Business Impact</span>{'\n'}
                <span className="c-key">return</span> <span className="c-val">growth.accelerate()</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="home-stats">
        <div className="container">
          <div className="home-stats__grid">
            {stats.map((s, i) => (
              <motion.div key={s.label} className="home-stats__item" {...fadeUp(i * 0.1)}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <span className="label">Our Expertise</span>
            <h2 className="heading-lg">Comprehensive Technology<br />Solutions</h2>
            <p className="section-sub">End-to-end services designed to address your unique business challenges and drive measurable results.</p>
          </motion.div>
          <div className="home-services__grid">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div key={s.title} className="home-service-card" {...fadeUp(i * 0.12)}>
                  <div className="home-service-card__icon"><Icon size={22} /></div>
                  <h3 className="heading-md">{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul>
                    {s.items.map(item => <li key={item}><CheckCircle size={13} />{item}</li>)}
                  </ul>
                  <Link to={s.link} className="btn btn-ghost">Learn More <ArrowRight size={14} /></Link>
                </motion.div>
              )
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn btn-outline">View All Services <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section home-cases">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <span className="label">Success Stories</span>
            <h2 className="heading-lg">Transforming Businesses</h2>
            <p className="section-sub">See how we have helped organizations across industries achieve their technology goals.</p>
          </motion.div>
          <div className="home-cases__grid">
            {caseStudies.map((c, i) => (
              <motion.div key={c.title} className="home-case-card" {...fadeUp(i * 0.12)}>
                <span className="home-case-card__tag">{c.tag}</span>
                <h3 className="heading-md">{c.title}</h3>
                <p>{c.desc}</p>
                <div className="home-case-card__stat">
                  <strong>{c.stat}</strong>
                  <span>{c.statLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/case-studies" className="btn btn-outline">Explore All Case Studies <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="section home-method">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <span className="label">Our Approach</span>
            <h2 className="heading-lg">Proven Methodology</h2>
            <p className="section-sub">A structured framework that ensures successful project delivery and maximum value.</p>
          </motion.div>
          <div className="home-method__grid">
            {steps.map((s, i) => (
              <motion.div key={s.n} className="home-method__step" {...fadeUp(i * 0.1)}>
                <span className="home-method__num">{s.n}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section">
        <div className="container">
          <motion.div className="home-testimonial" {...fadeUp()}>
            <div className="home-testimonial__quote">
              <span className="home-testimonial__mark">"</span>
              <p>LynqIQ transformed our data infrastructure and delivered predictive models that have given us a significant competitive edge in customer retention.</p>
            </div>
            <div className="home-testimonial__author">
              <div className="home-testimonial__avatar">JK</div>
              <div>
                <strong>Johnson Kamau</strong>
                <span>CTO, FinTech Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="container">
          <motion.div className="home-cta__inner" {...fadeUp()}>
            <h2 className="heading-lg">Ready to Accelerate Your<br />Digital Transformation?</h2>
            <p>Schedule a free consultation with our technology experts to discuss your project requirements.</p>
            <div className="home-cta__actions">
              <Link to="/contact" className="btn btn-primary">Get Started <ArrowRight size={15} /></Link>
              <a href="tel:+254743874690" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'white' }}>Call Us Now</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
