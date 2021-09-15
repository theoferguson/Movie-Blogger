import { useState } from "react"
import CardDetails from "./CardDetails"

function Card({ movie, issueRequest, setIssueRequest }) {
    
    const [isImgClick, setIsImgClick] = useState(false)
    function handleFavorite() {
        fetch(`http://localhost:3000/movies/${movie.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                favoriteMovie: movie.favoriteMovie ? false : true
            })
        }).then(res => res.json())
        .then(json => {
            console.log(json)
            setIssueRequest(!issueRequest)
        })
    };

    function handleHated() {
        fetch(`http://localhost:3000/movies/${movie.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                hatedMovie: movie.hatedMovie ? false : true
            })
        }).then(res => res.json())
        .then(json => {
            console.log(json)
            setIssueRequest(!issueRequest)
        })
    };

    const cardStyle = {
        width: "18rem"
    };

    function handleImgClick(){
        setIsImgClick(!isImgClick)
    }
    
    return (
        <div onClick={handleImgClick} className="card" style={cardStyle}>
            <div className="card-header">
            <h3 className="card-title">{movie.Title}</h3>
            {isImgClick? <CardDetails movie={movie}/> :<img className="card-img-top" src={movie.Poster} alt="movie poster" />}
            </div>
            <div className="card-body">
                <label>Actors:</label>
                <p className="card-text">{movie.Actors}</p>
                <label>Directors:</label>
                <p className="card-text">{movie.Director}</p>
                <button onClick={handleFavorite} type="button" className="btn btn-primary">{movie.favoriteMovie ? "Remove from Favorites" : "Add to Favorites"} </button>
                <button onClick={handleHated} type="button" className="btn btn-primary">{movie.hatedMovie ? "Remove from Hated" : "Add to Hated"} </button>
            </div>
        </div>
    )
}


export default Card