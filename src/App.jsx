import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './pages/Home'
import Games from './pages/Games'
import News from './pages/News.jsx'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Games />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App