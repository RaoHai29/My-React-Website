import React, { useRef, useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import './Contact.css';

function Contact() {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm('service_6diuipz', 'template_qybfpv8', form.current, 'VPL7TUkyqdCG2uBAS')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                setIsLoading(false);
                setMessageType('success');
                setMessage("✅ Your message has been sent successfully!");
                form.current.reset();

                setTimeout(() => {
                    setMessage('');
                }, 3000);
            }, (error) => {
                console.error(error.text);
                setIsLoading(false);
                setMessageType('error');
                setMessage("❌ Failed to send message. Please try again later.");
                setTimeout(() => {
                    setMessage('');
                }, 3000);
            });
    };

    return (
        <div className={`contact-container ${darkMode ? 'dark' : 'light'}`} id='Contact'>
            <div className="contact-content">
                <div className="contact-header">
                    <div className="header-text">
                        <span className="subtitle">Get in Touch</span>
                        <h2 className="title">Contact Me</h2>
                        <p className="description">
                            Ready to start a project or just want to chat? Drop me a message and I'll get back to you soon.
                        </p>
                    </div>
                </div>

                <div className="form-container">
                    <form ref={form} className="contact-form" onSubmit={sendEmail}>
                        <div className="form-group">
                            <label htmlFor="user_name">Full Name</label>
                            <input type="text" name="user_name" required placeholder="Enter your full name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="user_email">Email Address</label>
                            <input type="email" name="user_email" required placeholder="your.email@example.com" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" rows="6" required placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`submit-btn ${isLoading ? 'loading' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <span className="spinner"></span>
                                    Sending...
                                </>
                            ) : 'Send Message'}
                        </button>
                    </form>

                    {message && (
                        <div className={`toast-message ${messageType}`}>
                            {message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;
