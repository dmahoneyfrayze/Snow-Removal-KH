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
                    {services.map((service, index) => (
                        <div className="service-item fade-in" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                            <h3><i className={`fa-solid ${service.icon}`}></i> {service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <Link to="/services" className="btn btn-secondary">View All Services & Rates</Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
