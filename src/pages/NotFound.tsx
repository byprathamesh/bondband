
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center px-6">
      <div className="text-center">
        <Heart className="h-20 w-20 text-brandPink mx-auto mb-6 animate-pulse" />
        <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
        <p className="text-2xl text-white/80 mb-8">
          Oops! This page has lost its connection.
        </p>
        <Link to="/" className="btn-pink inline-block animate-fade-in">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
