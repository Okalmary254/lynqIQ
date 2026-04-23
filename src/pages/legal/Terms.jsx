import PageHero from '../../components/PageHero'

export default function Terms() {
  return (
    <div>
      <PageHero 
        label="Legal" 
        title="Terms of Service" 
        subtitle="The terms and conditions governing your use of LynqIQ services." 
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
              By accessing or using LynqIQ, you agree to comply with and be bound by these Terms of Service.
            </p>

            <h3 style={{ color: 'var(--color-text)' }}>1. Use of Services</h3>
            <p>
              LynqIQ provides data-driven tools, analytics, and digital services. You agree to use the platform only for lawful purposes and in accordance with these terms.
            </p>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>2. User Accounts</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Notify us immediately of unauthorized access</li>
              <li>You are liable for actions taken under your account</li>
            </ul>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>3. Acceptable Use</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use the platform for illegal or fraudulent activities</li>
              <li>Attempt to gain unauthorized access to systems</li>
              <li>Interfere with platform performance or security</li>
              <li>Reverse engineer or exploit the system</li>
            </ul>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>4. Intellectual Property</h3>
            <p>
              All content, software, and technology on LynqIQ are owned by or licensed to us and are protected by intellectual property laws. You may not reproduce, distribute, or modify any part without permission.
            </p>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>5. Service Availability</h3>
            <p>
              We strive for continuous availability but do not guarantee uninterrupted service. We may modify, suspend, or discontinue features at any time without notice.
            </p>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>6. Limitation of Liability</h3>
            <p>
              LynqIQ is provided “as is” without warranties of any kind. We are not liable for:
            </p>
            <ul>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Data loss or business interruption</li>
              <li>Unauthorized access or system breaches</li>
            </ul>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>7. Termination</h3>
            <p>
              We may suspend or terminate your access if you violate these terms or engage in harmful behavior toward the platform or other users.
            </p>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>8. Governing Law</h3>
            <p>
              These terms are governed by applicable laws in your jurisdiction, without regard to conflict of law principles.
            </p>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>9. Changes to Terms</h3>
            <p>
              We may update these Terms of Service periodically. Continued use of the platform after changes constitutes acceptance of the revised terms.
            </p>

            <h3 style={{ color: 'var(--color-text)', marginTop: '24px' }}>10. Contact</h3>
            <p>
              For questions, contact us at:{' '}
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