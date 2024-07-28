import React from 'react'
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn,
    faTelegram, faDiscord, faMedium, faYoutube  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer-container">
            <div className='row'>
                <div className='footer-col'>
                    <h4>Company</h4> 
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                </div>
                <div className='footer-col'>
                    <h4>Get Help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                </div>
                <div className='footer-col'>
                    <h4>Cryptocurrency</h4>
                        <ul>
                            <li><a href="#">MTO</a></li>
                            <li><a href="#">GMTO</a></li>
                        </ul>
                </div>
                <div className='footer-col'>
                    <h4>Follow Us</h4>
                        <div className='social-links'>
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTelegram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faDiscord} /></a>
                            <a href="#"><FontAwesomeIcon icon={faMedium} /></a>
                            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer