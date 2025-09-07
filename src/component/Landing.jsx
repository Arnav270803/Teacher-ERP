import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext' // Add this import

const Landing = ({ isDark }) => {
  const { setShowLogin } = useContext(AppContext); // Add this line

  return (
    <div className={`${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
   {/*Div for the background dotted grid pattern - Version 1: Slightly faded grid*/}
    <div
       className="relative w-full h-screen p-6"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, transparent 0%, transparent 40%, ${isDark ? '#1f2937' : '#f5f5f5'} 70%, ${isDark ? '#1f2937' : '#f5f5f5'} 100%),
          radial-gradient(${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.4)'} 1px, transparent 1px)
        `,
        backgroundSize: 'cover, 20px 20px'
      }}
    >
         {/*Creating Hero Section which looks super cool here*/}

         {/* Dark Mode Icons - Original icons without custom colors */}
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
            {/*ignore this just text here */}
         <div className=' mt-100 flex justify-center '>
                Your Academic Journey Starts Here
         </div>
        {/*ignore this just text here */}
         <div className='py-5 flex text-4xl font-bold justify-center '>
            Manage your academic life with{' '}
            <span className={`ml-2 transition-all duration-300 cursor-pointer hover:scale-120 ${
              isDark 
                ? 'hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]'
                : 'text-blue-500 hover:text-blue-400 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]'
            }`} style={isDark ? { color: '#08a88a' } : {}}>
              RollCall
            </span>
         </div>

            {/*div for login and signup button  */}
            <div className='flex justify-center gap-40 py-'>
                <button 
                  onClick={() => setShowLogin(true)} // Add onClick handler
                  className={`${isDark ? 'bg-neutral-800 border-gray-600 text-white' : 'bg-gray-100 border-gray-900 text-black'} border font-bold px-10 py-2 rounded-md font-medium cursor-pointer hover:scale-110 duration-300`}
                >
                    Login
                </button>

                <button className={`${isDark ? 'bg-gray-100 border-gray-500 text-black' : 'bg-black border-gray-900 text-white'} border font-bold px-10 py-2 rounded-md font-medium cursor-pointer hover:scale-110 duration-300`}>
                    Sign up
                </button>
            </div>
            <div className="w-full h-px bg-gray-800 mt-20 "></div>

    </div>
    </div>
  )
}

export default Landing