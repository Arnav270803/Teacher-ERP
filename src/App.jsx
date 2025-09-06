import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from '../src/component/Navbar'
import LandingPage from './Pages/LandingPage'

const App = () => {
  const [isDark, setIsDark] = useState(false);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`App ${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<LandingPage isDark={isDark} />} />
        <Route path="/Home" element={<Home isDark={isDark} />} />
      </Routes>
    </div>
  )
}

export default App