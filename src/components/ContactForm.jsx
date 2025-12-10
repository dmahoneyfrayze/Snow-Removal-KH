import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        service: 'Snow Removal',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact-form" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">
                <div className="form-wrapper fade-in">
                    <div className="form-content">
                        <h2>Get A Free Quote</h2>
                        <p>Fill out the form below and we'll get back to you with a competitive estimate for your property.</p>

                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            className="contact-form"
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="John Doe"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    placeholder="(807) 555-0123"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Property Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    required
                                    placeholder="123 Street Name"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Service Needed</label>
                                <select
                                    id="service"
                                    name="service"
                                    onChange={handleChange}
                                >
                                    <option value="Snow Removal">Snow Removal Contract</option>
                                    <option value="One-Time Clear">One-Time Clearing</option>
                                    <option value="Sanding">Sanding / Salting</option>
                                    <option value="Snow Relocation">Snow Relocation</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Additional Details (Optional)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Any specific instructions or questions..."
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                Request Free Estimate
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
