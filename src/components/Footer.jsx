import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import marsaiLogo from '../assets/marsai-logo.svg';
import Logo from './Logo';
import { useTranslation } from 'react-i18next';
import { useApi } from '../hooks/useApi';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const footerLogo = {
  logo: {
    src: marsaiLogo,
    alt: 'logo marsai',
  },
};

const Footer = () => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const api = useApi();

  async function onSubmit(data) {
    try {
      const res = await api('/subscribers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res) {
        if (res.ok) {
          toast.success(t('footer.emailOk'));
        } else {
          toast.error(t('footer.emailError'));
        }
      }
    }
    catch (e) {
      toast.error('Something went wrong: ' + e);
    }
  }


  return (
    <footer className=" bg-primary text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-20">
          <div className="space-y-6 text-center lg:text-left">
            {/* Badge Logo MARS.A.I */}
            <div className="inline-block text-white font-bold px-4 py-2 rounded-lg text-sm tracking-wide">
              <Logo src={footerLogo.logo.src} alt={footerLogo.logo.alt} />
            </div>
            <p className=" text-white text-sm leading-relaxed max-w-md mx-auto lg:mx-0 lg:ml-4">
              {t('footer.description')}
            </p>

            {/* Icônes Réseaux Sociaux */}
            <div className="flex justify-center lg:justify-start space-x-4 pt-2">
              <a
                href="#"
                className="text-white! rounded-full p-2  hover:bg-[#1877F2] hover:border-[#1877F2] transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className=" text-white! rounded-full p-2 hover:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] hover:border-transparent transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className=" text-white! rounded-full p-2 hover:bg-[#FF0000] hover:border-[#FF0000] transition"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="#"
                className="text-white! rounded-full p-2 hover:bg-[#1DA1F2] hover:text-white!  hover:bg-red transition"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
          <div className="bg-secondary rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide">
              {t('footer.stayConnected')}
            </h2>
            <form className="bg-white rounded-full p-1.5 flex items-center max-w-md mx-auto"
              onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="text-primary placeholder text-sm grow px-4 outline-none w-full"
                {...register('email')}
              />
              <button
                type="submit"
                className="bg-accent text-white rounded-full px-6 py-3 font-bold text-xs uppercase"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-bold text-muted uppercase tracking-wider mt-12">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-300 transition">
              {t('footer.legalNotice')}
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              {t('footer.press')}
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              {t('footer.contact')}
            </a>
          </div>

          <div>© 2025 MARS.A.I</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
