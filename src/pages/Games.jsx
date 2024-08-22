import React, { useState } from 'react'
import meteorn_banner from '../assets/meteorn-banner.png'
import './Games.css'
import { useTranslation } from 'react-i18next'
import {game_data} from "../games"

function Games() {

  const [t, i18n] = useTranslation("global")

  const [searchQuery, setSearchQuery] = useState("")

  console.log(searchQuery)

  return (
    <div className="main-contents">

      <input className="search-box" onChange={(e) => setSearchQuery(e.target.value)} 
      placeholder={t("games.search-placeholder")} />

      <div className="games-grid">
        {game_data.filter((game) => {
          return searchQuery.toLowerCase() === "" 
          ? game 
          : game.title.toLowerCase().includes(searchQuery.toLowerCase())
        }).map((game) => (
          <div key={game.key} className="game-container">
            <img src={"/".concat(game.banner)} alt="game banner" className="profile-img"></img>
            <h2 className="title">{t("games.game-titles.".concat(game.key).concat("-title"))}</h2>
            <a href={game.link} target='_blank'>
              <button className="btn">{t("games.play-button")}</button>        
            </a>  
          </div>
        ))}
        {searchQuery === "" &&
            <>
              <div className="game-container coming-soon">
                <h1>{t("games.coming-soon-label")}</h1>    
              </div>
              <div className="game-container coming-soon">
                <h1>{t("games.coming-soon-label")}</h1>    
              </div>
              <div className="game-container coming-soon">
                <h1>{t("games.coming-soon-label")}</h1>    
              </div>
            </>
        }
        
      </div>
    </div>
  )
}

export default Games