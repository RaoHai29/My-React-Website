<<<<<<< HEAD
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
=======
import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Facebook from '../../img/Facebook.png'
import Vector from '../../img/vector1.png'
import MyPic from '../../img/MyPic.png'
import Hacker from '../../img/hacker.png'
import FloatingDiv from '../FloatingDiv'
import Img from '../../img/taj.png'
import Thumbup from '../../img/thumbup.png'
import {themeContext} from '../../Context'
import {useContext} from 'react'
import {motion} from'framer-motion'




function Intro() {
    const transition={duration: 2, type: 'spring'}
    const wid="50px"
    const height="50px"
    const width="500px"
    const mywid="400px"
    const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;

  return (
    <div className="intro" id='Navbar'>
        <div className="intro-left">
            <div className="intro-name">
                <span style={{color: darkMode? 'white': ''}}>Hi! I Am</span>
                <span>Rao Abdul Hai</span>
                <span>Frontend & React Developer with 1 year of Experience in Web 
                    Designing & Development ,Producting the Quality of Work</span>
            </div>
            <button className="button i-btn">
                    Hire Me
            </button>
            <div className="intro-icons">
               <a href='Zhttps://github.com/RaoHai29'>
               <img src={Github} width={wid} height={height} alt="Github" />
               </a>
               <a href='https://www.linkedin.com/in/rao-abdul-hai-87aa9b1b4/'>
                <img src={LinkedIn} width={wid} height={height} alt="Linkedin" />
               </a>
               <a href='https://www.facebook.com/raohai10'>
                <img src={Facebook} width={wid} height={height} alt="facebook" />
               </a>
            </div>
        </div>
        <div className="intro-right">
             <img src={Vector} width={width} alt="vector1" /> 
             <img src={MyPic} width={mywid} alt="Mypic" /> 
             <motion.img
             initial={{left:'-50%'}}
             whileInView={{left:'-24%'}}
             transition={transition}
             src={Hacker} alt="hacker" />
             <motion.div
                initial={{top:'-3%',left:'63%'}}
                whileInView={{left:'57%'}}
                transition={transition}
             style={{top:'-3%',left:'57%'}}
             className='floating-div'
             >
                <FloatingDiv Img={Img} txt1="Web" txt2="Development" />
             </motion.div>
             <motion.div
                initial={{top:'20rem',left:'7rem'}}
                whileInView={{left:'-2rem'}}
                transition={transition}
             style={{top:'20rem',left:'-2rem'}}
             className='floating-div'
             >
                <FloatingDiv Img={Thumbup} txt1="Coursera Certified" txt2="Meta Frontend" />
             </motion.div>
             <div className='blur'>
                {/*----------Blur back------*/}
             </div>
             <div className='blur1'>
                {/*----------Blur back------*/}
             </div>

        </div>
    </div>
    )
}

export default Intro
>>>>>>> 43eb28148d147ac2230ea1346d71f1979f7ea8ad
