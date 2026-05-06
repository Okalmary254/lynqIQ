import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Briefcase, BarChart3, Code, MapPin, Clock, ChevronDown, ChevronUp, Upload } from 'lucide-react'
import './Careers.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay }
})

const jobs = [
  {
    id: 1,
    icon: BarChart3,
    title: 'Data Analyst Intern',
    department: 'Analytics',
    type: 'Internship / Attachment',
    location: 'Nairobi, Kenya (Hybrid)',
    duration: '3–6 Months',
    description:
      'Join our analytics team to transform complex datasets into actionable enterprise intelligence. You will design dashboards, run statistical models, and collaborate with cross-functional teams to drive data-informed decisions.',
    items: ['Predictive Analytics', 'Data Visualization', 'Business Intelligence', 'Dashboard Design'],
    requirements: [
      'Pursuing a degree in Statistics, Mathematics, or a related field',
      'Proficiency in Python, R, or SQL',
      'Experience with BI tools (Power BI, Tableau, or similar)',
      'Strong communication and data storytelling skills',
      'Exposure to data pipelines is an added advantage',
    ],
  },
  {
    id: 2,
    icon: BarChart3,
    title: 'Statistician Intern',
    department: 'Research & Insights',
    type: 'Internship / Attachment',
    location: 'Nairobi, Kenya (On-site)',
    duration: '3–6 Months',
    description:
      'We are looking for a rigorous statistician to assist in designing and executing quantitative research, building predictive models, and providing statistical consulting across our enterprise client engagements.',
    items: ['Inferential Statistics', 'Survey Sampling', 'Regression Modelling', 'Research Design'],
    requirements: [
      'Pursuing an MSc or BSc in Statistics or Applied Mathematics',
      'Strong grounding in inferential statistics and probability theory',
      'Hands-on experience with R or Python for statistical computing',
      'Familiarity with survey sampling and experimental design',
      'Excellent analytical and report-writing skills',
    ],
  },
  {
    id: 3,
    icon: Code,
    title: 'Software Engineer Intern',
    department: 'Engineering',
    type: 'Internship / Attachment',
    location: 'Nairobi, Kenya (Remote-friendly)',
    duration: '3–6 Months',
    description:
      'Build scalable, high-performance enterprise software solutions. You will contribute across the full stack, ship features end-to-end, and gain hands-on experience with LynqIQ\'s core technology platforms.',
    items: ['Full-Stack Development', 'REST API Design', 'Cloud Deployment', 'Agile Workflow'],
    requirements: [
      'Pursuing a degree in Computer Science, Software Engineering, or equivalent',
      'Proficiency in React, Node.js, or Django',
      'Experience with RESTful APIs and relational databases',
      'Familiarity with cloud platforms (AWS, GCP, or Azure)',
      'Strong problem-solving skills and attention to code quality',
    ],
  },
]

const perks = [
  { title: 'Hands-On Experience', desc: 'Work on real enterprise projects with measurable business impact from day one.' },
  { title: 'Expert Mentorship', desc: 'Learn directly from seasoned professionals across data science and engineering.' },
  { title: 'Flexible Arrangements', desc: 'Hybrid and remote-friendly options designed to fit your academic schedule.' },
  { title: 'Career Pathway', desc: 'Top-performing interns are considered for full-time roles upon graduation.' },
]

