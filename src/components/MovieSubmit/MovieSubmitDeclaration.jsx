import { CiCircleInfo } from 'react-icons/ci';

function MovieSubmitDeclaration({ register }) {
  return (
    <div className="flex flex-col items-center gap-3 w-12/14 sm:w-10/14">
      <h2 className="self-start sm:self-center">
        02. Déclaration Usage de l&apos;IA
      </h2>

      <div className="flex flex-col sm:flex-row gap-2 border border-gray rounded-sm w-full p-3 my-4">
        <CiCircleInfo className="text-accent text-4xl" />
        <p>
          MARS.A.I exige une transparence totale sur l&apos;utilisation de
          l&apos;Intelligence Artificielle. Sélectionnez tous les outils
          génératifs sollicités dans votre processus créatif.
        </p>
      </div>

      <div className="flex flex-col w-full gap-3">
        {/* appearance-none to remove radio btn */}

        <p>Classification de l&apos;Œuvre :* Choix exclusif entre :</p>
        <div className="flex flex-row justify-around gap-3 w-full ">
          <label
            className="flex items-center justify-center h-24 border border-gray rounded-sm has-checked:bg-indigo-50 has-checked:text-black w-1/2 p-2 "
            htmlFor="form-full-ai"
          >
            Génération intégrale
            <br />
            (100% IA)
            <input
              className=" appearance-none"
              type="radio"
              id="form-full-ai"
              name="ai-classification"
              value={false}
              {...register('isHybrid')}
              required
            ></input>
          </label>
          <label
            className="flex items-center justify-center h-24 border border-gray rounded-sm has-checked:bg-indigo-50 has-checked:text-black w-1/2 p-2 "
            htmlFor="form-hybrid"
          >
            Production hybride
            <br />
            (Prises de vues réelles + apports IA)
            <input
              className=" appearance-none"
              type="radio"
              id="form-hybrid"
              name="ai-classification"
              value={true}
              {...register('isHybrid')}
              required
            ></input>
          </label>
        </div>
      </div>

      <div className="flex flex-col items-center sm:flex-row w-full sm:justify-around gap-8">
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <label htmlFor="form-technical-stack">Stack Technologique *</label>
            <p>0/500</p>
          </div>
          <textarea
            className="border border-gray rounded-sm p-3 my-2 h-36 sm:h-44"
            id="form-technical-stack"
            type="textarea"
            name="technical-stack"
            placeholder="Listez les outils utilisés (ex: Midjourney pour les visuels, ElevenLabs pour les voix, Runway pour l'animation...)"
            title="Stack Technologique (max. 500 caractères)"
            {...register('aiTools')}
            required
          ></textarea>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <label htmlFor="form-creative-methodology">
              Méthodologie Créative *
            </label>
            <p>0/500</p>
          </div>
          <textarea
            className="border border-gray rounded-sm p-3 my-2 h-36 sm:h-44"
            id="form-creative-methodology"
            type="textarea"
            name="creative-methodology"
            placeholder="Décrivez l'interaction entre l'humain et la machine dans ce processus.."
            title="Méthodologie Créative (max. 500 caractères)"
            {...register('creativeProcess')}
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default MovieSubmitDeclaration;
