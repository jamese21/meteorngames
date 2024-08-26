import React, { useState } from 'react'
import meteorn_banner from '../assets/meteorn-banner.png'
import './Games.css'
import { useTranslation } from 'react-i18next'
import {game_data} from "../games"
import Slider from "../components/slider/Slider.jsx"
import {FaList, FaThLarge, FaSearch} from "react-icons/fa";

function Games() {

  const [t, i18n] = useTranslation("global")

  const [searchQuery, setSearchQuery] = useState("")
  const [gridView, setGridView] = useState(true)

  console.log(searchQuery)
  console.log(gridView)

  return (
    <div className="main-contents">
      <Slider />

      <div className="title-container">
        <div className="line"></div>
        <h1 className="main-title">{t("games.title")}</h1>
        <div className="line"></div>
      </div>

      <div className="filter-container">
        <input className="search-box" onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder={t("games.search-placeholder")} />
        <div className="view-btn-container">
          <button className="view-btn" onClick={() => setGridView(true)}>
            <FaThLarge />
          </button>
          <button className="view-btn" onClick={() => setGridView(false)}>
            <FaList />
          </button>
        </div>
      </div>

      <div className={gridView ? "games-grid" : "games-list"}>
        {game_data.filter((game) => {
          return searchQuery.toLowerCase() === "" 
          ? game 
          : game.title.toLowerCase().includes(searchQuery.toLowerCase())
        }).map((game) => (
          <div key={game.key} className={"game-container " + (gridView ? "game-grid-container" : "game-list-container")}>
            <img src={"/".concat(game.banner)} alt="game banner" className={"profile-img " + (gridView ? "grid-img" : "list-img")}></img>
            <h2 className="title">{t("games.game-titles.".concat(game.key).concat("-title"))}</h2>
            <a href={game.link} target='_blank'>
              <button className="btn">{t("games.play-button")}</button>        
            </a>  
          </div>
        ))}
        {searchQuery === "" &&
            <>
              <div className={"game-container " + (gridView ? "game-grid-container" : "game-list-container")}>
                <h1>{t("games.coming-soon-label")}</h1>    
              </div>
              <div className={"game-container " + (gridView ? "game-grid-container" : "game-list-container")}>
                <h1>{t("games.coming-soon-label")}</h1>    
              </div>
              <div className={"game-container " + (gridView ? "game-grid-container" : "game-list-container")}>
                <h1>{t("games.coming-soon-label")}</h1>    
              </div>
            </>
        }
        
      </div>
    </div>
  )
}

export default Games