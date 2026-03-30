import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '100+', label: 'Additives Tracked', icon: '🧪' },
  { value: 'AI', label: 'Powered Analysis', icon: '🤖' },
  { value: 'Instant', label: 'Barcode Lookup', icon: '⚡' },
  { value: '1-Tap', label: 'Instacart Orders', icon: '🛒' },
];

const Stats: React.FC = () => {
  return (
    <section className="stats">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Why PassaroMangia</span>
          <h2 className="section-title">Trusted by health-conscious shoppers</h2>
        </motion.div>
        <div className="stats__grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="stat-card__icon">{stat.icon}</span>
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
