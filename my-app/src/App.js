import './App.css';
import MovieContainer from './MovieContainer';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import MyMovies from './MyMovies';
import ReviewList from './ReviewList';
import NewReview from './NewReview';

function App() {
  //movies to be defined from a useEffect from local database to be populated from movie info from public API

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <MovieContainer />
        </Route>

        <Route exact path="/reviews">
          <ReviewList />
        </Route>

        <Route exact path="/reviews/new">
          <NewReview />
          <ReviewList />
        </Route>

        <Route exact path="/my-movies">
          <MyMovies />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
