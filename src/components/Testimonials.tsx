import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Wellness Coach',
    text: "Ryva completely changed how I shop. I had no idea how many hidden additives were in my 'healthy' snacks. Now I scan everything!",
    rating: 5,
    color: '#4CAF50',
  },
  {
    name: 'James L.',
    role: 'Busy Parent',
    text: "The Instacart integration is a game-changer. I scan, find a healthier option, and order it for delivery — all in under 30 seconds.",
    rating: 5,
    color: '#8B5CF6',
  },
  {
    name: 'Priya K.',
    role: 'Nutritionist',
    text: "I recommend this app to all my clients. The AI health coach gives surprisingly accurate and personalized advice. Truly impressive tech.",
    rating: 5,
    color: '#F59E0B',
  },
  {
    name: 'Marcus D.',
    role: 'Fitness Enthusiast',
    text: "The menu scanner is incredible. I used it at a restaurant last week and it helped me pick a meal that actually fit my macros. Love it.",
    rating: 5,
    color: '#EC4899',
  },
  {
    name: 'Emily R.',
    role: 'Food Blogger',
    text: "Finally an app that makes ingredient labels understandable. The additive database is so well done — plain English explanations for everything.",
    rating: 5,
    color: '#06B6D4',
  },
  {
    name: 'Tom W.',
    role: 'Health-Conscious Shopper',
    text: "I've been using Ryva for a month and my grocery cart is completely transformed. Healthier choices without spending hours researching.",
    rating: 5,
    color: '#4CAF50',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">What our users say</h2>
          <p className="section-subtitle">
            Join thousands who are already eating smarter with Ryva.
          </p>
        </motion.div>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="testimonial-card__stars">
                {'★'.repeat(t.rating)}
              </div>
              <p className="testimonial-card__text">"{t.text}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" style={{ background: t.color }}>
                  {t.name[0]}
                </div>
                <div>
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__role">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
