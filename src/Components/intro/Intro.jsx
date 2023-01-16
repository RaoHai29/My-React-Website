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
