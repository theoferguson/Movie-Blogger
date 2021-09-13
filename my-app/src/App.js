import {useState, useEffect} from 'react'
import './App.css';
import MovieContainer from './MovieContainer'

function App() {

  
  return (
    <div className="App">
      <MovieContainer movies={movies} />
    </div>
  );
}

export default App;
