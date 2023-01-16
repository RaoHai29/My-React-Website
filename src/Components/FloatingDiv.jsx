import React from 'react'
import './FloatingDiv.css'

function FloatingDiv(props) {
  return (
    <div className='FloatingDiv'>
      <img src={props.Img} alt="crown" />
      <span>{props.txt1} <br/>{props.txt2}</span>
    </div>
    
    
  )
}

export default FloatingDiv
