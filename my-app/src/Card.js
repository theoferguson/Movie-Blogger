
function Card({ movie, issueRequest, setIssueRequest, isOpen, setIsOpen, handleWatched }) {


    function handleWatched() {
        fetch(`http://localhost:3000/movies/${movie.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                watched: movie.watched ? false : true
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

            <div className="card-header" onClick={() => setIsOpen(movie)}>
                <h5 className="card-title">{movie.Title}</h5>
                <img className="card-img-top" src={movie.Poster} alt="movie poster" />
            </div>
            <div className="card-body">
                <button onClick={handleWatched} type="button" className="btn btn-primary">{movie.watched ? "Remove from Watched" : "Add to Watched"} </button>
            </div>

        </div>
    )
}

export default Card