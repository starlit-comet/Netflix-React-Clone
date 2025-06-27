import Home from './pages/Home/Home'
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
function App() {

  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>} />
      < Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
