import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieList, getMovieListByGenre } from '../../redux/slices/movieListSlice'

import MovieCard from '../MovieCard/MovieCard'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'

import './MovieList.css'

const MovieList = ({ selectedGenre }) => {
    const { movieList, status, error } = useSelector((store) => store.movieList)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!selectedGenre) {
            dispatch(getMovieList())
        } else {
            dispatch(getMovieListByGenre(selectedGenre))
        }

    }, [selectedGenre, dispatch])

    return (
        <div className='movie-list'>
            <ul>
                {
                    status === 'fulfilled' ?
                        movieList && movieList.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        )) :
                        status === 'pending' ?
                            <Loading /> :
                            <Error error={error} />
                }
            </ul>
        </div>
    )
}

export default MovieList