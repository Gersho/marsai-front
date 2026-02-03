import stars from '../assets/stars.png';
import arrow from '../assets/arrow.png';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function onSubmit(data) {
    setError(null);
    try {
      const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('accessToken', data.accessToken);
        navigate('/home');
      } else {
        setError('Email ou mot de passe invalide');
      }
    } catch (e) {
      console.error('error: ', e);
      setError("Quelque chose s'est mal passé");
    }
  }

  return (
    <div className="w-full py-4 pt-17 h-screen">
      <div className="text-5xl font-bold text-white text-center m-10">
        CONNEXION
      </div>
      <div className="flex justify-center text-zinc-100 my-10 gap-4">
        <img className="size-7" src={stars} alt="stars" />
        <div>ESPACE MEMBRE MARS.A.I</div>
      </div>

      <form
        className="bg-zinc-700 p-8 w-md m-auto rounded-2xl flex flex-col gap-7"
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && <span className="m-0 p-0 text-red-400">{error}</span>}
        <div className="flex flex-col gap-2">
          <label className="text-[#c7deff] text-xs font-bold" htmlFor="email">
            ADRESSE E-MAIL
          </label>
          <div className="flex items-center gap-4 bg-zinc-800 rounded-xl h-14 text-zinc-50  outline-2 outline-neutral-400 pl-4 focus-within:outline-neutral-300">
            <FaEnvelope size={24} />
            <input
              className=" placeholder:font-bold outline-0"
              type="email"
              id="email"
              name="email"
              {...register('email', { required: true })}
              placeholder="email@example.com"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-[#c7deff] text-xs font-bold"
            htmlFor="password"
          >
            MOT DE PASSE
          </label>
          <div className="flex items-center gap-4 bg-zinc-800 rounded-xl h-14 text-zinc-50  outline-2 outline-neutral-400 pl-4 focus-within:outline-neutral-300">
            <FaLock size={24} />
            <input
              className="placeholder:font-bold outline-0"
              type="password"
              id="password"
              name="password"
              {...register('password', { required: 'test' })}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary text-white rounded-xl uppercase h-14 font-bold cursor-pointer hover:bg-blue-600 active:bg-primary"
        >
          accéder à l’espace
        </button>
      </form>

      <Link
        to={'/home'}
        className="flex justify-center items-center text-zinc-100 my-6 gap-2 cursor-pointer"
      >
        <img className="size-7 rotate-180" src={arrow} alt="fleche de retour" />
        <div>RETOUR ACCUEIL</div>
      </Link>
    </div>
  );
}

export default Login;
