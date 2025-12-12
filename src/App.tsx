import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Forecast from "./pages/Forecast";
import DroughtMap from "./pages/DroughtMap";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";
import ReportIssue from "./pages/ReportIssue";
import KnowledgeBase from "./pages/KnowledgeBase";
import AIChat from "./pages/AIChat";
import GovNotifications from "./pages/GovNotifications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/map" element={<DroughtMap />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/report" element={<ReportIssue />} />
          <Route path="/knowledge" element={<KnowledgeBase />} />
          <Route path="/chat" element={<AIChat />} />
          <Route path="/gov" element={<GovNotifications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
