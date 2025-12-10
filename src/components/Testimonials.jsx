const Testimonials = () => {
    return (
        <section className="testimonials section-padding" style={{ backgroundColor: 'var(--gray-100)' }}>
            <div className="container">
                <div className="section-header">
                    <span>Testimonials</span>
                    <h2>Trusted by Your Neighbors</h2>
                </div>

                <div className="testimonials-grid">
                    <div className="testimonial-card fade-in">
                        <div className="stars">★★★★★</div>
                        <p>"KH Contracting saved us during that last big storm! They were here before I even woke up. Driveway was perfectly clear. Highly recommend!"</p>
                        <div className="author">- Sarah M., Thunder Bay</div>
                    </div>
                    <div className="testimonial-card fade-in" style={{ transitionDelay: '0.2s' }}>
                        <div className="stars">★★★★★</div>
                        <p>"Professional and reliable. We have a seasonal contract for our small business lot and they never miss a beat. Great communication too."</p>
                        <div className="author">- James P., Business Owner</div>
                    </div>
                    <div className="testimonial-card fade-in" style={{ transitionDelay: '0.4s' }}>
                        <div className="stars">★★★★★</div>
                        <p>"Fair prices and excellent service. I appreciate that they respect the property and don't damage the lawn edges. Will definitely hire again."</p>
                        <div className="author">- Mike T., Residential Client</div>
                    </div>
                </div>

                <div className="trust-badges fade-in">
                    <div className="badge"><i className="fa-solid fa-certificate"></i> Satisfaction Guaranteed</div>
                    <div className="badge"><i className="fa-solid fa-file-contract"></i> Licensed & Insured</div>
                    <div className="badge"><i className="fa-solid fa-clock"></i> 24/7 Availability</div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
