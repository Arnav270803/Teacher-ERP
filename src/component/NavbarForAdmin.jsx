import React from 'react'

const NavbarForAdmin = ({ isDark, toggleTheme }) => {
  return (
    <div 
      className={`w-full py-4 relative`}
      style={{
        backgroundImage: `radial-gradient(${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.4)'} 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}
    >
      <div className='max-w-5xl mx-auto px-4'>
        <nav className={`w-full ${isDark ? 'bg-neutral-800/80' : 'bg-white/80'} rounded-2xl shadow-lg ${isDark ? 'border border-neutral-700/50' : 'border border-gray-100/50'} backdrop-blur-md`}> 
          <div className='px-6 lg:px-3'>
            <div className='flex items-center justify-between h-16'>
              {/* Home Section - Left */}
              <div className='flex items-center'>
                <a 
                  href="#" 
                  className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 font-medium text-lg`}
                >
                  Home
                </a>
              </div>

              {/* Theme Toggle - Right */}
              <div className='flex items-center'>
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg cursor-pointer transition-colors ${
                    isDark ? 'hover:bg-neutral-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                  }`}
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavbarForAdmin