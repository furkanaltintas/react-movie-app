import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getGenre } from '../../redux/slices/genreSlice';

import './Genre.css'

const Genre = ({ setSelectedGenre }) => {
    const { genres } = useSelector((store) => store.genre)
    const dispatch = useDispatch();

    const [activeGenre, setActiveGenre] = useState(null);

    const handleGenre = (genre) => {
        setSelectedGenre(genre.id);
        setActiveGenre(genre.id);
    }

    useEffect(() => {
        dispatch(getGenre())
    }, [])

    return (
        <div className="genres">
            <ul>
                {genres && genres.map((genre, index) => (
                    <li className={`genre ${activeGenre === genre.id ? 'active' : ''}`} onClick={() => handleGenre(genre)} key={index}>
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Genre