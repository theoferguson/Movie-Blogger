import { useState } from "react";
import styled from 'styled-components'

function Review({ issueRequest, setIssueRequest, movie }) {
    const { Ratings, review, Title, Poster } = movie
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
    font-family: 'American Typewriter', serif;
    font-weight:400;
    color:#FFFFFF;
    background-color: #C2CDCC  ;
    box-shadow:inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
    text-align:center;
    position:relative;
    `
    const StyledSpan = styled.span`
    font-family: 'American Typewriter', serif;
    border-style: groove;
    `
    const cardStyle = {
        width: "18rem"
    };


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
            <form className="p-4 p-md-5 border rounded-3 bg-light">
                <input className="form-floating mb-3" value={formData.review} onChange={handleChange} type="text" name="review" placeholder='type here'></input>
                <label> Star Rating:
                    <select className="form-check-label" name="starRating" onChange={handleChange}>
                        <option></option>
                        <option>1 ⭐️</option>
                        <option>2 ⭐️</option>
                        <option>3 ⭐️</option>
                        <option>4 ⭐️</option>
                        <option>5 ⭐️</option>
                    </select>
                </label>
                <label> Would you recommend this movie?
                    <select className="dropdown" name="wouldRecommend" onChange={handleChange}>
                        <option></option>
                        <option onChange={handleRecommendation}>YES</option>
                        <option onChange={handleRecommendation}>No</option>
                        <option onChange={handleRecommendation}>Absolutely Not</option>
                    </select>
                    <span className="text-muted" >{wouldRecommend ? "Would Recommend" : null}</span>
                </label>
            </form>
            <button className="btn btn-secondary" onClick={handleReview} type="submit">Submit Review</button>
        </>;
    const eachRating = Ratings.map(rating => (
        <Div>
            <p>Source: {rating.Source}</p>
            <p>Value: {rating.Value}</p>
        </Div>
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
        <div style={cardStyle} className="card">
            <div className="card-header" >
                <img className="card-img-top" src={Poster} alt="poster image" />
                <div className="review-body">
                    <h5 className="review-title">{Title}</h5>
                    <button className="btn btn-secondary" onClick={displayRatings}>Ratings</button>
                    <br></br>
                    {isClicked ? eachRating : null}
                </div>
            </div>
            <button className="btn btn-secondary" onClick={displayReviewForm}>Review Movie</button>
            {toggleReview ? (<div>
                {reviewForm}
            </div>) : null}
            <br>
            </br>
            {review === "" || review === undefined ? null :
                <Div>
                    <h3>{Title}</h3>
                    <span>User Ratings: {movie.starRating}'s</span>
                    <br></br>
                    <br></br>
                    <StyledSpan>{review}</StyledSpan>
                    <br></br>
                    <button className="btn btn-secondary" onClick={handleReviewDelete}>Delete</button>
                </Div>}
        </div>
    )
}
export default Review;