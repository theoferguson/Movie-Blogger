import './App.css';
import MovieContainer from './MovieContainer';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import MyMovies from './MyMovies';
import ReviewList from './ReviewList';
import HatedMovies from './HatedMovies';
import { useState, useEffect } from 'react';
import styled, { css } from "styled-components";

function App() {
  const [displayMovies, setDisplayMovies] = useState([]);
  const [issueRequest, setIssueRequest] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('')
  const [isOpen, setIsOpen] = useState('');

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
    if (filter === "Alphabetical (A-Z)") {
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
    } else if (filter === "Recent Release Date") {
      array.sort(function (a, b) {
        const nameA = parseInt(a.Year); // ignore upper and lowercase
        const nameB = parseInt(b.Year); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
    } else if (filter === "Highest Rating") {
      array.sort(function (a, b) {
        const nameA = parseInt(a.Metascore); // ignore upper and lowercase
        const nameB = parseInt(b.Metascore); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
    };
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
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </Route>
        <Route exact path="/my-movies">
          <MyMovies
            movies={displayMovies}
            issueRequest={issueRequest}
            setIssueRequest={setIssueRequest}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </Route>
        <Route exact path="/">
          <MovieContainer
            movies={displayMovies}
            issueRequest={issueRequest}
            setIssueRequest={setIssueRequest}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </Route>
      </Switch>
      <ModalWrapper isOpen={isOpen} onClick={() => setIsOpen('')}>
                <ModalWindow onClick={e => e.stopPropagation()}>
                    <Box background="#007bff">
                        <h1 className='modal-title' >{isOpen.Title}</h1>
                        <Visual className="modal-body">
                            <strong>Plot:</strong> 
                            <div>{isOpen.Plot}</div>
                            <strong>Director:</strong>
                            <div>{isOpen.Director}</div>
                            <strong>Actors:</strong>
                            <div>{isOpen.Actors}</div>
                            <strong>Awards:</strong>
                            <div>{isOpen.Awards}</div>
                            <strong>Release Date:</strong>
                            <div>{isOpen.Released}</div>
                            </Visual>
                        <button onClick={() => setIsOpen('')}>Close Info</button>
                    </Box>
                </ModalWindow>
            </ModalWrapper>
    </div>
  );
};

const ModalWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  place-items: center;
  background: rgba(255, 255, 255, 0.7);
`;

const ModalWindow = styled.div`
  width: 75%;
  height: 500px;
`;

const Box = styled.div`
  background: ${props => props.background || "aliceblue"};
  display: grid;
  place-items: center;
  padding: 1rem;
`;

const Visual = styled.div`
  background: ${props => props.background || "aliceblue"};
  /* height: 300px; */
  width: 100%;
`;

export default App;
