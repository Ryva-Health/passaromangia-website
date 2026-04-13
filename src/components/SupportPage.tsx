import React from 'react';

const SupportPage: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="legal-page__container">
        <h1>Support</h1>

        <h2>Contact Us</h2>
        <p>
          Have a question, found a bug, or need help with Ryva? We're here to help.
        </p>
        <p>
          Email us at <a href="mailto:support@ryva.health">support@ryva.health</a>
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>How do I scan a product?</h3>
        <p>
          Open the app and tap the Scan tab. Point your camera at any food product barcode. Ryva will instantly show you a personalized health score and detailed analysis.
        </p>

        <h3>What does my score mean?</h3>
        <p>
          Your score (0-100) is personalized to your diet goals and preferences. It factors in nutritional quality, additives, processing level, and your dietary restrictions. A higher score means the product is a better fit for you.
        </p>

        <h3>How do I set up my diet goals?</h3>
        <p>
          Go to the Profile tab and complete the onboarding flow. You can set your diet goal, target macros, allergies, and avoided ingredients. You can also tell the AI chat what matters to you and it will adjust your scoring priorities.
        </p>

        <h3>What is Ryva Premium?</h3>
        <p>
          Ryva Premium unlocks unlimited AI nutrition chat, ingredient label OCR scanning, health document analysis, additive deep-dive details, and unlimited scan history. You can subscribe from the Profile tab.
        </p>

        <h3>How do I cancel my subscription?</h3>
        <p>
          Subscriptions are managed through Apple. Go to Settings &gt; Apple ID &gt; Subscriptions on your iPhone, find Ryva, and tap Cancel Subscription.
        </p>

        <h3>How do I delete my account?</h3>
        <p>
          Go to the Profile tab, scroll to the bottom, and tap "Delete Account." This will delete all your data from our servers and your device.
        </p>

        <h3>Is my health data safe?</h3>
        <p>
          Yes. Your health data is stored encrypted on your device. We do not sell or share your data with third parties. All API calls go through our secure proxy with certificate pinning. See our <a href="/privacy">Privacy Policy</a> for full details.
        </p>

        <h3>A product I scanned isn't in your database. What can I do?</h3>
        <p>
          When you scan a product that's not found, you'll see an option to contribute it. Take photos of the front label and ingredients list, and we'll add it to our database. You can also scan the ingredient label directly for instant analysis.
        </p>

        <h2>System Requirements</h2>
        <p>
          Ryva requires iOS 17.0 or later and an iPhone with a camera for barcode scanning.
        </p>
      </div>
    </div>
  );
};

export default SupportPage;
