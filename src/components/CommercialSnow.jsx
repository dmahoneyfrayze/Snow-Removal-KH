import { useEffect } from 'react';
import ContactForm from './ContactForm';

const CommercialSnow = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="page-header" style={{
                background: "linear-gradient(rgba(11, 29, 54, 0.9), rgba(11, 29, 54, 0.9)), url('/commercial_parking.png') no-repeat center center/cover",
                color: 'white',
                padding: '8rem 0 4rem',
                textAlign: 'center'
            }}>
                <div className="container">
                    <span className="text-secondary" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Business & Strata</span>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Commercial Snow Management</h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', color: 'var(--gray-200)' }}>
                        Zero tolerance for liability liabilities. Keep your lot safe for customers and staff.
                    </p>
                </div>
            </div>

            <section className="section-padding container">
                <div className="features-grid" style={{ marginBottom: '4rem' }}>
                    <div className="feature-card">
                        <i className="fa-solid fa-clock feature-icon"></i>
                        <h3>Priority Timing</h3>
                        <p>Commercial lots are cleared overnight or early morning to ensure business continuity before you open.</p>
                    </div>
                    <div className="feature-card">
                        <i className="fa-solid fa-shield-halved feature-icon"></i>
                        <h3>Liability Focus</h3>
                        <p>We log every visit with GPS tracking and time-stamped photos to protect you against slip-and-fall claims.</p>
                    </div>
                    <div className="feature-card">
                        <i className="fa-solid fa-truck-monster feature-icon"></i>
                        <h3>Heavy Equipment</h3>
                        <p>From skid steers to loaders, we have the capacity to handle large parking lots and snow piling.</p>
                    </div>
                </div>

                <p className="text-center" style={{ marginBottom: '3rem', fontSize: '0.95rem' }}>
                    <em>Need driveway clearing for your home? Visit our <a href="/residential-snow-removal" style={{ textDecoration: 'underline', color: 'var(--accent-color)' }}>Residential Services</a> page.</em>
                </p>

                <div className="image-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1rem',
                    marginBottom: '4rem'
                }}>
                    <img src="/commercial_complete.png" alt="Commercial Lot Cleared" width="400" height="300" style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '200px', objectFit: 'cover' }} />
                    <img src="/commercial_seasonal.png" alt="Commercial Snow Plowing" width="400" height="300" style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '200px', objectFit: 'cover' }} />
                    <img src="/commercial_maintenance.png" alt="Lot Maintenance" width="400" height="300" style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '200px', objectFit: 'cover' }} />
                </div>

                <div className="text-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2>Custom Contracts for Thunder Bay Businesses</h2>
                    <p style={{ color: '#4b5563', lineHeight: 1.7, marginBottom: '2rem' }}>
                        We understand that every business has different triggers and requirements. Whether you need "Zero Tolerance" pavement (salting after every dusting) or a standard 5cm trigger, we build a contract that fits your budget and safety needs.
                    </p>
                    <a href="/quote" className="btn btn-primary pulse-animation">Request Commercial Proposal</a>
                </div>
            </section>

            <ContactForm />
        </>
    );
};

export default CommercialSnow;
