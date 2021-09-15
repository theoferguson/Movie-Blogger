import Card from './Card'


function MovieContainer({ movies, issueRequest, setIssueRequest }) {


    const movieList = movies.map(movie => {
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
            {movieList}
        </div>
    )
}

export default MovieContainer