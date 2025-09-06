
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Attendance from './Pages/Attendance'

const App = () => {
  return (
    <div className="App">
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </div>
    
  )
}

export default App

