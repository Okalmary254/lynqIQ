import PageHero from '../../components/PageHero'

export default function Cookies() {
  return (
    <div>
      <PageHero 
        label="Legal" 
        title="Cookie Policy" 
        subtitle="How LynqIQ uses cookies and similar technologies." 
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ color: 'var(--color-text-2)', lineHeight: 1.8 }}>

            <p style={{ marginBottom: '16px' }}>
              <strong style={{ color: 'var(--color-text)' }}>
                Last updated: April 2026
              </strong>
            </p>

            <p style={{ marginBottom: '24px' }}>
              This Cookie Policy explains how LynqIQ (“we”, “our”, or “us”) uses cookies and similar technologies to recognize you when you visit our website.
            </p>

            <h3 style={{ color: 'var(--color-text)' }}>1. What Are Cookies</h3>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help websites function efficiently and provide analytical insights.
            </p>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>2. How We Use Cookies</h3>
            <p>
              We use cookies to enable core functionality, enhance performance, and understand user behavior.
            </p>
            <ul>
              <li>Maintain secure user sessions</li>
              <li>Remember user preferences and settings</li>
              <li>Analyze traffic and usage patterns</li>
              <li>Improve overall user experience</li>
            </ul>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>3. Types of Cookies We Use</h3>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for basic functionality and security</li>
              <li><strong>Performance Cookies:</strong> Help us understand how users interact with the platform</li>
              <li><strong>Functional Cookies:</strong> Store preferences and enhance personalization</li>
              <li><strong>Analytics Cookies:</strong> Provide insights for improving services</li>
            </ul>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>4. Third-Party Cookies</h3>
            <p>
              Some cookies may be set by third-party services such as analytics providers. These third parties may collect data in accordance with their own privacy policies.
            </p>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>5. Managing Cookies</h3>
            <p>
              You can control or disable cookies through your browser settings. However, disabling certain cookies may affect the functionality of the website.
            </p>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>6. Updates to This Policy</h3>
            <p>
              We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>7. Contact</h3>
            <p>
              For questions, contact us at:{' '}
              <a href="mailto:contact@lynqiq.com" style={{ color: 'var(--color-accent)' }}>
                contact@lynqiq.com
              </a>
            </p>

          </div>
        </div>
      </section>
    </div>
  )
}