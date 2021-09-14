import Review from "./Review"
function ReviewList({movies}) {
    const eachReview = movies.map(movie=> (
        <Review
        key={movie.name}
        movie={movie}
        />
    ))
    return (
        <>
        {eachReview}
        </>
    )
};

export default ReviewList;