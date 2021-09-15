import './App.css';
import MovieContainer from './MovieContainer';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import MyMovies from './MyMovies';
import ReviewList from './ReviewList';
import NewReview from './NewReview';
import { useState, useEffect } from 'react';

function App() {
  const [displayMovies, setDisplayMovies] = useState([]);
  const [issueRequest, setIssueRequest] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(res => res.json())
      .then(json => {
        searchTerm ? setDisplayMovies(json.filter(movie => movie.Title.toLowerCase().includes(searchTerm.toLowerCase()))) : setDisplayMovies(json)
        console.log(json)
      })
  }, [issueRequest])

  function handleSearch(e) {
    setSearchTerm(e)
    setIssueRequest(!issueRequest)
  }


  return (
    <div className="App">
      <NavBar handleSearch={handleSearch} />
      <Switch>
        <Route path="/Movie-Blogger">
          <MovieContainer
            movies={displayMovies}
            issueRequest={issueRequest}
            setIssueRequest={setIssueRequest}
          />
        </Route>

        <Route exact path="/reviews">
          <ReviewList movies={displayMovies}
            issueRequest={issueRequest}
            setIssueRequest={setIssueRequest} />
        </Route>

        <Route exact path="/reviews/new">
          <NewReview />
          <ReviewList />
        </Route>

        <Route exact path="/my-movies">
          <MyMovies
            movies={displayMovies}
            issueRequest={issueRequest}
            setIssueRequest={setIssueRequest}
          />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
