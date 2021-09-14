import { Link } from "react-router-dom";


function Card({ movie }) {
const cardStyle = {
    width: "18rem"
};

    return (
        <div class="card" style={cardStyle}>
            <img class="card-img-top" src={movie.Poster} alt="poster image" />
            <div class ="card-body">
            <h5 class ="card-title">{movie.Title}</h5>
            <p class ="card-text">{movie.Plot}</p>
            {/* <a href="#" class ="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}


export default Card