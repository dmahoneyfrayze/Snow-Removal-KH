import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => observer.disconnect();
  }, [/* dependencies */]); // Added dependency array to avoid multiple subscriptions if re-rendered

  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />

      {/* Floating CTA for Mobile */}
      <a href="tel:8076323675" className="floating-cta" aria-label="Call Now">
        <i className="fa-solid fa-phone"></i>
      </a>
    </div>
  );
}

export default App;
