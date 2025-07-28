import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-brand">
            <h2 className="brand-name">Rao Abdul Hai</h2>
            <p className="brand-tagline">Frontend Developer | Software Developer</p>
            <p className="brand-description">
              Crafting digital experiences with modern web technologies. 
              Passionate about creating responsive, user-friendly applications.
            </p>
          </div>

          <div className="footer-links">
            <div className="link-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="link-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#web-development">Web Development</a></li>
                <li><a href="#ui-design">Cyber Security</a></li>
                <li><a href="#consulting">Consulting</a></li>
              </ul>
            </div>

            <div className="link-section">
              <h4>Technologies</h4>
              <ul>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>CSS3</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4>Let's Connect</h4>
          <div className="footer-social-links">
            <a href="https://www.facebook.com/raohai10" className="social-link facebook" aria-label="Facebook">
              <i className="fa fa-facebook"></i>
              <span>Facebook</span>
            </a>
            <a href="https://x.com/RaoAbdulHai4" className="social-link twitter" aria-label="Twitter">
              <i className="fa fa-twitter"></i>
              <span>Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/rao-abdul-hai-87aa9b1b4/" className="social-link linkedin" aria-label="LinkedIn">
              <i className="fa fa-linkedin-square"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/RaoHai29" className="social-link github" aria-label="GitHub">
              <i className="fa fa-github"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe to get notified about my latest projects and articles.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="button">Subscribe</button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Rao Abdul Hai. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="footer-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </footer>
  );
}

export default Footer;
