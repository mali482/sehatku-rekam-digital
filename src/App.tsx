import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PatientsPage from "./pages/PatientsPage";
import RecordsPage from "./pages/RecordsPage";
import SchedulePage from "./pages/SchedulePage";
import ReportsPage from "./pages/ReportsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UsersPage from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";
import SocialMediaPage from "./pages/SocialMediaPage";
import ServicesPage from "./pages/ServicesPage";
import SupportPage from "./pages/SupportPage";
import PatientReportPage from "./pages/PatientReportPage";
import FinancialReportPage from "./pages/FinancialReportPage";
import MedicalReportPage from "./pages/MedicalReportPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/records" element={<RecordsPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/reports/patients" element={<PatientReportPage />} />
          <Route path="/reports/financial" element={<FinancialReportPage />} />
          <Route path="/reports/medical" element={<MedicalReportPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/add" element={<AddUserPage />} />
          <Route path="/users/edit/:id" element={<EditUserPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/social" element={<SocialMediaPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/support" element={<SupportPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
