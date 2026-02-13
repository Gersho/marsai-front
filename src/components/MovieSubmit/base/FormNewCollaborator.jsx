import BasicFormInput from './BasicFormInput';
import { IoMdClose } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import FormErrors from './FormErrors';

function FormNewCollaborator({ index, form, remove, className = '' }) {
  const { t } = useTranslation();
  const target = 'submitMovieForm.teamComposition.newCollaborator.';
  const errors = 'submitMovieForm.formErrors.';

  className = 'w-full relative bg-secondary p-5 rounded-xl' + ' ' + className;

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
      <div className="flex flex-col w-full md:flex-row md:justify-between md:gap-20">
        <div className="flex flex-col md:flex-row md:w-full md:gap-x-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="form-collaborator-gender">
              {t(target + 'gender.label')}
            </label>
            <select
              className="w-fit justify-center bg-secondary px-2 pt-2 pb-1.5 rounded-md border border-zinc-200"
              id="form-collaborator-gender"
              {...form.register(`collaborators.${index}.gender`)}
            >
              <option value="mr">{t(target + 'gender.mr')}</option>
              <option value="mme">{t(target + 'gender.mrs')}</option>
              <option value="mx">{t(target + 'gender.mx')}</option>
            </select>
          </div>
          <div className="flex flex-col md:w-full">
            <label htmlFor="form-collaborator-firstname">
              {t(target + 'firstname.label')}
            </label>
            <input
              className="border border-gray rounded-sm  min-w-full pl-2 py-1 my-2"
              id="form-collaborator-firstname"
              type="text"
              name="collaborator-firstname"
              placeholder={t(target + 'firstname.placeholder')}
              title={t(target + 'firstname.title')}
              {...form.register(`collaborators.${index}.firstname`, {
                required: t(errors + 'required'),
                minLength: {
                  value: 3,
                  message: t(errors + 'minLength3'),
                },
                maxLength: {
                  value: 100,
                  message: t(errors + 'maxLength100'),
                },
              })}
            ></input>
            <FormErrors form={form} name={`collaborators.${index}.firstname`} />
          </div>
        </div>

        <div className="flex flex-col md:w-full">
          <label htmlFor="form-collaborator-lastname">
            {t(target + 'lastname.label')}
          </label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-collaborator-lastname"
            type="text"
            placeholder={t(target + 'lastname.label')}
            title={t(target + 'lastname.label')}
            {...form.register(`collaborators.${index}.lastname`, {
              required: t(errors + 'required'),
              minLength: {
                value: 3,
                message: t(errors + 'minLength3'),
              },
              maxLength: {
                value: 100,
                message: t(errors + 'maxLength100'),
              },
            })}
          ></input>
          <FormErrors form={form} name={`collaborators.${index}.lastname`} />
        </div>
      </div>

      <div className="flex flex-col w-full md:flex-row md:justify-between md:gap-20">
        <BasicFormInput
          form={form}
          label={t(target + 'contribution.label')}
          name={`collaborators.${index}.contribution`}
          placeholder=""
          title={t(target + 'contribution.title')}
          validation={{
            required: t(errors + 'required'),
            minLength: {
              value: 3,
              message: t(errors + 'minLength3'),
            },
            maxLength: {
              value: 100,
              message: t(errors + 'maxLength100'),
            },
          }}
        />

        <BasicFormInput
          form={form}
          label={t(target + 'email.label')}
          name={`collaborators.${index}.email`}
          placeholder={t(target + 'email.placeholder')}
          title={t(target + 'email.title')}
          validation={{
            required: t(errors + 'required'),
            pattern: {
              value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
              message: t(errors + 'validEmail'),
            },
            minLength: {
              value: 5,
              message: t(errors + 'minLength5'),
            },
            maxLength: {
              value: 100,
              message: t(errors + 'maxLength100'),
            },
          }}
        />
      </div>
    </div>
  );
}

export default FormNewCollaborator;
