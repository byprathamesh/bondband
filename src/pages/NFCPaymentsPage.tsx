
import MainLayout from '@/components/layout/MainLayout';
import { Nfc, CreditCard, ShoppingBag, Smartphone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NFCPaymentsPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Nfc className="h-16 w-16 text-brandPink mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-pink">NFC</span> Payments
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Make secure, contactless payments with just a tap of your BondBand ring.
          </p>
        </div>

        {/* Main features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-black/40 border-white/10 text-white p-6 animate-fade-in hover:border-brandPink/50 transition-all duration-300">
            <Nfc className="h-10 w-10 text-brandPink mb-4" />
            <h3 className="text-xl font-semibold mb-2">Contactless Payments</h3>
            <p className="text-white/70">Pay instantly with a simple gesture at any NFC-enabled terminal.</p>
          </Card>
          
          <Card className="bg-black/40 border-white/10 text-white p-6 animate-fade-in hover:border-brandPink/50 transition-all duration-300" style={{animationDelay: "0.1s"}}>
            <CreditCard className="h-10 w-10 text-brandPink mb-4" />
            <h3 className="text-xl font-semibold mb-2">Multiple Cards</h3>
            <p className="text-white/70">Link multiple payment cards and select which one to use from your app.</p>
          </Card>
          
          <Card className="bg-black/40 border-white/10 text-white p-6 animate-fade-in hover:border-brandPink/50 transition-all duration-300" style={{animationDelay: "0.2s"}}>
            <ShoppingBag className="h-10 w-10 text-brandPink mb-4" />
            <h3 className="text-xl font-semibold mb-2">Purchase Tracking</h3>
            <p className="text-white/70">View all your transactions and spending analytics in the BondBand app.</p>
          </Card>
        </div>

        {/* UPI Integration */}
        <div className="bg-gradient-to-r from-black/80 to-brandPink/20 rounded-2xl p-8 mb-16 animate-fade-in" style={{animationDelay: "0.3s"}}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">UPI Integration</h2>
              <p className="text-lg text-white/80 mb-6">
                BondBand seamlessly integrates with UPI (Unified Payments Interface) for instant transactions in regions where UPI is supported.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-brandPink">✓</span>
                  <span>Link your UPI ID directly to your BondBand</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brandPink">✓</span>
                  <span>Make payments to merchants using UPI QR codes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brandPink">✓</span>
                  <span>Send money to friends and family with a tap</span>
                </li>
              </ul>
              <Button className="bg-brandPink hover:bg-opacity-80 text-white">Learn More</Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <Smartphone className="h-64 w-auto text-white/80" strokeWidth={1} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <Nfc className="h-8 w-8 text-brandPink animate-pulse" />
                  <span className="text-xs text-white mt-2">UPI Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="text-center mb-16 animate-fade-in" style={{animationDelay: "0.4s"}}>
          <h2 className="text-3xl font-bold mb-4">Bank-Level Security</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            BondBand uses tokenization technology to ensure your payment details are never stored on the device.
            Each transaction generates a unique code, keeping your financial information secure.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default NFCPaymentsPage;
