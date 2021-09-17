import Card from './Card';
import CardDetails from './AddNewMovie';

function MovieContainer({ movies, issueRequest, setIssueRequest, isOpen, setIsOpen }) {

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
        </div>
    )
};

export default MovieContainer