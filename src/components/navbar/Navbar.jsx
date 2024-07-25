import {useRef} from 'react'
import { NavLink } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";
import react_logo from '../../assets/react.svg';
import './Navbar-responsive.css'


function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    // <div className='navbar'>
    //     <img src={react_logo} alt = '' className='logo' />
    //     <ul>
    //         <li>
    //             <NavLink to='/'>Home</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to='/games'>Games</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to='/news'>News</NavLink>
    //         </li>
    //     </ul>
    // </div>
    <header>
        <img src={react_logo} alt='' className='logo' />
        <nav ref={navRef}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/games'>Games</NavLink>
            <NavLink to='/news'>News</NavLink>
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