import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetailById } from '../../redux/slices/movieDetailSlice';
import { API_IMG } from '../../constants/api';
import { FaStar } from "react-icons/fa6";
import { FaHeart } from 'react-icons/fa'
import { IoIosRemoveCircle } from "react-icons/io";
import { addFavorite, removeFavorite } from '../../redux/slices/favoriteSlice';

import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams(); // Url'den gelen id'yi alıyoruz.

  const { movieDetail } = useSelector((state) => state.movieDetail);
  const { title, overview, vote_average, backdrop_path, poster_path, genres, spoken_languages, release_date } = movieDetail

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getMovieDetailById(id));
  }, [id, dispatch])

  const release_year = new Date(release_date)

  const isFavorite = useSelector((store) => store.favorites.favoriteMovies?.some((movie) => movie.id === id))

  const handleAddFavorite = () => {
    const payload = { id, title, poster_path, vote_average }
    dispatch(addFavorite(payload))
  }

  const handleRemoveFavorite = () => {
    const payload = { id }
    dispatch(removeFavorite(payload))
  }

  return (
    <div className='movie-detail'>
      <img className='backdrop' src={`${API_IMG}/${backdrop_path}`} alt={title} />
      <header>
        <p>{title}</p>
        <div className='add-favorite-remove'>
          {
            isFavorite ? // yukarıdan true dönerse ilgili film zaten favorilerde olduğu için remove movie butonu gösteriyoruz.
              <button onClick={handleRemoveFavorite} className='btn remove'>
                <span><IoIosRemoveCircle /></span>
                <span>Remove Favorite</span>
              </button>
              : // false dönerse film favorilerde olmadığı için add favorite butonu gösterilir.
              <button onClick={handleAddFavorite} className='btn add'>
                <span><FaHeart /></span>
                <span>Add Favorite</span>
              </button>
          }
        </div>
      </header>
      <div className='content'>
        <div className='left'>
          <div className='movie-backdrop_path'>
            <img src={`${API_IMG}/${poster_path}`} alt={title} />
          </div>
        </div>
        <div className='right'>
          <div className='movie-overview'>
            <p>{overview}</p>
          </div>
          <div className='movie-rating'>
            <FaStar />
            <p>{vote_average?.toFixed(1)}</p>
          </div>
          <div className='release-date'>
            <span>Year</span>
            <p>{release_year?.getFullYear()}</p>
          </div>
          <div className='movie-info'>
            <div className='movie-genres'>
              <span>Genres:</span>
              <ul>
                {
                  genres?.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))
                }
              </ul>
            </div>
            <div className='movie-languages'>
              <span>Languages:</span>
              <ul>
                {
                  spoken_languages?.map((language, index) => (
                    <li key={index}>{language.name}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail