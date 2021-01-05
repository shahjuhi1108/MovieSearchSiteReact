import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header'
import Movie from './Movie'
import Search from './Search'

const MOVIE_API_URL = "http://www.omdbapi.com/?s=man&apikey=424d521e"

const App = () => {

  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search)
        setLoading(false)
      });
  }, []);

  const search = searchValue => {
    setLoading(true)
    setErrorMessage(null)

    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=424d521e`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search)
          setLoading(false)
        }
        else {
          setErrorMessage(jsonResponse.Error)
          setLoading(false)
        }
      });
  };

  return (
    <div className="App">
      <Header text="HOOKED" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies.</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>Loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
