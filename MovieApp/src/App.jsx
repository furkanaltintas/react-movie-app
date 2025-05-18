import { Routes, Route } from 'react-router-dom'
import { Path } from './constants/path'
import Navbar from './components/Navbar/Navbar'
import MyList from './pages/MyList/MyList'
import Home from './pages/Home/Home'

import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path={Path.HOME} element={<Home />} />
        <Route path={Path.MY_LIST} element={<MyList />} />
      </Routes>
    </div>
  )
}

export default App
