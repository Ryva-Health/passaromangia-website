import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ValidationErrors {
  name?: string;
  email?: string;
  handle?: string;
}

const PartnerPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    platform: 'tiktok',
    handle: '',
    followers: '',
    message: '',
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const validate = (): boolean => {
    const errors: ValidationErrors = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const handle = formData.handle.trim();

    if (!name || name.length < 2 || name.length > 100) {
      errors.name = 'Name must be between 2 and 100 characters.';
    }
    if (!email || !EMAIL_RE.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!handle || handle.length < 3 || handle.length > 200) {
      errors.handle = 'Social handle must be between 3 and 200 characters.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('https://ryva-api.passaromangia.workers.dev/api/supabase/rest/v1/partner_applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-App-Token': 'dce205a532cacb0011ebeed9a7a11acfff487d941a243c4a23ee6513f0689dba',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          platform: formData.platform,
          handle: formData.handle,
          follower_count: parseInt(formData.followers) || 0,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    }
    setSubmitting(false);
  };

  const update = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (validationErrors[field as keyof ValidationErrors]) {
      setValidationErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="partner-page">
        <div className="partner-page__container">
          <motion.div
            className="partner-success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span style={{ fontSize: '4rem' }}>🎉</span>
            <h1>Application Received!</h1>
            <p>Thanks for your interest in partnering with Ryva. We'll review your application and get back to you within 48 hours.</p>
            <a href="/" className="btn btn--primary btn--lg" style={{ marginTop: '24px', display: 'inline-block', textDecoration: 'none' }}>
              Back to Home
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="partner-page">
      <div className="partner-page__container">
        <motion.div
          className="partner-hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Partner Program</span>
          <h1 className="partner-hero__title">Earn $10 for every subscriber you refer</h1>
          <p className="partner-hero__subtitle">
            Join the Ryva partner program. Share your unique code with your audience,
            and earn recurring revenue for every user who subscribes.
          </p>
        </motion.div>

        <div className="partner-grid">
          <motion.div
            className="partner-benefits"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2>Why partner with us?</h2>

            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <div>
                <h3>$10 per subscriber</h3>
                <p>We don't do "affiliate commissions" — we do real partnerships. 50/50 split, and we eat all the fees so you get your full cut. Simple.</p>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🎁</div>
              <div>
                <h3>Exclusive free trial for your audience</h3>
                <p>Your followers get a free trial when they use your code. Easy sell — they try it free, you earn when they stay.</p>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <div>
                <h3>Real-time dashboard</h3>
                <p>Track every referral, conversion, and dollar earned in your personal partner portal. Full transparency.</p>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">💸</div>
              <div>
                <h3>Monthly payouts</h3>
                <p>Get paid via PayPal. Request payouts anytime your balance hits $10.</p>
              </div>
            </div>

            <div className="partner-math">
              <h3>The math</h3>
              <div className="math-grid">
                <div className="math-item">
                  <span className="math-number">1,000</span>
                  <span className="math-label">followers convert</span>
                </div>
                <div className="math-item math-equals">×</div>
                <div className="math-item">
                  <span className="math-number">$10</span>
                  <span className="math-label">per subscriber</span>
                </div>
                <div className="math-item math-equals">=</div>
                <div className="math-item math-result">
                  <span className="math-number">$10,000</span>
                  <span className="math-label">per year</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="partner-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="partner-form-card">
              <h2>Apply to become a partner</h2>
              <p>Fill out the form below and we'll get back to you within 48 hours.</p>

              {error && (
                <div className="pf-error-banner">
                  <p>{error}</p>
                  <button type="button" className="btn btn--secondary" onClick={() => setError(null)}>
                    Try Again
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="pf-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Full name"
                    required
                  />
                  {validationErrors.name && <span className="pf-field-error">{validationErrors.name}</span>}
                </div>

                <div className="pf-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                  {validationErrors.email && <span className="pf-field-error">{validationErrors.email}</span>}
                </div>

                <div className="pf-group">
                  <label>Primary Platform *</label>
                  <select value={formData.platform} onChange={(e) => update('platform', e.target.value)}>
                    <option value="tiktok">TikTok</option>
                    <option value="instagram">Instagram</option>
                    <option value="youtube">YouTube</option>
                    <option value="twitter">X / Twitter</option>
                    <option value="blog">Blog / Website</option>
                    <option value="podcast">Podcast</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="pf-group">
                  <label>Social Handle *</label>
                  <input
                    type="text"
                    value={formData.handle}
                    onChange={(e) => update('handle', e.target.value)}
                    placeholder="@yourhandle"
                    required
                  />
                  {validationErrors.handle && <span className="pf-field-error">{validationErrors.handle}</span>}
                </div>

                <div className="pf-group">
                  <label>Follower Count (approximate)</label>
                  <input
                    type="number"
                    value={formData.followers}
                    onChange={(e) => update('followers', e.target.value)}
                    placeholder="e.g. 10000"
                  />
                </div>

                <div className="pf-group">
                  <label>Why do you want to partner with Ryva?</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell us about your audience and how you'd promote the app..."
                    rows={4}
                  />
                </div>

                <div className="pf-agreement">
                  <label className="pf-checkbox-label">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="pf-checkbox"
                    />
                    <span>
                      I agree to the{' '}
                      <a href="/partner-terms" target="_blank" rel="noopener noreferrer">
                        Partner Program Agreement
                      </a>
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn btn--primary btn--lg pf-submit" disabled={submitting || !agreedToTerms}>
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;
