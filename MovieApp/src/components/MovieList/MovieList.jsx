import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieList } from '../../redux/slices/movieListSlice'
import MovieCard from '../MovieCard/MovieCard'

import './MovieList.css'

const MovieList = () => {
    const { movieList } = useSelector((store) => store.movieList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovieList())
    }, [])

    return (
        <div className='movie-list'>
            <ul>
                {
                    movieList && movieList.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))
                }
            </ul>
            <MovieCard />
        </div>
    )
}

export default MovieList