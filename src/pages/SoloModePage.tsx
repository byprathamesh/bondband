
import MainLayout from '@/components/layout/MainLayout';
import { Clock } from 'lucide-react';

const SoloModePage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Clock className="h-16 w-16 text-brandPink mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-pink">Solo</span> Mode
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            All the features you love about BondBand, perfectly optimized for solo users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass rounded-2xl p-6 animate-fade-in">
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Complete Health Features</h3>
            <p className="text-white/70">All health tracking features work independently for solo users.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Personal Tracking</h3>
            <p className="text-white/70">Track your own health, activity, and sleep patterns.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Smart Reminders</h3>
            <p className="text-white/70">Set personal reminders and receive gentle vibration alerts.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Seamless Upgrade</h3>
            <p className="text-white/70">When you're ready to connect with a partner, easily pair with another BondBand.</p>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">Solo or Together - Always Connected</h2>
          <p className="text-center text-white/70 mb-6">
            Whether you're using BondBand on your own or with a partner, you'll always stay connected to what matters most.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default SoloModePage;
