import React, { useState } from 'react';
import '../App.css';
import Header from './Header'
import Movie from './Movie'
import Search from './Search'

const MOVIE_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=424d521e"

function App() {

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [movies, setMovies] = useState([])

  

  const search = searchValue => {
    setLoading(true)
    setErrorMessage(null)


  }

  return (
    <div className="App">
      <Header text="HOOKED" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies.</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>Loading...</span>
        ) : errorMessage ? (
          <div className="erroeMessage">{errorMessage}</div>
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
