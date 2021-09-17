function OneMore({searchMovieData}){
    const eachResult = searchMovieData.Search.map(newMovie=>(
        <p>{newMovie}</p>
    ))
    return(
        <div>
            {eachResult}
        </div>
    )
}

export default OneMore