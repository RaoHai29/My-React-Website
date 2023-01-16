import React,{useRef}from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {useState} from 'react'
import {themeContext} from '../../Context'
import {useContext} from 'react'


function Contact() {
    const form = useRef();
    const [done,setDone]=useState(false)
    const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6diuipz', 'template_4rgovnx', form.current, 'VPL7TUkyqdCG2uBAS')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='contact-form' id='Contact'>
       <div className="w-left">
       <div className="left-Service">
            <span style={{color: darkMode? 'white':''}}>Get in Touch</span>
            <span>Contact Me</span>
            <div className="blur blur-cv" style={{background:'ABF1FF94'}}></div>
        </div>
       </div>

       <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='user_name' className='user' placeholder='Name' required />
            <input type="email" name='user_email' className='user' placeholder='abc123@example.com' required />
            <textarea name="message" rows={10} cols={30} className='user' placeholder='Message Me' required></textarea>
            <input type="Submit" value="Send" className='button' />
            <span className='email'>{done && "Thanks For Contacting me"}</span>
            <div className="blur blur-c"  style={{background:'var(--purple)'}}></div>

        </form>
       </div>
      
    </div>
  )
}

export default Contact
