import React from 'react'
import { NavLink } from 'react-router-dom';
import portrait_banner from '../assets/portrait-banner.png'
import meteorn_banner_wide from '../assets/meteorn-banner-wide.png'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <img className="top-banner" src={meteorn_banner_wide}></img>
      <h1 className="main-title">Meteorn Games</h1>
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
        View all games
      </NavLink>
    </div>
  )
}

export default Home