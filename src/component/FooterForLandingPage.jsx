import React from 'react'

const FooterForLandingPage = ({isDark}) => {
  return (
    <>
      <link 
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      <div className={`px-6 py-4 ${isDark ? 'bg-neutral-900 text-white' : 'bg-gray-100 text-black'}`}>
        <div className="flex justify-between items-start">
          {/* Left side content */}
          <div>
            <span className='text-4xl' style={{fontFamily: 'Caveat, cursive'}}>
              RollCall
            </span>
            <div className='py-2 text-xl' style={{fontFamily: 'Caveat, cursive'}}>
              Build in public by 
              <a href="https://x.com/Bokinsha" className={`ml-1 ${isDark ? 'text-teal-400 hover:text-teal-300' : 'text-blue-600 hover:text-blue-800'}`}>
                @Arnav,
              </a>
              <a href='#' className={`ml-1 ${isDark ? 'text-teal-400 hover:text-teal-300' : 'text-blue-600 hover:text-blue-800'}`}>
                @Jay
              </a>
            </div>
          </div>

          {/* Right side content */}
          <div className='cursor-pointer' style={{fontFamily: 'Caveat, cursive'}}>
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
      </div>
    </>
  )
}

export default FooterForLandingPage