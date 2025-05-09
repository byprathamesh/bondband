
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Activity, 
  Bell, 
  Shield, 
  MapPin, 
  Battery, 
  User, 
  Clock
} from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import AnimatedRing from '@/components/AnimatedRing';

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                <span className="text-gradient-pink">Wear</span> Your Love. 
                <br />
                <span className="text-gradient-pink">Live</span> Your Connection.
              </h1>
              <p className="text-xl text-white/80 animate-fade-in" style={{animationDelay: "0.2s"}}>
                The smart ring that keeps couples connected, no matter the distance. Share heartbeats, send vibration "hugs", and stay in tune with your partner's mood, all with a stylish wearable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
                <Link to="/#features" className="btn-pink">
                  Learn More
                </Link>
                <Link to="/waitlist" className="btn-outline">
                  Join Waitlist
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Replacing static image with animated ring */}
              <AnimatedRing />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding glow-bg">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
              Experience <span className="text-gradient-pink">Connection</span> Like Never Before
            </h2>
            <p className="text-xl text-white/70 mt-4 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
              BondBand brings couples closer with innovative technology that makes distance disappear.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <Link to="/emotional-connectivity" className="feature-card group animate-fade-in" style={{animationDelay: "0.1s"}}>
              <div className="mb-4 text-brandPink">
                <Heart className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brandPink transition-colors">
                Emotional Connectivity
              </h3>
              <p className="text-white/70">
                Share heartbeats, send vibration "hugs", and stay in tune with your partner's mood.
              </p>
            </Link>

            {/* Feature 2 */}
            <Link to="/health-tracking" className="feature-card group animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="mb-4 text-brandPink">
                <Activity className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brandPink transition-colors">
                Health Tracking
              </h3>
              <p className="text-white/70">
                Monitor heart rate, sleep, SpO2, temperature, and other vital health metrics.
              </p>
            </Link>

            {/* Feature 3 */}
            <Link to="/notifications" className="feature-card group animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="mb-4 text-brandPink">
                <Bell className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brandPink transition-colors">
                Smart Notifications
              </h3>
              <p className="text-white/70">
                Distinct vibrations for partner calls, messages, and custom app alerts.
              </p>
            </Link>

            {/* Feature 4 */}
            <Link to="/safety" className="feature-card group animate-fade-in" style={{animationDelay: "0.4s"}}>
              <div className="mb-4 text-brandPink">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brandPink transition-colors">
                Safety & Emergency
              </h3>
              <p className="text-white/70">
                Fall detection, abnormal heart rate alerts, and SOS functionality for emergencies.
              </p>
            </Link>

            {/* Feature 5 */}
            <Link to="/privacy" className="feature-card group animate-fade-in" style={{animationDelay: "0.5s"}}>
              <div className="mb-4 text-brandPink">
                <MapPin className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brandPink transition-colors">
                Location & Privacy
              </h3>
              <p className="text-white/70">
                Optional real-time location sharing with full privacy controls and end-to-end encryption.
              </p>
            </Link>

            {/* Feature 6 */}
            <Link to="/design" className="feature-card group animate-fade-in" style={{animationDelay: "0.6s"}}>
              <div className="mb-4 text-brandPink">
                <User className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brandPink transition-colors">
                Style & Comfort
              </h3>
              <p className="text-white/70">
                Lightweight, ergonomic design with multiple sizes and finishes to match your style.
              </p>
            </Link>

            {/* Feature 7 */}
            <Link to="/battery" className="feature-card group animate-fade-in" style={{animationDelay: "0.7s"}}>
              <div className="mb-4 text-brandPink">
                <Battery className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brandPink transition-colors">
                Battery & Lifestyle
              </h3>
              <p className="text-white/70">
                5-10 days battery life with fast charging and integration with health platforms.
              </p>
            </Link>

            {/* Feature 8 */}
            <Link to="/solo-mode" className="feature-card group animate-fade-in" style={{animationDelay: "0.8s"}}>
              <div className="mb-4 text-brandPink">
                <Clock className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brandPink transition-colors">
                Solo Mode
              </h3>
              <p className="text-white/70">
                All features work independently for solo users with personal tracking and reminders.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-gradient-to-b from-black to-[#1a0010]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="text-gradient-pink">Pricing & Launch Date:</span> Coming Soon
            </h2>
            <p className="text-xl text-white/70 mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Be the first to know when BondBand launches. Sign up now for exclusive updates, early access, and special pre-order pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: "0.3s"}}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border border-white/10 rounded-full px-6 py-3 w-full sm:max-w-sm text-white hover:border-brandPink/30 focus:border-brandPink transition-colors"
              />
              <button className="btn-pink hover:scale-105 transition-transform">Join Waitlist</button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
