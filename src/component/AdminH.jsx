import { AdminContext } from '@/context/AdminContext'
import React, { useContext, useState } from 'react'

const AdminH = () => {
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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage courses and academic programs</p>
        </div>

        {/* Main Content Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            
            {/* Courses Dropdown Button */}
            <div className="relative">
              <button
                onClick={toggleCoursesDropdown}
                className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 min-w-[150px]"
              >
                <span>Courses</span>
                {/* Dropdown arrow icon that rotates when open */}
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu - only shows when isCoursesDropdownOpen is true */}
              {isCoursesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {/* Map through courses array to create dropdown options */}
                  {courses.map((course, index) => (
                    <button
                      key={index}
                      onClick={() => handleCourseSelect(course)} // When clicked, select course and navigate
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {course}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Add Course Button - for future functionality */}
            <button
              className="flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              {/* Plus icon */}
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Course+
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
  )
}

export default AdminH