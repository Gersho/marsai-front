import { CiCircleInfo } from 'react-icons/ci';
import FormSectionTitle from './base/FormSectionTitle';
import FormSection from './base/FormSection';
import FormTextArea from './base/FormTextArea';

function MovieSubmitDeclaration({ register }) {
  return (
    <FormSection className="bg-zinc-800 text-zinc-200">


      <FormSectionTitle
        text="02. Déclaration Usage de l&apos;IA"
      />

      <div className="flex flex-col sm:flex-row gap-2 border border-gray rounded-sm w-full p-3 my-4">
        <CiCircleInfo className="text-accent text-4xl" />
        <p>
          MARS.A.I exige une transparence totale sur l&apos;utilisation de
          l&apos;Intelligence Artificielle. Sélectionnez tous les outils
          génératifs sollicités dans votre processus créatif.
        </p>
      </div>

      <div className="flex flex-col w-full gap-3">

        <p>Classification de l&apos;Œuvre :* Choix exclusif entre :</p>
        <div className="flex flex-row justify-around gap-3 w-full pb-4">
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

      <div className="flex flex-col items-center sm:flex-row w-full sm:justify-between sm:gap-20">

        <FormTextArea
          className=""
          label="Stack Technologique *"
          maxCount={500}
          id="form-technical-stack"
          placeholder="Listez les outils utilisés (ex: Midjourney pour les visuels, ElevenLabs pour les voix, Runway pour l&apos;animation...)"
          title="Stack Technologique (max. 500 caractères)"
          register={register}
          name="aiTools"
          required={true}
        />

        <FormTextArea
          className=""
          label="Méthodologie Créative *"
          maxCount={500}
          id="form-creative-methodology"
          placeholder="Décrivez l&apos;interaction entre l&apos;humain et la machine dans ce processus.."
          title="Méthodologie Créative (max. 500 caractères)"
          register={register}
          name="creativeProcess"
          required={true}
        />

      </div>
    </FormSection>
  );
}

export default MovieSubmitDeclaration;
