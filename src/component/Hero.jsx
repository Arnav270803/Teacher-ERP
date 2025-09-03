import React from 'react';

const TimetableCard = ({ 
  componentName = "Mathematics", 
  className = "Class 10-A", 
  rollNumber = "Roll #25", 
  time = "10:30 - 11:15 AM",
  isDark = false 
}) => {
  return (
    <div className={`
      relative overflow-hidden rounded-xl p-6 border backdrop-blur-sm
      ${isDark 
        ? 'bg-gray-800/80 border-gray-700 text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)]' 
        : 'bg-white/80 border-gray-200 text-gray-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)]'
      }
      ${isDark 
        ? 'hover:shadow-[0_70px_120px_-25px_rgba(0,0,0,1)]' 
        : 'hover:shadow-[0_70px_120px_-25px_rgba(0,0,0,0.8)]'
      }
      transition-all duration-300 hover:scale-105
      w-80 h-48
    `}>
      {/* Decorative corner accent */}
      <div className={`
        absolute top-0 right-0 w-16 h-16 
        ${isDark ? 'bg-blue-500/20' : 'bg-blue-500/10'}
        rounded-bl-full
      `} />
      
      {/* Time badge */}
      <div className={`
        absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium
        ${isDark 
          ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' 
          : 'bg-blue-50 text-blue-600 border border-blue-200'
        }
      `}>
        {time}
      </div>

      {/* Main content */}
      <div className="flex flex-col justify-between h-full">
        <div>
          {/* Component name */}
          <h3 className={`
            text-xl font-bold mb-2 pr-16
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            {componentName}
          </h3>
          
          {/* Class info */}
          <p className={`
            text-sm font-medium mb-1
            ${isDark ? 'text-gray-300' : 'text-gray-600'}
          `}>
            {className}
          </p>
        </div>

        {/* Bottom section */}
        <div className="flex items-center justify-between">
          <div className={`
            px-3 py-1 rounded-lg text-sm font-medium
            ${isDark 
              ? 'bg-gray-700/50 text-gray-300' 
              : 'bg-gray-100 text-gray-700'
            }
          `}>
            {rollNumber}
          </div>
          
          {/* Status indicator */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo showing cards with your exact Hero background
const HeroWithCards = ({ isDark }) => {
  return (
    <div className="w-full h-screen">
      <div 
        className='w-full h-full'
        style={{
          backgroundImage: `
            linear-gradient(to bottom, transparent 0%, ${isDark ? '#1f2937' : '#f5f5f5'} 100%),
            radial-gradient(${isDark ? '#ffffff' : '#000000'} 1px, transparent 1px)
          `,
          backgroundSize: 'cover, 20px 20px'
        }}
      >
        <div className='p-6 flex justify-evenly item-center'>
          <div className=''>
            {/* Your existing hero content can go here */}
            
            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <TimetableCard 
                componentName="Mathematics"
                className="Class 10-A"
                rollNumber="Roll #25"
                time="10:30 - 11:15 AM"
                isDark={isDark}
              />
              
              <TimetableCard 
                componentName="Physics"
                className="Class 12-B"
                rollNumber="Roll #42"
                time="11:30 - 12:15 PM"
                isDark={isDark}
              />
              
              <TimetableCard 
                componentName="Chemistry"
                className="Class 11-C"
                rollNumber="Roll #18"
                time="2:00 - 2:45 PM"
                isDark={isDark}
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TimetableCard };
export default HeroWithCards;