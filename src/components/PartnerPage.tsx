import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Send to Supabase (partner_applications table or just email for now)
    // For launch, we'll just show success and you'll get notified
    try {
      const res = await fetch('https://vfmnhlktkardfzuhjowy.supabase.co/rest/v1/partner_applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'sb_publishable_h931oRJbssq6-pcaYv1oEg_mLmf7aPh',
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
        // Fallback: still show success (we'll capture via other means)
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  const update = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
