import { Button } from '@/components/ui/button'
import React from 'react'

const Navbar = ({ isDark, toggleTheme }) => {
  return (
    <div className={`w-full py-4 ${isDark ? 'bg-neutral-900/50' : 'bg-gray-50/50'}`}>
      <div className='max-w-5xl mx-auto px-4'>
        <nav className={`w-full ${isDark ? 'bg-neutral-800' : 'bg-white'} rounded-2xl shadow-lg ${isDark ? 'border border-neutral-700/50' : 'border border-gray-100/50'} backdrop-blur-sm`}>
          <div className='px-6 lg:px-3'>
            <div className='flex items-center justify-between h-16'>
              {/* Logo Section */}
              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8'>
                  <lord-icon
                    src="https://cdn.lordicon.com/jeuxydnh.json"
                    trigger="hover"
                    stroke="light"
                    colors={isDark ? "primary:#ffffff,secondary:#08a88a" : "primary:#242424,secondary:#08a88a"}>
                  </lord-icon>
                </div>
                <span className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Home
                </span>
              </div>

              {/* Navigation Links - Desktop */}
              <div className='hidden md:flex items-center space-x-8'>
                <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 font-medium`}>
                  Announcement
                </a>
                <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 font-medium`}>
                  Time-Table
                </a>
                <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 font-medium`}>
                  Attendance
                </a>
              </div>

              {/* Auth Buttons and Theme Toggle */}
              <div className='flex items-center space-x-3'>
                {/* Theme Toggle Button */}
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

                <Button variant="ghost" className={`${isDark ? 'text-gray-300 hover:text-white hover:bg-neutral-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'} font-medium`}>
                  Login
                </Button>
                <Button className={`${isDark ? 'bg-white hover:bg-gray-200 text-black' : 'bg-black hover:bg-gray-800 text-white'} px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200`}>
                  Sign Up
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className='md:hidden'>
                <Button variant="ghost" size="sm" className={`${isDark ? 'hover:bg-neutral-700' : 'hover:bg-gray-50'}`}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar