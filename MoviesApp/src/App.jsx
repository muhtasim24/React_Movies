import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'

function App() {
  const movieNumber = 2;

  return (
    // can only return 1 parent element
    <>
      <Home/>
    </>
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
