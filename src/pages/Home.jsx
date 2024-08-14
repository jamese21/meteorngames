import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {FaArrowRight} from "react-icons/fa";
import portrait_banner from '../assets/portrait-banner.png'
import meteorn_banner_wide from '../assets/meteorn-banner-wide.png'
import './Home.css'

function Home() {

  const [t, i18n] = useTranslation("global")

  return (
    <div className="home-container">
      <img className="top-banner" src={meteorn_banner_wide}></img>
      <div className="title-container">
        <div className="line"></div>
        <h1 className="main-title">{t("home.title")}</h1>
        <div className="line"></div>
      </div>
      <div className="list-container">
        <div className="list-item">
          <a href='https://meteornrun.io/' target='_blank'>
            <img className="game-img" src={portrait_banner} />      
          </a>
        </div>
        <div className="list-item">
          <a href='https://meteornrun.io/' target='_blank'>
            <img className="game-img" src={portrait_banner} />      
          </a>
        </div>
        <div className="list-item">
          <a href='https://meteornrun.io/' target='_blank'>
            <img className="game-img" src={portrait_banner} />      
          </a>
        </div>
        <div className="list-item">
          <a href='https://meteornrun.io/' target='_blank'>
            <img className="game-img" src={portrait_banner} />      
          </a>
        </div>
      </div>
      <NavLink className="game-button" to='/games'>
        <span className="game-button-line"></span>
        {t("home.games-button")}
        <FaArrowRight />
      </NavLink>
    </div>
  )
}

export default Home