import { Link, NavLink, useNavigate } from 'react-router-dom';
import { PiFilmReelFill } from 'react-icons/pi';
import { TiHome } from 'react-icons/ti';
import { FaHeart } from 'react-icons/fa';

import './Navbar.css';
import { useContext } from 'react';
import { GenreContext } from '../../contexts/GenreContext';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const navigate = useNavigate();
    const { setSelectedGenre } = useContext(GenreContext);

    const handleClick = () => {
        setSelectedGenre(null);
        navigate('/'); // Aynı sayfa olsa bile tetiklenir
    }

    const favoriteCount = useSelector((store) => store.favorites.favoriteMovies.length);

    return (
        <nav className="navbar">
            <div className="left">
                <Link to='/' onClick={handleClick}>
                    <h1>MovieApp</h1>
                </Link>
            </div>
            <div className="center">
                <PiFilmReelFill />
            </div>
            <div className="right">
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
                            <TiHome />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/my-list' className={({ isActive }) => (isActive ? 'active' : '')}>
                            <FaHeart />
                            <div className='favorite-count'>{favoriteCount}</div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar