import { NavLink } from 'react-router-dom';
import Search from './Search';

function NavBar({handleSearch, filter, setFilter, issueRequest, setIssueRequest}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/Movie-Blogger">Home</NavLink>
            <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
            <NavLink className="nav-link" to ="/my-movies">My Movies</NavLink>
            <NavLink className="nav-link" to ="/hated-movies">Hated Movies</NavLink>

            <Search 
            handleSearch={handleSearch}
            filter={filter}
            setFilter={setFilter}
            issueRequest={issueRequest}
            setIssueRequest={setIssueRequest}
            />
        </nav>
    )
};

export default NavBar;