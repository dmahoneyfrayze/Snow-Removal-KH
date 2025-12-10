import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            icon: "fa-snowplow",
            title: "Snow Removal",
            desc: "Reliable winter maintenance for driveways and parking lots. 24/7 monitoring and fast response times."
        },
        {
            icon: "fa-hammer",
            title: "Fence Posts",
            desc: "Professional post hole digging and setting. Secure, level, and built to last for your fencing needs."
        },
        {
            icon: "fa-truck-ramp-box",
            title: "Moving Services",
            desc: "Local moving assistance for homes and offices. Careful handling of your belongings and efficient transport."
        },
        {
            icon: "fa-trash-can",
            title: "Dump Runs",
            desc: "Garbage removal and dump runs. We clear out clutter, renovation debris, and yard waste efficiently."
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <span>What We Do</span>
                    <h2>Our Services</h2>
                </div>

                <div className="services-grid">
                    <div className="service-item fade-in">
                        <h3><i className="fa-solid fa-house-chimney text-secondary"></i> Residential Snow</h3>
                        <p>Driveway clearing, walkway shoveling, and salting for homes. We treat your property like our own.</p>
                        <a href="/residential-snow-removal" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--accent-color)', fontWeight: 600 }}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <div className="service-item fade-in" style={{ transitionDelay: '0.1s' }}>
                        <h3><i className="fa-solid fa-building text-secondary"></i> Commercial Snow</h3>
                        <p>Parking lot plowing, hauling, and sanding for businesses. Zero-tolerance liability focus.</p>
                        <a href="/commercial-snow-removal" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--accent-color)', fontWeight: 600 }}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <div className="service-item fade-in" style={{ transitionDelay: '0.2s' }}>
                        <h3><i className="fa-solid fa-hammer text-secondary"></i> Property Maintenance</h3>
                        <p>Year-round services including fence post digging, moving help, and dump runs.</p>
                        <a href="/services" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--accent-color)', fontWeight: 600 }}>View All Services <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <a href="/services" className="btn btn-secondary">View Rates & Packages</a>
                </div>
            </div>
        </section>
    );
};

export default Services;
