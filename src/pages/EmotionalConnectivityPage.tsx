
import { Heart } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EmotionalConnectivityPage = () => {
  const [activeDemo, setActiveDemo] = useState<'heartbeat' | 'vibration' | 'mood'>('heartbeat');

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[60vh] pt-32 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-3 bg-brandPink/20 rounded-full mb-6">
              <Heart className="h-10 w-10 text-brandPink" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Emotional <span className="text-gradient-pink">Connectivity</span>
            </h1>
            <p className="text-xl text-white/80">
              Feel connected to your partner no matter the distance. Share heartbeats, send vibration "hugs", and stay in tune with each other's moods.
            </p>
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">
                Real-time <span className="text-gradient-pink">Heartbeat Sharing</span>
              </h2>
              <p className="text-white/70 mb-6">
                Feel your partner's heartbeat in real-time, creating an intimate connection that transcends distance. The gentle pulses on your finger can feel like they're right beside you, even when they're miles away.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 text-brandPink">
                    <Heart className="h-6 w-6" />
                  </div>
                  <span className="text-white/70">
                    Experience your partner's heartbeat in real-time through gentle vibrations
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-brandPink">
                    <Heart className="h-6 w-6" />
                  </div>
                  <span className="text-white/70">
                    Share intense moments like workouts or exciting news through heart rate changes
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-brandPink">
                    <Heart className="h-6 w-6" />
                  </div>
                  <span className="text-white/70">
                    Receive alerts for unusual heart patterns, ensuring peace of mind
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 rounded-full bg-brandPink/20 blur-3xl"></div>
              <div className="relative bg-black p-6 rounded-2xl border border-brandPink/40">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="https://placehold.co/600x400/000000/FF4F93?text=Heartbeat+Sharing" 
                    alt="Heartbeat Sharing" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="section-padding bg-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Experience <span className="text-gradient-pink">Interactive Demos</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              See how BondBand's emotional connectivity features work in practice with our interactive demonstrations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              className={`px-6 py-3 rounded-full border ${
                activeDemo === 'heartbeat'
                  ? 'bg-brandPink text-white border-brandPink'
                  : 'border-white/20 text-white/70 hover:border-brandPink/50'
              }`}
              onClick={() => setActiveDemo('heartbeat')}
            >
              Heartbeat Sharing
            </button>
            <button
              className={`px-6 py-3 rounded-full border ${
                activeDemo === 'vibration'
                  ? 'bg-brandPink text-white border-brandPink'
                  : 'border-white/20 text-white/70 hover:border-brandPink/50'
              }`}
              onClick={() => setActiveDemo('vibration')}
            >
              Vibration "Hugs"
            </button>
            <button
              className={`px-6 py-3 rounded-full border ${
                activeDemo === 'mood'
                  ? 'bg-brandPink text-white border-brandPink'
                  : 'border-white/20 text-white/70 hover:border-brandPink/50'
              }`}
              onClick={() => setActiveDemo('mood')}
            >
              Mood Sharing
            </button>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            {activeDemo === 'heartbeat' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="aspect-w-1 aspect-h-1 max-w-md mx-auto">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative">
                        <div className="animate-pulse-ring absolute inset-0 rounded-full bg-brandPink/30"></div>
                        <div className="animate-pulse-ring absolute inset-4 rounded-full bg-brandPink/50 animation-delay-300"></div>
                        <Heart className="h-24 w-24 text-brandPink relative z-10" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Heartbeat Sharing Demo</h3>
                  <p className="text-white/70 mb-4">
                    This demo simulates how you would feel your partner's heartbeat through the BondBand ring. The pulsing animation represents the gentle vibration you'd feel on your finger.
                  </p>
                  <p className="text-white/70">
                    In a real BondBand, the intensity and rhythm would match your partner's actual heart rate, creating an intimate connection no matter the distance.
                  </p>
                </div>
              </div>
            )}

            {activeDemo === 'vibration' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="aspect-w-1 aspect-h-1 max-w-md mx-auto">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-white/5 border border-brandPink/40 flex items-center justify-center">
                          <span className="text-brandPink text-sm">Tap to send a hug</span>
                        </div>
                        <Heart className="h-24 w-24 text-brandPink relative z-10 hover:scale-110 transition-transform cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Vibration "Hugs" Demo</h3>
                  <p className="text-white/70 mb-4">
                    Send a virtual "hug" with a custom vibration pattern to your partner. This demo shows how you can send different vibration patterns to convey different emotions.
                  </p>
                  <p className="text-white/70">
                    You can customize the vibration patterns in the BondBand app, creating your own secret language of touch between you and your partner.
                  </p>
                </div>
              </div>
            )}

            {activeDemo === 'mood' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="aspect-w-1 aspect-h-1 max-w-md mx-auto">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="space-y-4">
                        <div className="flex space-x-4">
                          <button className="w-12 h-12 rounded-full bg-green-500 hover:ring-4 hover:ring-green-500/30 transition-all"></button>
                          <button className="w-12 h-12 rounded-full bg-blue-500 hover:ring-4 hover:ring-blue-500/30 transition-all"></button>
                          <button className="w-12 h-12 rounded-full bg-yellow-500 hover:ring-4 hover:ring-yellow-500/30 transition-all"></button>
                        </div>
                        <div className="flex space-x-4">
                          <button className="w-12 h-12 rounded-full bg-red-500 hover:ring-4 hover:ring-red-500/30 transition-all"></button>
                          <button className="w-12 h-12 rounded-full bg-purple-500 hover:ring-4 hover:ring-purple-500/30 transition-all"></button>
                          <button className="w-12 h-12 rounded-full bg-brandPink hover:ring-4 hover:ring-brandPink/30 transition-all"></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Mood Sharing Demo</h3>
                  <p className="text-white/70 mb-4">
                    Share your current mood with your partner through colors and subtle LED indicators. This demo shows the color options available to express different feelings.
                  </p>
                  <p className="text-white/70">
                    Each color represents a different mood: green for happy, blue for calm, yellow for excited, red for stressed, purple for tired, and pink for romantic.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="section-padding glow-bg">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              More <span className="text-gradient-pink">Connection Features</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              BondBand goes beyond basic connectivity with these additional features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-4 text-brandPink">
                Custom Vibration Alerts
              </h3>
              <p className="text-white/70">
                Create distinct vibration patterns for partner calls, messages, and important notifications so you never miss a connection moment.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-4 text-brandPink">
                Milestone Celebrations
              </h3>
              <p className="text-white/70">
                Set and celebrate relationship milestones together with synchronized vibrations and special notifications when the moment arrives.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-4 text-brandPink">
                Mood Insights
              </h3>
              <p className="text-white/70">
                AI-powered analysis helps you understand your partner's mood patterns and suggests thoughtful moments to connect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-black to-[#1a0010]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience <span className="text-gradient-pink">True Connection?</span>
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join our waitlist today and be the first to experience the future of connected relationships with BondBand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/waitlist" className="btn-pink">
                Join Waitlist
              </Link>
              <Link to="/#features" className="btn-outline">
                Explore More Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default EmotionalConnectivityPage;
