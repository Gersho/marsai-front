import './App.css';
import Login from './components/Login';
import GaleryPage from './pages/GaleryPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<GaleryPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
