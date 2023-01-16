import React from 'react'
import './Footer.css'



function Footer() {

  return (
    <footer>
    <div className="footer-content">
        <h3>Rao Abdul Hai React Developer</h3>
        <ul className="socials">
            <li><a href='https://www.facebook.com/raohai10' style={{border:'none'}}><i className="fa fa-facebook" style={{fontSize:'35px'}}></i></a></li>
            <li><a href='https://twitter.com/RaoAbdulHai5'style={{border:'none'}}><i className="fa fa-twitter" style={{fontSize:'35px'}}></i></a></li>
            <li><a href='https://www.linkedin.com/in/rao-abdul-hai-87aa9b1b4/'style={{border:'none'}}><i className="fa fa-linkedin-square" style={{fontSize:'35px'}}></i></a></li>
            <li><a href='https://github.com/RaoHai29'style={{border:'none'}}><i className="fa fa-github" style={{fontSize:'35px'}}></i></a></li>
        </ul>
    </div>
 

</footer>
  )
}

export default Footer
