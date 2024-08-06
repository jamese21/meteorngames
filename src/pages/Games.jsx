import React, { Fragment } from 'react'
import meteorn_banner from '../assets/meteorn-banner.png'
import './Games.css'

function Games() {
  return (
    <div className="main-contents">
      <div className="games-grid">
        <div className="game-container">
          <img src={meteorn_banner} alt="game banner" className="profile-img"></img>
          <h2 className="title">Meteorn Run</h2>
          <a href='https://meteornrun.io/' target='_blank'>
            <button className="btn">Play</button>        
          </a>  
        </div>
        <div className="game-container coming-soon">
          <h1>Coming Soon</h1>    
        </div>
        <div className="game-container coming-soon">
          <h1>Coming Soon</h1>    
        </div>
        <div className="game-container coming-soon">
          <h1>Coming Soon</h1>    
        </div>
      </div>
    </div>
  )
}

export default Games