import React from 'react'
import Hero from '../component/Hero';

const Home = ({ isDark }) => {
  return (
    <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <Hero isDark={isDark} />
    </div>
  )
}

export default Home