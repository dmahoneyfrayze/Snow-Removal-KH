const Services = () => {
    const services = [
        {
            icon: "fa-snowplow", // Using snowplow icon if available, fallback to truck
            title: "Snow Removal",
            desc: "Complete clearing of driveways, parking lots, and walkways. We keep you moving regardless of the storm."
        },
        {
            icon: "fa-mound",
            title: "Snow Bank Relocation",
            desc: "Running out of space? We push back or relocate large snow piles to maximize your property's utility."
        },
        {
            icon: "fa-snowflake",
            title: "Sanding",
            desc: "Ice control services to prevent slips and falls. We apply sand/grit to keep your surfaces safe."
        },
        {
            icon: "fa-trash-can",
            title: "Garbage Removal",
            desc: "Beyond snow, we offer property maintenance and garbage removal services to keep your site clean."
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
            </div>
        </section>
    );
};

export default Services;
