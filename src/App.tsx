import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './components/Footer';
import OrganizerDashboard from './pages/dashboard/OrganizerDashboard';
import SponsorDashboard from './pages/dashboard/SponsorDashboard';
import EventsPage from './pages/dashboard/EventsPage';
import EventDetailsPage from './pages/dashboard/EventDetailsPage';
import MessagesPage from './pages/dashboard/MessagesPage';
import SponsorsPage from './pages/dashboard/SponsorsPage';
import DocumentsPage from './pages/dashboard/DocumentsPage';
import FinancesPage from './pages/dashboard/FinancesPage';
import SettingsPage from './pages/dashboard/SettingsPage';
import SupportPage from './pages/dashboard/SupportPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Landing />
            <Footer />
          </>
        } />
        <Route path="/register" element={
          <>
            <Navbar />
            <Register />
            <Footer />
          </>
        } />
        <Route path="/login" element={
          <>
            <Navbar />
            <Login />
            <Footer />
          </>
        } />
        <Route path="/dashboard" element={<OrganizerDashboard />} />
        <Route path="/dashboard/events" element={<EventsPage />} />
        <Route path="/dashboard/events/:id" element={<EventDetailsPage />} />
        <Route path="/dashboard/messages" element={<MessagesPage />} />
        <Route path="/dashboard/sponsors" element={<SponsorsPage />} />
        <Route path="/dashboard/documents" element={<DocumentsPage />} />
        <Route path="/dashboard/finances" element={<FinancesPage />} />
        <Route path="/dashboard/settings" element={<SettingsPage />} />
        <Route path="/dashboard/support" element={<SupportPage />} />
        <Route path="/sponsor/dashboard/*" element={<SponsorDashboard />} />
      </Routes>
    </div>
  );
}

export default App;