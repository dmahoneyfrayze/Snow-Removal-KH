const RateCards = () => {
    return (
        <section className="rate-cards section-padding" style={{ backgroundColor: '#f8fafc' }}>
            <div className="container">
                <div className="section-header">
                    <span>Pricing</span>
                    <h2>Transparent Rates</h2>
                </div>

                <div className="rates-grid">
                    {/* Snow Removal */}
                    <div className="rate-card fade-in">
                        <div className="rate-header">
                            <h3>Snow Removal</h3>
                            <div className="price">From <span>$650</span></div>
                            <div className="period">Per Season</div>
                            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Single Trip: $60+</p>
                        </div>
                        <ul className="rate-features">
                            <li><i className="fa-solid fa-check"></i> Unlimited clearings (&gt;5cm)</li>
                            <li><i className="fa-solid fa-check"></i> Includes walkway shoveling</li>
                            <li><i className="fa-solid fa-check"></i> Salting/Sanding included</li>
                            <li><i className="fa-solid fa-check"></i> Return visits for plow ridge</li>
                        </ul>
                        <a href="/quote" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Get Quote</a>
                    </div>

                    {/* Dump Runs */}
                    <div className="rate-card fade-in" style={{ transitionDelay: '0.1s' }}>
                        <div className="rate-header">
                            <h3>Dump Runs</h3>
                            <div className="price">From <span>$100</span></div>
                            <div className="period">Per Load</div>
                        </div>
                        <ul className="rate-features">
                            <li><i className="fa-solid fa-check"></i> Curbside pickup available</li>
                            <li><i className="fa-solid fa-check"></i> Household junk & debris</li>
                            <li><i className="fa-solid fa-check"></i> Includes dump fees</li>
                            <li><i className="fa-solid fa-check"></i> Fast same-day service</li>
                        </ul>
                        <a href="/quote" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }}>Book Pickup</a>
                    </div>

                    {/* Hourly Labor */}
                    <div className="rate-card fade-in" style={{ transitionDelay: '0.2s' }}>
                        <div className="rate-header">
                            <h3>General Labor</h3>
                            <div className="price"><span>Contact Us</span></div>
                            <div className="period">Fence Posts / Moving</div>
                        </div>
                        <ul className="rate-features">
                            <li><i className="fa-solid fa-check"></i> Fence Post Setting</li>
                            <li><i className="fa-solid fa-check"></i> Moving Help (Truck + Men)</li>
                            <li><i className="fa-solid fa-check"></i> Yard Maintenance</li>
                            <li><i className="fa-solid fa-check"></i> Custom Projects</li>
                        </ul>
                        <a href="/contact" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }}>Inquire</a>
                    </div>
                </div>
                <p className="text-center" style={{ marginTop: '2rem', color: '#64748b', fontSize: '0.9rem' }}>*Prices vary based on property size, location, and specific requirements. Final quote provided after assessment.</p>
            </div>
        </section>
    );
};

export default RateCards;
