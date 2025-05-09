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
        {/* Outer metallic ring with 3D effect and shadow */}
        <div className="absolute inset-0 rounded-full"
             style={{ 
               background: 'radial-gradient(circle at 60% 30%, #fff 0%, #e2e2e2 40%, #b1b1b1 100%)',
               boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
               zIndex: 2
             }}>
          {/* Shine arc removed */}
        </div>
        {/* Hollow center (transparent) to create a donut/ring effect - make it smaller for a thinner ring */}
        <div className="absolute inset-12 rounded-full bg-black/95 z-10 border-0"></div>
        {/* Center heart floating in the middle, no solid background */}
        <div className="absolute inset-0 flex items-center justify-center transform-style-3d pointer-events-none"
             style={{ transform: 'translateZ(20px)' }}>
          <Heart 
            className="text-brandPink h-14 w-14 animate-pulse drop-shadow-lg"
            fill="rgba(255,79,147,0.8)"
            style={{ filter: 'drop-shadow(0 0 8px #ff4f93cc)' }}
          />
        </div>
      </div>
      
      {/* Feature label */}
      <div className="absolute -bottom-10 left-0 right-0 text-center">
        <h3 className="text-2xl font-semibold text-gradient-pink transition-all duration-300">
          {featureNames[activeSection]}
        </h3>
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
