import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ReferralPage from './components/ReferralPage';
import ResidentialSnow from './components/ResidentialSnow';
import CommercialSnow from './components/CommercialSnow';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import CareersPage from './components/CareersPage';
import BlogPage from './components/BlogPage';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {

  // Intersection Observer for fade-in animations on route change
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

    // Observe function we can call periodically or on mutation
    const observeElements = () => {
      const animatedElements = document.querySelectorAll('.fade-in');
      animatedElements.forEach(el => observer.observe(el));
    };

    observeElements();

    // Use MutationObserver to watch for DOM changes (like route transitions)
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/referrals" element={<ReferralPage />} />
          <Route path="/residential-snow-removal" element={<ResidentialSnow />} />
          <Route path="/commercial-snow-removal" element={<CommercialSnow />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />

        {/* Floating CTA for Mobile */}
        <a href="tel:8076323675" className="floating-cta" aria-label="Call Now">
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>
    </Router>
  );
}

export default App;
