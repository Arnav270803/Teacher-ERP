import Landing from '@/component/Landing'
import React from 'react'

const LandingPage = ({ isDark }) => {
  return (
    <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <Landing isDark={isDark} />   
      </div>
  )
}

export default LandingPage