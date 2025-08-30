import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    // can only return 1 parent element
    <>

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
