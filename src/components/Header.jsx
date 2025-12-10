import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container nav-container">
                <a href="#" className="logo">
                    <img src="/logo.jpg" alt="KH Contracting" className="logo-img" style={{ height: '50px', borderRadius: '5px' }} />
                    <span>KH Contracting</span>
                </a>

                <div className="logo">
                    <i className="fa-regular fa-snowflake"></i> KH <span>Contracting</span>
                </div>

                <div className="mobile-menu-btn" onClick={toggleMenu}>
                    <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                <nav>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><a href="/" onClick={closeMenu}>Home</a></li>
                        <li><a href="/services" onClick={closeMenu}>Services</a></li>
                        <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=61566857147759" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fa-brands fa-facebook" style={{ fontSize: '1.2rem' }}></i>
                            </a>
                        </li>
                        <li><a href="tel:8076323675" className="btn btn-primary" onClick={closeMenu}>Call (807) 632-3675</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
