import React, { useState, useEffect } from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import { Link } from 'react-scroll';

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m18 6-12 12" />
    <path d="m6 6 12 12" />
  </svg>
);

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', to: 'Home' },
    { name: 'Services', to: 'Services' },
    { name: 'Projects', to: 'Projects' }
  ];

  return (
    <nav className={`nav-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-left">
            <div className="nav-name">RAO</div>
            <Toggle />
          </div>

          <div className="nav-right">
            <div className="nav-list">
              <ul>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="activeClass"
                  >
                    <li onClick={closeMobileMenu}>{item.name}</li>
                  </Link>
                ))}
              </ul>
            </div>

            <Link
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <button className="nav-btn" onClick={closeMobileMenu}>
                Contact Us
              </button>
            </Link>

            <button
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="activeClass"
                onClick={closeMobileMenu}
              >
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>

          <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <button className="nav-btn" onClick={closeMobileMenu}>
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
