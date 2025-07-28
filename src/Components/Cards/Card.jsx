import React from 'react'
import './Card.css'
function Card(props) {
    const wid='60px'
    const height='60px'

  return (
    <div className='Card'>
      <img src={props.logo} width={wid} height={height} alt="React" />
      <span>{props.Heading}</span>
      <span>{props.detail}</span>
      <button className='c-btn'>Learn More</button>
    </div>
  )
}

export default Card
