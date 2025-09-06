import React from 'react'

const Landing = ({ isDark }) => {
  return (
    <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <div className="p-8">
        <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          HELLO
        </h1>
      </div>
    </div>
  )
}

export default Landing