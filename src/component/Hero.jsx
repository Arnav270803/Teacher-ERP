import React from 'react';

const Home = ({ isDark = false }) => {
 return (
   <div 
     className="w-full h-screen p-6"
     style={{
       backgroundImage: `
         linear-gradient(to bottom, transparent 0%, ${isDark ? '#1f2937' : '#f5f5f5'} 100%),
         radial-gradient(${isDark ? '#ffffff' : '#000000'} 1px, transparent 1px)
       `,
       backgroundSize: 'cover, 20px 20px'
     }}
   >
    {/*Cards */}
     <div className='flex justify-evenly'>

    {/*#1 cards */}

<div className="relative overflow-hidden rounded-xl p-6 border backdrop-blur-sm w-80 h-48 transition-all duration-300 hover:scale-105 bg-white/80 border-gray-200 text-gray-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] hover:shadow-[0_70px_120px_-25px_rgba(0,0,0,0.8)]">
 
 <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-blue-500/10" />
 
    <div className="absolute top-2 right-4 px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600 border border-blue-200">
   9:00 - 9:55 AM
    </div>

    <h3 className="text-xl font-bold mb-2 py-4  pr-16 text-gray-900">
   Computer Networks
    </h3>
 
    <p className="text-sm font-medium mb-8 text-gray-600">
   {/*Attendence Animation */}
   <lord-icon
    src="https://cdn.lordicon.com/rpviwvwn.json"
    trigger="loop"
    state="loop-rotate"
    colors="primary:#242424,secondary:#08a88a">
</lord-icon>
    </p>

    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
      <div className="px-3 py-1 rounded-lg text-sm font-medium bg-gray-100 text-gray-700">
     Roll #25
      </div>
   
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs font-medium text-gray-500">
        Active
        </span>
      </div>
    </div>
  </div>
  </div>


  
</div> 
 );
};

export default Home;




