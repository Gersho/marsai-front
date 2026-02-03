import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import marsaiLogo from '../assets/marsai-logo.svg';
import Logo from './Logo';

const footerLogo = {
  logo: {
    src: marsaiLogo,
    alt: 'logo marsai',
  },};

 const Footer = () => {
  return (
    <footer className="bg-[#2E2E2E] text-white py-16 px-4">
      {/* Conteneur principal centré */}
      <div className="max-w-7xl mx-auto">
        
        {/* Partie Haute : Grille 2 colonnes (Contenu gauche + Newsletter droite) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-20">
          
          {/* --- Colonne Gauche : Logo, Texte, Réseaux --- */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Badge Logo MARS.A.I */}
            <div className="inline-block bg-[#52525B] text-white font-bold px-4 py-2 rounded-lg text-sm tracking-wide">
              <Logo src={footerLogo.logo.src} alt={footerLogo.logo.alt} />
            </div>
            {/* Paragraphe de description */}
            <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              Une co-création de l&apos;école du numérique La Plateforme et le Mobile Film Festival. 
              Ensemble pour dessiner les nouveaux horizons du cinéma.
            </p>

            {/* Icônes Réseaux Sociaux */}
            <div className="flex justify-center lg:justify-start space-x-4 pt-2">
              <a href="#" className="text-white! rounded-full p-2  hover:bg-[#1877F2] hover:border-[#1877F2] transition">
                <FaFacebookF size={20}  />
              </a>
              <a href="#" className=" text-white! rounded-full p-2 hover:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] hover:border-transparent transition duration-300">
                <FaInstagram size={20}  />
              </a>
              <a href="#" className=" text-white! rounded-full p-2 hover:bg-[#FF0000] hover:border-[#FF0000] transition">
                <FaYoutube size={20}  />
              </a>
              <a href="#" className="text-white! rounded-full p-2 hover:bg-[#1DA1F2] hover:text-white!  hover:bg-red transition">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* --- Colonne Droite : Carte Newsletter --- */}
          <div className="bg-[#333333] rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">
              Restez connectés
            </h3>
            
            {/* Formulaire input + bouton combinés */}
            <form className="bg-[#3F3F46] rounded-full p-1.5 flex items-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="bg-transparent text-gray-200 placeholder text-sm grow px-4 outline-none w-full"
              />
              <button 
                type="submit" 
                className="bg-gray-500 text-white rounded-full px-6 py-3 font-bold text-xs uppercase"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>

        </div>

        {/* Partie Basse : Liens et Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-bold text-[#52525B] uppercase tracking-wider mt-12">
          
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-300 transition">Mentions Légales</a>
            <a href="#" className="hover:text-gray-300 transition">Presse</a>
            <a href="#" className="hover:text-gray-300 transition">Contact</a>
          </div>

          <div>
            © 2025 MARS.A.I
          </div>

        </div>
      </div>
      
    </footer>
  );
};

export default Footer;