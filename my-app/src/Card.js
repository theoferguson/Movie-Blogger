import styled from 'styled-components'
function Card({ movie, issueRequest, setIssueRequest, isOpen, setIsOpen, handleWatched }) {


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
            {movie.review === "" || movie.review === undefined ? null :
                <Div>
                    <h3>Reviewed ✓</h3>
                    <span>User Ratings: {movie.starRating}'s</span>
                    <br></br>
                    <br></br>
                    <StyledSpan>{movie.review}</StyledSpan>
                </Div>}
        </div>
    )
}

export default Card