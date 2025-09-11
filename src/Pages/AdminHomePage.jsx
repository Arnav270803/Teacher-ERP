import AdminH from '@/component/AdminH'
import NavbarForAdmin from '@/component/NavbarForAdmin';
import React, { useState } from 'react'
{/*Admin home page  */}
const AdminHomePage = () => {

    const [isDark, setIsDark] = useState(false);
        
    const toggleTheme = () => {
      setIsDark(!isDark);
    };
  return (
    <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <NavbarForAdmin isDark={isDark} toggleTheme={toggleTheme}/>
        <AdminH isDark={isDark}/>
    </div>
  )
}

export default AdminHomePage