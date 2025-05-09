
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedRing = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isRotating, setIsRotating] = useState(true);
  
  // Colors for the different sections of the ring
  const sectionColors = [
    'rgba(255, 79, 147, 0.8)',  // Pink (primary)
    'rgba(0, 205, 205, 0.7)',   // Teal (health)
    'rgba(255, 215, 0, 0.6)',   // Gold (notifications)
    'rgba(50, 205, 50, 0.6)',   // Green (NFC/payments)
    'rgba(186, 85, 211, 0.6)',  // Purple (connectivity)
  ];

  // Feature names for each section
  const featureNames = [
    'Connectivity',
    'Health',
    'Notifications',
    'NFC Payments',
    'Battery'
  ];

  // Routes for each feature
  const featureRoutes = [
    '/emotional-connectivity',
    '/health-tracking',
    '/notifications',
    '/nfc-payments',
    '/battery'
  ];

  useEffect(() => {
    // Only animate when not hovered and rotating is enabled
    if (!isHovered && isRotating) {
      const interval = setInterval(() => {
        setActiveSection((prev) => (prev + 1) % 5);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered, isRotating]);
  
  return (
    <div 
      className="relative w-full min-h-[400px] flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`absolute w-64 h-64 rounded-full blur-3xl transition-all duration-700 ease-in-out`} 
            style={{ backgroundColor: sectionColors[activeSection], opacity: 0.5 }} />
      </div>
      
      {/* Main ring */}
      <div className="relative w-72 h-72">
        {/* Outer ring - teal color */}
        <div className="absolute inset-0 rounded-full border-8 border-[#00CED1] opacity-70"></div>
        
        {/* Middle ring - gray/silver */}
        <div className="absolute inset-2 rounded-full border-4 border-gray-400 opacity-50"></div>
        
        {/* Inner ring - pink/brand color, this one rotates */}
        <div 
          className="absolute inset-8 rounded-full border-4 border-brandPink animate-spin-slow"
          style={{ animationDuration: '15s' }}
        ></div>
        
        {/* Center of the ring with heart */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-40 h-40 bg-black rounded-full border-4 border-brandPink flex items-center justify-center">
            <Heart 
              className="text-brandPink h-16 w-16 animate-pulse"
              fill="rgba(255,79,147,0.8)"
            />
          </div>
        </div>
        
        {/* Feature label */}
        <div className="absolute -bottom-16 left-0 right-0 text-center">
          <h3 className="text-xl font-semibold text-gradient-pink transition-all duration-300">
            {featureNames[activeSection]}
          </h3>
          <p className="text-white/60 text-sm mt-2">Tap to explore</p>
        </div>
        
        {/* Interactive hotspots for each feature */}
        {[0, 1, 2, 3, 4].map((section) => (
          <Link 
            key={`hotspot-${section}`}
            to={featureRoutes[section]}
            className={`absolute w-10 h-10 bg-black rounded-full cursor-pointer hover:bg-brandPink/40 transition-all duration-300 flex items-center justify-center z-30 ${activeSection === section ? 'border-2 border-brandPink' : 'border border-white/30'}`}
            style={{ 
              top: `${50 + 40 * Math.sin(section * (2 * Math.PI / 5))}%`,
              left: `${50 + 40 * Math.cos(section * (2 * Math.PI / 5))}%`,
              transform: 'translate(-50%, -50%)',
            }}
            onClick={(e) => {
              e.preventDefault();
              setActiveSection(section);
              // Short delay before navigation to show the active state
              setTimeout(() => {
                window.location.href = featureRoutes[section];
              }, 300);
            }}
          >
            <span className="text-xs font-bold text-white">{section + 1}</span>
          </Link>
        ))}
        
        {/* Play/Pause rotation button */}
        <button 
          onClick={() => setIsRotating(!isRotating)}
          className="absolute right-0 bottom-0 bg-black/50 rounded-full p-2 hover:bg-brandPink/30 transition-colors"
        >
          {isRotating ? (
            <span className="text-xs text-white">◼ Pause</span>
          ) : (
            <span className="text-xs text-white">▶ Play</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default AnimatedRing;
