import React, { useContext, useState } from 'react'
import { AdminContext } from '@/context/AdminContext'

const SemesterForAdmin = () => {
  // Get context values and functions
  const { selectedCourse, selectedClass, handleSemesterSelection } = useContext(AdminContext);
  
  // Local state for dropdown visibility
  const [isSemesterDropdownOpen, setIsSemesterDropdownOpen] = useState(false);

  // Available semesters - you can modify this array as needed
  const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"]

  // Function to toggle semester dropdown
  const toggleSemesterDropdown = () => {
    setIsSemesterDropdownOpen(!isSemesterDropdownOpen)
  }

  // Function called when user selects a semester
  const handleSemester = (semester) => {
    console.log(`Selected semester: ${semester}`)
    setIsSemesterDropdownOpen(false) // Close dropdown
    handleSemesterSelection(semester); // Use context function to handle selection and navigate
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section - Shows selected course and class */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard - Semesters</h1>
          {/* Display the selected course and class from previous pages */}
          <div className="text-gray-600 mt-2">
            <p>Selected Course: <span className="font-semibold text-blue-600">{selectedCourse || 'None'}</span></p>
            <p>Selected Class: <span className="font-semibold text-green-600">{selectedClass || 'None'}</span></p>
          </div>
          <p className="text-gray-500 text-sm mt-2">Select a semester to proceed to students</p>
        </div>

        {/* Main Content Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            
            {/* Semesters Dropdown Button */}
            <div className="relative">
              <button
                onClick={toggleSemesterDropdown}
                className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 min-w-[150px]"
              >
                <span>Semesters</span>
                {/* Dropdown arrow that rotates when open */}
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${isSemesterDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isSemesterDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {/* Map through semesters array to create dropdown options */}
                  {semesters.map((semester, index) => (
                    <button
                      key={index}
                      onClick={() => handleSemester(semester)} // When clicked, select semester and navigate
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                    >
                      Semester {semester}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Add Semester Button - for future functionality */}
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
              Add Semester+
            </button>
          </div>
        </div>

        {/* Navigation Breadcrumb - Shows the current path */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center text-sm text-gray-600">
            <span>Navigation: </span>
            <span className="mx-2 text-blue-600 font-medium">{selectedCourse}</span>
            <span className="mx-2">→</span>
            <span className="mx-2 text-green-600 font-medium">{selectedClass}</span>
            <span className="mx-2">→</span>
            <span className="text-gray-800 font-medium">Select Semester</span>
          </div>
        </div>
      </div>

      {/* Click outside overlay to close dropdown */}
      {isSemesterDropdownOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsSemesterDropdownOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default SemesterForAdmin