import React from 'react'
import '../footer/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faHelmetSafety } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div className='footers'>
        <div className='footer'>
        <section className='footer-detail'>
                <h2 className='footer__header'>Who I am?</h2>
                <img className='footer-image' src='/birhane_kahsay.jpg' alt='birhane_kahsay'/>
                <h3>Birhane Kahsay</h3>
                <h4>Full stack developer</h4>
                <p>birhane.kahsayw@gmail.com</p>
        </section>
        <section className='footer-contact'>
            <h2 className='footer__header'>Contact me</h2>
            <form className='contact'>
                <div className='contact__details'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className='contact__details'>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className='contact__details'>
                    <label htmlFor="message">message</label>
                    <textarea type="text" name="message" id="message" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
        <section className='footer-social'>
            <h2 className='footer__header'>You can also follow me on</h2>
            <div className='social'>
                <FontAwesomeIcon icon={faHashtag} />
                <FontAwesomeIcon icon={faHelmetSafety} />
            </div>
        </section>
        </div>
    </div>
  )
}

export default Footer