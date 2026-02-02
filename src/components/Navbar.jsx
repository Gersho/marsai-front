import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import marsaiLogo from '../assets/marsai-logo.svg';
import marsaiLogoDark from '../assets/marsai-logo-dark.svg';
import flag_french from '../assets/france.png';
import flag_english from '../assets/united-kingdom.png';

const navbarData = {
  logo: {
    src: marsaiLogo,
    alt: 'logo marsai',
  },
  logo_dark: {
    src: marsaiLogoDark,
    alt: 'logo marsai dark',
  },
  menu: [
    { id: 1, url: '/', text: 'Accueil' },
    { id: 2, url: '/movies', text: 'Galerie' },
    { id: 3, url: '/programme-infos', text: 'Programme & Infos' },
    { id: 4, url: '/jury', text: 'Jury' },
  ],
  languages: [
    /* { id: 1, locale: 'french', flag: flag_french }, */
    { id: 2, locale: 'english', flag: flag_english },
  ],
};
function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  return (
    <div
      className={`z-40 flex w-full items-center bg-transparent py-4 lg:py-2 ${
        sticky
          ? 'fixed top-0 bg-white bg-opacity-80 shadow-sticky backdrop-blur-sm transition'
          : `absolute`
      }`}
    >
      <div className="relative flex-1 flex items-center justify-between px-4 lg:px-24">
        {sticky ? (
          <Logo src={navbarData.logo_dark.src} alt={navbarData.logo_dark.alt} />
        ) : (
          <Logo src={navbarData.logo.src} alt={navbarData.logo.alt} />
        )}

        <button
          onClick={navbarToggleHandler}
          id="navbarToggler"
          aria-label="Mobile Menu"
          className={`absolute right-2 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px]  focus:ring-2 ${sticky ? 'ring-black' : 'ring-white'} lg:hidden`}
        >
          <span
            className={`relative my-1.5 block h-0.5 w-[30px] ${sticky ? 'bg-black' : 'bg-white'} transition-all duration-300 ${
              navbarOpen ? ' top-[7px] rotate-45' : ' '
            }`}
          />
          <span
            className={`relative my-1.5 block h-0.5 w-[30px] ${sticky ? 'bg-black' : 'bg-white'} transition-all duration-300 ${
              navbarOpen ? 'opacity-0 ' : ' '
            }`}
          />
          <span
            className={`relative my-1.5 block h-0.5 w-[30px] ${sticky ? 'bg-black' : 'bg-white'} transition-all duration-300 ${
              navbarOpen ? ' top-[-8px] -rotate-45' : ' '
            }`}
          />
        </button>
        <nav
          id="navbarCollapse"
          className={`navbar absolute left-0 right-0 z-30 w-full bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
            navbarOpen
              ? 'visibility top-[150%] opacity-100'
              : 'invisible top-[260%] opacity-0'
          }`}
        >
          <ul className="block items-center lg:flex lg:space-x-12">
            {navbarData.menu.map(menuItem => {
              return (
                <li
                  key={menuItem.id}
                  className={`group relative ${sticky ? 'text-black' : 'lg:text-white'}`}
                >
                  {menuItem.url && (
                    <NavLink
                      to={menuItem.url}
                      className="flex py-2 text-xl group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:px-0 lg:py-4 lg:text-sm"
                      onClick={() => navbarToggleHandler(false)}
                    >
                      {menuItem.text}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex gap-4 items-center mr-16 lg:mr-0 lg:gap-8">
          <button className="bg-primary text-white py-2 px-6 text-xs rounded rounded-full lg:text-sm lg:px-8">
            Soumettre
          </button>
          <div role="menu" className="flex gap-4">
            {navbarData.languages.map(language => {
              return (
                <Link key={language.id}>
                  <img
                    src={language.flag}
                    alt={language.locale}
                    className="w-6"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
