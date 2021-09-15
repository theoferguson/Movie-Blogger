import Card from './Card';

function MyMovies({ movies, issueRequest, setIssueRequest }) {

    const favoriteMovies = movies.map(movie => { 
        if (movie.favoriteMovie) {
        return (
            <Card
                key={movie.id}
                movie={movie}
                issueRequest={issueRequest}
                setIssueRequest={setIssueRequest}
            />
        )}
    })

    console.log(favoriteMovies)

    return (
        <div className="card-columns">
            {favoriteMovies}
        </div>
    )
};

export default MyMovies;