export default function Careers() {
  const [activeJob, setActiveJob] = useState(null)
  const [expandedId, setExpandedId] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', message: '', cv: null })
  const [submitted, setSubmitted] = useState(false)

  const handleApply = (job) => {
    setActiveJob(job)
    setForm(f => ({ ...f, role: job.title }))
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setForm(f => ({ ...f, [name]: files ? files[0] : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="careers">

      {/* HERO */}
      <section className="careers-hero">
        <div className="container careers-hero__inner">
          <motion.div
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <span className="label">Join the Team</span>
            <h1 className="heading-xl careers-hero__heading">
              Start Your Career in<br />
              <em>Enterprise Technology</em>
            </h1>
            <p className="careers-hero__sub">
              LynqIQ is offering internship and industrial attachment opportunities for ambitious students and fresh graduates ready to make a real-world impact in data and technology.
            </p>
            <div className="careers-hero__cta">
              <a href="#openings" className="btn btn-primary">View Open Roles <ArrowRight size={16} /></a>
              <a href="#application-form" className="btn btn-outline">Apply Now</a>
            </div>
            <div className="careers-hero__badges">
              <span><CheckCircle size={14} /> Industrial Attachment Accepted</span>
              <span><CheckCircle size={14} /> Mentorship Provided</span>
              <span><CheckCircle size={14} /> Nairobi-Based</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PERKS */}
      <section className="careers-perks">
        <div className="container">
          <div className="careers-perks__grid">
            {perks.map((p, i) => (
              <motion.div key={p.title} className="careers-perk-card" {...fadeUp(i * 0.1)}>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section className="section" id="openings">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <span className="label">Open Positions</span>
            <h2 className="heading-lg">Internship &amp; Attachment<br />Opportunities</h2>
            <p className="section-sub">
              All roles below are open for industrial attachment and internship placement. Duration is 3–6 months and can be aligned with your institution's requirements.
            </p>
          </motion.div>
          <div className="careers-jobs__list">
            {jobs.map((job, i) => {
              const Icon = job.icon
              const isOpen = expandedId === job.id
              return (
                <motion.div key={job.id} className="careers-job-card" {...fadeUp(i * 0.1)}>
                  <div className="careers-job-card__top" onClick={() => setExpandedId(isOpen ? null : job.id)}>
                    <div className="careers-job-card__left">
                      <div className="careers-job-card__icon"><Icon size={20} /></div>
                      <div>
                        <h3 className="heading-md careers-job-card__title">{job.title}</h3>
                        <div className="careers-job-card__meta">
                          <span className="careers-tag careers-tag--accent">{job.department}</span>
                          <span className="careers-tag"><Briefcase size={11} />{job.type}</span>
                          <span className="careers-tag"><MapPin size={11} />{job.location}</span>
                          <span className="careers-tag"><Clock size={11} />{job.duration}</span>
                        </div>
                      </div>
                    </div>
                    <button className="careers-job-card__toggle" aria-label="Toggle details">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>

                  {isOpen && (
                    <div className="careers-job-card__body">
                      <p className="careers-job-card__desc">{job.description}</p>
                      <ul className="careers-job-card__skills">
                        {job.items.map(item => (
                          <li key={item}><CheckCircle size={13} />{item}</li>
                        ))}
                      </ul>
                      <div className="careers-job-card__reqs">
                        <h5>Requirements</h5>
                        <ul>
                          {job.requirements.map((r, idx) => (
                            <li key={idx}>{r}</li>
                          ))}
                        </ul>
                      </div>
                      <button className="btn btn-primary" onClick={() => handleApply(job)}>
                        Apply for this Role <ArrowRight size={14} />
                      </button>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="section careers-form-section" id="application-form">
        <div className="container">
          <motion.div className="section-header" {...fadeUp()}>
            <span className="label">Applications</span>
            <h2 className="heading-lg">
              {activeJob ? `Apply — ${activeJob.title}` : 'Apply Now'}
            </h2>
            <p className="section-sub">
              {activeJob
                ? `${activeJob.department} · ${activeJob.location} · ${activeJob.duration}`
                : 'Select a role above or choose one from the dropdown. We review all applications within 5 business days.'}
            </p>
          </motion.div>

          {submitted ? (
            <motion.div className="careers-success" {...fadeUp()}>
              <div className="careers-success__icon"><CheckCircle size={32} /></div>
              <h3 className="heading-md">Application Received</h3>
              <p>Thank you for your interest in LynqIQ. Our team will review your application and reach out within 5 business days.</p>
              <button className="btn btn-outline" style={{ marginTop: '24px' }} onClick={() => { setSubmitted(false); setActiveJob(null); setForm({ name: '', email: '', phone: '', role: '', message: '', cv: null }) }}>
                Submit Another Application
              </button>
            </motion.div>
          ) : (
            <motion.form className="careers-form" onSubmit={handleSubmit} {...fadeUp(0.1)}>
              <div className="careers-form__grid">
                <div className="careers-form__group">
                  <label>Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                </div>
                <div className="careers-form__group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                </div>
                <div className="careers-form__group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+254 7XX XXX XXX" />
                </div>
                <div className="careers-form__group">
                  <label>Role Applying For</label>
                  <select name="role" value={form.role} onChange={handleChange} required>
                    <option value="">Select a position</option>
                    {jobs.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
                  </select>
                </div>
                <div className="careers-form__group careers-form__group--full">
                  <label>Cover Letter / Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about yourself, your experience, and why you want to join LynqIQ..." />
                </div>
                <div className="careers-form__group careers-form__group--full">
                  <label>CV / Resume</label>
                  <label className="careers-form__file">
                    <input type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleChange} />
                    <Upload size={16} />
                    {form.cv ? form.cv.name : 'Upload your CV (PDF or Word)'}
                  </label>
                  <label>Application Letter</label>
                  <label className="careers-form__file">
                    <input type="file" name="applicationLetter" accept=".pdf,.doc,.docx" onChange={handleChange} />
                    <Upload size={16} />
                    {form.applicationLetter ? form.applicationLetter.name : 'Upload your Application Letter (PDF or Word)'}
                  </label>
                  <label>Student Accident Cover</label>
                  <label className="careers-form__file">
                    <input type="file" name="studentAccidentCover" accept=".pdf,.doc,.docx" onChange={handleChange} />
                    <Upload size={16} />
                    {form.studentAccidentCover ? form.studentAccidentCover.name : 'Upload your Student Accident Cover'}
                  </label>
                </div>
                <div className="careers-form__group careers-form__group--full">
                  <button type="submit" className="btn btn-primary careers-form__submit">
                    Submit Application <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="container">
          <motion.div className="home-cta__inner" {...fadeUp()}>
            <h2 className="heading-lg">Have Questions About<br />Our Programme?</h2>
            <p>Reach out to our team and we will be happy to guide you through the application process.</p>
            <div className="home-cta__actions">
              <Link to="/contact" className="btn btn-primary">Contact Us <ArrowRight size={15} /></Link>
              <a href="tel:+254743874690" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'white' }}>Call Us Now</a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}