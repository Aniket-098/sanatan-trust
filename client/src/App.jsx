import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import BookKatha from "./pages/BookKatha";

import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminBookings from "./pages/AdminBookings";
import Donate from "./pages/Donate";
import DonationSuccess from "./components/donate/DonationSuccess";
import DonationsManagement from "./components/admin/DonationsManagement";
import Settings from "./pages/Settings";

import ProtectedRoute from "./components/auth/ProtectedRoute";
function App() {
  return (
    <Routes>
      {/* ---------- PUBLIC ROUTES ---------- */}

      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/book-katha"
        element={
          <Layout>
            <BookKatha />
          </Layout>
        }
      />

      <Route
        path="/privacy-policy"
        element={
          <Layout>
            <PrivacyPolicy />
          </Layout>
        }
      />

      <Route
        path="/terms-and-conditions"
        element={
          <Layout>
            <TermsConditions />
          </Layout>
        }
      />

      <Route path="/donate" element={<Donate />} />

      <Route path="/donation-success" element={<DonationSuccess />} />

      {/* ---------- ADMIN ROUTES ---------- */}

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/bookings"
        element={
          <ProtectedRoute>
            <AdminBookings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/donations"
        element={
          <ProtectedRoute>
            <DonationsManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
