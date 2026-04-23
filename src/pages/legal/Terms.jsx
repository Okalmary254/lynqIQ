import PageHero from '../../components/PageHero'
export default function Terms() {
  return (
    <div>
      <PageHero label="Legal" title="Terms of Service" subtitle="The terms and conditions governing your use of LynqIQ services." />
      <section className="section"><div className="container" style={{ maxWidth: '760px' }}>
        <div style={{ color: 'var(--color-text-2)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '16px' }}><strong style={{ color: 'var(--color-text)' }}>Last updated: January 2025</strong></p>
          <p style={{ marginBottom: '24px' }}>By accessing or using LynqIQ services, you agree to be bound by these Terms of Service.</p>
          <p>For questions, contact us at <a href="mailto:contact@lynqiq.com" style={{ color: 'var(--color-accent)' }}>contact@lynqiq.com</a>.</p>
        </div>
      </div></section>
    </div>
  )
}
