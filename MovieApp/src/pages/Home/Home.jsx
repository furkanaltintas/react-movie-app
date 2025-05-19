import { useState } from 'react';
import Genre from '../../components/Genre/Genre'
import MovieList from '../../components/MovieList/MovieList'

const Home = () => {

  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <div className="home">
      <Genre setSelectedGenre={setSelectedGenre} />
      <MovieList selectedGenre={selectedGenre} />
    </div>
  )
}

export default Home