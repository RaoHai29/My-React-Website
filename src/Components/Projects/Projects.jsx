<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
import './Project.css';

// Import local images
import Gdsc from '../../img/gdsc.png';
import Bscs from '../../img/bscs.png';
import Ecom from '../../img/ecom.png';
import Duet from '../../img/duet.png';
import Dawood from '../../img/dawood.png';
import MyPort from '../../img/myPort.png';
import SirPort from '../../img/SirPort.png';
import Ghost from '../../img/ghost.png';
import Gtluxury from '../../img/gtluxury.png';
import photon from '../../img/photon.png';
import onlineTutors from '../../img/onlinetutors.png';
import paidlance from '../../img/paidlance.png';
import unified from '../../img/unified.png';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Griffin Ghost Writing",
      description: "Professional ghostwriting services platform with modern UI and seamless user experience.",
      image: Ghost,
      link: "https://www.griffinghostwriting.com/",
      github: "#",
      tech: ["Html5/CSS3", "EmailJS", "javaScript"],
      category: "Books & Writing"
    },
    {
      id: 2,
      title: "GT Luxury Watersports",
      description: "Premium watersports booking platform with real-time availability and payment integration.",
      image: Gtluxury,
      link: "https://gtluxurywatersports.com/",
      github: "#",
      tech: ["Html5/CSS3", "EmailJS", "javaScript"],
      category: "Boating & Watersports"
    },
    {
      id: 3,
      title: "Photon Electronics",
      description: "Solar energy solutions website with interactive product configurator and cost calculator.",
      image: photon,
      link: "https://www.photonsolars.com/",
      github: "#",
      tech: ["Html5/CSS3", "EmailJS", "javaScript"],
      category: "Solar Energy"
    },
    {
      id: 4,
      title: "Online Tutors Hub",
      description: "Educational platform connecting students with qualified tutors worldwide.",
      image: onlineTutors,
      link: "https://www.onlinetutors-hub.com/",
      github: "#",
      tech: ["Html5/CSS3", "EmailJS", "javaScript"],
      category: "Education"
    },
    {
      id: 5,
      title: "Paidlance Project",
      description: "Freelancing marketplace with advanced project management and secure payment system.",
      image: paidlance,
      link: "https://paidlanceproject.web.app/",
      github: "#",
      tech: ["React", "Material UI", "JavaScript"],
      category: "Marketplace"
    },
    {
      id: 6,
      title: "Unified Arc",
      description: "Architecture firm portfolio with 3D project visualizations and client management system.",
      image: unified,
      link: "https://unified-arc.web.app/",
      github: "#",
      tech: ["React", "Bootstrap", "JavaScript"],
      category: "Architecture"
    },
    {
      id: 7,
      title: "GDSC DUET",
      description: "Google Developer Student Clubs community platform for tech enthusiasts.",
      image: Gdsc,
      link: "https://gdsc-duet-karachi.web.app/",
      github: "#",
      tech: ["Html5/CSS3", "EmailJS", "javaScript"],
      category: "University Community Project"
    },
    {
      id: 8,
      title: "BSCS DUET",
      description: "Bachelor of Computer Science department portal with student management features.",
      image: Bscs,
      link: "https://bscs-duet.web.app/",
      github: "#",
      tech: ["Html5/CSS3", "EmailJS", "javaScript"],
      category: "Education"
    },
    {
      id: 9,
      title: "E-commerce Platform",
      description: "Full-featured e-commerce solution with payment gateway and inventory management.",
      image: Ecom,
      link: "#",
      github: "#",
      tech: ["Wordpress", "Elementer", "EmailJS"],
      category: "E-commerce"
    },
    {
      id: 10,
      title: "DUET Portal",
      description: "University portal with student services and academic management system.",
      image: Duet,
      link: "#",
      github: "#",
      tech: ["Html5/CSS3", "EmailJS", "javaScript"],
      category: "Education"
    },
    {
      id: 11,
      title: "Dawood Project",
      description: "Custom web application with advanced features and modern design.",
      image: Dawood,
      link: "#",
      github: "#",
      tech: ["Html5/CSS3", "EmailJS", "javaScript"],
      category: "Web Development"
    },
    {
      id: 12,
      title: "My Portfolio",
      description: "Personal portfolio website showcasing projects and skills.",
      image: MyPort,
      link: "#",
      github: "#",
      tech: ["Html5/CSS3", "EmailJS", "javaScript"],
      category: "Portfolio"
    },
    {
      id: 13,
      title: "Sir Portfolio",
      description: "Professional portfolio website for academic professional.",
      image: SirPort,
      link: "#",
      github: "#",
      tech: ["Html5/CSS3", "EmailJS", "javaScript"],
      category: "Portfolio"
    }
  ];

  // Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const maxIndex = Math.max(0, projects.length - slidesToShow);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length, slidesToShow]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, projects.length - slidesToShow);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, projects.length - slidesToShow);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const slideWidth = 100 / slidesToShow;

  return (
    <div className="projects-container">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="tag-badge">
            <svg className="tag-icon" viewBox="0 0 24 24">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
              <line x1="7" y1="7" x2="7.01" y2="7"/>
            </svg>
            <span className="tag-text">Recent Work</span>
          </div>
          <h2 className="main-title">
            Featured Projects
          </h2>
          <p className="subtitle">
            Explore my latest work spanning web development, e-commerce, and innovative digital solutions
          </p>
        </div>

        {/* Main Carousel */}
        <div 
          className="carousel-container"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="carousel-overflow">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
              ref={containerRef}
            >
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="project-slide"
                  style={{ width: `${slideWidth}%` }}
                >
                  <a
                    href={project.link}
                    target={project.link !== '#' ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="project-card-link"
                    onClick={(e) => {
                      if (project.link === '#') {
                        e.preventDefault();
                        alert('Demo link not available for this project');
                      }
                    }}
                  >
                    <div className="project-card">
                      {/* Project Image */}
                      <div className="project-image-container">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-image"
                        />
                        <div className="image-overlay"></div>
                      </div>

                      {/* Content Overlay */}
                      <div className="content-overlay">
                        <div className="content-wrapper">
                          <div className="category-badge">
                            {project.category}
                          </div>
                          
                          <h3 className="project-title">
                            {project.title}
                          </h3>
                          
                          <p className="project-description">
                            {project.description}
                          </p>

                          <div className="tech-stack">
                            {project.tech.slice(0, 3).map((tech, i) => (
                              <span key={i} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="click-indicator">
                            <svg className="click-icon" viewBox="0 0 24 24">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                              <polyline points="15,3 21,3 21,9"/>
                              <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                            <span>Click to View Live</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="hover-glow"></div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="nav-arrow nav-prev"
            aria-label="Previous slide"
          >
            <svg className="arrow-icon" viewBox="0 0 24 24">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="nav-arrow nav-next"
            aria-label="Next slide"
          >
            <svg className="arrow-icon" viewBox="0 0 24 24">
              <polyline points="9,18 15,12 9,6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
=======
import React from 'react'
import './Project.css'
import{Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Gdsc from '../../img/gdsc.png'
import Bscs from '../../img/bscs.png'
import Ecom from '../../img/ecom.png'
import Duet from '../../img/duet.png'
import Dawood from '../../img/dawood.png'
import MyPort from '../../img/myPort.png'
import SirPort from '../../img/SirPort.png'
import {themeContext} from '../../Context'
import {useContext} from 'react'



function Projects() {
  const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;

    
  return (
    <div className='Project' id='Projects'>
      {/*---Head----*/}
      <span style={{color: darkMode? 'white':''}}>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        grabCursor={true}
        className="Project-slider"
      >
        <SwiperSlide>
            <a href="https://gdsc-duet-karachi.web.app/">
                <img src={Gdsc}  alt="GDSC" />
            </a>
        </SwiperSlide> 
        <SwiperSlide>
            <a href="https://bscs-duet.web.app/">
                <img src={Bscs}  alt="BSCS" />
            </a>
        </SwiperSlide> 
        <SwiperSlide>
            <a href="https://raohaiwb.web.app/">
                <img src={MyPort}  alt="MYPORT" />
            </a>
        </SwiperSlide> 
        <SwiperSlide> 
                <img src={Ecom}  alt="Ecom" />
        </SwiperSlide> 
        <SwiperSlide> 
                <img src={Duet}  alt="Duet" />
        </SwiperSlide> 
        <SwiperSlide> 
                <img src={SirPort}  alt="Sir" />
        </SwiperSlide> 
        <SwiperSlide> 
                <img src={Dawood}  alt="dawood" />
        </SwiperSlide> 
      </Swiper>
    </div>
  )
}

export default Projects
>>>>>>> 43eb28148d147ac2230ea1346d71f1979f7ea8ad
