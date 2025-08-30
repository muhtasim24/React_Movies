import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'

function App() {
  const movieNumber = 2;

  return (
    // can only return 1 parent element
    <main className='main-content'>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/favorites" element= {<Favorites />} />
      </Routes>
    </main>
  )
}

// props can be passed from component to function to do diff things
function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
