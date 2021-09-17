import Review from "./Review"

function ReviewList({ issueRequest, setIssueRequest, movies }) {
    const eachReview = movies.map(movie => {
        if (movie.watched) {
            return (
                <Review
                    key={movie.Title}
                    movie={movie}
                    issueRequest={issueRequest}
                    setIssueRequest={setIssueRequest}
                />
            )
        }
    })
    return (
        <div className="row">
            {eachReview}
        </div>
    )
};

export default ReviewList;