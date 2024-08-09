import {useRef} from 'react'
import { NavLink } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";
import react_logo from '../../assets/react.svg';
import './Navbar-responsive.css'
import { useTranslation } from 'react-i18next';


function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    const [t, i18n] = useTranslation("global")
  return (
    <header>
        <img src={react_logo} alt='' className='logo' />
        <nav ref={navRef}>
            <NavLink onClick={showNavbar} to='/'>{t("navbar.home-label")}</NavLink>
            <NavLink onClick={showNavbar} to='/games'>{t("navbar.games-label")}</NavLink>
            <a href='https://meteornrun.medium.com/' target='_blank' className='news-a'>{t("navbar.news-label")}</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars />
        </button>
    </header>
  )
}

export default Navbar