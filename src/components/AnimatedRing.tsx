
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const AnimatedRing = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Colors for the different sections of the ring
  const sectionColors = [
    'rgba(255, 79, 147, 0.8)',  // Pink (primary)
    'rgba(0, 255, 255, 0.6)',   // Cyan (health)
    'rgba(255, 215, 0, 0.6)',   // Gold (notifications)
    'rgba(50, 205, 50, 0.6)',   // Green (safety)
    'rgba(186, 85, 211, 0.6)',  // Purple (connectivity)
  ];

  // Feature names for each section
  const featureNames = [
    'Connectivity',
    'Health',
    'Notifications',
    'Safety',
    'Battery'
  ];

  useEffect(() => {
    // Only animate when not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveSection((prev) => (prev + 1) % 5);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);
  
  return (
    <div 
      className="relative w-full min-h-[400px] flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`absolute w-64 h-64 rounded-full blur-3xl transition-all duration-700 ease-in-out`} 
            style={{ backgroundColor: sectionColors[activeSection], opacity: 0.6 }} />
      </div>
      
      {/* Main ring */}
      <div className="relative w-72 h-72">
        {/* Ring sections */}
        {[0, 1, 2, 3, 4].map((section) => (
          <div 
            key={section}
            className={`absolute inset-0 rounded-full border-8 opacity-80 transition-all duration-500 ease-in-out ${section === activeSection ? 'scale-100' : 'scale-95 opacity-40'}`}
            style={{ 
              borderColor: sectionColors[section],
              transform: `rotate(${section * 72}deg) scale(${section === activeSection ? 1 : 0.95})`,
              zIndex: section === activeSection ? 20 : 10
            }}
          />
        ))}
        
        {/* Center of the ring with heart beat animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-40 h-40 bg-black rounded-full border-4 border-brandPink flex items-center justify-center">
            <Heart 
              className="text-brandPink h-16 w-16 animate-pulse"
              fill={activeSection === 0 ? 'rgba(255,79,147,0.8)' : 'none'}  
            />
          </div>
        </div>
        
        {/* Feature label */}
        <div className="absolute -bottom-16 left-0 right-0 text-center">
          <h3 className="text-xl font-semibold text-gradient-pink transition-all duration-300">{featureNames[activeSection]}</h3>
          <p className="text-white/60 text-sm mt-2">Tap to explore</p>
        </div>
        
        {/* Interactive hotspots for each feature */}
        {[0, 1, 2, 3, 4].map((section, index) => (
          <div 
            key={`hotspot-${section}`}
            className="absolute w-10 h-10 bg-brandPink/20 rounded-full cursor-pointer hover:bg-brandPink/40 transition-all duration-300 flex items-center justify-center"
            style={{ 
              top: `${50 + 40 * Math.sin(section * (2 * Math.PI / 5))}%`,
              left: `${50 + 40 * Math.cos(section * (2 * Math.PI / 5))}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: 30
            }}
            onClick={() => setActiveSection(section)}
          >
            <span className="text-xs font-bold text-white">{section + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedRing;
