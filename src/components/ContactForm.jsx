import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        service: 'Snow Removal',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real Netlify Setup, the form submits to the static endpoint.
        // For React SPA, we might need a hidden form in HTML or specific fetch submission.
        // Assuming standard Netlify form handling for now which intercepts POSTS.

        const myForm = e.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => setSubmitted(true))
            .catch((error) => alert(error));
    };

    if (submitted) {
        return (
            <section id="contact-form" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <div className="form-wrapper fade-in" style={{ textAlign: 'center', padding: '4rem' }}>
                        <i className="fa-solid fa-circle-check" style={{ fontSize: '4rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}></i>
                        <h2>Request Received!</h2>
                        <p>Thanks {formData.name.split(' ')[0]}! We've received your details.</p>
                        <p>We typically respond within <strong>1 hour</strong> during business hours (or immediately during snow events).</p>
                        <button className="btn btn-secondary" onClick={() => setSubmitted(false)} style={{ marginTop: '2rem' }}>Send Another Request</button>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="contact-form" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">
                <div className="form-wrapper fade-in">
                    <div className="form-content">
                        <h2>Request Your Free Estimate</h2>
                        <p>Fill out the details below. We usually respond within <strong>1 hour</strong>.</p>

                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <div className="form-group">
                                <label htmlFor="name">Full Name <span style={{ color: 'red' }}>*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="e.g. John Smith"
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number <span style={{ color: 'red' }}>*</span></label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    placeholder="e.g. (807) 555-0123"
                                    onChange={handleChange}
                                    value={formData.phone}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Property Address <span style={{ color: 'red' }}>*</span></label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    required
                                    placeholder="e.g. 123 Pine St, Thunder Bay"
                                    onChange={handleChange}
                                    value={formData.address}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Service Needed</label>
                                <select
                                    id="service"
                                    name="service"
                                    onChange={handleChange}
                                    value={formData.service}
                                >
                                    <option value="Snow Removal">Snow Removal (Seasonal/One-Time)</option>
                                    <option value="Fence Posts">Fence Post Installation</option>
                                    <option value="Moving">Moving / General Labor</option>
                                    <option value="Dump Run">Dump Run / Junk Removal</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Any Specific Details?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    placeholder="Tell us about your driveway size, fence details, or items to move..."
                                    onChange={handleChange}
                                    value={formData.message}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary pulse-animation" style={{ width: '100%' }}>
                                Request Free Estimate
                            </button>
                            <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '1rem', color: '#6b7280' }}>
                                <i className="fa-solid fa-lock"></i> Your information is secure. No spam.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
