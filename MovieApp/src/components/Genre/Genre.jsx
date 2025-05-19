import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getGenre } from '../../redux/slices/genreSlice';

import './Genre.css'

const Genre = ({ setSelectedGenre }) => {
    const { genres } = useSelector((store) => store.genre)
    const dispatch = useDispatch();

    const [activeGenre, setActiveGenre] = useState(null);

    const handleGenre = (genre) => {
        if (genre.id == activeGenre) { // Seçilen genre tekrar tıklandığında filmleri temizle
            setSelectedGenre(null);
            setActiveGenre(null);
            return;
        } else {
            setSelectedGenre(genre);
            setActiveGenre(genre.id);
        }

    }

    useEffect(() => {
        dispatch(getGenre())
    }, [dispatch])

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