import React from 'react';
import './RefundPolicy.css';  // Import the CSS file for styling
import { useEffect } from 'react';

const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{
      background: "linear-gradient(110.59deg, #030016 0%, #130058 100%)",
      width:"100%"
  }}>
    <div className="refund-policy-container">
      <h1>Refund Policy</h1>
      <p>Effective Date: <strong>24-9-2024</strong></p>

      <p>At Little Mankind Trust, we are committed to transparency and accountability in our operations. Donations are a vital source of funding for our charitable activities, and we greatly appreciate the trust and generosity of our donors. However, we understand that there may be circumstances where a refund request is necessary. This Refund Policy outlines the terms under which refunds for donations will be processed.</p>

      <h2>1. Refund Requests</h2>
      <p>Refunds will only be considered in the following circumstances:</p>
      <ul>
        <li><strong>Duplicate Donations:</strong> If you accidentally donate more than once due to a system or user error.</li>
        <li><strong>Mistaken Donation Amount:</strong> If the donation amount entered was incorrect due to user error.</li>
        <li><strong>Fraudulent Transactions:</strong> If a donation was made fraudulently or without the donor’s authorization.</li>
      </ul>

      <h2>2. Time Frame for Refund Requests</h2>
      <p>Refund requests must be submitted within 30 days of the donation date. Requests made after this period will not be considered, except in cases of proven fraud.</p>

      <h2>3. Refund Process</h2>
      <p>To request a refund, please contact us at <a href="mailto:Littlemankind2024@gmail.com">Littlemankind2024@gmail.com</a> or call us at <a href="tel:+919663801885">+919663801885</a>. In your refund request, please include:</p>
      <ul>
        <li>The donor’s name</li>
        <li>Donation amount</li>
        <li>Donation date</li>
        <li>The reason for the refund request</li>
      </ul>
      <p>Refunds will be processed through the original payment method used at the time of donation. If the payment method is no longer valid, alternative arrangements will be made to ensure the refund is processed securely.</p>

      <h2>4. Non-Refundable Donations</h2>
      <p>Donations made to Little Mankind Trust are generally non-refundable except under the specific circumstances outlined above. Once donations are used for our charitable purposes, they cannot be refunded.</p>

      <h2>5. Recurring Donations</h2>
      <p>If you have set up a recurring donation and wish to cancel or modify it, please contact us at least 7 days before the next scheduled donation date. Cancellation or modification will be effective from the next billing cycle.</p>

      <h2>6. Changes to the Refund Policy</h2>
      <p>We reserve the right to amend this Refund Policy at any time. Any changes to the policy will be posted on our website, and donors will be informed if necessary.</p>

      <h2>7. Contact Information</h2>
      <p>For any queries or to request a refund, please contact us at:</p>
      <address>
        Little Mankind Trust<br />
        Address: #841, 8th block, Prestige Kew Gardens, Yemlur 560037, Bangalore<br />
        Email: <a href="mailto:Littlemankind2024@gmail.com">Littlemankind2024@gmail.com</a><br />
        Phone: <a href="tel:+919663801885">+919663801885</a>
      </address>
    </div>
    </div>
  );
};

export default RefundPolicy;
