import './App.css'

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import Home from './Home.jsx'
import Foods from './Foods.jsx'
import Favorites from './Favorites.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | {" "} 
          <Link to="/foods">Foods</Link> | {" "} 
          <Link to="/favorites">Favorites</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/foods' element={<Foods />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
