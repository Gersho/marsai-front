import { useFieldArray } from 'react-hook-form';
import BasicFormInput from './base/BasicFormInput';
import FormNewCollabotor from './base/FormNewCollaborator';
import FormSection from './base/FormSection';
import FormSectionTitle from './base/FormSectionTitle';

function MovieSubmitTeamComposition({ form }) {
  const { fields, append, remove } = useFieldArray({
    name: 'collaborators',
    control: form.control,
  });

  function addCollaborator() {
    append({
      gender: 'mr',
      firstname: '',
      lastname: '',
      email: '',
      contribution: '',
    });
    console.log(fields);
  }
  return (
    <FormSection className="bg-zinc-800 text-zinc-200">
      <FormSectionTitle text="04. Composition de l'Équipe" />
      <p className="py-2 self-center">Realisateur:</p>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <div className="flex flex-col sm:flex-row sm:w-full sm:gap-x-5">
          <div className="flex flex-col gap-2">
            <label className="" htmlFor="form-director-gender">
              civilité *
            </label>
            <select
              className="w-fit py-1 justify-center"
              id="form-director-gender"
              {...form.register('director.gender')}
            >
              <option value="mr">Mr.</option>
              <option value="mme">Mme.</option>
              <option value="mx">Mx.</option>
            </select>
          </div>
          <div className="flex flex-col sm:w-full">
            <label htmlFor="form-director-firstname">Prenom *</label>
            <input
              className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
              id="form-director-firstname"
              type="text"
              {...form.register('director.firstname')}
              placeholder="Prenom"
              title="Prenom du realisateur"
              required
            ></input>
          </div>
        </div>

        <div className="flex flex-col sm:w-full">
          <label htmlFor="form-director-lastname">Nom *</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-director-lastname"
            type="text"
            {...form.register('director.lastname')}
            placeholder="Nom"
            title="Nom du realisateur"
            required
          ></input>
        </div>
      </div>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label="métier actuel *"
          type="text"
          id="director-job"
          name="director.job"
          placeholder=""
          title="métier actuel du realisateur"
          required={true}
        />

        <BasicFormInput
          register={form.register}
          label="date de naissance *"
          type="date"
          id="director-birthdate"
          name="director.birthdate"
          placeholder=""
          title="date de naissance du realisateur"
          required={true}
        />
      </div>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label="email *"
          type="email"
          id="director-email"
          name="director.email"
          placeholder="exemple@gmail.com"
          title="email du realisateur"
          required={true}
        />

        <BasicFormInput
          register={form.register}
          label="Telephone *"
          type="text"
          id="director-phone"
          name="director.phone"
          placeholder="0102030405"
          title="Numero de telephone du realisateur"
          required={true}
        />
      </div>
      <div className="w-full">
        <label htmlFor="form-director-address">Addresse *</label>
        <input
          className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
          type="text"
          id="form-director-address"
          {...form.register('director.address')}
          placeholder=""
          title="Addresse postale du directeur"
          required
        ></input>
      </div>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label="Ville *"
          type="text"
          id="director-city"
          name="director.city"
          placeholder=""
          title="Ville du directeur"
          required={true}
        />

        <BasicFormInput
          register={form.register}
          label="Code Postal"
          type="text"
          id="director-zipcode"
          name="director.zipcode"
          placeholder=""
          title="Code Postal du realisateur"
        />
      </div>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label="Region"
          type="text"
          id="director-region"
          name="director.region"
          placeholder=""
          title="Region du directeur"
        />

        <BasicFormInput
          register={form.register}
          label="Pays *"
          type="text"
          id="director-country"
          name="director.country"
          placeholder=""
          title="Pays du realisateur"
          required={true}
        />
      </div>
      présence en ligne
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label="Facebook"
          type="text"
          id="director-facebook"
          name="director.facebook"
          placeholder=""
          title="facebook du directeur"
        />

        <BasicFormInput
          register={form.register}
          label="Instagram"
          type="text"
          id="director-instagram"
          name="director.instagram"
          placeholder=""
          title="instagram du realisateur"
        />
      </div>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label="Youtube"
          type="text"
          id="director-youtube"
          name="director.youtube"
          placeholder=""
          title="Youtube du directeur"
        />

        <BasicFormInput
          register={form.register}
          label="LinkedIn"
          type="text"
          id="director-linkedin"
          name="director.linkedin"
          placeholder=""
          title="Linkedin du directeur"
        />
      </div>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label="Twitter"
          type="text"
          id="director-twitter"
          name="director.twitter"
          placeholder=""
          title="twitter du directeur"
        />

        <div className="w-full"></div>
      </div>
      <p className="py-2 self-center">Collaborateurs:</p>
      <div className="flex flex-col gap-4 w-full pb-5">
        {fields.map((field, index) => (
          <div key={field.id}>
            <FormNewCollabotor index={index} form={form} remove={remove} />
          </div>
        ))}
      </div>
      <button
        className="border border-gray rounded-sm mr-2 mb-3 px-2 py-2 self-center"
        type="button"
        onClick={addCollaborator}
      >
        + ajouter collaborateur
      </button>
    </FormSection>
  );
}

export default MovieSubmitTeamComposition;

