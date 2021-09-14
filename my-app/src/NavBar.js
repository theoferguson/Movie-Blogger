import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" exact to="/">Home</NavLink>
            <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
            <NavLink className="nav-link" to ="/my-movies">My Movies</NavLink>
            <NavLink className="nav-link" to ="/reviews/new">New Review</NavLink>
        </nav>
    )
};

export default NavBar;