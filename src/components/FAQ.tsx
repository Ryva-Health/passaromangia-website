import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Is Ryva free?',
    answer:
      'Ryva offers a generous free tier that includes barcode scanning and basic health scores. Premium features like the AI Health Coach, Menu Scanner, and Instacart integration are available with a subscription.',
  },
  {
    question: 'How does the health scoring work?',
    answer:
      'Our AI analyzes nutritional data, ingredient lists, and additive information to generate a comprehensive health score from 1–10. We factor in sugar content, sodium levels, presence of harmful additives, and overall nutritional density.',
  },
  {
    question: 'What data do you collect?',
    answer:
      'We take privacy seriously. We only collect the product scans you choose to save and basic app usage data to improve the experience. We never sell your data to third parties. You can delete your data at any time from the app settings.',
  },
  {
    question: 'Does it work with any barcode?',
    answer:
      'Ryva supports UPC and EAN barcodes found on most packaged food products worldwide. Our database covers millions of products and is constantly growing. If a product isn\'t found, you can submit it and we\'ll add it within 24 hours.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="section-container section-container--narrow">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">FAQ</span>
          <h2 className="section-title">Frequently asked questions</h2>
        </motion.div>
        <div className="faq__list">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <button
                className="faq-item__question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <ChevronDownIcon
                  className={`faq-item__chevron ${openIndex === i ? 'faq-item__chevron--open' : ''}`}
                  width={20}
                  height={20}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className="faq-item__answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
