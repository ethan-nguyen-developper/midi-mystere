import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from "./Home.jsx"
import Food from "./Food.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/food">Food</Link> | {" "}
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/food' element={<Food />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
