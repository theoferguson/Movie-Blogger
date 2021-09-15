import Dropdown from './Dropdown';


function Search({ handleSearch, filter, setFilter, issueRequest, setIssueRequest }) {

    return (
        <form className="form-inline my-2 my-lg-0">
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => handleSearch(e.target.value)}
            />
            <Dropdown filter={filter} setFilter={setFilter} issueRequest={issueRequest} setIssueRequest={setIssueRequest} />
        </form>
    )
};

export default Search