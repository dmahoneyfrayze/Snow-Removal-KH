import Services from './Services';
import RateCards from './RateCards';
import { useEffect } from 'react';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="page-header service-hero" style={{
                background: "linear-gradient(rgba(11, 29, 54, 0.7), rgba(11, 29, 54, 0.7)), url('/service_hero.png') no-repeat center center/cover",
                color: 'white',
                padding: '8rem 0 4rem',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1>Our Services</h1>
                    <p style={{ color: 'var(--gray-200)', maxWidth: '600px', margin: '1rem auto', fontSize: '1.2rem' }}>Professional contracting services for every season.</p>
                </div>
            </div>

            <RateCards />

            <section className="service-details section-padding" style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div className="section-header">
                        <span>Details</span>
                        <h2>Service Breakdown</h2>
                    </div>

                    <div className="service-detail-grid">

                        {/* Fence Posts */}
                        <div className="detail-card fade-in">
                            <div className="detail-image">
                                <img src="/service_fence_posts.png" alt="Fence Post Digging" />
                            </div>
                            <div className="detail-content">
                                <h3><i className="fa-solid fa-hammer text-secondary"></i> Fence Post Installation</h3>
                                <p>Building a new fence? We handle the hardest part. Our team provides precise post hole digging and setting services. We focus on ensuring every post is level, secure, and properly concreted to withstand Thunder Bay's freeze-thaw cycles.</p>
                                <ul className="feature-list">
                                    <li><i className="fa-solid fa-check"></i> 4x4 or 6x6 Post Setting</li>
                                    <li><i className="fa-solid fa-check"></i> Precision Digging</li>
                                    <li><i className="fa-solid fa-check"></i> Rock & Root Removal</li>
                                </ul>
                            </div>
                        </div>

                        {/* Dump Runs */}
                        <div className="detail-card reverse fade-in">
                            <div className="detail-image">
                                <img src="/service_dump_runs.png" alt="Dump Runs and Garbage Removal" />
                            </div>
                            <div className="detail-content">
                                <h3><i className="fa-solid fa-trash-can text-secondary"></i> Dump Runs & Cleanups</h3>
                                <p>Got junk? We'll haul it away. We provide fast and affordable removal of household junk, construction debris, and yard waste. Don't let clutter take over your property.</p>
                                <ul className="feature-list">
                                    <li><i className="fa-solid fa-check"></i> Garage Cleanouts</li>
                                    <li><i className="fa-solid fa-check"></i> Reno Debris Removal</li>
                                    <li><i className="fa-solid fa-check"></i> Appliance Disposal</li>
                                </ul>
                            </div>
                        </div>

                        {/* Miscellaneous / Moving */}
                        <div className="detail-card fade-in">
                            <div className="detail-image">
                                <img src="/service_misc.png" alt="Moving and General Labor" />
                            </div>
                            <div className="detail-content">
                                <h3><i className="fa-solid fa-truck-ramp-box text-secondary"></i> Moving & General Labor</h3>
                                <p>Whether you're moving a small apartment or need heavy lifting done around the house, our team is ready. We offer careful loading/unloading assistance and general property labor.</p>
                                <ul className="feature-list">
                                    <li><i className="fa-solid fa-check"></i> Local Moving Help</li>
                                    <li><i className="fa-solid fa-check"></i> Furniture Assembly</li>
                                    <li><i className="fa-solid fa-check"></i> Heavy Lifting</li>
                                </ul>
                            </div>
                        </div>

                        {/* Seasonal */}
                        <div className="detail-card reverse fade-in">
                            <div className="detail-image">
                                <img src="/service_seasonal.png" alt="Seasonal Property Maintenance" />
                            </div>
                            <div className="detail-content">
                                <h3><i className="fa-regular fa-calendar-check text-secondary"></i> Seasonal Maintenance</h3>
                                <p>Keep your property in top shape year-round. From spring thaw cleanups to getting ready for winter, we offer a variety of seasonal services to maintain your home's curb appeal.</p>
                                <ul className="feature-list">
                                    <li><i className="fa-solid fa-check"></i> Spring/Fall Cleanup</li>
                                    <li><i className="fa-solid fa-check"></i> Eavestrough Cleaning</li>
                                    <li><i className="fa-solid fa-check"></i> Yard Maintenance</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="text-center" style={{ marginTop: '4rem' }}>
                        <a href="/quote" className="btn btn-primary pulse-animation">Request A Service</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;
