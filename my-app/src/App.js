import {useState, useEffect} from 'react'
import './App.css';
import MovieContainer from './MovieContainer'

function App() {
//movies to be defined from a useEffect from local database to be populated from movie info from public API

  return (
    <div className="App">
      <MovieContainer movies={movies} />
    </div>
  );
}

export default App;
