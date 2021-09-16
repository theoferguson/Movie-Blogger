import { useState } from "react"
import CardDetails from "./CardDetails"
import { Link } from 'react-router-dom';

function Card({ movie, issueRequest, setIssueRequest}) {
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

    return (
        <div className="card" style={cardStyle}>
            <Link to={`/${movie.id}`} className="card-header">
                <h5 className="card-title">{movie.Title}</h5>
                <img className="card-img-top" src={movie.Poster} alt="movie poster" />
            </Link>
            <div className="card-body">
                <button onClick={handleFavorite} type="button" className="btn btn-primary">{movie.favoriteMovie ? "Remove from Favorites" : "Add to Favorites"} </button>
                <button onClick={handleHated} type="button" className="btn btn-primary">{movie.hatedMovie ? "Remove from Hated" : "Add to Hated"} </button>
            </div>
        </div>
    )
}


export default Card