import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

export default function ServicePage({ icon, title, tagline, intro, features, process, cta }) {
  return (
    <main style={{ paddingTop: '68px' }}>
      <section className="page-hero">
        <div className="container">
          <motion.span className="section-label" initial="hidden" animate="visible" variants={fadeUp}>
            {icon} Service
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}>{title}</motion.h1>
          <motion.p className="page-sub" initial="hidden" animate="visible" variants={fadeUp} custom={2}>{tagline}</motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="section-label">Overview</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', marginBottom: '1rem' }}>What We Offer</h2>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem' }}>{intro}</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <span className="section-label">Capabilities</span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              {features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  <span style={{ color: 'var(--accent-mid)', fontWeight: 600 }}>→</span> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {process && (
        <section className="section" style={{ background: 'var(--off-white)' }}>
          <div className="container">
            <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-label">How We Work</span>
              <h2>Our Process</h2>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${process.length}, 1fr)`, gap: '1.5rem' }}>
              {process.map((p, i) => (
                <motion.div key={p.title} style={{ background: 'var(--white)', border: '1px solid var(--light)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                  <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--mid)', marginBottom: '0.5rem' }}>0{i + 1}</span>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{p.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', lineHeight: 1.6 }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ background: 'var(--accent)', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '580px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '1rem' }}>
              {cta || 'Ready to Get Started?'}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', lineHeight: 1.7 }}>
              Let's discuss how our {title.toLowerCase()} solutions can drive real results for your business.
            </p>
            <Link to="/contact" className="btn btn-primary">Book a Consultation →</Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
