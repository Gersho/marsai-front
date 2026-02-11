import { useFieldArray } from 'react-hook-form';
import BasicFormInput from './base/BasicFormInput';
import FormNewCollaborator from './base/FormNewCollaborator';
import FormSection from './base/FormSection';
import FormSectionTitle from './base/FormSectionTitle';
import { useTranslation } from 'react-i18next';

function MovieSubmitTeamComposition({ form }) {
  const { t } = useTranslation();
  const target = "submitMovieForm.teamComposition.";

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
      <FormSectionTitle text={t(target + 'title')} />
      <p className="py-2 self-center">{t(target + 'director.header')}</p>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <div className="flex flex-col sm:flex-row sm:w-full sm:gap-x-5">
          <div className="flex flex-col gap-2">
            <label className="" htmlFor="form-director-gender">
              {t(target + 'director.gender.label')}
            </label>
            <select
              className="w-fit py-1 justify-center"
              id="form-director-gender"
              {...form.register('director.gender')}
            >
              <option value="mr">{t(target + 'director.gender.mr')}</option>
              <option value="mme">{t(target + 'director.gender.mrs')}</option>
              <option value="mx">{t(target + 'director.gender.mx')}</option>
            </select>
          </div>
          <div className="flex flex-col sm:w-full">
            <label htmlFor="form-director-firstname">{t(target + 'director.firstname.label')}</label>
            <input
              className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
              id="form-director-firstname"
              type="text"
              {...form.register('director.firstname')}
              placeholder={t(target + 'director.firstname.placeholder')}
              title={t(target + 'director.firstname.title')}
              required
            ></input>
          </div>
        </div>

        <div className="flex flex-col sm:w-full">
          <label htmlFor="form-director-lastname">{t(target + 'director.lastname.label')}</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-director-lastname"
            type="text"
            {...form.register('director.lastname')}
            placeholder={t(target + 'director.lastname.placeholder')}
            title={t(target + 'director.lastname.title')}
            required
          ></input>
        </div>
      </div>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label={t(target + 'director.job.label')}
          id="director-job"
          name="director.job"
          placeholder=""
          title={t(target + 'director.job.title')}
          required={true}
        />

        <BasicFormInput
          register={form.register}
          label={t(target + 'director.birthdate.label')}
          type="date"
          id="director-birthdate"
          name="director.birthdate"
          placeholder=""
          title={t(target + 'director.birthdate.title')}
          required={true}
        />
      </div>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label={t(target + 'director.email.label')}
          type="email"
          id="director-email"
          name="director.email"
          placeholder={t(target + 'director.email.placeholder')}
          title={t(target + 'director.email.title')}
          required={true}
        />

        <BasicFormInput
          register={form.register}
          label={t(target + 'director.phone.label')}
          id="director-phone"
          name="director.phone"
          placeholder={t(target + 'director.phone.placeholder')}
          title={t(target + 'director.phone.title')}
          required={true}
        />
      </div>
      <div className="w-full">
        <label htmlFor="form-director-address">{t(target + 'director.address.label')}</label>
        <input
          className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
          id="form-director-address"
          {...form.register('director.address')}
          placeholder=""
          title={t(target + 'director.address.title')}
          required
        ></input>
      </div>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label={t(target + 'director.city.label')}
          id="director-city"
          name="director.city"
          placeholder=""
          title={t(target + 'director.city.title')}
          required={true}
        />

        <BasicFormInput
          register={form.register}
          label={t(target + 'director.zipcode.label')}
          id="director-zipcode"
          name="director.zipcode"
          placeholder=""
          title={t(target + 'director.zipcode.title')}
        />
      </div>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label={t(target + 'director.region.label')}
          id="director-region"
          name="director.region"
          placeholder=""
          title={t(target + 'director.region.title')}
        />

        <BasicFormInput
          register={form.register}
          label={t(target + 'director.country.label')}
          id="director-country"
          name="director.country"
          placeholder=""
          title={t(target + 'director.country.title')}
          required={true}
        />
      </div>
      {t(target + 'director.socials')}
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label={t(target + 'director.facebook.label')}
          id="director-facebook"
          name="director.facebook"
          placeholder=""
          title={t(target + 'director.facebook.title')}
        />

        <BasicFormInput
          register={form.register}
          label={t(target + 'director.instagram.label')}
          id="director-instagram"
          name="director.instagram"
          placeholder=""
          title={t(target + 'director.instagram.title')}
        />
      </div>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label={t(target + 'director.youtube.label')}
          id="director-youtube"
          name="director.youtube"
          placeholder=""
          title={t(target + 'director.youtube.title')}
        />

        <BasicFormInput
          register={form.register}
          label={t(target + 'director.linkedin.label')}
          id="director-linkedin"
          name="director.linkedin"
          placeholder=""
          title={t(target + 'director.linkedin.title')}
        />
      </div>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label={t(target + 'director.twitter.label')}
          id="director-twitter"
          name="director.twitter"
          placeholder=""
          title={t(target + 'director.twitter.title')}
        />

        <div className="w-full"></div>
      </div>
      <p className="py-2 self-center">{t(target + 'collaborators.header')}</p>
      <div className="flex flex-col gap-4 w-full pb-5">
        {fields.map((field, index) => (
          <div key={field.id}>
            <FormNewCollaborator index={index} form={form} remove={remove} />
          </div>
        ))}
      </div>
      <button
        className="border border-gray rounded-sm mr-2 mb-3 px-2 py-2 self-center"
        type="button"
        onClick={addCollaborator}
      >
        {t(target + 'collaborators.button')}
      </button>
    </FormSection>
  );
}

export default MovieSubmitTeamComposition;

