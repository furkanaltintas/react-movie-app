import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieList } from '../../redux/slices/movieListSlice'

import MovieCard from '../MovieCard/MovieCard'
import Loading from '../Loading/Loading'

import './MovieList.css'
const MovieList = () => {
    const { movieList, isLoading } = useSelector((store) => store.movieList)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovieList()).then(res => console.log("Movie data loaded:", res))
    }, [])

    return (
        <div className='movie-list'>
            <ul>
                {
                    !isLoading ?
                        movieList && movieList.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        )) :
                        <Loading />
                }
            </ul>
        </div>
    )
}

export default MovieList