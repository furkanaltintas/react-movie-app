import { Link, useNavigate } from 'react-router-dom';
import { PiFilmReelFill } from 'react-icons/pi';
import { TiHome } from 'react-icons/ti';
import { FaHeart } from 'react-icons/fa';

import './Navbar.css';
import { useContext } from 'react';
import { GenreContext } from '../../contexts/GenreContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { setSelectedGenre } = useContext(GenreContext);

    const handleClick = () => {
        setSelectedGenre(null);
        navigate('/'); // Aynı sayfa olsa bile tetiklenir
    }

    return (
        <nav className="navbar">
            <div className="left">
                <Link onClick={handleClick}>
                    <h1>MovieApp</h1>
                </Link>
            </div>
            <div className="center">
                <PiFilmReelFill />
            </div>
            <div className="right">
                <ul>
                    <li>
                        <Link to='/'>
                            <TiHome />
                        </Link>
                    </li>
                    <li>
                        <Link to='/my-list'>
                            <FaHeart />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar