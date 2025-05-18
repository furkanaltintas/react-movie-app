import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getGenre } from '../../redux/slices/genreSlice';

import './Genre.css'

const Genre = () => {
    const { genres } = useSelector((store) => store.genre)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenre())
    }, [])

    return (
        <div className="genres">
            <ul>
                {genres && genres.map((genre, index) => (
                    <li key={index}>
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Genre