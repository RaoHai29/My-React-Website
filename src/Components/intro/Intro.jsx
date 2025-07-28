import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Facebook from '../../img/Facebook.png';
import MyPic from '../../img/rao.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import resume from '../../img/Rao Abdul Hai CV.pdf';

function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className={`intro-section ${darkMode ? 'dark' : 'light'}`} id='Navbar'>
      <div className="intro-container">
        {/* Left Side - Content */}
        <div className="intro-left">
          <motion.div 
            className="intro-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="greeting">Assalam O Alaikum</span>
            <h1 className="name"> I'm Rao Abdul Hai</h1>
      
            <p className="description">
              Frontend Developer with a Cybersecurity edge. I specialize in building 
              responsive, secure, and user-centric web applications using React.js, 
              JavaScript, HTML5, CSS3, and Node.js. With 1.5+ years of experience 
              and a Cybersecurity degree, I bring technical skill and security-first 
              thinking to every project.
            </p>
            
            <div className="intro-actions">
              <a href={resume} target='_blank' rel='noopener noreferrer' className="hire-btn">
                Hire Me
              </a>
              <div className="social-links">
                <a href='https://github.com/RaoHai29' aria-label="GitHub">
                  <img src={Github} alt='Github' />
                </a>
                <a href='https://www.linkedin.com/in/rao-abdul-hai-87aa9b1b4/' aria-label="LinkedIn">
                  <img src={LinkedIn} alt='LinkedIn' />
                </a>
                <a href='https://www.facebook.com/raohai10' aria-label="Facebook">
                  <img src={Facebook} alt='Facebook' />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <div className="intro-right">
          <motion.div 
            className="image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="circle-ring"></div>
            <div className="profile-image">
              <img src={MyPic} alt="Rao Abdul Hai" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Intro;