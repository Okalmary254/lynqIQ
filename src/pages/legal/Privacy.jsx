import PageHero from '../../components/PageHero'
export default function Privacy() {
  return (
    <div>
      <PageHero label="Legal" title="Privacy Policy" subtitle="How we collect, use, and protect your personal information." />
      <section className="section"><div className="container" style={{ maxWidth: '760px' }}>
        <div style={{ color: 'var(--color-text-2)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '16px' }}><strong style={{ color: 'var(--color-text)' }}>Last updated: January 2025</strong></p>
          <p style={{ marginBottom: '24px' }}>This policy governs your use of LynqIQ services at lynqiq.vercel.app. By using our services, you agree to these terms.</p>
          <p>For questions, contact us at <a href="mailto:contact@lynqiq.com" style={{ color: 'var(--color-accent)' }}>contact@lynqiq.com</a>.</p>
        </div>
      </div></section>
    </div>
  )
}
