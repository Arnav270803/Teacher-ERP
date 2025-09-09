import React, { useState } from 'react'

const ClassesForAdmin = () => {
    const [isClassesDropDown , setIsClassesDropdownOpen] = useState(false)

    const classes=["Cse-1" , "Cse-2" , "Cse-3" , "Cse-4" , "AIDS" , "AIML"]

    const toggleClassesDropdown = () =>{
        setIsClassesDropdownOpen(!isClassesDropDown)
    } 

    const handleClasses =(classess) =>{
        console.log(`Select Classes ${classess}`)
        setIsClassesDropdownOpen(false)
    }
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard for semesters</h1>
          <p className="text-gray-600 mt-2">Manage Semester and academic programs</p>
        </div>

        {/* Main Content here bro */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            
            {/* Courses Dropdown Button */}
            <div className="relative">
              <button
                onClick={toggleClassesDropdown}
                className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 min-w-[150px]"
              >
                <span>Class</span>
                <svg 
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${isClassesDropDown ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isClassesDropDown && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {classes.map((classess, index) => (
                    <button
                      key={index}
                      onClick={() => handleClasses(classess)}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {classess}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Add Course Button */}
            <button
              className="flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Classes+
            </button>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown , Ignore this */}
      {isClassesDropDown && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setIsClassesDropdownOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default ClassesForAdmin