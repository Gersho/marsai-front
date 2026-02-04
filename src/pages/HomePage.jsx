import SectionProjet from '../components/Projet';
import Hero from '../components/Hero';
import Objectif from '../components/Objectif';
import FilmsCompetition from '../components/FilmsCompet';
import FormatSelection from '../components/FormatSelection';

function HomePage() {
  return (
    <>
      <Hero />
      <SectionProjet />
      <FilmsCompetition />
      <Objectif />
      <FormatSelection />
    </>
  );
}

export default HomePage;
