
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WaitlistPage from "./pages/WaitlistPage";
import EmotionalConnectivityPage from "./pages/EmotionalConnectivityPage";
import HealthTrackingPage from "./pages/HealthTrackingPage";
import NotificationsPage from "./pages/NotificationsPage";
import SafetyPage from "./pages/SafetyPage";
import PrivacyPage from "./pages/PrivacyPage";
import DesignPage from "./pages/DesignPage";
import BatteryPage from "./pages/BatteryPage";
import SoloModePage from "./pages/SoloModePage";
import NFCPaymentsPage from "./pages/NFCPaymentsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
          <Route path="/emotional-connectivity" element={<EmotionalConnectivityPage />} />
          <Route path="/health-tracking" element={<HealthTrackingPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/battery" element={<BatteryPage />} />
          <Route path="/solo-mode" element={<SoloModePage />} />
          <Route path="/nfc-payments" element={<NFCPaymentsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
