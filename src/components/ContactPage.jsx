import { useEffect } from 'react';
import ContactForm from './ContactForm';

const ContactPage = () => {
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
                    <h1>Contact Us</h1>
                    <p style={{ color: 'var(--gray-200)', maxWidth: '600px', margin: '1rem auto' }}>Ready to get started? Schedule a visit or request a quote below.</p>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 1rem' }}>
                <div className="contact-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    {/* Scheduling Column */}
                    <div className="schedule-column">
                        <h2 style={{ marginBottom: '1.5rem' }}>Schedule a Visit</h2>
                        <p style={{ marginBottom: '2rem' }}>Book a time for us to come by and give you an in-person estimate.</p>

                        {/* Placeholder for Calendar Iframe */}
                        <div className="calendar-placeholder" style={{
                            background: '#f3f4f6',
                            border: '2px dashed #d1d5db',
                            borderRadius: '1rem',
                            height: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            padding: '2rem'
                        }}>
                            <i className="fa-regular fa-calendar-days" style={{ fontSize: '3rem', color: '#9ca3af', marginBottom: '1rem' }}></i>
                            <h3 style={{ color: '#4b5563' }}>Calendar Loading...</h3>
                            <p style={{ color: '#6b7280' }}>Booking calendar will appear here.</p>
                            {/* 
                                INSTRUCTIONS: Replace this div with your GoHighLevel Calendar Embed Code.
                                Example: <iframe src="..." style={{width: '100%', height: '100%', border: 'none'}}></iframe>
                            */}
                        </div>
                    </div>

                    {/* Contact Info & Map Column */}
                    <div className="info-column">
                        <h2 style={{ marginBottom: '1.5rem' }}>Service Area</h2>
                        <div className="map-container" style={{
                            marginBottom: '2rem',
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}>
                            {/* Google Map Embed for Thunder Bay */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169453.4678880629!2d-89.39077204924765!3d48.41249704259837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d5921774c16e98d%3A0x3d0557348f1d8b74!2sThunder%20Bay%2C%20ON!5e0!3m2!1sen!2sca!4f13.1!5e0!3m2!1sen!2sca"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="contact-details">
                            <h3>KH Contracting Snow Removal</h3>
                            <ul className="contact-list" style={{ marginTop: '1rem' }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                    <i className="fa-solid fa-location-dot text-secondary"></i>
                                    <span>Serving Thunder Bay & Surrounding Area<br />Based at 638 Brown Street</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                    <i className="fa-solid fa-phone text-secondary"></i>
                                    <a href="tel:8076323675" style={{ fontWeight: '600' }}>(807) 632-3675</a>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                    <i className="fa-solid fa-envelope text-secondary"></i>
                                    <a href="mailto:dupont_92@hotmail.com">dupont_92@hotmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: 'var(--gray-100)' }}>
                <ContactForm />
            </div>
        </>
    );
};

export default ContactPage;
