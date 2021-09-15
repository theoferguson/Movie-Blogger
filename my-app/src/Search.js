
function Search({ handleSearch }) {

function handleSort(e) {
    console.log(e.target.value)
}

    return (
        <form className="form-inline my-2 my-lg-0">
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => handleSearch(e.target.value)}
            />
            <div className="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onChange={handleSort} >
                    Sort Movies
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Alphabetical (A-Z)</a>
                    <a className="dropdown-item" href="#">Rating (self-rated or Rotten Tomatoes)</a>
                    <a className="dropdown-item" href="#">Box Office ($)</a>
                </div>
            </div>
        </form>
    )
};

export default Search