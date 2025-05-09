
import MainLayout from '@/components/layout/MainLayout';
import { Activity } from 'lucide-react';

const HealthTrackingPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Activity className="h-16 w-16 text-brandPink mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-pink">Health</span> Tracking
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Monitor your vital health metrics with precision and share important updates with your partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="glass rounded-2xl p-6 animate-fade-in">
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Heart Rate Monitoring</h3>
            <p className="text-white/70">Continuous heart rate monitoring throughout your day and night.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Sleep Tracking</h3>
            <p className="text-white/70">Track sleep stages, duration and quality for better rest.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Blood Oxygen</h3>
            <p className="text-white/70">Monitor SpO2 levels throughout the day and night.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Temperature</h3>
            <p className="text-white/70">Keep track of body temperature fluctuations.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Activity Detection</h3>
            <p className="text-white/70">Automatic workout detection and step counting.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.5s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Stress Monitoring</h3>
            <p className="text-white/70">AI-powered stress and mood detection throughout the day.</p>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">Share Health Updates with Your Partner</h2>
          <p className="text-center text-white/70 mb-6">
            Choose which health metrics to share with your partner and when. Perfect for staying connected during workouts, 
            stressful days, or just checking in.
          </p>
          <div className="flex justify-center">
            <button className="btn-pink">Learn More About Sharing</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HealthTrackingPage;
