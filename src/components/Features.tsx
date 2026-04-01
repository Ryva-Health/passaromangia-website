import React from 'react';
import { motion } from 'framer-motion';
import {
  QrCodeIcon,
  SparklesIcon,
  CameraIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: QrCodeIcon,
    title: 'Barcode Scanner',
    description: 'Scan any product for instant health analysis with our lightning-fast barcode recognition.',
    color: 'var(--color-primary)',
  },
  {
    icon: SparklesIcon,
    title: 'AI Health Coach',
    description: 'Get personalized nutrition advice powered by AI that learns your dietary goals.',
    color: 'var(--color-accent)',
  },
  {
    icon: CameraIcon,
    title: 'Menu Scanner',
    description: 'Photograph restaurant menus for dish-by-dish health ratings before you order.',
    color: '#8B5CF6',
  },
{
    icon: BeakerIcon,
    title: 'Additive Database',
    description: 'Know exactly what those ingredients really are — 100+ additives decoded in plain English.',
    color: '#06B6D4',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const Features: React.FC = () => {
  return (
    <section className="features" id="features">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Features</span>
          <h2 className="section-title">Everything you need to eat healthier</h2>
          <p className="section-subtitle">
            Powerful tools that make healthy living effortless, from scanning to insights.
          </p>
        </motion.div>
        <div className="features__grid">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="feature-card__icon" style={{ background: `${feature.color}15`, color: feature.color }}>
                <feature.icon width={28} height={28} />
              </div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
