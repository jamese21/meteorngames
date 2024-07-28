import React from 'react'
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
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
                            <li><a href="#">Affiliate Program</a></li>
                        </ul>
                </div>
                <div className='footer-col'>
                    <h4>Get Help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Order status</a></li>
                            <li><a href="#">Payment options</a></li>
                        </ul>
                </div>
                <div className='footer-col'>
                    <h4>Online Shop</h4>
                        <ul>
                            <li><a href="#">Watch</a></li>
                            <li><a href="#">Bag</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Dress</a></li>
                        </ul>
                </div>
                <div className='footer-col'>
                    <h4>Follow Us</h4>
                        <div className='social-links'>
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer