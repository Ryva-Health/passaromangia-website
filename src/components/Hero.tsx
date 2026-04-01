import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="download">
      <div className="hero__bg-blur hero__bg-blur--1" />
      <div className="hero__bg-blur hero__bg-blur--2" />
      <div className="hero__container">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img src="/ryva-logo-text.png" alt="Ryva" className="hero__logo" />
          <span className="hero__badge">AI-Powered Food Intelligence</span>
          <h1 className="hero__title">
            Know What You're <br />
            <span className="hero__title--accent">Really Eating</span>
          </h1>
          <p className="hero__subtitle">
            Scan any barcode for an instant health score, uncover hidden additives,
            and get AI-powered recommendations for healthier alternatives — all in one tap.
          </p>
          <div className="hero__actions">
            <a href="https://apps.apple.com" className="btn btn--primary btn--lg">
              <svg className="btn__apple-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </a>
          </div>
          <div className="hero__social-proof">
            <div className="hero__avatars">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="hero__avatar" style={{ background: `hsl(${150 + i * 20}, 60%, ${65 + i * 3}%)` }}>
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="hero__social-text">
              Loved by <strong>health-conscious</strong> shoppers
            </span>
          </div>
        </motion.div>
        <motion.div
          className="hero__phone"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="hero__phone-glow" />
          <div className="screenshot-phone screenshot-phone--hero">
            <div className="screenshot-phone__notch" />
            <img
              src="/screenshots/scan-result.png"
              alt="Ryva scanning a product barcode"
              className="screenshot-phone__screen"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
