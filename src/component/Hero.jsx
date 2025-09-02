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
        <div className='p-8 flex items-center justify-center h-full'>
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop" 
            alt="university image"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;