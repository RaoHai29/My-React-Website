<<<<<<< HEAD
import React from 'react';
import './Services.css';
import Resume from '../../img/Rao Abdul Hai CV.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';

function Services() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const services = [
        {
            icon: "🌐",
            title: "Web Development",
            description: "Creating modern, responsive websites and web applications with cutting-edge technologies and best practices.",
            technologies: ["JavaScript", "React", "HTML5", "CSS3", "Bootstrap", "Node.js"]
        },
        {
            icon: "📊",
            title: "Data Analysis",
            description: "Transforming raw data into actionable insights using advanced analytics and machine learning techniques.",
            technologies: ["Python", "Pandas", "NumPy", "SQL", "Excel", "Tableau"]
        },
        {
            icon: "🔒",
            title: "Cybersecurity",
            description: "Protecting digital assets through comprehensive security solutions and vulnerability assessments.",
            technologies: ["C++", "C", "Python", "Linux", "Kali Linux", "Wireshark"]
        }
    ];

    const skills = [
        "JavaScript", "Python", "React", "Node.js", "C++", "C", "HTML5", "CSS3",
        "Bootstrap", "MongoDB","MySQL", "SQL", "Pandas", "NumPy", "Linux", "Photoshop", "Git"
    ];

    const stats = [
        { number: "12+", label: "Projects Completed" },
        { number: "9+", label: "Happy Clients" },
        { number: "1.5+", label: "Years Experience" },
        { number: "12+", label: "Technologies" }
    ];

    return (
        <div className={`Services ${darkMode ? 'dark-mode' : ''}`} id='Services'>
            {/* Background Decorations */}
            <div className="bg-decoration bg-circle-1"></div>
            <div className="bg-decoration bg-circle-2"></div>
            <div className="bg-decoration bg-circle-3"></div>

            <div className="services-container">
                {/* Header Section */}
                <div className="services-header">
                    <div className="services-badge">PROFESSIONAL SERVICES</div>
                    <h1 className="services-title">My Inspiring</h1>
                    <h1 className="services-subtitle">Services</h1>
                    <p className="services-description">
                        I provide comprehensive digital solutions including web development, data analysis, 
                        cybersecurity, and modern UI/UX design using cutting-edge technologies and industry best practices.
                    </p>
                    <a href={Resume} download className="download-btn">
                        📄 Download Resume →
                    </a>
                </div>

                {/* Statistics Section */}
                <div className="stats-section">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services Grid */}
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <span className="service-icon">{service.icon}</span>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <div className="tech-tags">
                                {service.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skills Section */}
                <div className="skills-section">
                    <h2 className="skills-title">Technologies I Work With</h2>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <span key={index} className="skill-item">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
=======
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
>>>>>>> 43eb28148d147ac2230ea1346d71f1979f7ea8ad
