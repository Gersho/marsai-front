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
import { useAuthStore } from './hooks/useAuth';
import { useEffect } from 'react';
import marsaiLogo from './assets/marsai-logo.svg';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import ProtectedRoute from './components/ProtectedRoute';
import UnsubscribePage from './pages/UnsubscribePage';
import MoviePage from './pages/MoviePage';
import JuryRegisterPage from './pages/JuryRegisterPage';
import AdminMovieTest from './pages/AdminMovieTest';
import EditMoviePage from './pages/EditMoviePage';

function App() {
  const { setUser, isInit } = useAuthStore();

  useEffect(() => {
    try {
      setUser(JSON.parse(localStorage.getItem('user')));
    } catch (e) {
      console.log(e);
      setUser(null);
    }
  }, []);

  if (!isInit) {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-12 text-neutral-300">
        <img src={marsaiLogo} alt="Marsai logo" />
        <p>Please wait</p>
        <AiOutlineLoading3Quarters className="animate-spin size-24" />
      </div>
    );
  }

  return (
    <div className="typography">
      <Navbar />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/movies/:id" element={<MoviePage />} /> */}
          <Route path="/movies" element={<GalleryPage />} />
          <Route path="/movies/:slug" element={<AdminMovieTest />} />
          <Route path="/submit" element={<SubmitMoviePage />} />
          <Route path="/submit/:token" element={<EditMoviePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/invite/:token" element={<JuryRegisterPage />} />
          <Route path="/events/:slug" element={<EventBookingPage />} />
          <Route
            path="/bookings/unsubscribe/:token"
            element={<UnsubscribePage />}
          />
        </Route>
        <Route element={<ProtectedRoute allowedRole="admin" />}>
          <Route path="/admin" element={<AdminPage />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<DashboardStats />} />
            <Route path="movies" element={<MoviesManager />} />
            <Route path="jury" element={<JuryManager />} />
            <Route path="leaderboard" element={<LeaderboardManager />} />
            <Route path="events" element={<EventsManager />} />
            <Route path="newsletter" element={<Newsletter />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
