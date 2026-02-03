import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GaleryPage from './pages/GaleryPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<GaleryPage />} />
      </Routes>
      <Footer/>
    </>
    
  );
}

export default App;
