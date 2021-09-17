import Card from './Card';

function MyMovies({ movies, issueRequest, setIssueRequest, isOpen, setIsOpen }) {

    const favoriteMovies = movies.map(movie => { 
        if (movie.wouldRecommend === "YES") {
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

    console.log(favoriteMovies)

    return (
        <div className="row">
            {favoriteMovies}
        </div>
    )
};

export default MyMovies;