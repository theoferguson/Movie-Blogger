import Card from './Card';

function HatedMovies({movies, issueRequest, setIssueRequest, isOpen, setIsOpen}) {
    const eachHatedMovie = movies.map(movie => { 
        if (movie.wouldRecommend === "Absolutely Not" && movie.watched) {
        return (
            <Card
                key={movie.id}
                movie={movie}
                issueRequest={issueRequest}
                setIssueRequest={setIssueRequest}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        )}
    })

    

    return (
        <div className="card-columns">
            {eachHatedMovie}
        </div>
    )
};

export default HatedMovies;