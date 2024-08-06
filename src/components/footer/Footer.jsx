import React from 'react'
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn,
    faTelegram, faDiscord, faMedium, faYoutube  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {

    const [t, i18n] = useTranslation("global")

    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className='row'>
                    <div className='footer-col'>
                        <h4>{t("footer.company-label")}</h4> 
                            <ul>
                                <li><a href="#">{t("footer.about-us-label")}</a></li>
                            </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>{t("footer.get-help-label")}</h4>
                            <ul>
                                <li><a href="#">{t("footer.faq-label")}</a></li>
                                <li><a href="#">{t("footer.contact-us-label")}</a></li>
                            </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>{t("footer.cryptocurrency-label")}</h4>
                            <ul>
                                <li><a href="https://coinmarketcap.com/currencies/meteor-coin/" target="_blank">MTO</a></li>
                                <li><a href="https://coinmarketcap.com/currencies/game-meteor-coin/" target="_blank">GMTO</a></li>
                            </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>{t("footer.follow-us-label")}</h4>
                            <div className='social-links'>
                                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="https://x.com/meteorn_run" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a>
                                <a href="https://www.instagram.com/meteornrun_official/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                <a href="https://t.me/+XlhHtEIQbeo1ZTdl" target="_blank"><FontAwesomeIcon icon={faTelegram} /></a>
                                <a href="#"><FontAwesomeIcon icon={faDiscord} /></a>
                                <a href="https://meteornrun.medium.com/" target="_blank"><FontAwesomeIcon icon={faMedium} /></a>
                                <a href="https://www.youtube.com/@meteornrun" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                            </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer