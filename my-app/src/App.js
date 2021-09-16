import './App.css';
import MovieContainer from './MovieContainer';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import MyMovies from './MyMovies';
import ReviewList from './ReviewList';
import HatedMovies from './HatedMovies';
import { useState, useEffect } from 'react';

function App() {
  const [displayMovies, setDisplayMovies] = useState([]);
  const [issueRequest, setIssueRequest] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(res => res.json())
      .then(json => {
        handleSort(json)

        searchTerm ? setDisplayMovies(json.filter(movie => movie.Title.toLowerCase().includes(searchTerm.toLowerCase()))) : setDisplayMovies(json)

        console.log(json)
      })
  }, [issueRequest])

  function handleSearch(e) {
    setSearchTerm(e)
    setIssueRequest(!issueRequest)
  }

  function handleSort(array) {
    if (filter) {
      array.sort(function (a, b) {
        const nameA = a.Title.toUpperCase(); // ignore upper and lowercase
        const nameB = b.Title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
    }
  };

  return (
    <div className="App">
      <NavBar
        handleSearch={handleSearch}
        filter={filter}
        setFilter={setFilter}
        issueRequest={issueRequest}
        setIssueRequest={setIssueRequest}
      />
      <Switch>

        <Route exact path="/reviews">
          <ReviewList movies={displayMovies}
            issueRequest={issueRequest}

            setIssueRequest={setIssueRequest} />


        </Route>

        <Route exact path="/hated-movies">
          <HatedMovies
            movies={displayMovies}
            issueRequest={issueRequest}
            setIssueRequest={setIssueRequest}
          />
        </Route>

        <Route exact path="/my-movies">
          <MyMovies
            movies={displayMovies}
            issueRequest={issueRequest}
            setIssueRequest={setIssueRequest}
          />
        </Route>

        <Route exact path="/">
          <MovieContainer
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
