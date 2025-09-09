import Landing from '@/component/Landing'
import Navbar from '@/component/Navbar'
import React, { useState } from 'react'

const LandingPage = () => {
  {/*I created a usestate state 2 times , in future it can cause problems , for context had to change it  */}
        const [isDark, setIsDark] = useState(false);
      
  const toggleTheme = () => {
    setIsDark(!isDark);
  };


  return (
    <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Landing isDark={isDark} />   
      </div>
  )
}

export default LandingPage