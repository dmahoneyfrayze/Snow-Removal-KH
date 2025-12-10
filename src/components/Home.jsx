import Hero from './Hero';
import Features from './Features';
import Services from './Services';
import About from './About';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import FAQ from './FAQ';
import SeasonCalculator from './SeasonCalculator';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Hero />

            {/* Year-Round Services Highlight */}
            <section className="year-round-highlight section-padding text-center" style={{ paddingBottom: '0' }}>
                <div className="container">
                    <span className="text-secondary" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Not Just Winter</span>
                    <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>Year-Round Property Maintenance</h2>
                    <p style={{ maxWidth: '600px', margin: '1rem auto 2rem', color: '#4b5563' }}>
                        We are here for you in every season. From clearing snow to digging fence posts and hauling junk.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link to="/services" className="btn btn-secondary"><i className="fa-solid fa-hammer"></i> Fence Posts</Link>
                        <Link to="/services" className="btn btn-secondary"><i className="fa-solid fa-truck-ramp-box"></i> Moving</Link>
                        <Link to="/services" className="btn btn-secondary"><i className="fa-solid fa-trash-can"></i> Dump Runs</Link>
                    </div>
                </div>
            </section>

            <Features />

            {/* Lead Magnet Calculator */}
            <section className="calculator-section section-padding" style={{ background: 'var(--gray-100)' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <span>Compare & Save</span>
                        <h2>Calculate Your Savings</h2>
                    </div>
                    <SeasonCalculator />
                </div>
            </section>

            <Services />
            <About />
            <Gallery />
            <Testimonials />
            <FAQ />
            <ContactForm />
        </>
    );
};

export default Home;
