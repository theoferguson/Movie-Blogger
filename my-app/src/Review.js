import { useState } from "react";
import styled from 'styled-components'
function Review ({issueRequest, setIssueRequest ,movie}){
    const{Ratings, review}=movie
    const [isClicked, setIsClicked] = useState(false)
    const [formData, setFormData] = useState({
        review:""
    });
    const [toggleReview, setToggleReview] =useState(false)
    const Div = styled.div`
    float: right!important;
    font-size: 18px;
    font-family: 'Source Sans Pro', sans-serif;
    padding-left: 19px;
    padding-right: 19px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    `
    
    
    



    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    
    

    function handleReview()  {
        fetch(`http://localhost:3000/movies/${movie.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                review: formData.review
            })
        }).then(res => res.json())
        .then(json => {
            console.log(json)
            setIssueRequest(!issueRequest)
        })
    };


    const reviewForm = 
    <>
    <form class="review-form"> 
    <input value={formData.review} onChange={handleChange} type="text" name="review"></input>
    <button onClick={handleReview}  type="submit">Submit Review</button>
    </form>
    </>;

    const eachRating = Ratings.map(rating=>(
        <div>
        <p>Source: {rating.Source}</p>
        <p>Value: {rating.Value}</p>
        </div>
    ))
    function displayRatings(){
        setIsClicked(!isClicked)
    }
    function displayReviewForm(){
        setToggleReview(!toggleReview)
    }
    
    return (
        <div className="reviews">
            <div className="review-card" >
                <img className="review-img-top" src={movie.Poster} alt="poster image" />
                <div className="review-body">
                    <h5 className="review-title">{movie.Title}</h5>
                    <button onClick={displayRatings}>Ratings</button>
                    <button onClick={displayReviewForm}>Write a Review</button>
                    {isClicked?  eachRating: null}

                </div>
            </div>
            {toggleReview?(<div>
                {reviewForm}
            </div>): null}
            <br>
            </br>
            {movie.review === undefined? null :
            <Div>
                <p>{movie.Title}</p>
                {movie.review}
            </Div> } 
        </div>
        )
}


export default Review;