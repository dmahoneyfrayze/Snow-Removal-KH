const Hero = () => {
    return (
        <section id="home" className="hero" style={{ background: "linear-gradient(rgba(11, 29, 54, 0.5), rgba(11, 29, 54, 0.6)), url('/hero_banner.png') no-repeat center center/cover" }}>
            <div className="container hero-content">
                <h1>Don't Get Stuck This Winter.<br /><span className="text-secondary">Reliable Snow Removal in Thunder Bay</span></h1>
                <p>24/7 Emergency Service. Residential & Commercial. We keep your property safe and accessible when the storm hits.</p>
                <div className="hero-btns">
                    <a href="tel:8076323675" className="btn btn-primary pulse-animation">
                        <i className="fa-solid fa-phone"></i> Call For Free Estimate
                    </a>
                </div>
                <p className="hero-trust"><i className="fa-solid fa-shield-halved"></i> Fully Insured & Professional Team</p>
            </div>
        </section>
    );
};

export default Hero;
