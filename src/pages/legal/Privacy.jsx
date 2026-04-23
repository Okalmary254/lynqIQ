import PageHero from '../../components/PageHero'

export default function Privacy() {
  return (
    <div>
      <PageHero 
        label="Legal" 
        title="Privacy Policy" 
        subtitle="How LynqIQ collects, uses, and protects your data." 
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
              This Privacy Policy explains how LynqIQ (“we”, “our”, or “us”) collects, uses, and safeguards your information when you use our platform.
            </p>

            <h3 style={{ color: 'var(--color-text)' }}>1. Information We Collect</h3>
            <p>
              We collect information necessary to operate and improve our services:
            </p>
            <ul>
              <li>Personal data (name, email, contact details)</li>
              <li>Account credentials (securely encrypted)</li>
              <li>Technical data (IP address, browser, device info)</li>
              <li>Usage data (pages visited, interactions, session activity)</li>
            </ul>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>2. How We Use Information</h3>
            <p>
              Your data is used to power functionality and improve performance:
            </p>
            <ul>
              <li>Provide and maintain services</li>
              <li>Personalize user experience</li>
              <li>Improve analytics and system performance</li>
              <li>Enhance security and prevent fraud</li>
              <li>Communicate updates and important notices</li>
            </ul>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>3. Data Sharing</h3>
            <p>
              We do not sell your data. We may share it only with:
            </p>
            <ul>
              <li>Trusted service providers (hosting, analytics, payments)</li>
              <li>Legal authorities when required by law</li>
              <li>Business transfers (e.g., merger or acquisition)</li>
            </ul>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>4. Data Security</h3>
            <p>
              We implement industry-standard security measures including encryption, secure authentication, and continuous monitoring. No system is completely secure, but we actively mitigate risks.
            </p>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>5. Data Retention</h3>
            <p>
              We retain data only as long as necessary for service delivery, legal compliance, and dispute resolution. Data is securely deleted or anonymized when no longer needed.
            </p>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>6. Your Rights</h3>
            <p>
              Depending on your location, you may have the right to:
            </p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
              <li>Object to certain processing activities</li>
            </ul>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>7. Cookies</h3>
            <p>
              We use cookies to maintain sessions, analyze traffic, and enhance usability. You can control cookies through your browser settings.
            </p>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>8. Third-Party Links</h3>
            <p>
              Our platform may contain links to external websites. We are not responsible for their privacy practices.
            </p>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>9. Changes to This Policy</h3>
            <p>
              We may update this policy periodically. Significant changes will be communicated via the platform or email.
            </p>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>10. Contact</h3>
            <p>
              For questions or data requests, contact us at:{' '}
              <a href="mailto:info@lynqiq.com" style={{ color: 'var(--color-accent)' }}>
                info@lynqiq.com
              </a>
            </p>

          </div>
        </div>
      </section>
    </div>
  )
}