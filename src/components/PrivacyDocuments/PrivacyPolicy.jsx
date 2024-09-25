import React from 'react';
import './PrivacyPolicy.css';  // Import the CSS file for styling
import { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{
        background: "linear-gradient(110.59deg, #030016 0%, #130058 100%)",
        width:"100%"
    }}>
        <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p>Effective Date: <strong>24/9/2024</strong></p>
        
        <p>At Little Mankind Trust ("we," "us," "our"), protecting your privacy is one of our top priorities. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you engage with us through our website, services, and events. Please read this policy carefully to understand how we handle your data.</p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following types of personal information:</p>
        <ul>
            <li><strong>Personal Identifiers:</strong> such as name, email address, phone number, mailing address, and date of birth.</li>
            <li><strong>Donation Information:</strong> including payment details and donation amounts, which are processed through secure third-party payment gateways.</li>
            <li><strong>Website Usage Data:</strong> such as IP address, browser type, device information, and pages visited on our website.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use your personal information for the following purposes:</p>
        <ul>
            <li><strong>To Process Donations:</strong> We collect and process payment information to facilitate donations and provide tax receipts.</li>
            <li><strong>To Communicate:</strong> We use your contact information to send updates, newsletters, and event information related to our work and campaigns.</li>
            <li><strong>To Improve Services:</strong> We analyze website usage data to improve user experience and optimize our services.</li>
            <li><strong>Compliance with Legal Obligations:</strong> We may use your information to comply with tax and other legal obligations.</li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>We do not sell or rent your personal information. We may share your data in the following cases:</p>
        <ul>
            <li><strong>Service Providers:</strong> We may share your data with trusted service providers who assist us in operating our website, processing payments, or running events.</li>
            <li><strong>Legal Compliance:</strong> We may disclose your information when required by law or in response to legal processes.</li>
            <li><strong>Third-Party Platforms:</strong> If you choose to interact with us through social media platforms, your information may be shared with the respective platform based on its privacy policy.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of data transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

        <h2>5. Your Data Rights</h2>
        <p>Depending on your jurisdiction, you may have the following rights:</p>
        <ul>
            <li><strong>Access to Data:</strong> You may request a copy of the personal data we hold about you.</li>
            <li><strong>Correction of Data:</strong> You have the right to request that we correct any inaccurate information.</li>
            <li><strong>Deletion of Data:</strong> You can request that we delete your personal information, subject to legal and contractual obligations.</li>
            <li><strong>Opt-Out:</strong> You can opt out of receiving marketing communications at any time by following the unsubscribe link in our emails or contacting us directly.</li>
        </ul>

        <h2>6. Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar technologies to enhance your experience on our website. Cookies are small files that your browser stores on your device. You can disable cookies via your browser settings, but this may limit your experience on our site.</p>

        <h2>7. Children’s Privacy</h2>
        <p>We do not knowingly collect personal information from children under the age of 13 without parental consent. If we discover that we have unintentionally collected such data, we will take steps to delete it as soon as possible.</p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>We may update this policy from time to time to reflect changes in our practices or applicable laws. Any changes will be posted on our website with the updated effective date.</p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:</p>
        <address>
            Little Mankind Trust<br />
            Address: #841, 8th block, Prestige kew gardens, yemlur 560037, Bangalore<br />
            Email: <a href="mailto:Littlemankind2024@gmail.com">Littlemankind2024@gmail.com</a><br />
            Phone: <a href="tel:+919663801885">+919663801885</a>
        </address>
        </div>
    </div>
  );
};

export default PrivacyPolicy;
