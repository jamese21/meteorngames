import React, { Fragment } from 'react'
import meteorn_banner from '../assets/meteorn-banner.png'
import './Games.css'

function Games() {
  return (
    <div className="main-contents">
      <div className="games-grid">
        <div class="game-container">
          <div class="banner-img"></div>
          <img src={meteorn_banner} alt="game banner" class="profile-img"></img>
          <h3 class="title">Meteorn Run</h3>
          <button class="btn">Play</button>          
        </div>
        <div class="game-container">
          <h1 class="title">Coming Soon</h1>    
        </div>
        <div class="game-container">
          <div class="banner-img"></div>
          <h1 class="title">Coming Soon</h1>      
        </div>
        {/* <figure className="game-figure">
          <img src={meteorn_banner} alt='Meteorn Banner' />
          <figcaption>Meteorn Run</figcaption>
        </figure>
        <figure className="game-figure">
          <img src={meteorn_banner} alt='Meteorn Banner' />
          <figcaption>Meteorn Run</figcaption>
        </figure>
        <figure className="game-figure">
          <img src={meteorn_banner} alt='Meteorn Banner' />
          <figcaption>Meteorn Run</figcaption>
        </figure> */}
      </div>
    </div>
  )
}

export default Games