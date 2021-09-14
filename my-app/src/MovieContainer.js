import Card from './Card'


function MovieContainer({movies}) {


    const movieList = movies.map(movie => {
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