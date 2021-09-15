import { useState } from "react";
import styled from 'styled-components'
function Review ({issueRequest, setIssueRequest ,movie}){
    const{Ratings, review}=movie
    const [isClicked, setIsClicked] = useState(false)
    const [formData, setFormData] = useState({
        review:"",
        starRating:""

    });
    const [toggleReview, setToggleReview] =useState(false)
    const [wouldRecommend, setWouldRecommend] = useState(false)
    const Div = styled.div`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
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
                review: formData.review,
                starRating: formData.starRating,
                wouldRecommend: formData.wouldRecommend
            })
        }).then(res => res.json())
        .then(json => {
            console.log(json)
            setIssueRequest(!issueRequest)
        })
    };


    const reviewForm = 
    <>
    <form className="review-form"> 
    <input value={formData.review} onChange={handleChange} type="text" name="review" placeholder='type here'></input>
    <button onClick={handleReview}  type="submit">Submit Review</button>
    <label>
        <select name="starRating" onChange={handleChange}>
            <option></option>
            <option>1 ⭐️</option>
            <option>2 ⭐️</option>
            <option>3 ⭐️</option>
            <option>4 ⭐️</option>
            <option>5 ⭐️</option>
        </select>
    </label>
    <label>
        
    </label>
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
    function handleRecommendation(){
        setWouldRecommend(!wouldRecommend)
    }
    
    return (
        <div className="reviews">
            <div className="review-card" >
                <img className="review-img-top" src={movie.Poster} alt="poster image" />
                <div className="review-body">
                    <h5 className="review-title">{movie.Title}</h5>
                    <button onClick={displayRatings}>Ratings</button>
                    <button onClick={displayReviewForm}>Watched</button>
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
                <span>User Ratings: {movie.starRating}'s</span>
                <br></br>
                <label> Would you recommend this movie?
                    <button onClick={handleRecommendation}>Yes</button>
                    <button onClick={handleRecommendation}>No</button>
                    <span>{wouldRecommend? "Would Recommend": null }</span>
                </label>
            </Div> } 
        </div>
        )
}


export default Review;