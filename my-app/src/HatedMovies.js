import Card from './Card';

function HatedMovies({movies, issueRequest, setIssueRequest}) {
    const eachHatedMovie = movies.map(movie => { 
        if (movie.wouldRecommend === "Absolutely Not") {
        return (
            <Card
                key={movie.id}
                movie={movie}
                issueRequest={issueRequest}
                setIssueRequest={setIssueRequest}
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