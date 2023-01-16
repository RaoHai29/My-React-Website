import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'
function Navbar() {
  return (
  <div className="nav-wrapper">
    <div className="nav-left">
        <div className="nav-name">RAO</div>
        <Toggle />
    </div>
    <div className="nav-right">
        <div className="nav-list">
            <ul>
                <Link spy={true} smooth={true} to='Navbar' activeClass='activeClass'>
                <li>Home</li>
                </Link>
                <Link spy={true} smooth={true} to='Experience'>
                <li>Experience</li>
                </Link>
                <Link spy={true} smooth={true} to='Services'>
                <li>Services</li>
                </Link>
                <Link spy={true} smooth={true} to='Projects'>
                <li>Projects</li>
                </Link>
            </ul>
        </div>
        <Link spy={true} smooth={true} to='Contact'>
        <button className="button nav-btn">
            Contact Us
        </button>
        </Link>
    </div>
  </div>
  )
}

export default Navbar
