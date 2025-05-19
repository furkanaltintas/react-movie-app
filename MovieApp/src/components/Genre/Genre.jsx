import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getGenre } from '../../redux/slices/genreSlice';

import './Genre.css'
import { GenreContext } from '../../contexts/GenreContext';

const Genre = () => {
    const { genres } = useSelector((store) => store.genre)
    const dispatch = useDispatch();
    
    const { selectedGenre, setSelectedGenre } = useContext(GenreContext)

    const handleGenre = (genre) => {
        if (genre.id == selectedGenre?.id) { // Seçilen genre tekrar tıklandığında filmleri temizle
            setSelectedGenre(null);
            return;
        } else {
            setSelectedGenre(genre);
        }
    }

    useEffect(() => {
        dispatch(getGenre())
    }, [dispatch])

    return (
        <div className="genres">
            <ul>
                {genres && genres.map((genre, index) => (
                    <li className={`genre ${selectedGenre && selectedGenre.id === genre.id ? 'active' : ''}`} onClick={() => handleGenre(genre)} key={index}>
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Genre