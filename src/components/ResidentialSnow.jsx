import { useEffect } from 'react';
import ContactForm from './ContactForm';
import SeasonCalculator from './SeasonCalculator';

const ResidentialSnow = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="page-header" style={{
                background: "linear-gradient(rgba(11, 29, 54, 0.8), rgba(11, 29, 54, 0.8)), url('/residential_driveway.png') no-repeat center center/cover",
                color: 'white',
                padding: '8rem 0 4rem',
                textAlign: 'center'
            }}>
                <div className="container">
                    <span className="text-secondary" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Thunder Bay Homeowners</span>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Residential Snow Removal</h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', color: 'var(--gray-200)' }}>
                        Wake up to a clear driveway. Reliable, automated service for your home.
                    </p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                        <div className="content-col">
                            <h2>Home Snow Clearing Services</h2>
                            <p style={{ marginBottom: '1.5rem', color: '#4b5563', lineHeight: 1.7 }}>
                                Winter in Thunder Bay is unpredictable. Our residential snow removal service ensures you never have to worry about digging your car out before work. We operate 24/7 during snow events, automatically visiting your property whenever accumulation exceeds 5cm.
                            </p>
                            <h3 style={{ fontSize: '1.3rem' }}>What's Included?</h3>
                            <ul className="feature-list" style={{ marginBottom: '2rem' }}>
                                <li><i className="fa-solid fa-check"></i> <strong>Trigger Depth:</strong> 5cm (2 inches)</li>
                                <li><i className="fa-solid fa-check"></i> <strong>Return Visits:</strong> We come back to clear city plow ridges.</li>
                                <li><i className="fa-solid fa-check"></i> <strong>Walkways:</strong> Available as an add-on service.</li>
                                <li><i className="fa-solid fa-check"></i> <strong>Equipment:</strong> inverted snowblowers and plastic-cutting edges to protect your driveway.</li>
                            </ul>

                            <div className="mini-gallery" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <img src="/residential_complete.png" alt="Cleared Driveway" style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '150px', objectFit: 'cover' }} />
                                <img src="/residential_seasonal.png" alt="Snow Plowing" style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '150px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="calc-col">
                            <SeasonCalculator />
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />
        </>
    );
};

export default ResidentialSnow;
