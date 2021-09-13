import Card from './Card'

function MovieContainer({movies}) {

    const movieList = movies.map(movie => {
        return (
            <Card movie={movie} />
        )
    })
    
    return (
        <>
            {movieList}
        </>
    )
}

export default MovieContainer