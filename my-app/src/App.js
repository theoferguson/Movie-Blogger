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

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(res => res.json())
      .then(json => {
        setDisplayMovies(() => json)
        console.log(json)
      })
  }, [issueRequest])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/Movie-Blogger">
          <MovieContainer
            movies={displayMovies}
            issueRequest={issueRequest}
            setIssueRequest={setIssueRequest}
          />
        </Route>

        <Route exact path="/reviews">
          <ReviewList movies={displayMovies}/>
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
