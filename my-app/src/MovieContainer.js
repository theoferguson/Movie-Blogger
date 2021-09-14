import Card from './Card'
import {useState, useEffect} from 'react';

function MovieContainer() {
const [displayMovies, setDisplayMovies] = useState([])

useEffect(() => {
    fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(json => {
        setDisplayMovies(() => json)
        console.log(json)
    })
}, [])

    const movieList = displayMovies.map(movie => {
        return (
            <Card  movie={movie}/>
        )
    })
    
    return (
        <div className="card-columns">
            {movieList}
        </div>
    )
}

export default MovieContainer