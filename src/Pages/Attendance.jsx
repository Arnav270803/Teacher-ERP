import React, { useState } from 'react'
import AttendanceComponent from '../component/attendanceee';

const Attendance = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <AttendanceComponent isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  )
}

export default Attendance