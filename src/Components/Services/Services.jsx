import React from 'react'
import './Services.css'
import Reactlogo from '../../img/reactlogo.png'
import Jslogo from '../../img/Jslogo.png'
import Word from '../../img/Word.png'
import Card from '../Cards/Card'
import Resume from './Rao Abdul Hai Resume.pdf'
import {themeContext} from '../../Context'
import {useContext} from 'react'
import {motion} from 'framer-motion'


function Services() {
    const transition={duration: 2,type: 'spring'}
    const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;

  return (
    <div className='Services' id='Services'>
        <div className="left-Service">
            <span style={{color: darkMode? 'white':''}}>My Inspiring</span>
            <span>Services</span>
            <span>
                I am Providing Services on React , Javascript , Wordpress and Also Use Adope Photoshop<br/> For Additing my Project To make it Unique.
            </span>
            <a href={Resume} download>
            <button className="button btn-cv">My Resume</button>
            </a>
           
            <div className="blur blur-cv"></div>
        </div>
        <div className="right-Services">
                <motion.div
                   initial={{left:'22rem'}}
                   whileInView={{left:'16rem'}}
                   transition={transition} 
                
                style={{left:'16rem'}}>
                    <Card 
                        logo={Reactlogo}
                        Heading="React.js"
                        detail="Playing with React to break into Components"
                    />
                </motion.div>
                <motion.div
                 initial={{left:'-7rem'}}
                 whileInView={{left:'0rem'}}
                 transition={transition} 
              
                 style={{left:'-4rem',top:'12rem'}}>
                    <Card 
                        logo={Jslogo}
                        Heading="JavaScript ES6"
                        detail="HTML5,CSS3, BOOTSRAP, NODE.JS,JEST.JS ,PSD TO HTML"
                    />
                </motion.div>
                <motion.div
                 initial={{left:'19rem'}}
                 whileInView={{left:'23rem'}}
                 transition={transition} 
              
                style={{left:'19rem',top:'20rem'}}>
                    <Card 
                        logo={Word}
                        Heading="Wordpress"
                        detail="WooCommerce, Elementor ,Wix ,Blogs ,Canva"
                    />
                </motion.div>
                <div className="blur blur-c" style={{background:'var(--purple)'}}></div>
        </div>
      
    </div>
  )
}

export default Services
