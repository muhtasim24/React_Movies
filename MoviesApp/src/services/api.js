const API_KEY = "3243c2977acb2536687a6b19f290f200";
const BASE_URL = "https://api.themoviedb.org/3"

// async function means itll take a secnd to get the result
// so we have to await to get the result
// then display the result
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  };
    
// fetch is a function send network request
export const searchMovies = async (query) => {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    const data = await response.json();
    return data.results;
  };