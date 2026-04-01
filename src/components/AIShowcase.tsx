import React from 'react';
import { motion } from 'framer-motion';

const AIShowcase: React.FC = () => {
  return (
    <section className="ai-showcase" id="ai">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">AI-Powered</span>
          <h2 className="section-title">Your personal nutrition AI</h2>
          <p className="section-subtitle">
            An AI partner that learns your dietary goals, health markers, and preferences — 
            then gives advice tailored specifically to you.
          </p>
        </motion.div>

        <div className="ai-showcase__content">
          <motion.div
            className="ai-showcase__phone"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="screenshot-phone">
              <div className="screenshot-phone__notch" />
              <img
                src="/screenshots/ai-chat.png"
                alt="AI Partner showing personalized nutrition knowledge"
                className="screenshot-phone__screen"
              />
            </div>
          </motion.div>

          <motion.div
            className="ai-showcase__details"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="ai-feature">
              <div className="ai-feature__icon" style={{ background: '#4CAF5020', color: '#4CAF50' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z" />
                </svg>
              </div>
              <div>
                <h4 className="ai-feature__title">Remembers You</h4>
                <p className="ai-feature__desc">Learns your diet goals, restrictions, allergies, and health markers over time. Gets smarter with every conversation.</p>
              </div>
            </div>

            <div className="ai-feature">
              <div className="ai-feature__icon" style={{ background: '#8B5CF620', color: '#8B5CF6' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="ai-feature__title">Health Document Analysis</h4>
                <p className="ai-feature__desc">Upload lab results or doctor reports. The AI extracts health data and adjusts nutrition advice based on your real biomarkers.</p>
              </div>
            </div>

            <div className="ai-feature">
              <div className="ai-feature__icon" style={{ background: '#F59E0B20', color: '#F59E0B' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h4 className="ai-feature__title">Ask Anything</h4>
                <p className="ai-feature__desc">"Is this good for my keto diet?" "What should I eat before a workout?" Get instant, personalized answers.</p>
              </div>
            </div>

            <div className="ai-feature">
              <div className="ai-feature__icon" style={{ background: '#EC489920', color: '#EC4899' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h4 className="ai-feature__title">Custom Food Rules</h4>
                <p className="ai-feature__desc">Tell it "I'm cutting sugar this month" or "Extra carbs for marathon training" — it adapts scoring to your rules.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;
