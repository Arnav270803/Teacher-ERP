import { AdminContext } from '@/context/AdminContext'
import React, { useContext, useState } from 'react'

const AdminH = ({ isDark }) => {
  // Get the context functions and state from AdminContext
  const { handleCourseSelection } = useContext(AdminContext);
  
  // Local state to control dropdown visibility
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false)
  
  // Available courses - you can modify this array as needed
  const courses = ['B.Tech', 'BCA', 'BSc', 'MSc']

  // Function to toggle the courses dropdown open/close
  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen)
  }

  // Function called when user selects a course from dropdown
  const handleCourseSelect = (course) => {
    console.log(`Selected course: ${course}`)
    setIsCoursesDropdownOpen(false) // Close the dropdown
    handleCourseSelection(course); // Use context function to handle selection and navigation
  }

  return (
    <>
      <div 
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? 'bg-gray-900' : 'bg-gray-50'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(to bottom, transparent 0%, transparent 40%, ${isDark ? '#1f2937' : '#f5f5f5'} 70%, ${isDark ? '#1f2937' : '#f5f5f5'} 100%),
            radial-gradient(${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.4)'} 1px, transparent 1px)
          `,
          backgroundSize: 'cover, 20px 20px'
        }}
      >
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-6 py-12">
          
          {/* Clean Header Section */}
          <div className="text-center mb-16 max-w-2xl">
            <div className={`inline-flex items-center px-3 py-1 rounded-full mb-6 text-xs font-medium uppercase tracking-wide ${
              isDark 
                ? 'bg-gray-800 text-gray-400 border border-gray-700' 
                : 'bg-white text-gray-500 border border-gray-200'
            }`}>
              <div className={`w-1.5 h-1.5 rounded-full mr-2 ${isDark ? 'bg-blue-400' : 'bg-blue-500'}`}></div>
              Admin Panel
            </div>
            
            <h1 className={`text-4xl md:text-5xl font-light mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            } tracking-tight`}>
              Dashboard
            </h1>
            
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Manage courses and academic programs
            </p>
          </div>

          {/* Action Cards */}
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
            
            {/* Courses Card */}
            <div className={`flex-1 p-6 rounded-lg border transition-all duration-200 ${
              isDark 
                ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                : 'bg-white border-gray-200 hover:border-gray-300'
            } hover:shadow-lg`}>
              
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-md mr-3 ${
                  isDark ? 'bg-blue-900 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Courses
                </h3>
              </div>
              
              <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Browse and manage academic programs
              </p>

              <div className="relative">
                <button
                  onClick={toggleCoursesDropdown}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-md border transition-colors duration-200 ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 hover:bg-gray-650 text-white' 
                      : 'bg-gray-50 border-gray-300 hover:bg-gray-100 text-gray-900'
                  }`}
                >
                  <span className="text-sm font-medium">Browse Courses</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isCoursesDropdownOpen && (
                  <div className={`absolute top-full left-0 right-0 mt-2 py-1 rounded-md border shadow-lg z-20 ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700' 
                      : 'bg-white border-gray-200'
                  }`}>
                    {courses.map((course, index) => (
                      <button
                        key={index}
                        onClick={() => handleCourseSelect(course)}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 ${
                          isDark 
                            ? 'hover:bg-gray-700 text-gray-200 hover:text-white' 
                            : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                        }`}
                      >
                        {course}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Add Course Card */}
            <div className={`flex-1 p-6 rounded-lg border transition-all duration-200 ${
              isDark 
                ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                : 'bg-white border-gray-200 hover:border-gray-300'
            } hover:shadow-lg`}>
              
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-md mr-3 ${
                  isDark ? 'bg-green-900 text-green-400' : 'bg-green-100 text-green-600'
                }`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  New Course
                </h3>
              </div>
              
              <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Create a new academic program
              </p>

              <button className={`w-full px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                isDark 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}>
                Add Course
              </button>
            </div>
          </div>
        </div>

        {/* Click outside overlay to close dropdown */}
        {isCoursesDropdownOpen && (
          <div
            className="fixed inset-0 z-0"
            onClick={() => setIsCoursesDropdownOpen(false)}
          ></div>
        )}
      </div>

      {/* Clean Footer */}
      <footer className={`px-6 py-4 border-t ${
        isDark 
          ? 'bg-gray-900 border-gray-700 text-white' 
          : 'bg-white border-gray-200 text-gray-900'
      }`}>
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div>
            <span className="text-2xl font-semibold" style={{fontFamily: 'Caveat, cursive'}}>
              RollCall
            </span>
            <div className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} style={{fontFamily: 'Caveat, cursive'}}>
              Built by{' '}
              <a href="https://x.com/Bokinsha" className={`${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-200`}>
                @Arnav
              </a>
              {' & '}
              <a href="#" className={`${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-200`}>
                @Jay
              </a>
            </div>
          </div>
           
          <div className="flex space-x-6" style={{fontFamily: 'Caveat, cursive'}}>
            <a href="#" className={`text-sm ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
              Contact Us
            </a>
            <a href="#" className={`text-sm ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
              Our Mission
            </a>
            <a href="#" className={`text-sm ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
              Blog
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default AdminH