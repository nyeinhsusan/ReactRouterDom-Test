import React from 'react'
import Navigation from './components/Navigation'
import "./App.css"
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Blog from "./components/Blog"
const App = () => {
  return (
    <div className='container'>
      <Navigation />
      <hr></hr>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App
