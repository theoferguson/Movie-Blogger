import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/reviews">Reviews</NavLink>
            <NavLink to ="/my-movies">My Movies</NavLink>
            <NavLink to ="/reviews/new">New Review</NavLink>
        </nav>
    )
};

export default NavBar;