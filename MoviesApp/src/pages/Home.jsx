import { useState } from "react"
import MovieCard from "../components/MovieCard"


function Home() {
    // first argument is the state
    // 2nd arg, is the function to change the state
    // anytime we update the state, itll re-render the component
    const [searchQuery, setSearchQuery] = useState('');

    // array of movies,
    // want to render the movies dynamically
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1999"},
        {id: 3, title: "The Matrix", release_date: "1998"}
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery);
        
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

            <div className="movies-grid">
                {/* whenever you do .map function you need to have a .key
                property to the component youre returning, because React
                needs to know whcih component to update based on the interactions that happen on the webpage
                so need a unique identifier, like an id
                **WHEN DYNAMICALLY ADDING, NEED KEY PROPERTY** */}
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) &&<MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home;