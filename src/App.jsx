import './App.css'

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import Home from './Home.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
