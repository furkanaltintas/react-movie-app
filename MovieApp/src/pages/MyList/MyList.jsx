import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../../components/MovieCard/MovieCard'
import { removeAllFavorite } from '../../redux/slices/favoriteSlice';

import './MyList.css'

const MyList = () => {
  const { favoriteMovies } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleMyListClear = () => {
    dispatch(removeAllFavorite())
  }

  return (
    <div className="my-list">
      <header>
        <p>Your Favorite Movies</p>
        <div className='clear-favorites'>
          <button onClick={handleMyListClear} className='btn add'>
            <span>Clear Favorite</span>
          </button>
        </div>
      </header>

      <ul>
        {
          favoriteMovies.length > 0 ? favoriteMovies.map((movie) => (
            <MovieCard movie={movie} />
          )) : <p className='empty'>The list is empty</p>
        }
      </ul>
    </div>
  )
}

export default MyList