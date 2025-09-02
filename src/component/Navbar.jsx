import { Button } from '@/components/ui/button'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full py-4 bg-gray-50/50'>
      <div className='max-w-5xl mx-auto px-4'>
        <nav className='w-full bg-white rounded-2xl shadow-lg border border-gray-100/50 backdrop-blur-sm'>
          <div className='px-6 lg:px-3'>
            <div className='flex items-center justify-between h-16'>
              {/* Logo Section */}
              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8'>
                  <lord-icon
                    src="https://cdn.lordicon.com/jeuxydnh.json"
                    trigger="hover"
                    stroke="light"
                    colors="primary:#242424,secondary:#08a88a">
                  </lord-icon>
                </div>
                <span className='text-xl font-semibold text-gray-900'>
                  Home
                </span>
              </div>

              {/* Navigation Links - Desktop */}
              <div className='hidden md:flex items-center space-x-8'>
                <a href="#" className='text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium'>
                  Announcement
                </a>
                <a href="#" className='text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium'>
                  Time-Table
                </a>
                <a href="#" className='text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium'>
                  Attendance
                </a>
              </div>

              {/* Auth Buttons */}
              <div className='flex items-center space-x-3'>
                <Button variant="ghost" className='text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium'>
                  Login
                </Button>
                <Button className='bg-black hover:bg-gray-800 text-white px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200'>
                  Sign Up
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className='md:hidden'>
                <Button variant="ghost" size="sm" className='hover:bg-gray-50'>
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