import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const PARTNER_APPLICATION_API = 'https://api.ryva.health/api/partner_applications';

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        'expired-callback'?: () => void;
      }) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

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
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const onTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  useEffect(() => {
    const renderWidget = () => {
      if (turnstileRef.current && window.turnstile && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          // TODO: Replace with real Turnstile site key in production
          sitekey: '0x4AAAAAACyx_PXcXB2w_c1E',
          callback: onTurnstileVerify,
          'expired-callback': () => setTurnstileToken(null),
        });
      }
    };

    // If turnstile script is already loaded, render immediately
    if (window.turnstile) {
      renderWidget();
    } else {
      // Wait for the script to load
      const interval = setInterval(() => {
        if (window.turnstile) {
          renderWidget();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [onTurnstileVerify]);

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
    if (!validate()) {
      setError('Please fix the highlighted fields below.');
      return;
    }
    if (!agreedToTerms) {
      setError('Please agree to the Partner Program Agreement.');
      return;
    }
    if (!turnstileToken) {
      setError('Please complete the CAPTCHA verification below.');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(PARTNER_APPLICATION_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
          'X-Turnstile-Token': turnstileToken,
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          platform: formData.platform,
          handle: formData.handle.trim(),
          follower_count: parseInt(formData.followers, 10) || 0,
          message: formData.message.trim(),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        return;
      }

      let message = 'Something went wrong. Please try again.';
      try {
        const data = await res.json();
        if (typeof data?.error === 'string') {
          message = data.error === 'CAPTCHA required' || data.error === 'CAPTCHA failed'
            ? 'CAPTCHA verification failed. Please refresh and try again.'
            : data.error;
        }
      } catch {
        /* keep default message */
      }
      setError(message);

      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken(null);
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
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

                <div ref={turnstileRef} style={{ marginBottom: '16px' }} />

                <button
                  type="submit"
                  className="btn btn--primary btn--lg pf-submit"
                  disabled={submitting || !agreedToTerms || !turnstileToken}
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
                {!turnstileToken && agreedToTerms && (
                  <p className="pf-field-error" style={{ marginTop: '8px' }}>
                    Complete the CAPTCHA above to enable submit.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;
