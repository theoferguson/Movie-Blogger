import Card from './Card';
import { useState } from 'react';
import styled, { css } from "styled-components";
import CardDetails from './CardDetails';

function MovieContainer({ movies, issueRequest, setIssueRequest }) {
    const [isOpen, setIsOpen] = useState('');

    const allMovies = movies.map(movie => {
        return (
            <Card
                key={movie.id}
                movie={movie}
                issueRequest={issueRequest}
                setIssueRequest={setIssueRequest}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

        )
    })

    return (
        <div className="card-columns">
            {allMovies}
            <ModalWrapper isOpen={isOpen} onClick={() => setIsOpen('')}>
                {/* stopPropagation prevents the event from bubbling up and closing the window */}
                <ModalWindow onClick={e => e.stopPropagation()}>
                    <Box background="#007bff">
                        <h1 className='display-4' >{isOpen.Title}</h1>
                        <Visual>
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
    )
}


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
  height: 400px;
  width: 100%;
`;


export default MovieContainer