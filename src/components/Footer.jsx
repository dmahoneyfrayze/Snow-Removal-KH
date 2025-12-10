const Footer = () => {
    return (
        <footer id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <a href="#" className="logo" style={{ marginBottom: '1rem', display: 'block' }}>
                            <i className="fa-solid fa-snowflake"></i> KH <span>Contracting</span>
                        </a>
                        <p>Reliable Snow Removal & Property Maintenance in Thunder Bay, Ontario.</p>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <ul className="contact-list">
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                <span>638 Brown Street,<br />Thunder Bay, ON, Canada</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:8076323675">(807) 632-3675</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:dupont_92@hotmail.com">dupont_92@hotmail.com</a>
                            </li>
                        </ul>
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
