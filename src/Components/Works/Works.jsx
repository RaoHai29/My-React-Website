import React from 'react'
import './works.css'
import Fiverr from '../../img/fiverr.png'
import Faceb from '../../img/faceb.png'
import Insta from '../../img/insta.png'
import Upwork from '../../img/Upwork.png'
import Linkedin from '../../img/link.png'
import {themeContext} from '../../Context'
import {useContext} from 'react'
import{motion} from'framer-motion'

function Works() {
    const transition={duration:3.5,type:'spring'}
    const width="100px"
    const height="100px"
    const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;

  return (
    <div className='Work'>
        <div className="left-Service">
            <span style={{color: darkMode? 'white':''}}>Works For All</span>
            <span>Brands & Clients</span>
            <span>
               Work for all platforms like Fiverr ,Frelancer ,Upwork etc
                <br/>Also Display my work on Facebook, Instagram, LinkedIn.
                <br/>Also work on Wordpress.
            </span>
            <button className="button btn-cv">Hire Me </button>
            <div className="blur blur-cv"></div>
        </div>
        <div className="work-right">
            <motion.div
            initial={{rotate: 90}}
            whileInView={{rotate:0}}
            viewport={{margin:'-40px'}}
            transition={transition}


            
            className="w-mainCircle">
                <div className="w-sec-Circle">
                    <img src={Fiverr} width={width} height={height} alt="fiverr" />
                </div>
                <div className="w-sec-Circle">
                    <img src={Upwork} width={width} height={height} alt="Upwork" />
                </div>
                <div className="w-sec-Circle">
                    <img src={Faceb} width={width} height={height} alt="Facebook" />
                </div>
                <div className="w-sec-Circle">
                    <img src={Linkedin} width={width} height={height} alt="LinkedIn" />
                </div>
                <div className="w-sec-Circle">
                    <img src={Insta} width={width} height={height} alt="Instagram" />
                </div>
            </motion.div>
              {/*---Back Circles--*/}
              <div className="w-back-Circle blueCircle"></div>
              <div className="w-back-Circle purpleCircle"></div>
        </div>
    </div>
  )
}

export default Works
