const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="features-grid">
                    <div className="feature-card fade-in">
                        <div className="feature-icon"><i className="fa-solid fa-clock"></i></div>
                        <h3>Fast Response</h3>
                        <p>We monitor weather conditions 24/7 to ensure your driveway or lot is cleared promptly after snowfall.</p>
                    </div>
                    <div className="feature-card fade-in" style={{ transitionDelay: '0.2s' }}>
                        <div className="feature-icon"><i className="fa-solid fa-tag"></i></div>
                        <h3>Affordable Rates</h3>
                        <p>Competitive pricing for seasonal contracts or per-time clearing. Get professional service without breaking the bank.</p>
                    </div>
                    <div className="feature-card fade-in" style={{ transitionDelay: '0.4s' }}>
                        <div className="feature-icon"><i className="fa-solid fa-user-shield"></i></div>
                        <h3>Professional Team</h3>
                        <p>Experienced operators who treat your property with respect. Fully insured for your peace of mind.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
