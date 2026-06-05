import { Routes, Route } from 'react-router-dom';
import './App.css';
import PrayerTimesBar from './components/layout/PrayerTimesBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages Publiques
import Home from './pages/Home';
import ProgressDetail from './pages/ProgressDetail';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';

// Page Privée
import Login from './pages/admin/Login';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <PrayerTimesBar />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Les routes publiques de la vitrine */}
          <Route path="/" element={<Home />} />
          
          {/* Les routes dynamiques avec paramètres (:id) */}
          <Route path="/progress/:id" element={<ProgressDetail />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          
          {/* La zone d'administration */}
          <Route path="/admin" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;