
import MainLayout from '@/components/layout/MainLayout';
import { MapPin } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <MapPin className="h-16 w-16 text-brandPink mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-pink">Location</span> & Privacy
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Share what you want, when you want, with full control over your privacy and data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass rounded-2xl p-6 animate-fade-in">
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Location Sharing</h3>
            <p className="text-white/70">Optional real-time location sharing with your partner, you decide when and for how long.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Privacy Controls</h3>
            <p className="text-white/70">Granular privacy settings let you choose exactly what to share and when.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">End-to-End Encryption</h3>
            <p className="text-white/70">All shared data is fully encrypted and secure, visible only to you and your partner.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Do Not Disturb</h3>
            <p className="text-white/70">Easily activate privacy mode when you need uninterrupted time.</p>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-8 mb-16 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4 text-center">Your Data, Your Control</h2>
          <p className="text-center text-white/70 mb-6">
            We never sell your data or share it with third parties. Your information stays private, always.
          </p>
          <div className="flex justify-center">
            <button className="btn-pink">Privacy Policy</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPage;
