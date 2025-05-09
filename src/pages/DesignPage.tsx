
import MainLayout from '@/components/layout/MainLayout';
import { User } from 'lucide-react';

const DesignPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <User className="h-16 w-16 text-brandPink mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-pink">Style</span> & Comfort
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Elegant, comfortable, and designed to be worn all day, every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass rounded-2xl p-6 animate-fade-in hover:border-brandPink/60 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Lightweight Design</h3>
            <p className="text-white/70">So comfortable you'll forget you're wearing it, weighing just a few grams.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in hover:border-brandPink/60 transition-all" style={{animationDelay: "0.1s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Multiple Sizes</h3>
            <p className="text-white/70">Available in sizes 5-13 for a perfect fit for everyone.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in hover:border-brandPink/60 transition-all" style={{animationDelay: "0.2s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Premium Finishes</h3>
            <p className="text-white/70">Choose from matte black, polished silver, or our signature pink gold.</p>
          </div>
          <div className="glass rounded-2xl p-6 animate-fade-in hover:border-brandPink/60 transition-all" style={{animationDelay: "0.3s"}}>
            <h3 className="text-xl font-semibold mb-2 text-brandPink">Durability</h3>
            <p className="text-white/70">Waterproof up to 100m and scratch-resistant for everyday wear.</p>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">Ring Gallery</h2>
          <p className="text-center text-white/70 mb-6">
            Coming soon: View all colors and finishes in our interactive gallery.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default DesignPage;
