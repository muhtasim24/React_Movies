import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import { MovieProvider } from './contexts/MovieContext'
import NavBar from './components/NavBar'

function App() {
  const movieNumber = 2;

  return (
    // can only return 1 parent element
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element= {<Home />}/>
          <Route path="/favorites" element= {<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}
export default App
