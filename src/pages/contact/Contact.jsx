import React from 'react'
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaLinkedin, FaGitlab, FaGithub } from "react-icons/fa";
import { FiSend } from 'react-icons/fi';
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section">
            <h2 className="section__title">Let's Get In <span>Touch</span></h2>

        <div className="contact__container container grid">
            <div className="contact__data">
                <h3 className="contact__title">Hi, Contact me right here!</h3>

                <p className="contact__description">
                    Contact me at anytime. I am always open to meeting new clients, discussing new 
                    projects, creative ideas and sharing your vision.. =)
                </p>

                <div className="contact__info">
                    <div className="info__item">
                        <FaEnvelopeOpen className='info__icon' />

                        <div>
                            <span className="info__title">Mail me</span>
                            <h4 className='info__desc'><a href="mailto:ngobesinglionel@gmail.com">ngobesinglionel@gmail.com</a></h4>
                        </div>
                    </div>

                    <div className="info__item">
                        <FaPhoneSquareAlt className='info__icon' />

                        <div>
                            <span className="info__title">Call/Whatsapp me</span>
                            <h4 className='info__desc'><a href="tel:+48571006994">+48 571 006 994</a></h4>
                            <h4 className='info__desc'><a href="tel:+905525274506">+90 552 527 4506</a></h4>
                        </div>
                    </div>
                </div>

                <div className="contact__socials">
                    <a href="https://github.com/Alangeh" className="contact__social-link"><FaGithub /></a>
                    <a href="https://gitlab.com/ngobesinglionel" className="contact__social-link"><FaGitlab /></a>
                    <a href="https://www.linkedin.com/in/lionel-ngobesing-alangeh-429611153/" className="contact__social-link"><FaLinkedin /></a>
                </div>
            </div>

            <form className="contact__form">
                <div className="form__input-group">
                    <div className="form__input-div">
                        <input type="text" placeholder='Your Name' className="form__control" />
                    </div>

                    <div className="form__input-div">
                        <input type="email" placeholder='Your Email' className="form__control" />
                    </div>

                    <div className="form__input-div">
                        <input type="text" placeholder='Your Subject' className="form__control" />
                    </div>
                </div>

                <div className="form__input-div">
                    <textarea placeholder='Your Message' className='form__control textarea'></textarea>
                </div>

                <button className='button'> Send Message
                <span className="button__icon contact__button-icon">
                    <FiSend />
                </span>
                </button>
            </form>
        </div>
        </section>
    )
}

export default Contact