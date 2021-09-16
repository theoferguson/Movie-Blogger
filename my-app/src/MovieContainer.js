import MovieShow from "./MovieShow";
import { Route, useRouteMatch } from "react-router-dom";
import Card from './Card';
import { useState } from 'react';

function MovieContainer({ movies, issueRequest, setIssueRequest }) {
    const match = useRouteMatch();

    console.log(`${match.url}tt0133093`)

    const allMovies = movies.map(movie => {
        return (
            <Card
                key={movie.id}
                movie={movie}
                issueRequest={issueRequest}
                setIssueRequest={setIssueRequest}
            />
        )
    })

    return (
        <div className="card-columns">
            {allMovies}
            <Route path={`${match.url}tt0133093`} >
                <MovieShow />
            </Route>
        </div>
    )
}

export default MovieContainer