import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import './About.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay }
})

const milestones = [
  { year: '2022', title: 'Company Founded', desc: 'Launched with a focus on data analytics for SMEs in Kisumu.' },
  { year: '2023', title: 'First Enterprise Client', desc: 'Secured partnership with a major financial institution.' },
  { year: '2024', title: 'AI Lab Established', desc: 'Opened a dedicated artificial intelligence research division.' },
  { year: '2026', title: 'Regional Expansion', desc: 'Extended services across 5 counties.' },
]

// const team = [
//   { initials: 'JM', name: 'John Mary', role: 'Founder & CEO', bio: 'Seasoned data science expert driving LynqIQ\'s strategic vision.' },
//   { initials: 'AD', name: 'Adero David', role: 'Chief Technology Officer', bio: 'Machine learning specialist with deep expertise in scalable architectures.' },
//   { initials: 'SN', name: 'Samuel Ngige', role: 'Chief Data Officer', bio: 'Data science pioneer shaping LynqIQ\'s analytics capabilities.' },
//   { initials: 'AO', name: 'Anold Odero', role: 'Head of Software Development', bio: 'Full-stack developer leading innovative software solutions.' },
// ]
const team = [
  { name: 'John Mary', role: 'Founder & CEO', bio: "Seasoned data science expert driving LynqIQ's strategic vision.", image: '/assets/john.png' },
  { name: 'Adero David', role: 'Chief Technology Officer', bio: 'Machine learning specialist with deep expertise in scalable architectures.', image: '/assets/adero.png' },
  { name: 'Samuel Ngige', role: 'Chief Data Officer', bio: "Data science pioneer shaping LynqIQ's analytics capabilities.", image: '/assets/sam.png' },
  { name: 'Anold Odero', role: 'Head of Software Development', bio: 'Full-stack developer leading innovative software solutions.', image: '/assets/arnold.png' },
]

const stack = {
  'Data Science': ['Python', 'TensorFlow', 'PyTorch', 'Apache Spark', 'Tableau', 'R', 'Scikit-learn'],
  'Development': ['JavaScript', 'React', 'Node.js', 'Flask', 'Django', 'Docker'],
  'Infrastructure': ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'CI/CD', 'PostgreSQL'],
}

export default function About() {
  return (
    <div>
      <PageHero label="About LynqIQ" title="Innovating the Future of Technology"
        subtitle="We are a team of passionate engineers, data scientists, and problem-solvers dedicated to transforming businesses through technology." />

      {/* MISSION */}
      <section className="section">
        <div className="container">
          <span className="label">Our Purpose</span>
          <div className="about-mission__grid">
            {[
              { heading: 'Mission', text: 'To empower organizations with intelligent, scalable technology solutions that drive measurable growth and operational excellence.' },
              { heading: 'Vision', text: "To be Africa's leading digital transformation partner, recognized for innovation and impact across industries." },
              { heading: 'Values', text: 'Excellence, Integrity, Innovation, and Client-Centric Solutions — embedded in everything we do.' },
            ].map((item, i) => (
              <motion.div key={item.heading} className="about-mission__card" {...fadeUp(i * 0.12)}>
                <div className="divider" />
                <h3 className="heading-md">{item.heading}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section about-timeline-section">
        <div className="container">
          <motion.div {...fadeUp()}>
            <span className="label">Our Journey</span>
            <h2 className="heading-lg">Milestone Timeline</h2>
          </motion.div>
          <div className="about-timeline">
            {milestones.map((m, i) => (
              <motion.div key={m.year} className="about-timeline__item" {...fadeUp(i * 0.12)}>
                <div className="about-timeline__year">{m.year}</div>
                <div className="about-timeline__body">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <motion.div {...fadeUp()}>
            <span className="label">The Minds Behind</span>
            <h2 className="heading-lg">Our Leadership</h2>
          </motion.div>
          <div className="about-team__grid">
            {team.map((member, i) => (
              <motion.div key={member.name} className="about-team__card" {...fadeUp(i * 0.12)}>
                                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="about-team__avatar-img"
                  />
                ) : (
                  <div className="about-team__avatar">
                    {getInitials(member.name)}
                  </div>
                )}
                <h4>{member.name}</h4>
                <span className="about-team__role">{member.role}</span>
                <p>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="section about-stack-section">
        <div className="container">
          <motion.div {...fadeUp()}>
            <span className="label">Our Expertise</span>
            <h2 className="heading-lg">Technology Stack</h2>
            <p className="section-sub" style={{ marginBottom: '48px' }}>We work with cutting-edge tools and platforms to deliver robust solutions.</p>
          </motion.div>
          <div className="about-stack__grid">
            {Object.entries(stack).map(([category, tools], i) => (
              <motion.div key={category} className="about-stack__col" {...fadeUp(i * 0.12)}>
                <h4>{category}</h4>
                <div className="about-stack__tags">
                  {tools.map(tool => <span key={tool} className="about-stack__tag">{tool}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
