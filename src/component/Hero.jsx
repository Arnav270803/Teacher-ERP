import React from 'react';

const Hero = ({ isDark }) => {
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

{/*the above is just the grid code now below that is the hero time table section*/}


        <div className='p-6 flex justify-between item-center'>
            <div className=''>

            </div>

        </div>


      </div>
    </div>
  );
};

export default Hero;