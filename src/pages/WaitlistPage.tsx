
import MainLayout from '@/components/layout/MainLayout';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const WaitlistPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "You've joined the waitlist!",
        description: "We'll keep you updated on BondBand's launch.",
        variant: "default",
      });
      setLoading(false);
      setEmail('');
      setName('');
    }, 1500);
  };

  return (
    <MainLayout>
      <section className="hero-gradient min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Heart className="h-16 w-16 text-brandPink animate-pulse-ring" />
              </div>
              <h1 className="text-4xl font-bold mb-4">
                Join the <span className="text-gradient-pink">BondBand</span> Waitlist
              </h1>
              <p className="text-white/70">
                Sign up to receive exclusive updates, early access opportunities, and special pre-order pricing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="mr-3 mt-1"
                    required
                  />
                  <span className="text-white/70 text-sm">
                    I agree to receive email updates about BondBand products, news, and promotions.
                    You can unsubscribe at any time.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full btn-pink flex items-center justify-center ${
                  loading ? 'opacity-80 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default WaitlistPage;
