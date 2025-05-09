
import React, { useEffect, useState, useRef } from 'react';
import { Heart, CircleDot } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedRing = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isRotating, setIsRotating] = useState(true);
  const ringRef = useRef<HTMLDivElement>(null);
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  
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

  useEffect(() => {
    if (!isRotating || !ringRef.current) return;
    
    let animationFrameId: number;
    let angle = 0;
    
    const animate = () => {
      angle += 0.005;
      
      if (ringRef.current) {
        setRotationX(Math.sin(angle) * 15);
        setRotationY(Math.cos(angle) * 15);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isRotating]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isHovered && ringRef.current) {
      const rect = ringRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate rotation based on mouse position relative to center
      const rotX = ((e.clientY - centerY) / 10) * -1; // Invert Y axis
      const rotY = (e.clientX - centerX) / 10;
      
      setRotationX(rotX);
      setRotationY(rotY);
    }
  };
  
  return (
    <div 
      className="relative w-full min-h-[500px] flex items-center justify-center perspective"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`absolute w-80 h-80 rounded-full blur-3xl transition-all duration-700 ease-in-out`} 
            style={{ backgroundColor: sectionColors[activeSection], opacity: 0.5 }} />
      </div>
      
      {/* 3D Ring structure with transform */}
      <div 
        ref={ringRef}
        className="relative w-80 h-80 transform-style-3d transition-transform duration-300 ease-out"
        style={{ 
          transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
          perspective: "1000px"
        }}
      >
        {/* Outer ring - metallic appearance with 3D effect */}
        <div className="absolute inset-0 rounded-full border-[16px] transform-style-3d ring-shadow"
             style={{ 
               background: 'linear-gradient(135deg, #e2e2e2, #b1b1b1, #e2e2e2)',
               transform: 'translateZ(5px)',
             }}>
        </div>
        
        {/* Middle ring with depth */}
        <div className="absolute inset-8 rounded-full border-[12px] transform-style-3d"
             style={{
               background: 'linear-gradient(135deg, #999, #333, #999)',
               transform: 'translateZ(10px)',
             }}>
        </div>
        
        {/* Inner ring with shine effect */}
        <div className="absolute inset-20 rounded-full bg-black border-[8px] border-brandPink transform-style-3d"
             style={{ transform: 'translateZ(15px)' }}>
          {/* Shine effects */}
          <div className="absolute top-0 left-1/4 w-1/2 h-[15%] bg-white/20 rounded-full blur-sm"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1/3 h-[8%] bg-white/10 rounded-full blur-sm"></div>
        </div>
        
        {/* Center of the ring with heart */}
        <div className="absolute inset-0 flex items-center justify-center transform-style-3d"
             style={{ transform: 'translateZ(20px)' }}>
          <div className="relative w-36 h-36 bg-black rounded-full border-4 border-brandPink flex items-center justify-center">
            <Heart 
              className="text-brandPink h-14 w-14 animate-pulse"
              fill="rgba(255,79,147,0.8)"
            />
          </div>
        </div>
        
        {/* Interactive hotspots for each feature - these will float around the ring */}
        {[0, 1, 2, 3, 4].map((section) => {
          // Calculate position with slight offset for 3D effect
          const angle = section * (2 * Math.PI / 5);
          const x = 50 + 42 * Math.cos(angle);
          const y = 50 + 42 * Math.sin(angle);
          const zOffset = Math.sin(angle) * 5;
          
          return (
            <Link 
              key={`hotspot-${section}`}
              to={featureRoutes[section]}
              className={`absolute w-12 h-12 bg-black rounded-full cursor-pointer hover:bg-brandPink/40 transition-all duration-300 flex items-center justify-center z-30 transform-style-3d ${activeSection === section ? 'border-2 border-brandPink' : 'border border-white/30'}`}
              style={{ 
                top: `${y}%`,
                left: `${x}%`,
                transform: `translate(-50%, -50%) translateZ(${25 + zOffset}px)`,
                boxShadow: activeSection === section ? '0 0 15px rgba(255,79,147,0.8)' : 'none'
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
              <CircleDot className={`w-6 h-6 ${activeSection === section ? 'text-brandPink' : 'text-white/70'}`} />
            </Link>
          );
        })}
      </div>
      
      {/* Feature label */}
      <div className="absolute -bottom-10 left-0 right-0 text-center">
        <h3 className="text-2xl font-semibold text-gradient-pink transition-all duration-300">
          {featureNames[activeSection]}
        </h3>
        <p className="text-white/60 text-sm mt-2">Tap to explore</p>
      </div>
      
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
  );
};

export default AnimatedRing;
