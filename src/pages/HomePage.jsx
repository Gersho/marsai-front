import { Link } from 'react-router-dom';
import SectionProjet from '../components/Projet';
import Hero from '../components/Hero';

function HomePage() {
  return (
    <>
      <Hero />
      <SectionProjet />
    </>
  );
}

export default HomePage;
