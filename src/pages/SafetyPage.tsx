
import MainLayout from '@/components/layout/MainLayout';
import { Shield } from 'lucide-react';

const SafetyPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Shield className="h-16 w-16 text-brandPink mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-pink">Safety</span> & Emergency
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Stay protected with advanced safety features and emergency alerts for when you need them most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="glass rounded-2xl p-6 animate-fade-in">
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Fall Detection</h3>
            <p className="text-white/70">Automatic detection of falls with immediate alert to your emergency contacts.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Heart Rate Alerts</h3>
            <p className="text-white/70">Get notified when your heart rate is abnormally high or low.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Auto-Call Partner</h3>
            <p className="text-white/70">Automatically call your partner in emergency situations with your location and health data.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">SOS Button</h3>
            <p className="text-white/70">Quick access SOS functionality for immediate help when needed.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Geofencing</h3>
            <p className="text-white/70">Receive notifications when your partner arrives or leaves designated locations.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SafetyPage;
