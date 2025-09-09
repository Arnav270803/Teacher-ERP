import React, { useState, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import LandingPage from './Pages/LandingPage'
import Login from './component/Login'
import { AppContext } from './context/AppContext'
import AdminHomePage from './Pages/AdminHomePage'
import AdminStudent from './Pages/AdminStudent'
import AdminClasses from './Pages/AdminClasses'
import AdminSemester from './Pages/AdminSemester'

const App = ({isDark}) => {
  const { showLogin } = useContext(AppContext);


  return (
    <div className={`App ${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <div>
      <Routes>
        <Route path="/" element={<LandingPage isDark={isDark} />} />
        <Route path="/Home" element={<Home isDark={isDark} />} />
        <Route path="/adminhome" element={<AdminHomePage />} />
        <Route path="/semesterAD" element={<AdminSemester />} />
        <Route path="/classesAD" element={<AdminClasses />} />
        <Route path="/StudentsAD" element={<AdminStudent />} />
      </Routes>
      {/* Render Login modal when showLogin is true */}
      {showLogin && <Login />}
      </div>
    </div>
  )
}

export default App