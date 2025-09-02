import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import Navbar from './component/Navbar'

const App = () => {

    const [isDark, setIsDark] = useState(true);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  )
}

export default App