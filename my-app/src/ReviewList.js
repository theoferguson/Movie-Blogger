import Review from "./Review"
function ReviewList({issueRequest, setIssueRequest ,movies}) {
    const eachReview = movies.map(movie=> (
        <Review
        key={movie.name}
        movie={movie}
        issueRequest={issueRequest}
        setIssueRequest={setIssueRequest}
        />
    ))
    return (
        <>
        {eachReview}
        </>
    )
};

export default ReviewList;