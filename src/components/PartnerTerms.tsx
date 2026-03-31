import React from 'react';

const PartnerTerms: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="legal-page__container">
        <h1>Partner Program Agreement</h1>
        <p className="legal-page__updated">Last updated: March 30, 2026</p>

        <p>
          This Partner Program Agreement ("Agreement") is entered into between you ("Partner") and 
          PassaroMangia ("Company", "we", "us") upon your acceptance when submitting a partner application.
        </p>

        <h2>1. Program Overview</h2>
        <p>
          The PassaroMangia Partner Program allows approved partners to earn referral commissions by 
          promoting PassaroMangia to their audience using a unique referral code.
        </p>

        <h2>2. Commission Structure</h2>
        <p>
          Partners earn a commission for each new subscriber who subscribes to PassaroMangia Premium 
          using the Partner's referral code. Commission rates are set by PassaroMangia at its sole 
          discretion and may be changed at any time with 30 days' written notice.
        </p>
        <p>
          Commissions are earned only at the time of the referred user's initial subscription purchase. 
          No recurring commissions are owed for subscription renewals unless explicitly agreed in writing.
        </p>

        <h2>3. Payment</h2>
        <p>
          Payouts are processed via PayPal. Partners must maintain valid payment information in their 
          partner portal. Minimum payout threshold is $10.00. PassaroMangia reserves the right to 
          withhold payment if fraud, abuse, or violation of this Agreement is suspected.
        </p>

        <h2>4. Termination</h2>
        <p>
          <strong>Either party may terminate this Agreement at any time, for any reason, with or without 
          cause, effective immediately upon written notice (including email or portal notification).</strong>
        </p>
        <p>
          Upon termination by either party:
        </p>
        <ul>
          <li>The Partner's referral code will be deactivated immediately.</li>
          <li>No further commissions will accrue after the termination date, regardless of whether 
          previously referred users continue their subscriptions.</li>
          <li>Any unpaid commissions earned before the termination date will be paid out within 30 days, 
          provided the minimum payout threshold has been met and no fraud is suspected.</li>
          <li>PassaroMangia has no obligation to pay commissions on subscription renewals or new 
          subscriptions occurring after termination, even from users originally referred by the Partner.</li>
        </ul>

        <h2>5. No Exclusivity</h2>
        <p>
          This Agreement is non-exclusive. PassaroMangia may engage any number of partners, affiliates, 
          or marketing channels. Partner may promote other products and services.
        </p>

        <h2>6. Partner Conduct</h2>
        <p>Partners agree to:</p>
        <ul>
          <li>Promote PassaroMangia honestly and accurately. No false claims about the app's capabilities.</li>
          <li>Not engage in spam, unsolicited messaging, or deceptive marketing practices.</li>
          <li>Not bid on PassaroMangia's brand name or trademarks in paid advertising without prior approval.</li>
          <li>Not create fake accounts, self-refer, or manipulate the referral system.</li>
          <li>Comply with all applicable laws, including FTC disclosure requirements for sponsored content.</li>
          <li>Clearly disclose the partnership relationship in all promotional content.</li>
        </ul>

        <h2>7. Intellectual Property</h2>
        <p>
          Partner is granted a limited, non-exclusive, revocable license to use PassaroMangia's name 
          and logo solely for promotional purposes under this Agreement. This license terminates 
          immediately upon termination of the Agreement. Partner may not modify PassaroMangia's 
          trademarks or create derivative works.
        </p>

        <h2>8. Fraud and Abuse</h2>
        <p>
          PassaroMangia reserves the right to immediately terminate the partnership and withhold all 
          unpaid commissions if fraud, abuse, or manipulation of the referral system is detected. This 
          includes but is not limited to: self-referrals, fake accounts, incentivized signups (paying 
          users to sign up), and misrepresentation.
        </p>

        <h2>9. Modifications</h2>
        <p>
          PassaroMangia may modify the terms of this Agreement, including commission rates, at any time. 
          Partners will be notified of material changes via email or portal notification at least 30 days 
          in advance. Continued participation after changes take effect constitutes acceptance.
        </p>

        <h2>10. Limitation of Liability</h2>
        <p>
          PassaroMangia's total liability under this Agreement shall not exceed the total commissions 
          paid to the Partner in the 12 months preceding the claim. PassaroMangia shall not be liable 
          for any indirect, incidental, or consequential damages.
        </p>

        <h2>11. Independent Contractor</h2>
        <p>
          Partner is an independent contractor, not an employee, agent, or representative of PassaroMangia. 
          This Agreement does not create a partnership, joint venture, or employment relationship.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          This Agreement is governed by the laws of the State of Florida, United States.
        </p>

        <h2>13. Entire Agreement</h2>
        <p>
          This Agreement constitutes the entire agreement between the parties regarding the subject matter 
          herein and supersedes all prior agreements and understandings.
        </p>
      </div>
    </div>
  );
};

export default PartnerTerms;
