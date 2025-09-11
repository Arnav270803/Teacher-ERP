import React, { useContext, useState } from 'react'
import { AdminContext } from '@/context/AdminContext'

const ClassesForAdmin = () => {
  // Get context values and functions
  const { selectedCourse, handleClassSelection } = useContext(AdminContext);
  
  // Local state for dropdown visibility
  const [isClassesDropdownOpen, setIsClassesDropdownOpen] = useState(false)

  // Available classes - you can modify this array as needed
  const classes = ["CSE-1", "CSE-2", "CSE-3", "CSE-4", "AIDS", "AIML"]

  // Function to toggle classes dropdown
  const toggleClassesDropdown = () => {
    setIsClassesDropdownOpen(!isClassesDropdownOpen)
  }

  // Function called when user selects a class
  const handleClasses = (selectedClass) => {
    console.log(`Selected Class: ${selectedClass}`)
    setIsClassesDropdownOpen(false) // Close dropdown
    handleClassSelection(selectedClass); // Use context function to handle selection and navigate
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section - Shows selected course */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard - Classes</h1>
          {/* Display the selected course from previous page */}
          <p className="text-gray-600 mt-2">
            Selected Course: <span className="font-semibold text-blue-600">{selectedCourse || 'None'}</span>
          </p>
          <p className="text-gray-500 text-sm">Select a class to proceed to semesters</p>
        </div>

        {/* Main Content Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            
            {/* Classes Dropdown Button */}
            <div className="relative">
              <button
                onClick={toggleClassesDropdown}
                className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 min-w-[150px]"
              >
                <span>Classes</span>
                {/* Dropdown arrow that rotates when open */}
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${isClassesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isClassesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {/* Map through classes array to create dropdown options */}
                  {classes.map((classItem, index) => (
                    <button
                      key={index}
                      onClick={() => handleClasses(classItem)} // When clicked, select class and navigate
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {classItem}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Add Class Button - for future functionality */}
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
              Add Class+
            </button>
          </div>
        </div>

        {/* Navigation Breadcrumb - Shows the current path */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center text-sm text-gray-600">
            <span>Navigation: </span>
            <span className="mx-2 text-blue-600 font-medium">{selectedCourse}</span>
            <span className="mx-2">→</span>
            <span className="text-gray-800 font-medium">Select Class</span>
          </div>
        </div>
      </div>

      {/* Click outside overlay to close dropdown */}
      {isClassesDropdownOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsClassesDropdownOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default ClassesForAdmin