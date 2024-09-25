import React from 'react';
import './TermsAndConditions.css';  // Import the CSS file for styling
import { useEffect } from 'react';

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{
      background: "linear-gradient(110.59deg, #030016 0%, #130058 100%)",
      width:"100%"
  }}>
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>Effective Date: <strong>24-9-2024</strong></p>
      
      <p>Welcome to Little Mankind Trust ("we," "us," "our"). By accessing and using our website and services, you agree to comply with and be bound by the following terms and conditions ("Terms"). Please review these Terms carefully, as they govern your use of our services, website, and any donations made to our non-profit organization.</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using our website and services.</p>

      <h2>2. Use of Website</h2>
      <p>The content on our website is provided for informational purposes. You agree to use our website for lawful purposes only. You must not:</p>
      <ul>
        <li>Use our website to engage in fraudulent activities or unlawful conduct.</li>
        <li>Post or transmit any content that is harmful, offensive, or violates third-party rights.</li>
        <li>Attempt to interfere with the proper functioning of the website through hacking or other malicious activities.</li>
      </ul>

      <h2>3. Donations</h2>
      <p>All donations made to Little Mankind Trust are voluntary and non-refundable, except in cases of proven fraud or error. We use your donations to further our charitable mission and projects. Donation processing is handled by secure third-party payment processors. You agree to provide accurate payment information and authorize us to charge the designated payment method for the donation amount.</p>

      <h2>4. Intellectual Property</h2>
      <p>The content on our website, including text, images, logos, and designs, is the property of Little Mankind Trust or our content providers and is protected by copyright and trademark laws. You may not reproduce, distribute, or use any content without our prior written permission, except for personal, non-commercial use.</p>

      <h2>5. Third-Party Links</h2>
      <p>Our website may contain links to third-party websites. These links are provided for your convenience, and we do not endorse or take responsibility for the content or practices of those sites. When you click on a third-party link, you are subject to the terms and conditions of that site.</p>

      <h2>6. Privacy</h2>
      <p>Your privacy is important to us. Please review our <a href="/privacy-policy">Privacy Policy</a>, which explains how we collect, use, and protect your personal information.</p>

      <h2>7. Limitation of Liability</h2>
      <p>In no event shall Little Mankind Trust or its affiliates, directors, employees, or volunteers be liable for any indirect, incidental, or consequential damages arising from your use of our website, services, or donations made. We make no representations or warranties of any kind, express or implied, as to the operation of our website or the information provided.</p>

      <h2>8. Indemnification</h2>
      <p>You agree to indemnify and hold harmless Little Mankind Trust, its affiliates, directors, employees, and volunteers from any claims, losses, liabilities, or expenses arising from your use of our website or services, or from your violation of these Terms.</p>

      <h2>9. Changes to the Terms</h2>
      <p>We reserve the right to modify or update these Terms at any time without prior notice. Your continued use of our website and services constitutes acceptance of the updated Terms. We encourage you to review this page periodically.</p>

      <h2>10. Termination</h2>
      <p>We reserve the right to terminate or restrict your access to our website and services at any time, without notice, for conduct that we believe violates these Terms or is harmful to our organization or other users.</p>

      <h2>11. Contact Us</h2>
      <p>If you have any questions regarding these Terms, please contact us at:</p>
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

export default TermsAndConditions;
