import Navbar from './components/Navbar';
import GaleryPage from './pages/GaleryPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import SubmitMoviePage from './pages/SubmitMoviePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<GaleryPage />} />
        <Route path="/submit" element={<SubmitMoviePage />} />
      </Routes>
    </>
  );
}

export default App;
