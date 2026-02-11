import BasicFormInput from './BasicFormInput';
import { IoMdClose } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

function FormNewCollaborator({ index, form, remove, className = '' }) {
  const { t } = useTranslation();
  const target = "submitMovieForm.teamComposition.newCollaborator.";


  className = 'w-full relative bg-zinc-700 p-5 rounded-xl' + ' ' + className;

  return (
    <div className={className}>
      <button
        type="button"
        className="absolute top-2 right-2 bg-zinc-700 p-0.5 rounded-full group-hover:opacity-100 transition hover:bg-zinc-800"
        onClick={() => remove(index)}
        aria-label={t(target + 'remove')}
      >
        <IoMdClose size={24} />
      </button>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <div className="flex flex-col sm:flex-row sm:w-full sm:gap-x-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="form-collaborator-gender">{t(target + 'gender.label')}</label>
            <select
              className="w-fit py-1 justify-center"
              id="form-collaborator-gender"
              {...form.register(`collaborators.${index}.gender`)}
            >
              <option value="mr">{t(target + 'gender.mr')}</option>
              <option value="mme">{t(target + 'gender.mrs')}</option>
              <option value="mx">{t(target + 'gender.mx')}</option>
            </select>
          </div>
          <div className="flex flex-col sm:w-full">
            <label htmlFor="form-collaborator-firstname">{t(target + 'firstname.label')}</label>
            <input
              className="border border-gray rounded-sm  min-w-full pl-2 py-1 my-2"
              id="form-collaborator-firstname"
              type="text"
              name="collaborator-firstname"
              placeholder={t(target + 'firstname.placeholder')}
              title={t(target + 'firstname.title')}
              {...form.register(`collaborators.${index}.firstname`)}
              required
            ></input>
          </div>
        </div>

        <div className="flex flex-col sm:w-full">
          <label htmlFor="form-collaborator-lastname">{t(target + 'lastname.label')}</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-collaborator-lastname"
            type="text"
            placeholder={t(target + 'lastname.label')}
            title={t(target + 'lastname.label')}
            {...form.register(`collaborators.${index}.lastname`)}
            required
          ></input>
        </div>
      </div>

      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label={t(target + 'contribution.label')}
          name={`collaborators.${index}.contribution`}
          placeholder=""
          title={t(target + 'contribution.title')}
          required={true}
        />

        <BasicFormInput
          register={form.register}
          label={t(target + 'email.label')}
          type="email"
          name={`collaborators.${index}.email`}
          placeholder={t(target + 'email.placeholder')}
          title={t(target + 'email.title')}
          required={true}
        />
      </div>
    </div>
  );
}

export default FormNewCollaborator;

