import { Link } from 'react-router-dom';
import SectionProjet from '../components/Projet';
import FilmsCompetition from '../components/Filmscompet';
import Hero from '../components/Hero';

function HomePage() {
  return (
    <>
      <Hero />
      <SectionProjet />
      <FilmsCompetition/>
    </>
  );
}

export default HomePage;
