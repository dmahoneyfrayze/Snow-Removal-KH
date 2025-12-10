const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-content">
                <div className="about-text fade-in">
                    <h2>Your Winter Property Partners</h2>
                    <p><strong>K.H Contracting Snow Removal</strong> is dedicated to serving Thunder Bay, Ontario with reliable property maintenance.</p>
                    <p>Located at 638 Brown Street, we are your local experts for tackling Canadian winters. Whether you need a one-time clear out or efficient seasonal maintenance, our team is ready to help.</p>
                    <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><i className="fa-solid fa-check" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> Serving Thunder Bay & Area</li>
                        <li><i className="fa-solid fa-check" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> Residential & Commercial</li>
                        <li><i className="fa-solid fa-check" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> Free Estimates</li>
                    </ul>
                </div>
                <div className="about-image fade-in" style={{ transitionDelay: '0.2s' }}>
                    <img src="https://images.unsplash.com/photo-1517260739337-6799d2ccdde2?auto=format&fit=crop&q=80&w=800" alt="Snow removal truck" />
                </div>
            </div>
        </section>
    );
};

export default About;
