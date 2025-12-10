const Gallery = () => {
    return (
        <section className="gallery section-padding" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">
                <div className="section-header">
                    <span>Our Work</span>
                    <h2>Recent Projects</h2>
                </div>

                <div className="gallery-grid">
                    <div className="gallery-item fade-in">
                        <img src="/gallery_residential.png" alt="Residential Driveway Clearing" />
                        <div className="overlay">
                            <h3>Residential Clearing</h3>
                        </div>
                    </div>
                    <div className="gallery-item fade-in" style={{ transitionDelay: '0.2s' }}>
                        <img src="/truck.jpg" alt="Commercial Lot Plowing" />
                        <div className="overlay">
                            <h3>Commercial Contracts</h3>
                        </div>
                    </div>
                    <div className="gallery-item fade-in" style={{ transitionDelay: '0.4s' }}>
                        <img src="/gallery_walkway.png" alt="Walkway Sanding and Clearing" />
                        <div className="overlay">
                            <h3>Walkway Safety</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
