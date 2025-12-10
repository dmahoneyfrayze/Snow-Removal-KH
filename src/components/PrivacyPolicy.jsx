import { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section-padding container">
            <div className="legal-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '2rem' }}>PRIVACY POLICY</h1>
                <p><strong>KH CONTRACTING SNOW REMOVAL</strong><br />Effective Date: Jan 1st, 2025</p>

                <p>KH CONTRACTING SNOW REMOVAL (“Company”, “we”, “us”, or “our”) is committed to protecting your privacy and maintaining transparency regarding how we collect, use, store, and safeguard your personal information. This Privacy Policy describes the types of information we collect, how it is used, and your choices regarding that information.</p>

                <p>This policy applies to our website, landing pages, booking systems, online forms, SMS/email communications, AI chat or voice agents, and all related digital services provided by KH CONTRACTING SNOW REMOVAL.</p>

                <div style={{ background: '#f3f4f6', padding: '1.5rem', borderRadius: '0.5rem', margin: '2rem 0', borderLeft: '4px solid var(--accent-color)' }}>
                    <h3>IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA</h3>
                    <p>KH CONTRACTING SNOW REMOVAL does NOT share customer opt-in information—including phone numbers, messaging consent data, or SMS subscription details—with any third parties or affiliates for marketing, promotional, or unrelated purposes.</p>
                    <p style={{ marginBottom: 0 }}>All text messaging originator opt-in data is kept strictly confidential and used solely for delivering the messages you have expressly consented to receive.</p>
                </div>

                <h2>1. Information We Collect</h2>
                <p>We collect both personal and non-personal information from users through our website, forms, appointment systems, communication tools, and automated systems.</p>

                <h3>1.1 Personal Information Provided by You</h3>
                <p>This may include:</p>
                <ul>
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Physical or mailing address</li>
                    <li>Birthdate (if provided)</li>
                    <li>Business or employment information</li>
                    <li>Payment information (processed securely through third-party processors)</li>
                    <li>Opt-in/consent records for SMS, email, and other communications</li>
                    <li>Form submissions, support requests, or service inquiries</li>
                </ul>

                <h3>1.2 Automatically Collected Information</h3>
                <ul>
                    <li>IP address</li>
                    <li>Browser and device details</li>
                    <li>Cookies and tracking technology</li>
                    <li>Click activities and page views</li>
                    <li>Website usage analytics</li>
                    <li>Approximate location (based on IP)</li>
                </ul>

                <h3>1.3 Communication & Interaction Data</h3>
                <p>Collected through SMS/text messaging, Email, Phone calls, Live chat, Social media, and Booking forms. May include message content, timestamps, session history, and support transcripts.</p>

                <h3>1.4 AI System Data</h3>
                <p>If we use AI-powered systems, we may collect chatbot conversation content and automated interaction logs. We do not use this data to train public AI models.</p>

                <h2>2. How We Use Your Information</h2>
                <p>KH CONTRACTING SNOW REMOVAL uses your information to:</p>
                <ul>
                    <li>Provide our products and services</li>
                    <li>Process transactions and bookings</li>
                    <li>Communicate about appointments, reminders, and support</li>
                    <li>Send marketing campaigns (when consent is provided)</li>
                    <li>Improve website functionality</li>
                    <li>Maintain accurate consent preferences</li>
                    <li>Detect fraud</li>
                </ul>
                <p>We only use your information as permitted by law and as described in this policy.</p>

                <h2>3. SMS MESSAGING & COMPLIANCE</h2>
                <h3>3.1 Opt-In & Consent</h3>
                <p>By opting into our SMS services, you confirm consent to receive messages. We record your opt-in action. We comply with TCPA, CTIA, CASL, and all applicable regulations.</p>

                <h3>3.2 Opt-Out Instructions</h3>
                <p>You may opt out at any time by replying “STOP”. Once processed, you will receive a confirmation and no further messages.</p>

                <h3>3.3 Message Frequency</h3>
                <p>Frequency varies depending on appointments and interactions. We do not send promotional SMS without explicit consent.</p>

                <h3>3.4 Customer Support</h3>
                <p>Reply “HELP” or contact us at (807) 632-3675. Standard messaging/data rates may apply.</p>

                <h3>3.5 Carrier Disclosure</h3>
                <p>Carriers are not liable for delayed or undelivered messages. Supported carriers include major and regional U.S./Canadian providers.</p>

                <h3>3.6 SMS Data Protection</h3>
                <p>We do not share SMS opt-in data with third parties, affiliates, or marketing partners. SMS data is used exclusively for delivering messages you consented to receive.</p>

                <h2>4. Information Sharing & Disclosure</h2>
                <p>We do not sell, rent, or trade your personal information. We may share information only with Service Providers (processors, CRM, etc.) who must comply with strict confidentiality, or for Legal Compliance.</p>
                <p><strong>Note: SMS opt-in and consent data is never shared except with providers required to deliver the messages themselves.</strong></p>

                <h2>5. Data Security</h2>
                <p>We implement industry-standard security measures including encryption, secure access controls, and regular audits. No electronic method is 100% secure, but we follow best practices.</p>

                <h2>6. Cookies & Tracking Technologies</h2>
                <p>We use cookies to analyze site performance, improve user experience, and track conversions. You may disable cookies via your browser.</p>

                <h2>7. Your Rights & Choices</h2>
                <p>Depending on location, you may have the right to access, correct, or delete your data, withdraw consent, or opt out of communications. Contact us to exercise these rights.</p>

                <h2>8. Third-Party Links</h2>
                <p>Our website may contain links to other sites. We are not responsible for their privacy practices.</p>

                <h2>9. Changes to This Privacy Policy</h2>
                <p>We may update this policy. The updated policy will be posted on our website with the latest Effective Date.</p>

                <h2>10. Contact Us</h2>
                <p>KH CONTRACTING SNOW REMOVAL<br />
                    Phone: (807) 632-3675<br />
                    Email: dupont_92@hotmail.com</p>

                <p>By using our website and services, you acknowledge and agree to this Privacy Policy.</p>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
