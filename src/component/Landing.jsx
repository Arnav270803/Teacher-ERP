import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Landing = ({ isDark }) => {
  const { setShowLogin } = useContext(AppContext);

  return (
    <>
      {/* Google Fonts link for Caveat font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/*------------------------------------------------------------Main Component-----------------------------------------------------------------------------------*/}
      {}
      <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300  flex flex-col`}>

        {/* Hero Section */}

        <div className="">

          {/* Div for the background dotted grid pattern - Version 1: Slightly faded grid */}
          <div
            className="relative w-full p-6 py-10"
            style={{
              backgroundImage: `
                linear-gradient(to bottom, transparent 0%, transparent 40%, ${isDark ? '#1f2937' : '#f5f5f5'} 70%, ${isDark ? '#1f2937' : '#f5f5f5'} 100%),
                radial-gradient(${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.4)'} 1px, transparent 1px)
              `,
              backgroundSize: 'cover, 20px 20px'
            }}
          >
            {/* Creating Hero Section which looks super cool here */}

            {/* code for all the Logos that you are seeing on the screen randomly hoverting */}

            {isDark && (
              <>
                {/* Icon 1 - Top left area */}
                <div className="absolute top-20 left-90" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}>
                  <lord-icon
                    src="https://cdn.lordicon.com/ogjpwrxe.json"
                    trigger="hover"
                    colors="primary:#e4e4e4,secondary:#08a88a"
                    style={{width: '60px', height: '60px', fontWeight: 'bold'}}
                  />
                </div>

                {/* Icon 2 - Top right area */}
                <div className="absolute top-22 left-240" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}>
                  <lord-icon
                    src="https://cdn.lordicon.com/lbcxnxti.json"
                    trigger="hover"
                    colors="primary:#e4e4e4,secondary:#08a88a"
                    style={{width: '60px', height: '60px', fontWeight: 'bold'}}
                  />
                </div>

                {/* Icon 3 - Bottom left area */}
                <div className="absolute top-80 left-40" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}>
                  <lord-icon
                    src="https://cdn.lordicon.com/exymduqj.json"
                    trigger="in"
                    delay="1500"
                    state="in-dynamic"
                    colors="primary:#e4e4e4,secondary:#08a88a"
                    style={{width: '60px', height: '60px', fontWeight: 'bold'}}
                  />
                </div>

                {/* Icon 4 - Bottom right area */}
                <div className="absolute top-80 right-40" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}>
                   <lord-icon
                       src="https://cdn.lordicon.com/wjyqkiew.json"
                       trigger="loop"
                       state="loop-spin"
                       colors="primary:#e4e4e4,secondary:#08a88a"
                       style={{width: '60px', height: '60px', fontWeight: 'bold'}}>
                   </lord-icon>
                </div>
              </>
            )}

            {/* Light Mode Icons - New icons with custom colors */}
            {!isDark && (
              <>
                {/* Icon 1 - Top left area */}
                <div className="absolute top-20 left-90" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}>
                  <lord-icon
                       src="https://cdn.lordicon.com/ogjpwrxe.json"
                       trigger="hover"
                       colors="primary:#242424,secondary:#08a88a"
                       style={{width: '60px', height: '60px', fontWeight: 'bold'}}>
                   </lord-icon>
                </div>

                {/* Icon 2 - Top right area */}
                <div className="absolute top-22 left-240" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}>
                   <lord-icon
                       src="https://cdn.lordicon.com/lbcxnxti.json"
                       trigger="loop"
                       state="loop-cycle"
                       colors="primary:#242424,secondary:#08a88a"
                       style={{width: '60px', height: '60px', fontWeight: 'bold'}}>
                   </lord-icon>
                </div>

                {/* Icon 3 - Bottom left area */}
                <div className="absolute top-80 left-40" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}>
                   <lord-icon
                       src="https://cdn.lordicon.com/exymduqj.json"
                       trigger="in"
                       delay="1500"
                       state="in-dynamic"
                       colors="primary:#242424,secondary:#08a88a"
                       style={{width: '60px', height: '60px', fontWeight: 'bold'}}>
                   </lord-icon>
                </div>

                {/* Icon 4 - Bottom right area */}
                <div className="absolute top-80 right-40" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}>
                   <lord-icon
                       src="https://cdn.lordicon.com/wjyqkiew.json"
                       trigger="loop"
                       state="loop-spin"
                       colors="primary:#242424,secondary:#08a88a"
                       style={{width: '60px', height: '60px', fontWeight: 'bold'}}>
                   </lord-icon>
                </div>
              </>
            )}

{/* --------------------------------------------------------------------Hero Section---------------------------------------------------------------------- */}

            {/* Main content - centered vertically */}
            <div className="flex flex-col justify-center items-center mt-70">
              {/* Subtitle text */}
              <div className="mb-5 text-center">
                Your Academic Journey Starts Here
              </div>

              {/* Main title */}
              <div className="py-5 text-4xl font-bold text-center">
                 Manage your academic life with{' '}
                 <span className={`ml-2  transition-all duration-300 cursor-pointer hover:scale-120 ${
                   isDark 
                     ? 'hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]'
                     : 'text-blue-500 hover:text-blue-400 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]'
                 }`} style={isDark ? { color: '#08a88a' } : {}}>
                   RollCall
                 </span>
              </div>

              {/* Login and signup buttons */}
              <div className="py-5">
                 <button 
                   onClick={() => setShowLogin(true)}  //  when this click is true show login variable become true which is in AppContext file and login page will show up
                   className={`${isDark ? 'bg-gray-100 border-gray-500 text-black' : 'bg-black border-gray-900 text-white'} border font-bold px-10 py-2 rounded-md font-medium cursor-pointer hover:scale-110 duration-300`}>
                     Login
                 </button>
              </div>
            </div>
          </div>
        </div>

{/* ---------------------------------------------------------------------Footer Section Starting--------------------------------------------------------------------------------------------------------------------------------- */}

        <footer className={`px-6  ${isDark ? 'bg-neutral-900 text-white' : 'bg-gray-100 text-black'}`}>
          <div className="flex justify-between items-start">
            {/* Left side content */}
            <div>
              <span className="text-4xl" style={{fontFamily: 'Caveat, cursive'}}>
                RollCall
              </span>
              <div className="py-2 text-xl" style={{fontFamily: 'Caveat, cursive'}}>
                Build in public by 
                <a href="https://x.com/Bokinsha" className={`ml-1 ${isDark ? 'text-teal-400 hover:text-teal-300' : 'text-blue-600 hover:text-blue-800'}`}>
                  @Arnav,
                </a>
                <a href="#" className={`ml-1 ${isDark ? 'text-teal-400 hover:text-teal-300' : 'text-blue-600 hover:text-blue-800'}`}>
                  @Jay
                </a>
              </div>
            </div>
             
            {/* Right side content */}
            <div className="cursor-pointer" style={{fontFamily: 'Caveat, cursive'}}>
              <div>
                <a href="#" className={`hover:underline ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}>
                  Contact Us
                </a>
              </div>
              <div>
                <a href="#" className={`hover:underline ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}>
                  Our Mission
                </a>
              </div>
              <div>
                <a href="#" className={`hover:underline ${isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}`}>
                  Blog
                </a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}

export default Landing