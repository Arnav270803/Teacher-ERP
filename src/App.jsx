import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import Navbar from './component/Navbar'
import Hero from './component/Hero';

const App = () => {

    const [isDark, setIsDark] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} toggleTheme={toggleTheme}/>
    </div>
  )
}

export default App