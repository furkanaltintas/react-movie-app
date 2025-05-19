import { useParams } from "react-router-dom"

const MovieDetail = () => {
  const { id } = useParams(); // Url'den gelen id'yi alıyoruz.

  return (
    <div>{ id }</div>
  )
}

export default MovieDetail