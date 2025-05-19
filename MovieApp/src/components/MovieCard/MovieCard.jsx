
import { Link } from 'react-router-dom'
import { API_IMG } from '../../constants/api'
import { FaStar } from 'react-icons/fa'

import './MovieCard.css'

const MovieCard = ({ movie }) => {
    if (!movie) return null; // Movie yoksa hiç render etme

    const { id, title, poster_path, vote_average } = movie

    return (
        <Link to={`/${id}`}>
            <div className="movie-card" key={id}>
                <div className="gradient"></div>
                <img src={`${API_IMG}/${poster_path}`} alt={title} />
                <div className='movie-info'>
                    <div className="movie-rating">
                        <p>{vote_average.toFixed(1)}</p>
                        <FaStar />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard