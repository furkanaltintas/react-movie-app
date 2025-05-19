import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieList, getMovieListByGenre } from '../../redux/slices/movieListSlice'
import { GenreContext } from '../../contexts/GenreContext'

import MovieCard from '../MovieCard/MovieCard'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'

import './MovieList.css'

const MovieList = () => {
    const { movieList, status, error } = useSelector((store) => store.movieList)
    const dispatch = useDispatch()

    const { selectedGenre } = useContext(GenreContext);

    useEffect(() => {
        if (!selectedGenre) {
            dispatch(getMovieList())
        } else {
            dispatch(getMovieListByGenre(selectedGenre.id))
        }
    }, [selectedGenre, dispatch])

    return (
        <div className='movie-list'>
            <div className='list-wrapper'>
                <h1>{selectedGenre ? selectedGenre.name : 'Discover'}</h1>
                {status === 'fulfilled' && (
                    <div className="movie-grid">
                        {movieList && movieList.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </div>
                )}

                {status === 'pending' && (
                    <div className="loading-center">
                        <Loading />
                    </div>
                )}

                {status === 'rejected' && <Error error={error} />}
            </div>
        </div>
    )
}

export default MovieList