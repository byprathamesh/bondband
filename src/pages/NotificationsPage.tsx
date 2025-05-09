
import MainLayout from '@/components/layout/MainLayout';
import { Bell } from 'lucide-react';

const NotificationsPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Bell className="h-16 w-16 text-brandPink mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-pink">Smart</span> Notifications
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Stay connected with customized vibration patterns for different types of alerts and messages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass rounded-2xl p-6 animate-fade-in">
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Partner Call Notifications</h3>
            <p className="text-white/70">Distinct vibration pattern when your partner calls, so you never miss an important call.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Custom App Alerts</h3>
            <p className="text-white/70">Set custom vibration patterns for different apps and notification types.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Silent Alarms</h3>
            <p className="text-white/70">Wake up with gentle vibrations that won't disturb your partner.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Personalized Settings</h3>
            <p className="text-white/70">Customize notification intensity, duration, and style.</p>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-8 mb-16 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4 text-center">Try Our Notification Simulator</h2>
          <p className="text-center text-white/70 mb-6">
            Experience different vibration patterns simulated through your device.
          </p>
          <div className="flex justify-center">
            <button className="btn-pink">Coming Soon</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotificationsPage;
