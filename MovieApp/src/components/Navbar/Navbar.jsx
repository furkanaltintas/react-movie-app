import { Link } from 'react-router-dom';
import { PiFilmReelFill } from 'react-icons/pi';
import { TiHome } from 'react-icons/ti';
import { FaHeart } from 'react-icons/fa';

import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="left">
                <Link to='/'>
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