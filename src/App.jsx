import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './components/Login';
import GaleryPage from './pages/GaleryPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import SubmitMoviePage from './pages/SubmitMoviePage';

function App() {
  return (
    <div className="typography">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<GaleryPage />} />
        <Route path="/submit" element={<SubmitMoviePage />} />{' '}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
