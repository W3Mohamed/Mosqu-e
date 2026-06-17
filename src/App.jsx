import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Composants Publics
import PrayerTimesBar from './components/layout/PrayerTimesBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages Publiques
import Home from './pages/Home';
import ProgressDetail from './pages/ProgressDetail';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';

// Pages Privées (Admin)
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import NewsCrud from './pages/admin/NewsCrud';

function App() {
  const location = useLocation();
  
  // Si l'URL commence par "/admin", on cache la Navbar et le Footer publics
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* On n'affiche la navigation publique que si on n'est PAS dans l'admin */}
      {!isAdminRoute && (
        <>
          <PrayerTimesBar />
          <Navbar />
        </>
      )}

      <main className="flex-grow">
        <Routes>
          {/* ---- ROUTES PUBLIQUES ---- */}
          <Route path="/" element={<Home />} />
          <Route path="/progress/:id" element={<ProgressDetail />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          
          {/* ---- ROUTES ADMIN ---- */}
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/news" element={<NewsCrud />} />
        </Routes>
      </main>

      {/* On n'affiche le footer que si on n'est PAS dans l'admin */}
      {!isAdminRoute && <Footer />}
      
    </div>
  );
}

export default App;