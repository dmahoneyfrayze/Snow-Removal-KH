import { useEffect } from 'react';

const BlogPage = () => {
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
                    <h1>News & Updates</h1>
                    <p style={{ color: 'var(--gray-200)', maxWidth: '600px', margin: '1rem auto' }}>Latest tips and updates from the KH Contracting team.</p>
                </div>
            </div>

            <section className="section-padding container text-center" style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <i className="fa-regular fa-newspaper" style={{ fontSize: '4rem', color: 'var(--gray-200)', marginBottom: '1.5rem' }}></i>
                <h2 style={{ color: '#4b5563' }}>Coming Soon</h2>
                <p style={{ maxWidth: '500px', color: '#6b7280' }}>
                    We're working on gathering the best snow removal tips and property maintenance advice for you. Check back soon!
                </p>
            </section>
        </>
    );
};

export default BlogPage;
