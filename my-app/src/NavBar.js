import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/reviews">Reviews</NavLink>
            <NavLink to ="/my-movies">My Movies</NavLink>
        </nav>
    )
};

export default NavBar;