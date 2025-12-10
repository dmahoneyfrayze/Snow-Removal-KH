import { useEffect } from 'react';
import ContactForm from './ContactForm';

const ReferralPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="page-header" style={{
                background: 'var(--primary-color)',
                padding: '6rem 0 3rem',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <h1>Referral Program</h1>
                    <p style={{ color: 'var(--gray-200)', margin: '1rem auto', maxWidth: '600px' }}>
                        Get rewarded for helping your neighbors stay safe this winter.
                    </p>
                </div>
            </div>

            <section className="section-padding container text-center" style={{ maxWidth: '800px' }}>
                <div className="referral-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    <div className="step-card fade-in">
                        <div style={{
                            width: '80px', height: '80px', background: 'var(--gray-100)',
                            borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'var(--secondary-color)'
                        }}>
                            <i className="fa-solid fa-user-plus"></i>
                        </div>
                        <h3>1. Refer a Friend</h3>
                        <p>Tell your neighbors or family about our seasonal snow removal services.</p>
                    </div>

                    <div className="step-card fade-in" style={{ transitionDelay: '0.1s' }}>
                        <div style={{
                            width: '80px', height: '80px', background: 'var(--gray-100)',
                            borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'var(--secondary-color)'
                        }}>
                            <i className="fa-solid fa-file-signature"></i>
                        </div>
                        <h3>2. They Sign Up</h3>
                        <p>When they book a seasonal contract, make sure they mention your name.</p>
                    </div>

                    <div className="step-card fade-in" style={{ transitionDelay: '0.2s' }}>
                        <div style={{
                            width: '80px', height: '80px', background: 'var(--gray-100)',
                            borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'var(--secondary-color)'
                        }}>
                            <i className="fa-solid fa-money-bill-wave"></i>
                        </div>
                        <h3>3. You Get Paid</h3>
                        <p>We'll send you <strong>$50 cash</strong> or discount your next season for every successful referral.</p>
                    </div>
                </div>

                <div className="referral-cta" style={{ background: 'var(--accent-color)', color: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>Start Earning Today</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>There is no limit to how many referrals you can send our way.</p>
                    <a href="/contact" className="btn" style={{ background: 'white', color: 'var(--accent-color)' }}>Contact Us to Learn More</a>
                </div>
            </section>
        </>
    );
};

export default ReferralPage;
