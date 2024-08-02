import React from 'react'
import portrait_banner from '../assets/portrait-banner.png'
import meteorn_banner_wide from '../assets/meteorn-banner-wide.png'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <img className="top-banner" src={meteorn_banner_wide}></img>
      <h1 className="main-title">Meteorn Games</h1>
      <div className="showcase">
        {/* <img src={meteorn_banner} alt='meteorn_banner'></img> */}
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
      <button className="game-button">
        View all games
      </button>
    </div>
  )
}

export default Home