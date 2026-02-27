import Navbar from './components/Navbar';
import Login from './components/Login';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import { Routes, Route, Navigate } from 'react-router-dom';
import SubmitMoviePage from './pages/SubmitMoviePage';
import AdminPage from './pages/AdminPage';
import DashboardStats from './components/admin/DashboardStats';
import MoviesManager from './components/admin/MoviesManager';
import JuryManager from './components/admin/JuryManager';
import LeaderboardManager from './components/admin/LeaderboardManager';
import EventsManager from './components/admin/EventsManager';
import PublicLayout from './components/PublicLayout';
import Newsletter from './components/admin/Newsletter';
import EventsPage from './pages/EventsPage';
import EventBookingPage from './pages/EventBookingPage';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <div className="typography">
      <Navbar />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/movies" element={<GalleryPage />} />
          <Route path="/submit" element={<SubmitMoviePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events/:id" element={<EventBookingPage />} />
        </Route>
        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardStats />} />
          <Route path="movies" element={<MoviesManager />} />
          <Route path="jury" element={<JuryManager />} />
          <Route path="leaderboard" element={<LeaderboardManager />} />
          <Route path="events" element={<EventsManager />} />
          <Route path="newsletter" element={<Newsletter />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
