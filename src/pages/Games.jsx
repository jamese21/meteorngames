import React, { Fragment } from 'react'
import meteorn_banner from '../assets/meteorn-banner.png'
import './Games.css'
import { useTranslation } from 'react-i18next'

function Games() {

  const [t, i18n] = useTranslation("global")

  return (
    <div className="main-contents">
      <div className="games-grid">
        <div className="game-container">
          <img src={meteorn_banner} alt="game banner" className="profile-img"></img>
          <h2 className="title">{t("games.meteorn-run-title")}</h2>
          <a href='https://meteornrun.io/' target='_blank'>
            <button className="btn">{t("games.play-button")}</button>        
          </a>  
        </div>
        <div className="game-container coming-soon">
          <h1>{t("games.coming-soon-label")}</h1>    
        </div>
        <div className="game-container coming-soon">
          <h1>{t("games.coming-soon-label")}</h1>    
        </div>
        <div className="game-container coming-soon">
          <h1>{t("games.coming-soon-label")}</h1>    
        </div>
      </div>
    </div>
  )
}

export default Games