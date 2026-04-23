import { motion } from 'framer-motion'
import './PageHero.css'

export default function PageHero({ label, title, subtitle, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <motion.div
          className="page-hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {label && <span className="label">{label}</span>}
          <h1 className="heading-xl">{title}</h1>
          {subtitle && <p className="page-hero__sub">{subtitle}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  )
}
