import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

function LegalPage({ title, lastUpdated, sections }) {
  return (
    <main style={{ paddingTop: '68px' }}>
      <section style={{ background: 'var(--off-white)', padding: '5rem 0 3rem', borderBottom: '1px solid var(--light)' }}>
        <div className="container">
          <motion.span className="section-label" initial="hidden" animate="visible" variants={fadeUp}>Legal</motion.span>
          <motion.h12 style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginTop: '0.5rem' }} initial="hidden" animate="visible" variants={fadeUp}>{title}</motion.h12>
          <motion.p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: '0.75rem' }} initial="hidden" animate="visible" variants={fadeUp}>
            Last updated: {lastUpdated}
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          {sections.map((s, i) => (
            <motion.div key={s.heading} style={{ marginBottom: '2.5rem' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--accent)' }}>{s.heading}</h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem' }}>{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}

export function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="April 2026"
      sections={[
        { heading: '1. Information We Collect', body: 'We collect information you provide directly to us, such as when you fill out our contact form (name, email address, company, and message). We also collect technical data such as IP addresses, browser type, and pages visited through standard web analytics tools.' },
        { heading: '2. How We Use Your Information', body: 'We use collected information to respond to your enquiries, provide our services, improve our website, send service-related communications, and comply with legal obligations. We do not sell, trade, or rent your personal information to third parties.' },
        { heading: '3. Data Security', body: 'We implement industry-standard security measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. This includes encrypted connections (HTTPS), access controls, and regular security reviews.' },
        { heading: '4. Cookies', body: 'Our website uses cookies to enhance your experience. You can control cookie settings through your browser. For more detail, please see our Cookie Policy.' },
        { heading: '5. Your Rights', body: 'You have the right to access, correct, or delete your personal data held by us. To exercise any of these rights, please contact us at contact@lynqiq.com.' },
        { heading: '6. Contact', body: 'If you have questions about this Privacy Policy, please contact us at contact@lynqiq.com or write to us at GTC Towers, Nairobi, Kenya.' },
      ]}
    />
  )
}

export function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="April 2026"
      sections={[
        { heading: '1. Acceptance of Terms', body: 'By accessing or using the LynqIQ website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.' },
        { heading: '2. Services', body: 'LynqIQ provides technology consulting, software development, data science, and IT support services. The scope, deliverables, and commercial terms of each engagement are defined in individual service agreements.' },
        { heading: '3. Intellectual Property', body: 'All content on the LynqIQ website — including text, graphics, logos, and code — is the property of LynqIQ or its content suppliers and is protected by applicable intellectual property laws.' },
        { heading: '4. Limitation of Liability', body: 'LynqIQ shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or website. Our total liability in any matter arising out of or related to these terms shall not exceed the amounts paid by you for the relevant service.' },
        { heading: '5. Governing Law', body: 'These Terms shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes shall be subject to the exclusive jurisdiction of the courts of Kenya.' },
        { heading: '6. Changes to Terms', body: 'We reserve the right to modify these Terms at any time. We will notify users of significant changes. Your continued use of our services following any changes constitutes your acceptance of the updated terms.' },
      ]}
    />
  )
}

export function Cookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      lastUpdated="April 2026"
      sections={[
        { heading: 'What Are Cookies?', body: 'Cookies are small text files stored on your device when you visit a website. They are widely used to make websites function efficiently and to provide reporting information to site owners.' },
        { heading: 'How We Use Cookies', body: 'We use strictly necessary cookies to ensure the website operates correctly, and analytics cookies (such as Google Analytics) to understand how visitors interact with our site so we can improve it. We do not use advertising or tracking cookies.' },
        { heading: 'Types of Cookies We Use', body: 'Strictly necessary cookies: required for core website functionality and cannot be disabled. Analytics cookies: help us understand user behaviour in aggregate, anonymised form. These are only set with your consent.' },
        { heading: 'Managing Cookies', body: 'You can control and/or delete cookies through your browser settings. Disabling cookies may affect some functionality of our website. Most browsers allow you to refuse cookies or to alert you when cookies are being sent.' },
        { heading: 'Contact', body: 'If you have questions about our use of cookies, please contact us at contact@lynqiq.com.' },
      ]}
    />
  )
}
