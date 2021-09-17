import { NavLink } from 'react-router-dom';
import Search from './Search';
import CardDetails from './CardDetails';
function NavBar({ handleSearch, filter, setFilter, issueRequest, setIssueRequest }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink
                className="navbar-brand"
                activeStyle={{
                    background: "lightblue",
                }}
                exact to="/"
            >
                Home
            </NavLink>
            <NavLink
                className="nav-link"
                activeStyle={{
                    background: "lightblue",
                }}
                to="/reviews"
            >
                Reviews
            </NavLink>
            <NavLink
                className="nav-link"
                activeStyle={{
                    background: "lightblue",
                }}
                to="/my-movies"
            >
                My Movies
            </NavLink>
            <NavLink
                className="nav-link"
                activeStyle={{
                    background: "lightblue",
                }}
                to="/hated-movies"
            >
                Hated Movies
            </NavLink>
            <NavLink
                className="nav-link"
                activeStyle={{
                    background: "lightblue",
                }}
                to="/search-movies"
            >
                Search for Movies
            </NavLink>

            <Search
                handleSearch={handleSearch}
                filter={filter}
                setFilter={setFilter}
                issueRequest={issueRequest}
                setIssueRequest={setIssueRequest}
            />
            <CardDetails
            issueRequest={issueRequest}
            setIssueRequest={setIssueRequest}
            />
        </nav>
    )
};

export default NavBar;