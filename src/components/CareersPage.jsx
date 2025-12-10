import { useEffect } from 'react';

const CareersPage = () => {
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
                    <h1>Join Our Team</h1>
                    <p style={{ color: 'var(--gray-200)', maxWidth: '600px', margin: '1rem auto' }}>Work with the most reliable property maintenance crew in Thunder Bay.</p>
                </div>
            </div>

            <section className="section-padding container" style={{ maxWidth: '800px' }}>
                <div className="career-intro text-center" style={{ marginBottom: '4rem' }}>
                    <h2>Build Your Career with KH Contracting</h2>
                    <p style={{ color: '#4b5563', fontSize: '1.1rem' }}>
                        We are always looking for hard-working, reliable individuals to join our growing team.
                        Whether you're an experienced plow operator or looking for seasonal labor work, we offer competitive pay and a respectful work environment.
                    </p>
                </div>

                <div className="positions-grid">
                    <div className="career-card fade-in" style={{
                        border: '1px solid var(--gray-200)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '2rem',
                        marginBottom: '2rem',
                        background: 'var(--white)',
                        boxShadow: 'var(--shadow-sm)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                            <h3 style={{ margin: 0 }}>Snow Plow Operator / Shoveler</h3>
                            <span style={{
                                background: 'var(--gray-100)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '1rem',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                color: 'var(--primary-color)'
                            }}>Seasonal / On-Call</span>
                        </div>
                        <p style={{ marginBottom: '1.5rem', color: '#4b5563' }}>
                            Responsible for clearing driveways and walkways for residential and commercial clients. Must have a valid driver's license and be available during snow events (including nights/early mornings).
                        </p>
                        <ul style={{ marginBottom: '1.5rem', color: '#4b5563', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li>Experience with truck plows or snow blowers preferred</li>
                            <li>Reliable transportation to the shop</li>
                            <li>Ability to work in cold weather conditions</li>
                        </ul>
                        <a href="mailto:dupont_92@hotmail.com?subject=Job Application - Snow Operator" className="btn btn-secondary">Apply via Email</a>
                    </div>

                    <div className="career-card fade-in" style={{
                        border: '1px solid var(--gray-200)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '2rem',
                        marginBottom: '2rem',
                        background: 'var(--white)',
                        boxShadow: 'var(--shadow-sm)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                            <h3 style={{ margin: 0 }}>General Laborer</h3>
                            <span style={{
                                background: 'var(--gray-100)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '1rem',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                color: 'var(--primary-color)'
                            }}>Part-Time / Casual</span>
                        </div>
                        <p style={{ marginBottom: '1.5rem', color: '#4b5563' }}>
                            Asset for various projects including fence post digging, moving services, and dump runs. Physical fitness and reliability are key.
                        </p>
                        <a href="mailto:dupont_92@hotmail.com?subject=Job Application - General Labor" className="btn btn-secondary">Apply via Email</a>
                    </div>
                </div>

                <div className="career-benefits text-center" style={{ marginTop: '4rem', background: 'var(--gray-100)', padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
                    <h3>Why Work With Us?</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                        <div>
                            <i className="fa-solid fa-sack-dollar text-secondary" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
                            <h4 style={{ fontSize: '1.1rem' }}>Competitive Pay</h4>
                        </div>
                        <div>
                            <i className="fa-solid fa-users text-secondary" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
                            <h4 style={{ fontSize: '1.1rem' }}>Great Team</h4>
                        </div>
                        <div>
                            <i className="fa-solid fa-check-to-slot text-secondary" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
                            <h4 style={{ fontSize: '1.1rem' }}>Reliable Work</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CareersPage;
