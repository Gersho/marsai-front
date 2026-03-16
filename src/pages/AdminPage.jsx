import { NavLink, Outlet } from 'react-router-dom';
import { RiDashboard3Line } from 'react-icons/ri';
import { BiMoviePlay } from 'react-icons/bi';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { FaRankingStar } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

function AdminPage() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 p-2 rounded-md transition-colors uppercase text-sm ${isActive ? 'bg-accent text-white' : 'hover:bg-neutral-700 text-neutral-200'}`;

  return (
    <div className="pt-17 md:min-h-screen flex-none md:flex">
      <div className="mt-3 md:w-70">
        <nav className="flex md:flex-col flex-row flex-wrap md:flex-nowrap md:mx-2 md:gap-2 ">
          <NavLink className={linkClass} to="/admin/dashboard">
            <RiDashboard3Line className="size-5" />
            <p className="hidden md:inline">Dashboard</p>
          </NavLink>
          <NavLink className={linkClass} to="/admin/movies">
            <BiMoviePlay className="size-5" />
            <p className="hidden md:inline">Gestion de films</p>
          </NavLink>
          <NavLink className={linkClass} to="/admin/jury">
            <FaUser className="size-5" />
            <p className="hidden md:inline">Jury</p>
          </NavLink>
          <NavLink className={linkClass} to="/admin/leaderboard">
            <FaRankingStar className="size-5" />
            <p className="hidden md:inline">Résultats & classement</p>
          </NavLink>
          <NavLink className={linkClass} to="/admin/events">
            <FaCalendarAlt className="size-5" />
            <p className="hidden md:inline">évènements</p>
          </NavLink>
          <NavLink className={linkClass} to="/admin/newsletter">
            <IoMdMail className="size-5" />
            <p className="hidden md:inline">newsletter</p>
          </NavLink>
        </nav>
      </div>
      <div className="w-full bg-primary text-white">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPage;


{/* <div className="md:w-1/4 flex-shrink-0">
                        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                            <h3 className="text-xl font-bold text-red-400 mb-4">
                                Fiche Technique
                            </h3>
                            
                            <div className="space-y-3">
                                <div>
                                    <p className="font-semibold text-gray-400 text-sm">Durée</p>
                                    <p className="text-lg text-white">{data.duration} secondes</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-400 text-sm">Titre Original</p>
                                    <p className="text-lg text-white">{data.original_title}</p>
                                </div>
                            </div>
                        </div>

                        <button
                            className="mt-6 w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg transition duration-200"
                        >
                            Voter pour ce film
                        </button>

                    </div> 
                </div>  */}
