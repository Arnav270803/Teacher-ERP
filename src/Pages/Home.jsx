import React, { useState } from 'react'
import Hero from '../component/Hero';
import Navbar from '@/component/Navbar';

const Home = () => {
  {/*Dark theme Logic */}
    const [isDark, setIsDark] = useState(false);
        
    const toggleTheme = () => {
      setIsDark(!isDark);
    };

  return (
    <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
    </div>
  )
}

export default Home