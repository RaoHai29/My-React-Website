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
