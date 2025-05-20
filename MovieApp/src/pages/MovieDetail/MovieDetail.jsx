import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailById } from "../../redux/slices/movieDetailSlice";

const MovieDetail = () => {
  const { id } = useParams(); // Url'den gelen id'yi alıyoruz.

  const { movieDetail } = useSelector((state) => state.movieDetail);
  const { title, overview, vote_average, backdrop_path, genres, original_language, poster_path, release_date, } = movieDetail

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getMovieDetailById(id));
  }, [id, dispatch])

  return (
    <div>{id}</div>
  )
}

export default MovieDetail