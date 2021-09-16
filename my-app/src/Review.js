import { useState } from "react";
import styled from 'styled-components'

function Review({ issueRequest, setIssueRequest, movie }) {
    const { Ratings, review, Title, Year, Rated, Released, Genre, Director, Writer, Actors, Plot, Awards, Poster } = movie
    const [isClicked, setIsClicked] = useState(false)
    const [formData, setFormData] = useState({
        review: "",
        starRating: "",
        wouldRecommend: ""
    });

    const [toggleReview, setToggleReview] = useState(false)
    const [wouldRecommend, setWouldRecommend] = useState(false)

    const Div = styled.div`
    display:inline-block;
    padding:0.7em 1.7em;
    margin:0 0.3em 0.3em 0;
    border-radius:0.2em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:400;
    color:#FFFFFF;
    background-color:#3369ff;
    box-shadow:inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
    text-align:center;
    position:relative;
    `

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleReview(event) {
        event.preventDefault()
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
                setFormData({
                    review: "",
                    starRating: "",
                    wouldRecommend: ""
                })
            })
    };

    function handleReviewDelete() {
        fetch(`http://localhost:3000/movies/${movie.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ review: "" })
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
                <button onClick={handleReview} type="submit">Submit Review</button>
                <label> Star Rating:
                    <select name="starRating" onChange={handleChange}>
                        <option></option>
                        <option>1 ⭐️</option>
                        <option>2 ⭐️</option>
                        <option>3 ⭐️</option>
                        <option>4 ⭐️</option>
                        <option>5 ⭐️</option>
                    </select>
                </label>
                <label> Would you recommend this movie?
                    <select name="wouldRecommend" onChange={handleChange}>
                        <option></option>
                        <option onChange={handleRecommendation}>YES</option>
                        <option onChange={handleRecommendation}>No</option>
                        <option onChange={handleRecommendation}>Absolutely Not</option>
                    </select>
                    <span>{wouldRecommend ? "Would Recommend" : null}</span>
                </label>
            </form>
        </>;
    const eachRating = Ratings.map(rating => (
        <div>
            <p>Source: {rating.Source}</p>
            <p>Value: {rating.Value}</p>
        </div>
    ))
    function displayRatings() {
        setIsClicked(!isClicked)
    }
    function displayReviewForm() {
        setToggleReview(!toggleReview)
    }
    function handleRecommendation() {
        setWouldRecommend(!wouldRecommend)
    }
    return (
        <div className="reviews">
            <div className="review-card" >
                <img className="review-img-top" src={Poster} alt="poster image" />
                <div className="review-body">
                    <h5 className="review-title">{Title}</h5>
                    <button onClick={displayRatings}>Ratings</button>
                    <button onClick={displayReviewForm}>Review Movie</button>
                    {isClicked ? eachRating : null}
                </div>
            </div>
            {toggleReview ? (<div>
                {reviewForm}
            </div>) : null}
            <br>
            </br>
            {review === "" || review === undefined ? null :
                <Div>
                    <p>{Title}</p>
                    {review}
                    <span>User Ratings: {movie.starRating}'s</span>
                    <button onClick={handleReviewDelete}>Delete</button>
                </Div>}
        </div>
    )
}
export default Review;