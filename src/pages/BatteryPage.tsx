
import MainLayout from '@/components/layout/MainLayout';
import { Battery } from 'lucide-react';

const BatteryPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Battery className="h-16 w-16 text-brandPink mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-pink">Battery</span> & Lifestyle
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Long-lasting battery life and smart features that integrate seamlessly with your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="glass rounded-2xl p-6 animate-fade-in hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-brandPink">5-10 Days Battery</h3>
            <p className="text-white/70">Up to 10 days of battery life on a single charge with normal use.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in hover:scale-105 transition-all" style={{animationDelay: "0.1s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Fast Charging</h3>
            <p className="text-white/70">Just 90 minutes for a full charge that lasts for days.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in hover:scale-105 transition-all" style={{animationDelay: "0.2s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Low Battery Alerts</h3>
            <p className="text-white/70">Get notified when your ring or your partner's ring is running low.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in hover:scale-105 transition-all" style={{animationDelay: "0.3s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">NFC Payments</h3>
            <p className="text-white/70">Make contactless payments directly with your ring.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in hover:scale-105 transition-all" style={{animationDelay: "0.4s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Health Integration</h3>
            <p className="text-white/70">Connect with Apple Health, Google Fit, and other platforms.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in hover:scale-105 transition-all" style={{animationDelay: "0.5s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Battery Saver Mode</h3>
            <p className="text-white/70">Extend battery life when needed by limiting non-essential features.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BatteryPage;
