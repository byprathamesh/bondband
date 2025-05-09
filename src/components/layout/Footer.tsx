
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-brandPink" />
              <span className="text-xl font-bold text-white">BondBand</span>
            </Link>
            <p className="text-gray-400">
              Wear Your Love. Live Your Connection.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/emotional-connectivity" className="text-gray-400 hover:text-brandPink">
                  Emotional Connectivity
                </Link>
              </li>
              <li>
                <Link to="/health-tracking" className="text-gray-400 hover:text-brandPink">
                  Health Tracking
                </Link>
              </li>
              <li>
                <Link to="/notifications" className="text-gray-400 hover:text-brandPink">
                  Smart Notifications
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-gray-400 hover:text-brandPink">
                  Safety & Emergency
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-brandPink">About Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-brandPink">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-brandPink">Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-brandPink">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold">Subscribe</h3>
            <p className="text-gray-400">
              Sign up for exclusive updates and early access!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 rounded-l-md px-4 py-2 w-full text-white"
              />
              <button className="bg-brandPink hover:bg-opacity-80 text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} BondBand. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-brandPink hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-brandPink hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-brandPink hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="text-brandPink hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
