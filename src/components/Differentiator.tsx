import React from 'react';
import { motion } from 'framer-motion';

const Differentiator: React.FC = () => {
  return (
    <section className="differentiator" id="why-us">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Why Ryva</span>
          <h2 className="section-title">The only food app that actually knows you</h2>
          <p className="section-subtitle">
            Other apps give everyone the same generic advice. Ours reads your bloodwork.
          </p>
        </motion.div>

        <div className="diff-grid">
          {/* Main card: Health Document AI */}
          <motion.div
            className="diff-card diff-card--featured"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="diff-card__content">
              <div className="diff-card__badge">🔬 Industry First</div>
              <h3 className="diff-card__title">Upload Your Lab Results</h3>
              <p className="diff-card__desc">
                Upload a photo of your bloodwork, doctor's report, or lab results. Our AI extracts every 
                biomarker — Vitamin D levels, cholesterol, A1C, kidney function, omega-3 — and uses them 
                to personalize every single recommendation.
              </p>
              <p className="diff-card__desc">
                Low on Vitamin D? We'll flag products rich in it. High A1C? We'll warn you about hidden 
                sugars other apps miss. <strong>Your health data stays on your device. Always.</strong>
              </p>
              <ul className="diff-card__list">
                <li>✓ Extracts 50+ biomarkers from lab reports</li>
                <li>✓ Adjusts every food score to your body</li>
                <li>✓ 100% on-device — never uploaded to servers</li>
                <li>✓ Updates recommendations as your health changes</li>
              </ul>
            </div>
            <div className="diff-card__phone">
              <div className="screenshot-phone">
                <div className="screenshot-phone__notch" />
                <img
                  src="/screenshots/health-context.png"
                  alt="Health context showing extracted biomarkers from lab results"
                  className="screenshot-phone__screen"
                />
              </div>
            </div>
          </motion.div>

          {/* Comparison grid */}
          <motion.div
            className="diff-comparison"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="diff-comparison__title">Other apps vs Ryva</h3>
            <div className="diff-comparison__grid">
              <div className="diff-row diff-row--header">
                <span></span>
                <span className="diff-row__them">Other Apps</span>
                <span className="diff-row__us">Ryva</span>
              </div>
              <div className="diff-row">
                <span className="diff-row__label">Health scoring</span>
                <span className="diff-row__them">Same score for everyone</span>
                <span className="diff-row__us">Personalized to YOUR body</span>
              </div>
              <div className="diff-row">
                <span className="diff-row__label">AI advice</span>
                <span className="diff-row__them">Generic tips</span>
                <span className="diff-row__us">Knows your bloodwork, goals & history</span>
              </div>
              <div className="diff-row">
                <span className="diff-row__label">Lab results</span>
                <span className="diff-row__them">Not supported</span>
                <span className="diff-row__us">Upload & auto-extract biomarkers</span>
              </div>
              <div className="diff-row">
                <span className="diff-row__label">Memory</span>
                <span className="diff-row__them">Forgets you every session</span>
                <span className="diff-row__us">Learns & remembers over time</span>
              </div>
              <div className="diff-row">
                <span className="diff-row__label">Your data</span>
                <span className="diff-row__them">Stored on their servers</span>
                <span className="diff-row__us">100% on-device. Private by design.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;
