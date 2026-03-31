import React from 'react';
import { motion } from 'framer-motion';

const PricingPage: React.FC = () => {
  return (
    <div className="pricing-page">
      <div className="pricing-page__container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Pricing</span>
          <h1 className="pricing-page__title">Simple, transparent pricing</h1>
          <p className="section-subtitle">
            Start free. Upgrade when you're ready for the full experience.
          </p>
        </motion.div>

        <div className="pricing-cards">
          <motion.div
            className="pricing-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="pricing-card__header">
              <h3 className="pricing-card__name">Free</h3>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">$0</span>
                <span className="pricing-card__period">forever</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li className="pricing-card__feature">
                <span className="feature-check">✓</span>
                Unlimited barcode scanning
              </li>
              <li className="pricing-card__feature">
                <span className="feature-check">✓</span>
                Product health scores
              </li>
              <li className="pricing-card__feature">
                <span className="feature-check">✓</span>
                Ingredient & additive warnings
              </li>
              <li className="pricing-card__feature">
                <span className="feature-check">✓</span>
                NutriScore & NOVA ratings
              </li>
              <li className="pricing-card__feature">
                <span className="feature-check">✓</span>
                Cosmetic product scanning
              </li>
              <li className="pricing-card__feature">
                <span className="feature-check">✓</span>
                Scan history (last 10)
              </li>
              <li className="pricing-card__feature pricing-card__feature--disabled">
                <span className="feature-x">✕</span>
                AI nutrition partner
              </li>
              <li className="pricing-card__feature pricing-card__feature--disabled">
                <span className="feature-x">✕</span>
                Smart shopping lists
              </li>
              <li className="pricing-card__feature pricing-card__feature--disabled">
                <span className="feature-x">✕</span>
                Health document upload
              </li>
            </ul>
            <a href="https://apps.apple.com/app/ryva/id6761320113" className="btn btn--outline btn--lg pricing-card__btn">
              Download Free
            </a>
          </motion.div>

          <motion.div
            className="pricing-card pricing-card--featured"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="pricing-card__badge">Most Popular</div>
            <div className="pricing-card__header">
              <h3 className="pricing-card__name">Premium</h3>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">$19.99</span>
                <span className="pricing-card__period">/year</span>
              </div>
              <p className="pricing-card__subprice">That's just $1.67/month</p>
            </div>
            <ul className="pricing-card__features">
              <li className="pricing-card__feature">
                <span className="feature-check feature-check--gold">✓</span>
                Everything in Free, plus:
              </li>
              <li className="pricing-card__feature">
                <span className="feature-check feature-check--gold">✓</span>
                AI nutrition partner (knows your health data)
              </li>
              <li className="pricing-card__feature">
                <span className="feature-check feature-check--gold">✓</span>
                Upload lab results & health documents
              </li>
              <li className="pricing-card__feature">
                <span className="feature-check feature-check--gold">✓</span>
                Personalized scoring (based on YOUR body)
              </li>
              <li className="pricing-card__feature">
                <span className="feature-check feature-check--gold">✓</span>
                Smart shopping lists + AI list builder
              </li>
              <li className="pricing-card__feature">
                <span className="feature-check feature-check--gold">✓</span>
                Healthier alternatives with Instacart ordering
              </li>
              <li className="pricing-card__feature">
                <span className="feature-check feature-check--gold">✓</span>
                Unlimited scan history
              </li>
              <li className="pricing-card__feature">
                <span className="feature-check feature-check--gold">✓</span>
                Custom food rules
              </li>
              <li className="pricing-card__feature">
                <span className="feature-check feature-check--gold">✓</span>
                Data export (CSV/JSON)
              </li>
            </ul>
            <a href="https://apps.apple.com/app/ryva/id6761320113" className="btn btn--primary btn--lg pricing-card__btn">
              Start 7-Day Free Trial
            </a>
            <p className="pricing-card__trial-note">Free trial with referral code. Cancel anytime.</p>
          </motion.div>
        </div>

        <motion.div
          className="pricing-faq"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Frequently asked</h3>
          <div className="pricing-faq__item">
            <strong>Can I try Premium for free?</strong>
            <p>Yes! Use a partner referral code during signup to get a 7-day free trial of all Premium features.</p>
          </div>
          <div className="pricing-faq__item">
            <strong>How does billing work?</strong>
            <p>Premium is billed annually at $19.99/year through the App Store. Your subscription auto-renews unless cancelled at least 24 hours before the renewal date.</p>
          </div>
          <div className="pricing-faq__item">
            <strong>Can I cancel anytime?</strong>
            <p>Absolutely. Cancel through your Apple ID settings. You'll keep Premium access until the end of your billing period.</p>
          </div>
          <div className="pricing-faq__item">
            <strong>Is my data safe?</strong>
            <p>Yes. All your health data, scan history, and AI conversations are stored on your device. We never upload your personal data to our servers.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
