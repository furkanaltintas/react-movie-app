import { Routes, Route } from 'react-router-dom'
import { Path } from './constants/path'
import Navbar from './components/Navbar/Navbar'
import MyList from './pages/MyList/MyList'
import MovieDetail from './pages/MovieDetail/MovieDetail'
import Home from './pages/Home/Home'

import './App.css'
import './css/reset.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path={Path.HOME} element={<Home />} />
        <Route path={Path.MY_LIST} element={<MyList />} />
        <Route path={Path.MOVIE_DETAIL} element={<MovieDetail />} />
      </Routes>
    </div>
  )
}

export default App
