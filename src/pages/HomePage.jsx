import SectionProjet from '../components/Projet';
import Hero from '../components/Hero';
import Objectif from '../components/Objectif';
import FilmsCompetition from '../components/FilmsCompet';

function HomePage() {
  return (
    <>
      <Hero />
      <SectionProjet />
      <Objectif />
      <FilmsCompetition />
    </>
  );
}

export default HomePage;
