import Services from './Services';
import RateCards from './RateCards';
import { useEffect } from 'react';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="page-header" style={{
                background: 'var(--primary-color)',
                color: 'white',
                padding: '6rem 0 3rem',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1>Our Services</h1>
                    <p style={{ color: 'var(--gray-200)', maxWidth: '600px', margin: '1rem auto' }}>Professional contracting services for every season.</p>
                </div>
            </div>

            <Services />
            <RateCards />

            <section className="service-details section-padding" style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div className="detail-block">
                        <h2 style={{ marginBottom: '1.5rem' }}>Detailed Service Information</h2>

                        <div style={{ marginBottom: '3rem' }}>
                            <h3><i className="fa-solid fa-hammer text-secondary"></i> Fence Post Installation</h3>
                            <p>Building a new fence? We handle the hardest part. Our team provides precise post hole digging and setting services. We focus on ensuring every post is level, secure, and properly concreted to withstand Thunder Bay's freeze-thaw cycles.</p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h3><i className="fa-solid fa-truck-ramp-box text-secondary"></i> Moving Services</h3>
                            <p>Whether you're moving a small apartment or a large home, our moving team is here to help. We offer loading/unloading assistance and transportation. We treat your furniture and boxes with care to ensure they arrive safely.</p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h3><i className="fa-solid fa-trash-can text-secondary"></i> Dump Runs & Cleanups</h3>
                            <p>Got junk? We'll haul it away. Perfect for:</p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginTop: '0.5rem' }}>
                                <li>Garage cleanouts</li>
                                <li>Renovation debris removal</li>
                                <li>Yard waste and brush</li>
                                <li>Old furniture and appliance disposal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;
