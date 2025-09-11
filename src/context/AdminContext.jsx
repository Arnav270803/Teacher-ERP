import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  // Navigation hook for programmatic routing
  const navigate = useNavigate();

  // State to track which course is currently selected
  const [selectedCourse, setSelectedCourse] = useState('');
  
  // State to track which class is currently selected  
  const [selectedClass, setSelectedClass] = useState('');
  
  // State to track which semester is currently selected
  const [selectedSemester, setSelectedSemester] = useState('');

  // State to control the visibility of courses dropdown (if needed)
  const [showCourses, setShowCourses] = useState(false);

  // Function to handle course selection and navigate to classes page
  const handleCourseSelection = (course) => {
    console.log(`Course selected: ${course}`);
    setSelectedCourse(course); // Store the selected course
    setSelectedClass(''); // Reset class when course changes
    setSelectedSemester(''); // Reset semester when course changes
    navigate('/classesAD'); // Navigate to classes page
  };

  // Function to handle class selection and navigate to semester page
  const handleClassSelection = (classname) => {
    console.log(`Class selected: ${classname}`);
    setSelectedClass(classname); // Store the selected class
    setSelectedSemester(''); // Reset semester when class changes
    navigate('/semesterAD'); // Navigate to semester page
  };

  // Function to handle semester selection and navigate to students page
  const handleSemesterSelection = (semester) => {
    console.log(`Semester selected: ${semester}`);
    setSelectedSemester(semester); // Store the selected semester
    navigate('/studentsAD'); // Navigate to students page
  };

  // All the values and functions that child components can access
  const value = {
    // State values
    selectedCourse,
    selectedClass, 
    selectedSemester,
    showCourses,
    
    // State setters
    setSelectedCourse,
    setSelectedClass,
    setSelectedSemester,
    setShowCourses,
    
    // Handler functions for navigation
    handleCourseSelection,
    handleClassSelection,
    handleSemesterSelection,
    
    // Navigation function
    navigate
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;