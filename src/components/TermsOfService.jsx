import { useEffect } from 'react';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section-padding container">
            <div className="legal-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '2rem' }}>TERMS OF SERVICE</h1>
                <p><strong>KH CONTRACTING SNOW REMOVAL</strong><br />Effective Date: Jan 1st, 2025</p>

                <h2>I. SMS Messaging Terms & Compliance</h2>
                <h3>1. Program Description</h3>
                <p>Our SMS messaging program provides appointment confirmations, reminders, service notifications, customer support, and other service-related updates. Messages are only sent when you have explicitly opted in through our website, booking forms, checkout pages, or customer intake systems.</p>

                <h3>2. Cancellation Instructions</h3>
                <p>You may cancel at any time by replying “STOP” to any message. We will then send a confirmation message and cease communication unless you choose to opt in again.</p>

                <h3>3. Support Information</h3>
                <p>For help, reply “HELP” or contact us at (807) 632-3675 or email dupont_92@hotmail.com.</p>

                <h3>4. Carrier Liability</h3>
                <p>Wireless carriers are not responsible for delayed or undelivered messages.</p>

                <h3>5. Message & Data Rates</h3>
                <p>Message/data rates may apply depending on your mobile plan. Message frequency varies based on your interactions.</p>

                <h3>6. Supported Carriers</h3>
                <p>All major U.S. and Canadian carriers are supported.</p>

                <h3>7. Age Restriction</h3>
                <p>You must be 18 years or older to use our SMS program.</p>

                <h3>8. Privacy Policy</h3>
                <p>For full privacy information, please visit our <a href="/privacy-policy" style={{ color: 'var(--accent-color)' }}>Privacy Policy</a>. We comply with TCPA, CTIA, CASL, and CAN-SPAM.</p>

                <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid #e5e7eb' }} />

                <h2>II. General Terms of Service</h2>
                <p>This website (the “Site”) is owned and operated by KH CONTRACTING SNOW REMOVAL. By accessing or using the Site, you agree to follow these Terms of Service, our Privacy Policy, and any additional policies referenced on the Site.</p>

                <h3>1. Use of the Site & Services</h3>
                <p>By using our Site, you agree NOT to engage in unlawful activities, interfere with website security, attempt unauthorized access, upload harmful content, misrepresent your identity, or abuse our systems.</p>

                <h3>2. Intellectual Property</h3>
                <p>All content on the Site is owned by KH CONTRACTING SNOW REMOVAL or licensed to us. You may view and download one copy for personal use, but may not modify, reproduce, distribute, or sell content without permission.</p>
                <p>By submitting content (reviews, forms, etc.), you grant us a license to use it.</p>

                <h3>3. Online Purchases & Transactions</h3>
                <p>You agree to provide accurate information and authorize charges for services purchased. We are not responsible for errors by third-party processors.</p>

                <h3>4. Appointments, Bookings & Automated Reminders</h3>
                <p>By booking, you agree to provide accurate info and receive reminders. Cancellations must be made promptly.</p>

                <h3>5. AI Systems, Automation & Digital Tools</h3>
                <p>Our services may include AI chatbots and automation. You acknowledge that AI content may not be perfect and does not constitute professional advice.</p>

                <h3>6. Disclaimer of Warranties</h3>
                <p>The Site and services are provided “as is” without warranties of any kind.</p>

                <h3>7. Limitation of Liability</h3>
                <p>KH CONTRACTING SNOW REMOVAL is not liable for indirect damages, loss of profits, or issues arising from third-party systems. Our liability is limited to the amount paid for services in the last 12 months.</p>

                <h3>8. Indemnification</h3>
                <p>You agree to indemnify KH CONTRACTING SNOW REMOVAL from claims arising from your use of the Site or violation of these Terms.</p>

                <h3>9. Account Registration & Security</h3>
                <p>You are responsible for your account security and accurate information.</p>

                <h3>10. Termination of Access</h3>
                <p>We may suspend access for violations of these Terms.</p>

                <h3>11. Governing Law & Dispute Resolution</h3>
                <p>These Terms are governed by local laws. Disputes shall be resolved through binding arbitration.</p>

                <h3>12. Changes to These Terms</h3>
                <p>We may revise these Terms at any time. Continued use of the Site confirms acceptance.</p>

                <h3>13. Contact Information</h3>
                <p>KH CONTRACTING SNOW REMOVAL<br />
                    Phone: (807) 632-3675<br />
                    Email: dupont_92@hotmail.com</p>

                <p>By using our website and services, you consent to these Terms of Service.</p>
            </div>
        </section>
    );
};

export default TermsOfService;
