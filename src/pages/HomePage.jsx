import SectionProjet from '../components/Projet';

import Hero from '../components/Hero';
import Objectif from '../components/Objectif';
import FilmsCompetition from '../components/FilmsCompet';
import FormatSelection from '../components/FormatSelection';
import Conference from '../components/Conference';
import LieuxPlateforme from '../components/LieuxPlateforme';
import Chiffres from '../components/Chiffres';
import Partner from '../components/Partner';

function HomePage() {
  return (
    <>
      <Hero />
      <SectionProjet />
      <FilmsCompetition />
      <Objectif />
      <FormatSelection />
      <Conference />
      <LieuxPlateforme />
      <Chiffres />
      <Partner />
    </>
  );
}

export default HomePage;
