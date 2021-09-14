import { useState } from "react";

function Review ({movie}){
    const{Ratings}=movie
    
    const [isClicked, setIsClicked] = useState(false)


    const eachRating = Ratings.map(rating=>(
        <div>
        <p>Source: {rating.Source}</p>
        <p>Value: {rating.Value}</p>
        </div>
    ))
    function displayRatings(){
        setIsClicked(!isClicked)
    }
    
    return (
        <div class="" >
            <img class="review-img-top" src={movie.Poster} alt="poster image" />
            <div class="review-body">
                <h5 class="review-title">{movie.Title}</h5>
                <button onClick={displayRatings}>Ratings</button>
                {isClicked?  eachRating: null}
            </div>
        </div>
        )
}


export default Review;