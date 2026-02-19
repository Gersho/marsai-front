import TitleSection from '../components/base/TitleSection';
import { FaBusAlt } from 'react-icons/fa';
import { FaCarSide } from 'react-icons/fa';
import { MdNearMe } from 'react-icons/md';

function AccessCard({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-6 p-4 rounded-xl bg-primary">
      {icon && <div className="text-5xl text-white">{icon}</div>}
      <div>
        <h3 className="text-white">{title}</h3>
        <p className="text-dark">{subtitle}</p>
      </div>
    </div>
  );
}
function AccessProgram() {
  return (
    <section className="section">
      <div className="max-w-5xl mx-auto">
        <TitleSection
          hasUnderline
          underlineColor="bg-accent"
          className="text-white"
        >
          Accès
        </TitleSection>
        <div className=" flex flex-col gap-4">
          <AccessCard
            icon={<FaBusAlt />}
            title={'Transports en commun'}
            subtitle={
              'Tram T2 / T3 - Arrêt Arenc Le Silo. Métro M2 - Station Désirée Clary.'
            }
          />
          <AccessCard
            icon={<FaCarSide />}
            title={'Voiture'}
            subtitle={
              'Autoroute A55 - Sortie 2. Parking Indigo Quai du Lazaret à 200m.'
            }
          />
          <AccessCard
            icon={<MdNearMe />}
            title={'Adresse'}
            subtitle={"12 Rue d'Uzes, 13002 Marseille (Entrée Principale)."}
          />
          {/*             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36334.36469455985!2d5.3413553018598!3d43.31910274407031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c13ddc0211b9%3A0xd1642ae4b32c4bc4!2s%C3%89cole%20La%20Plateforme_%20Marseille%20-%20Entr%C3%A9e%20Sud!5e0!3m2!1sfr!2sfr!4v1771498251371!5m2!1sfr!2sfr"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
        </div>
      </div>
    </section>
  );
}

export default AccessProgram;
