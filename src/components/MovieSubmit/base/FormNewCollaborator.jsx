import BasicFormInput from './BasicFormInput';
import { IoMdClose } from 'react-icons/io';

function FormNewCollabotor({ index, form, remove, className = '' }) {
  className = 'w-full relative bg-zinc-700 p-5 rounded-xl' + ' ' + className;

  //   console.log(field);

  return (
    <div className={className}>
      {/* <button
        className="absolute top-2 right-2"
        type="button"
        onClick={() => remove(index)}
      >
        X
      </button> */}
      <button
        type="button"
        className="absolute top-2 right-2 bg-zinc-700 p-0.5 rounded-full group-hover:opacity-100 transition hover:bg-zinc-800"
        onClick={() => remove(index)}
        aria-label="Remove collaborator"
      >
        <IoMdClose size={24} />
      </button>
      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <div className="flex flex-col sm:flex-row sm:w-full sm:gap-x-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="form-collaborator-gender">civilité *</label>
            <select
              className="w-fit py-1 justify-center"
              id="form-collaborator-gender"
              {...form.register(`collaborators.${index}.gender`)}
            >
              <option value="mr">Mr.</option>
              <option value="mme">Mme.</option>
              <option value="mx">Mx.</option>
            </select>
          </div>
          <div className="flex flex-col sm:w-full">
            <label htmlFor="form-collaborator-firstname">Prenom *</label>
            <input
              className="border border-gray rounded-sm  min-w-full pl-2 py-1 my-2"
              id="form-collaborator-firstname"
              type="text"
              name="collaborator-firstname"
              placeholder="Prenom"
              title="Prenom du collaborateur"
              {...form.register(`collaborators.${index}.firstname`)}
              required
            ></input>
          </div>
        </div>

        <div className="flex flex-col sm:w-full">
          <label htmlFor="form-collaborator-lastname">Nom *</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-collaborator-lastname"
            type="text"
            placeholder="Nom"
            title="Nom du collaborateur"
            {...form.register(`collaborators.${index}.lastname`)}
            required
          ></input>
        </div>
      </div>

      <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
        <BasicFormInput
          register={form.register}
          label="Profession *"
          type="text"
          name={`collaborators.${index}.contribution`}
          placeholder=""
          title="profession du collaborateur"
          required={true}
        />

        <BasicFormInput
          register={form.register}
          label="e-mail *"
          type="email"
          name={`collaborators.${index}.email`}
          placeholder="bob@gmail.com"
          title="email du collaborateur"
          required={true}
        />
      </div>
    </div>
  );
}

export default FormNewCollabotor;

