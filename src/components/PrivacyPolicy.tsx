import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="legal-page__container">
        <h1>Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: March 29, 2026</p>

        <h2>Overview</h2>
        <p>
          Ryva ("we", "our", "the app"), a product of Passaro Technologies LLC, is committed to protecting your privacy.
          This policy explains what data we collect, how we use it, and your rights regarding that data.
        </p>

        <h2>Data We Collect</h2>
        <h3>Data stored on your device (local only)</h3>
        <ul>
          <li><strong>Scan history</strong> — barcodes you scan and product information retrieved from Open Food Facts</li>
          <li><strong>Nutrition logs</strong> — meals and servings you manually log</li>
          <li><strong>User profile</strong> — dietary goals, restrictions, body stats, and preferences you enter</li>
          <li><strong>AI chat history</strong> — conversations with the AI nutrition partner</li>
          <li><strong>Shopping lists</strong> — items generated or added by you</li>
          <li><strong>Food rules</strong> — custom rules you create</li>
          <li><strong>Achievements</strong> — scan streaks and earned badges</li>
        </ul>
        <p>
          This data is stored locally on your device using Apple's SwiftData framework.
          We do not have access to it, and it is not transmitted to our servers.
        </p>

        <h3>Data sent to third-party services</h3>
        <ul>
          <li>
            <strong>Open Food Facts API</strong> — when you scan a barcode, we send the barcode number to 
            Open Food Facts (openfoodfacts.org) to retrieve product information. Open Food Facts is an 
            open-source, non-profit food database. See their{' '}
            <a href="https://world.openfoodfacts.org/terms-of-use" target="_blank" rel="noopener noreferrer">
              privacy policy
            </a>.
          </li>
          <li>
            <strong>OpenAI API</strong> — AI chat messages, shopping list generation requests, and menu 
            analysis requests are sent to OpenAI's API for processing. These requests include the text 
            you provide and relevant context (dietary profile, food rules). OpenAI's data usage policy 
            applies. See{' '}
            <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
              OpenAI's privacy policy
            </a>.
          </li>
          <li>
            <strong>Instacart API</strong> (optional) — if you use the "Order on Instacart" feature, your 
            shopping list items are sent to Instacart to create an order page. See{' '}
            <a href="https://www.instacart.com/privacy" target="_blank" rel="noopener noreferrer">
              Instacart's privacy policy
            </a>.
          </li>
          <li>
            <strong>Apple HealthKit</strong> (optional) — if you enable HealthKit integration, nutrition 
            data from logged meals is written to Apple Health. We only write data; we do not read from 
            HealthKit. This data stays on your device and in your iCloud Health data.
          </li>
        </ul>

        <h2>Data We Do NOT Collect</h2>
        <ul>
          <li>We do not collect personal identifying information (name, email, phone number)</li>
          <li>We do not use analytics or tracking SDKs</li>
          <li>We do not sell or share your data with advertisers</li>
          <li>We do not store your data on our servers</li>
          <li>We do not use cookies</li>
        </ul>

        <h2>Apple Health Data</h2>
        <p>
          If you grant HealthKit permissions, Ryva writes nutrition data (calories, macronutrients) 
          to Apple Health when you log meals. This data is governed by Apple's HealthKit privacy requirements. 
          We never use health data for advertising or share it with third parties.
        </p>

        <h2>Camera Usage</h2>
        <p>
          Ryva uses your camera to scan barcodes and photograph restaurant menus. Camera data is 
          processed on-device. Menu photos are processed locally using Apple's Vision framework for text 
          extraction. We do not store or transmit camera images.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Ryva is not directed at children under 13. We do not knowingly collect data from children.
        </p>

        <h2>Data Deletion</h2>
        <p>
          All your data is stored locally. You can delete it at any time by:
        </p>
        <ul>
          <li>Using "Clear History" in the History tab</li>
          <li>Using "Reset All Goals" in Profile</li>
          <li>Deleting the app from your device (removes all local data)</li>
        </ul>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be reflected in the 
          "Last updated" date above and in app updates.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, contact us at{' '}
          <a href="mailto:privacy@ryva.com">privacy@ryva.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
