
const Gallery = () => {
    const galleryImages = [
        // Commercial
        { src: "/commercial_parking.png", alt: "Commercial Parking Lot Clearing" },
        { src: "/commercial_complete.png", alt: "Completed Commercial Snow Removal" },
        { src: "/commercial_maintenance.png", alt: "Commercial Property Maintenance" },
        // Residential
        { src: "/residential_driveway.png", alt: "Residential Driveway Plowing" },
        { src: "/residential_complete.png", alt: "Clean Driveway Snow Removal" },
        { src: "/residential_seasonal.png", alt: "Seasonal Snow Services" },
        // Services
        { src: "/service_fence_posts.png", alt: "Summer Fence Post Digging" },
        { src: "/service_dump_runs.png", alt: "Hauling & Dump Runs" }
    ];

    return (
        <section id="gallery" className="gallery section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <span>Our Work</span>
                    <h2>Gallery</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#4b5563' }}>
                        A glimpse at our equipment and results. We take pride in leaving every property clean and accessible.
                    </p>
                </div>

                <div className="gallery-grid">
                    {galleryImages.map((img, index) => (
                        <div className="gallery-item fade-in" key={index} style={{ transitionDelay: `${index * 0.05}s` }}>
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
