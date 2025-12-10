const Footer = () => {
    return (
        <footer id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h3>KH Contracting</h3>
                        <p style={{ opacity: 0.8, marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            Professional snow removal and property maintenance services in Thunder Bay. Reliable, insured, and ready to help.
                        </p>
                        <div className="social-links" style={{ marginBottom: '1.5rem' }}>
                            <a href="https://www.facebook.com/profile.php?id=61566857147759" target="_blank" rel="noreferrer" style={{ fontSize: '1.5rem', color: 'var(--secondary-color)' }}><i className="fa-brands fa-facebook"></i></a>
                        </div>
                        <p style={{ fontSize: '0.9rem' }}>
                            <a href="/careers" style={{ marginRight: '1rem', textDecoration: 'underline' }}>Careers</a>
                            <a href="/referrals" style={{ marginRight: '1rem', textDecoration: 'underline' }}>Referral Program</a>
                            <a href="/blog" style={{ textDecoration: 'underline' }}>Blog</a>
                        </p>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <ul className="contact-list">
                            <li>
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:8076323675">(807) 632-3675</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:dupont_92@hotmail.com">dupont_92@hotmail.com</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                <span>Thunder Bay, ON</span>
                            </li>
                        </ul>

                        <div style={{ marginTop: '2rem' }}>
                            <h4 style={{ fontSize: '1rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Service Areas:</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--gray-200)', lineHeight: '1.5', opacity: 0.8 }}>
                                Port Arthur • Fort William • Current River • Westfort • Northwood • Grandview
                            </p>
                        </div>
                    </div>

                    <div className="footer-hours">
                        <h3>Hours</h3>
                        <ul className="contact-list">
                            <li>
                                <i className="fa-regular fa-clock"></i>
                                <span>Always Open<br />24/7 Response</span>
                            </li>
                        </ul>

                        <div className="legal-links" style={{ marginTop: '2rem' }}>
                            <p style={{ marginBottom: '0.5rem' }}><a href="/privacy-policy" style={{ opacity: 0.7, fontSize: '0.9rem' }}>Privacy Policy</a></p>
                            <p><a href="/terms-of-service" style={{ opacity: 0.7, fontSize: '0.9rem' }}>Terms of Service</a></p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 KH Contracting Snow Removal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
