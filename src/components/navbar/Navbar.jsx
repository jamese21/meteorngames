import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";
import react_logo from '../../assets/react.svg';
import './Navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
        <img src={react_logo} alt = '' className='logo' />
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/games'>Games</NavLink>
            </li>
            <li>
                <NavLink to='/news'>News</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar