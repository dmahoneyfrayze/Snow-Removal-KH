
const Gallery = () => {
    const galleryImages = [
        { src: "/gallery_residential.png", alt: "Residential Snow Clearing" },
        { src: "/gallery_commercial.png", alt: "Commercial Lot Maintenance" },
        { src: "/gallery_walkway.png", alt: "Walkway Shoveling" },
        { src: "/truck.jpg", alt: "Our Fleet Ready for Action" }
    ];

    return (
        <section id="gallery" className="gallery section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <span>Our Work</span>
                    <h2>Gallery</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#4b5563' }}>
                        Real photos of our equipment and results. We take pride in leaving every property clean and accessible.
                    </p>
                </div>

                <div className="gallery-grid">
                    {galleryImages.map((img, index) => (
                        <div className="gallery-item fade-in" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                            <img src={img.src} alt={img.alt} loading="lazy" />
                            <div className="overlay">
                                <p>{img.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
