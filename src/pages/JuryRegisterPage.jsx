import stars from '../assets/stars.png';
import arrow from '../assets/arrow.png';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { CiLock } from 'react-icons/ci';
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import TopPage from '../components/base/TopPage';
import TitlePage from '../components/base/TitlePage';
import { useApi } from '../hooks/useApi';

function JuryRegisterPage() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const api = useApi();
  const [email, setEmail] = useState('');
  const token = useParams().token;

  if (!token) {
    console.error('No token param');
    navigate('/', { replace: true });
  }

  async function onSubmit(data) {
    setError(null);
    data = { ...data, token };
    try {
      const res = await api('/juries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        navigate('/login', { replace: true });
      } else {
        const body = await res.json();
        console.error('error: ', body.error);
      }
    } catch (e) {
      console.error('error: ', e);
    }
  }

  useEffect(() => {
    const fetchInvite = async () => {
      try {
        const res = await api('/jury-invites/' + token);
        const body = await res.json();
        if (res.ok) {
          setEmail(body.email);
        } else {
          console.error('Fetch invite error', body);
          navigate('/', { replace: true });
        }
      } catch (e) {
        console.error('Failed to fetch invite, ', e);
      }
    };
    fetchInvite();
  }, []);

  return (
    <div className="">
      <TopPage>
        <TitlePage hasUnderline>{t('register.title')}</TitlePage>
      </TopPage>
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <div className=" flex flex-col items-center">
            <div className="flex justify-center text-zinc-100 mb-10 gap-4">
              <img className="size-7" src={stars} alt="stars" />
              <p className=""> {t('register.subTitle')}</p>
            </div>

            <form
              className="bg-primary p-8 w-full sm:max-w-150 rounded-2xl flex flex-col gap-7 max-w-11/12"
              onSubmit={handleSubmit(onSubmit)}
            >
              {error && (
                <div className="flex items-center space-x-1 text-red-500">
                  <MdOutlineReportGmailerrorred size={24} />
                  <span>{error}</span>
                </div>
              )}
              <div className="flex flex-col gap-2">
                <label className="text-dark text-xs font-bold" htmlFor="email">
                  {t('login.emailLabel')}
                </label>
                <div className="flex items-center gap-4 bg-zinc-800 rounded-xl h-14 text-zinc-400 font-bold  outline-2 outline-neutral-400 px-4 focus-within:outline-neutral-300 ">
                  <HiOutlineEnvelope className="text-zinc-300" size={24} />
                  <input
                    className=" placeholder:font-bold outline-0 w-full cursor-not-allowed"
                    type="email"
                    id="email"
                    name="email"
                    disabled
                    value={email}
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between gap-7 md:flex-row md:gap-2">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-dark text-xs font-bold"
                    htmlFor="firstname"
                  >
                    {t('register.firstname')}
                  </label>
                  <div className="flex items-center gap-4 bg-zinc-800 rounded-xl h-14 text-zinc-50  outline-2 outline-neutral-400 px-4 focus-within:outline-neutral-300">
                    <input
                      className="placeholder:font-bold outline-0 w-full"
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="*************************"
                      {...register('firstname', { required: 'test' })}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-dark text-xs font-bold"
                    htmlFor="lastname"
                  >
                    {t('register.lastname')}
                  </label>
                  <div className="flex items-center gap-4 bg-zinc-800 rounded-xl h-14 text-zinc-50  outline-2 outline-neutral-400 px-4 focus-within:outline-neutral-300">
                    <input
                      className="placeholder:font-bold outline-0 w-full"
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="*************************"
                      {...register('lastname', { required: 'test' })}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-dark text-xs font-bold"
                  htmlFor="password"
                >
                  {t('login.passwordLabel')}
                </label>
                <div className="flex items-center gap-4 bg-zinc-800 rounded-xl h-14 text-zinc-50  outline-2 outline-neutral-400 px-4 focus-within:outline-neutral-300">
                  <CiLock size={24} />
                  <input
                    className="placeholder:font-bold outline-0 w-full"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="*************************"
                    {...register('password', { required: 'test' })}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-secondary text-white rounded-xl h-14 font-bold cursor-pointer hover:bg-accent active:bg-primary transition-all"
              >
                {t('register.submitBtn')}
              </button>
            </form>

            <Link
              to={'/'}
              className="flex justify-center items-center text-zinc-100 py-6 gap-2 cursor-pointer"
            >
              <img
                className="size-7 rotate-180"
                src={arrow}
                alt="fleche de retour"
              />
              <div> {t('login.backBtn')}</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JuryRegisterPage;
