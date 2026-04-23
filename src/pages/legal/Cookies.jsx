import PageHero from '../../components/PageHero'
export default function Cookies() {
  return (
    <div>
      <PageHero label="Legal" title="Cookie Policy" subtitle="How we use cookies and similar technologies on our website." />
      <section className="section"><div className="container" style={{ maxWidth: '760px' }}>
        <div style={{ color: 'var(--color-text-2)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '16px' }}><strong style={{ color: 'var(--color-text)' }}>Last updated: January 2025</strong></p>
          <p style={{ marginBottom: '24px' }}>We use cookies to improve your experience on our website. This policy explains what cookies we use and why.</p>
          <p>For questions, contact us at <a href="mailto:contact@lynqiq.com" style={{ color: 'var(--color-accent)' }}>contact@lynqiq.com</a>.</p>
        </div>
      </div></section>
    </div>
  )
}
