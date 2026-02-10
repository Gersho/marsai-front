import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './components/Login';
import GaleryPage from './pages/GaleryPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="typography">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<GaleryPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
