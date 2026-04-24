import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="legal-page__container">
        <h1>Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: April 11, 2026</p>

        <h2>Overview</h2>
        <p>
          Ryva ("we," "our," "the app"), a product of Passaro Technologies LLC, is committed to protecting your privacy. This policy explains what data we collect, how we use it, how we share it, how long we keep it, and your rights regarding that data. It applies to your use of the Ryva mobile app and the ryva.health website.
        </p>
        <p>
          This Privacy Policy is incorporated into our Terms of Service.
        </p>

        <h2>Data We Collect</h2>
        <p>
          We collect data in three ways: data stored locally on your device, data you upload to our servers, and data submitted through our website.
        </p>

        <h3>Data Stored Locally on Your Device</h3>
        <p>
          The following data is stored on your device using Apple's SwiftData framework. We do not have access to it, and it is not transmitted to our servers unless explicitly noted elsewhere in this policy:
        </p>
        <ul>
          <li><strong>Scan history</strong> — barcodes you scan and product information retrieved from Open Food Facts</li>
          <li><strong>Nutrition logs</strong> — meals and servings you manually log</li>
          <li><strong>User profile</strong> — dietary goals, restrictions, body stats, and preferences you enter</li>
          <li><strong>AI chat history</strong> — conversations with the AI nutrition partner</li>
          <li><strong>Shopping lists</strong> — items generated or added by you</li>
          <li><strong>Food rules</strong> — custom rules you create</li>
          <li><strong>Achievements</strong> — scan streaks and earned badges</li>
        </ul>

        <h3>Data Uploaded to Our Servers</h3>
        <p>
          The following data is transmitted to and stored on servers we operate or contract with (including cloud infrastructure providers):
        </p>
        <ul>
          <li><strong>Food and menu photos</strong> — photos you take of food items, restaurant menus, or product packaging are uploaded to our servers for processing, storage, and use as described in the "How We Use Your Data" section below.</li>
          <li><strong>Device and request metadata</strong> — basic technical information necessary to deliver the service, such as request timestamps, app version, and error logs. This does not include advertising identifiers or precise location.</li>
        </ul>

        <h3>Data Sent to Third-Party Services</h3>
        <p>
          Some features require sending data to third parties to function:
        </p>
        <ul>
          <li>
            <strong>Open Food Facts API</strong> — when you scan a barcode, we send the barcode number to Open Food Facts (openfoodfacts.org) to retrieve product information. Open Food Facts is an open-source, non-profit food database. See their{' '}
            <a href="https://world.openfoodfacts.org/privacy" target="_blank" rel="noopener noreferrer">
              privacy policy
            </a>.
          </li>
          <li>
            <strong>OpenAI</strong> — We use OpenAI's API (GPT-4o-mini and GPT Vision models) to: (1) extract product information from photos of food and cosmetic labels, (2) analyze ingredient text for nutritional and additive insights, (3) analyze user-uploaded health documents (with explicit in-app consent), and (4) generate personalized food recommendations and chat responses. These requests include the content you provide and relevant context (such as your dietary profile and food rules). Inputs are transmitted over HTTPS via our server-side proxy. We have a <strong>Zero Data Retention (ZDR) agreement</strong> and a <strong>HIPAA Business Associate Agreement (BAA)</strong> with OpenAI — inputs are not logged, not stored, and not used to train OpenAI's models, are discarded as soon as the response is returned, and OpenAI is contractually a HIPAA Business Associate with respect to any Protected Health Information transmitted through Ryva. We do not send your Apple ID, email, or HealthKit data to OpenAI.
          </li>
          <li>
            <strong>Instacart API (optional, where available)</strong> — if you use the "Order on Instacart" feature, your shopping list items will be sent to Instacart to create an order page. See{' '}
            <a href="https://www.instacart.com/privacy" target="_blank" rel="noopener noreferrer">
              Instacart's privacy policy
            </a>.
          </li>
          <li>
            <strong>Apple HealthKit (optional)</strong> — if you enable HealthKit integration, nutrition data from logged meals is written to Apple Health. We only write data; we do not read from HealthKit. This data stays on your device and in your iCloud Health data, and is handled in accordance with Apple's HealthKit requirements.
          </li>
        </ul>

        <h3>Health Document Analysis</h3>
        <p>
          Health document analysis is designed to be local-first and to minimize the exposure of your sensitive medical information:
        </p>
        <ul>
          <li>When you submit a health document for analysis, the document is <strong>redacted and sanitized on your device</strong> before any data is transmitted.</li>
          <li>The redacted content is sent in a single API call through our Cloudflare proxy to a third-party AI provider for analysis.</li>
          <li>The raw document is <strong>ephemeral on our servers</strong> — it is not stored after processing. The redacted content sent to OpenAI is processed under our <strong>Zero Data Retention (ZDR) agreement</strong> and <strong>HIPAA Business Associate Agreement (BAA)</strong>: it is <strong>not logged, not stored, and not used to train their models</strong>, is discarded as soon as the response is returned, and OpenAI is contractually a HIPAA Business Associate with respect to your Protected Health Information.</li>
          <li>Only the <strong>distilled nutritional findings</strong> returned from the analysis are saved, and they are stored <strong>locally on your device</strong>, not on our servers.</li>
        </ul>
        <p>
          This means we never retain a copy of your health documents, and the only persistent record of the analysis lives on your device under your control.
        </p>

        <h3>Data Collected Through Our Website</h3>
        <p>
          <strong>Partner Application Form.</strong> When you submit a partner application through our website, we collect: name, email address, social media handle, platform, follower count, and any optional message you provide. This data is stored securely in our database (Supabase) and used solely to evaluate partnership applications. We do not sell, share, or use this data for marketing purposes. Application data is retained for up to 24 months from submission, after which it is deleted unless we have an ongoing relationship with you. You may request deletion at any time by contacting{' '}
          <a href="mailto:support@ryva.health">support@ryva.health</a>.
        </p>
        <p>
          <strong>Cookies.</strong> We use Cloudflare for security and performance, which sets essential cookies required for the proper functioning of our website (such as bot protection and threat detection). We do not use tracking cookies, advertising cookies, or third-party analytics cookies on our website.
        </p>

        <h2>How We Use Your Data</h2>
        <p>
          We use the data we collect for the following purposes:
        </p>
        <p>
          <strong>To provide the app's features.</strong> We use locally stored data, uploaded photos, ephemeral redacted health document content, and data sent to third-party services to deliver the scanning, logging, analysis, and recommendation features of the app.
        </p>
        <p>
          <strong>To improve the app and develop new features.</strong> We use food photos, menu photos, barcode scan data, and aggregated usage information to improve our product, train and improve machine learning models, and build internal product databases.
        </p>
        <p>
          <strong>We do not use the following data to train machine learning models, for advertising, or sell it to third parties:</strong>
        </p>
        <ul>
          <li>Health documents you upload</li>
          <li>Personal nutrition logs</li>
          <li>AI chat conversations</li>
          <li>Apple HealthKit data</li>
          <li>Partner application form data</li>
        </ul>
        <p>
          <strong>To communicate with you.</strong> If you contact us at{' '}
          <a href="mailto:support@ryva.health">support@ryva.health</a>, we will use your contact information to respond.
        </p>
        <p>
          <strong>To comply with law.</strong> We may use or disclose data as required to comply with legal obligations, respond to lawful requests, or protect our rights.
        </p>

        <h2>How We Share Your Data</h2>
        <p>
          We share data only in the following circumstances:
        </p>
        <ul>
          <li><strong>With third-party service providers</strong> that help us operate the app, including cloud hosting providers, AI processing providers, and the third-party services listed above. These providers are contractually limited to using your data only to provide services to us.</li>
          <li><strong>For legal reasons</strong>, if required by law, subpoena, or to protect the rights, property, or safety of Passaro Technologies LLC, our users, or others.</li>
          <li><strong>In connection with a business transaction</strong>, such as a merger, acquisition, or sale of assets. In such cases, we will provide notice before your data is transferred and becomes subject to a different privacy policy.</li>
        </ul>
        <p>
          <strong>We do not sell your personal information.</strong> We do not share your personal information with advertisers or data brokers.
        </p>

        <h2>Data Retention</h2>
        <ul>
          <li><strong>Locally stored data</strong> persists on your device until you delete it (see "Your Choices and Rights" below) or uninstall the app.</li>
          <li><strong>Food and menu photos</strong> uploaded to our servers are retained indefinitely to support ongoing product features and model improvement, unless you request deletion.</li>
          <li><strong>Health documents</strong> are not stored on our servers. The redacted content sent for analysis is ephemeral and is not retained by us or by our AI providers. The distilled findings are stored locally on your device until you delete them.</li>
          <li><strong>Partner application data</strong> is retained for up to 24 months from submission.</li>
          <li><strong>Backup copies</strong> may persist for a limited time after deletion in line with standard backup practices.</li>
        </ul>

        <h2>Apple Health Data</h2>
        <p>
          If you grant HealthKit permissions, Ryva writes nutrition data (calories, macronutrients) to Apple Health when you log meals. We only write data to HealthKit; we do not read from it. This data is governed by Apple's HealthKit privacy requirements. We never use Apple Health data for advertising, share it with third parties, or use it to train machine learning models.
        </p>

        <h2>Camera Usage</h2>
        <p>
          Ryva uses your camera to scan barcodes and to photograph food items, restaurant menus, and product packaging. Barcode scanning is processed on-device. Photos you take of food, menus, or packaging are uploaded to our servers for processing, analysis, and the uses described in this policy. You can revoke camera permissions at any time in your device settings.
        </p>

        <h2>International Data Transfers</h2>
        <p>
          We are based in the United States, and the third-party services we use (including our AI providers and cloud infrastructure) may process data in the United States or other countries. If you access Ryva from outside the United States, your data will be transferred to and processed in the United States, which may have different data protection laws than your country of residence. Where required by law, we rely on appropriate safeguards (such as Standard Contractual Clauses) for cross-border transfers.
        </p>

        <h2>Your Choices and Rights</h2>

        <h3>All Users</h3>
        <p>You can manage your data through the app:</p>
        <ul>
          <li><strong>Delete locally stored data</strong> using "Clear History" in the History tab or "Reset All Goals" in Profile.</li>
          <li><strong>Delete the app</strong> from your device to remove all local data.</li>
          <li><strong>Request deletion of server-side data</strong> (uploaded photos, health documents, partner application data) by contacting{' '}
            <a href="mailto:support@ryva.health">support@ryva.health</a>.</li>
          <li><strong>Revoke permissions</strong> (camera, HealthKit) in your device settings at any time.</li>
        </ul>

        <h3>Users in the European Economic Area, United Kingdom, and Switzerland</h3>
        <p>
          If you are located in the EEA, UK, or Switzerland, the General Data Protection Regulation (GDPR) gives you the following rights regarding your personal data:
        </p>
        <ul>
          <li><strong>Right of access</strong> — request a copy of the personal data we hold about you</li>
          <li><strong>Right to rectification</strong> — request correction of inaccurate data</li>
          <li><strong>Right to erasure</strong> — request deletion of your data ("right to be forgotten")</li>
          <li><strong>Right to restrict processing</strong> — request that we limit how we process your data</li>
          <li><strong>Right to data portability</strong> — request your data in a portable format</li>
          <li><strong>Right to object</strong> — object to certain types of processing</li>
          <li><strong>Right to withdraw consent</strong> — where processing is based on consent, withdraw it at any time</li>
          <li><strong>Right to lodge a complaint</strong> with your local data protection authority</li>
        </ul>
        <p>
          <strong>Legal bases for processing.</strong> We process your personal data based on: (a) performance of our contract with you (to provide the app's features); (b) your consent (for optional features like HealthKit integration); (c) our legitimate interests (improving our product and security); and (d) compliance with legal obligations.
        </p>
        <p>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:support@ryva.health">support@ryva.health</a>.
        </p>

        <h3>Users in California</h3>
        <p>
          If you are a California resident, the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) give you the following rights:
        </p>
        <ul>
          <li><strong>Right to know</strong> what personal information we collect, use, disclose, and share</li>
          <li><strong>Right to delete</strong> personal information we have collected about you</li>
          <li><strong>Right to correct</strong> inaccurate personal information</li>
          <li><strong>Right to opt out</strong> of the sale or sharing of personal information</li>
          <li><strong>Right to limit</strong> the use of sensitive personal information</li>
          <li><strong>Right to non-discrimination</strong> for exercising your privacy rights</li>
        </ul>
        <p>
          <strong>We do not sell or share your personal information</strong> as those terms are defined under California law. We have not sold or shared personal information in the preceding 12 months.
        </p>
        <p>
          To exercise these rights, contact us at{' '}
          <a href="mailto:support@ryva.health">support@ryva.health</a>. We will respond within the timeframes required by law.
        </p>

        <h2>Data Security</h2>
        <p>
          We use industry-standard technical and organizational measures to protect your data, including encryption in transit, access controls, and secure cloud infrastructure. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>Data Breach Notification</h2>
        <p>
          In the event of a data breach affecting your personal information, we will notify you and applicable regulatory authorities in accordance with applicable law.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Ryva is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us at{' '}
          <a href="mailto:support@ryva.health">support@ryva.health</a> and we will promptly delete it.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make material changes, we will notify you through the app, by updating the "Last updated" date above, and where we have your contact information, by email. Material changes will become effective no earlier than 14 days after notice is provided, except for changes addressing legal requirements, which may take effect immediately.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this Privacy Policy or wish to exercise any of your rights, contact us at:
        </p>
        <p>
          <strong>Passaro Technologies LLC</strong><br />
          Email: <a href="mailto:support@ryva.health">support@ryva.health</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
