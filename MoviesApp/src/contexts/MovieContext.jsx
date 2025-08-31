// provide global state and helper functions 
// state manager for favorite movies

import { createContext, useState, useContext, useEffect} from "react"

// context is like a global state that can be used between components
// instead of using prop drilling, passing props back and forth
const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

// movieProvider is going to provide state to any of the components that are wrapped around it
// children is a reserved prop when you write a component and children is anything that's inside of the component that you rendered
export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect( () => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    // anytime the favorites array changes below useEffect renders
    useEffect( () => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}