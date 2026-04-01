import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="legal-page__container">
        <h1>Terms of Service</h1>
        <p className="legal-page__updated">Last updated: March 29, 2026</p>

        <h2>Agreement to Terms</h2>
        <p>
          By downloading, installing, or using Ryva ("the app"), a product of Passaro Technologies LLC,, you agree to be bound by these 
          Terms of Service. If you do not agree, do not use the app.
        </p>

        <h2>Description of Service</h2>
        <p>
          Ryva is a food health scanning and nutrition analysis app. It provides:
        </p>
        <ul>
          <li>Barcode scanning with health scoring and ingredient analysis</li>
          <li>AI-powered nutrition advice and recommendations</li>
          <li>Restaurant menu scanning and analysis</li>
<li>Nutrition logging and tracking</li>
          <li>Health document analysis</li>
        </ul>

        <h2>Disclaimer — Not Medical Advice</h2>
        <p>
          <strong>Ryva is not a medical device and does not provide medical advice.</strong> The 
          health scores, nutrition analysis, AI recommendations, and all other information provided by the 
          app are for informational and educational purposes only.
        </p>
        <p>
          The app should not be used as a substitute for professional medical advice, diagnosis, or treatment. 
          Always consult a qualified healthcare provider before making dietary changes, especially if you have 
          allergies, medical conditions, or are taking medication.
        </p>
        <p>
          Health scores and product analysis are based on publicly available data from Open Food Facts and 
          AI-generated assessments. These may not be complete, accurate, or up-to-date. Product formulations 
          change frequently — always check the actual product label.
        </p>

        <h2>Allergy Disclaimer</h2>
        <p>
          <strong>Do not rely on Ryva for allergy safety.</strong> While we display allergen 
          information from product databases, this data may be incomplete or inaccurate. Cross-contamination 
          risks are not tracked. If you have food allergies, always read the physical product label and 
          contact the manufacturer directly.
        </p>

        <h2>AI-Generated Content</h2>
        <p>
          Ryva uses artificial intelligence (powered by OpenAI) to generate nutrition advice, 
          menu analysis, and shopping suggestions. AI-generated content may contain errors, inaccuracies, 
          or outdated information. It should be treated as a helpful starting point, not as authoritative 
          nutritional guidance.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          The app integrates with third-party services including:
        </p>
        <ul>
          <li><strong>Open Food Facts</strong> — open-source product database (openfoodfacts.org)</li>
          <li><strong>OpenAI</strong> — AI language model provider (openai.com)</li>
          <li><strong>Instacart</strong> — grocery delivery service (instacart.com)</li>
          <li><strong>Apple HealthKit</strong> — health data framework</li>
        </ul>
        <p>
          We are not responsible for the availability, accuracy, or policies of these services. Your use 
          of these services is subject to their respective terms and conditions.
        </p>

        <h2>Subscriptions</h2>
        <p>
          Ryva offers premium features through auto-renewable subscriptions. Subscription details:
        </p>
        <ul>
          <li>Payment is charged to your Apple ID account at confirmation of purchase</li>
          <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period</li>
          <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
          <li>You can manage and cancel subscriptions in your Apple ID Account Settings</li>
          <li>Any unused portion of a free trial period is forfeited upon purchasing a subscription</li>
        </ul>

        <h2>Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the app for any unlawful purpose</li>
          <li>Attempt to reverse-engineer, decompile, or extract source code from the app</li>
          <li>Use the AI features to generate harmful, misleading, or inappropriate content</li>
          <li>Resell, redistribute, or commercially exploit the app or its content</li>
          <li>Abuse API rate limits or interfere with the app's services</li>
        </ul>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Ryva and its developers shall not be liable for 
          any indirect, incidental, special, consequential, or punitive damages resulting from your use of 
          or inability to use the app. This includes, but is not limited to, damages arising from:
        </p>
        <ul>
          <li>Reliance on health scores, nutrition data, or AI-generated advice</li>
          <li>Allergic reactions or health issues related to food choices</li>
          <li>Inaccurate product data or missing allergen information</li>
          <li>Third-party service outages or errors</li>
          <li>Data loss on your device</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          Ryva, its design, code, and original content are the property of the developers. 
          Product data is sourced from Open Food Facts under the Open Database License (ODbL).
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use of the app after changes 
          constitutes acceptance of the new terms. Material changes will be communicated through app updates.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of the State of Florida, United States, without regard to 
          conflict of law provisions.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these terms, contact us at{' '}
          <a href="mailto:support@ryva.health">support@ryva.health</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
