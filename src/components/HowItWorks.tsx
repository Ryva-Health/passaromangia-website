import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Scan',
    description: 'Point your camera at any barcode. Instantly identify the product and see its NutriScore rating.',
    screenshot: '/screenshots/scan-result.png',
    alt: 'Scanning a Lactaid milk barcode with instant results',
  },
  {
    number: '02',
    title: 'Analyze',
    description: 'Get a detailed health score out of 100, macro breakdown, additive warnings, and ingredient analysis.',
    screenshot: '/screenshots/product-score.png',
    alt: 'Product details showing health score of 75 with macro breakdown',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">How It Works</span>
          <h2 className="section-title">Two steps to healthier eating</h2>
          <p className="section-subtitle">
            It takes less than 10 seconds to make a smarter food choice.
          </p>
        </motion.div>
        <div className="steps">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className={`step ${i % 2 !== 0 ? 'step--reverse' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="step__content">
                <span className="step__number">{step.number}</span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__desc">{step.description}</p>
              </div>
              <div className="step__phone">
                <div className="screenshot-phone">
                  <div className="screenshot-phone__notch" />
                  <img
                    src={step.screenshot}
                    alt={step.alt}
                    className="screenshot-phone__screen"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
