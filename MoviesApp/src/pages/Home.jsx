import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import '../css/Home.css'
import { searchMovies, getPopularMovies } from "../services/api";

// when state changes the entire component and anything in the component, the entire component is re-rendered
// the state stays what it changed to but every code is ran again
// something as a normal variable, that is not a state, it will reset if its not a state

// useEffect allows you to add side effects to your functions or to your components and define when they should run
// lets say we only want something to run on initial render
function Home() {
    // first argument is the state
    // 2nd arg, is the function to change the state
    // anytime we update the state, itll re-render the component
    const [searchQuery, setSearchQuery] = useState('');

    // array of movies,
    // want to render the movies dynamically
    const [movies, setMovies] = useState([]);

    // when youre loading something from an api
    // set 2 pieces of state
    // 1 for loading, 1 for storing any data
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // how useEffect works
    // put in a function you want to call when the dependency array changes (2nd arg)
    // whatver is in the dependency array, we're going to check it after every single render, if its changed since last render, itll run useEffect
    // if nothing in the array, empty array, only runs once on initial render
    useEffect( () => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch (err) {
                // if caught an error itll go here
                console.log(err);
                setError("Failed to load movies...")
            } finally {
                // finally , we got everything? so no longer loading
                setLoading(false)
            }
        }

        loadPopularMovies()
    } , [])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)

        } catch (err) {
            console.log(err)
            setError("Failed to serach movies...")
        } finally {
            setLoading(false)
        }
        
    }
    return (
        // want to display above movies in a row
        // we could use .map
        <div className="home">
            <form onSubmit = {handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for movies..." className="search-input"
                value = {searchQuery} 
                // without the onChange property, we wouldnt be able to type in the input field
                // we need to upadte the state as something changes in the input field
                // onChange takes the variable e and sets SearchQuery state to the value of e
                onChange = { (e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

             {error && <div className="error-message">{error}</div>}

            {loading ? (
            <div className="loading">Loading...</div>) : (
            <div className="movies-grid">
                {/* whenever you do .map function you need to have a .key
                property to the component youre returning, because React
                needs to know whcih component to update based on the interactions that happen on the webpage
                so need a unique identifier, like an id
                **WHEN DYNAMICALLY ADDING, NEED KEY PROPERTY** */}
                {movies.map((movie) => (
                   <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            )}
        </div>
    )
}

export default Home;