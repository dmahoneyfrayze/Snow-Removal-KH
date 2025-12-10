const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <span className="text-secondary" style={{ fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>About Us</span>
                        <h2>More Than Just Snow Removal</h2>
                        <p>KH Contracting was founded on a simple promise: reliable, professional service for Thunder Bay homeowners and businesses. We aren't just a "guy with a truck"—we are a dedicated property maintenance team committed to keeping your space safe, accessible, and clean.</p>

                        <p><strong>Why Choose KH Contracting?</strong></p>
                        <ul className="feature-list" style={{ marginBottom: '2rem' }}>
                            <li><i className="fa-solid fa-check"></i> <strong>24/7 Weather Monitoring:</strong> We track storms so you don't have to.</li>
                            <li><i className="fa-solid fa-check"></i> <strong>Small Footprint Equipment:</strong> We use plastic blades and efficient blowers to protect your driveway.</li>
                            <li><i className="fa-solid fa-check"></i> <strong>Year-Round Support:</strong> From winter plowing to summer fence posts and hauling.</li>
                        </ul>

                        <div className="owner-signature" style={{ marginTop: '2rem', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1.5rem' }}>
                            <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '0.5rem' }}>"Our goal is to be the tradespeople you actually enjoy calling. On time, fair pricing, and no excuses."</p>
                            <p style={{ fontWeight: 700, color: 'var(--primary-color)' }}>— The KH Contracting Team</p>
                        </div>
                    </div>
                    <div className="about-image fade-in" style={{ transitionDelay: '0.2s' }}>
                        <img src="/about_section.png" alt="KH Contracting Team Truck" width="600" height="400" style={{ width: '100%', height: 'auto' }} />
                        <div className="experience-badge" style={{
                            position: 'absolute',
                            bottom: '-20px',
                            right: '-20px',
                            background: 'var(--accent-color)',
                            color: 'white',
                            padding: '1.5rem',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: 'var(--shadow-lg)',
                            textAlign: 'center',
                            minWidth: '150px'
                        }}>
                            <span style={{ display: 'block', fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>100%</span>
                            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Reliable</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
