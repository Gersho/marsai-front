import { useFieldArray, useForm } from 'react-hook-form';
import { useApi } from '../../hooks/useApi';
import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa';
import JuryFormInput from './base/JuryFormInput';

function JuryForm({ toggleVisible }) {
  //TODO fix id names
  const form = useForm();
  const api = useApi();

  const { fields, append, remove } = useFieldArray({
    name: 'juries',
    control: form.control,
  });

  function addJury() {
    append({
      email: '',
      firstname: '',
      lastname: '',
    });
  }

  async function onSubmit(data) {
    console.log('data: ', data);
    const res = await api('/juries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res) {
      console.log('res body: ', await res.json());
    }
  }

  useEffect(() => {
    addJury();
  }, []);

  return (
    <div className="fixed left-0 top-0 h-full w-full flex items-center justify-center bg-neutral-900/5 backdrop-blur-xs">
      <form
        className="flex flex-col gap-8 bg-secondary p-5 rounded-md border-2 border-neutral-500 max-h-10/12 overflow-y-auto"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <h3 className="p-0 uppercase">Ajouter des jurys</h3>
          <button
            className=" p-1 rounded-full transition bg-white text-black hover:bg-neutral-700 hover:text-white cursor-pointer"
            type="button"
            onClick={toggleVisible}
            title="close"
          >
            <IoMdClose size={24} />
          </button>
        </div>
        {fields.map((field, index) => (
          <div key={field.id}>
            <JuryFormInput index={index} form={form} remove={remove} />
          </div>
        ))}
        <div className="flex justify-around md:justify-between gap-2">
          <button
            className="cursor-pointer rounded-md px-4 py-2 w-1/4 bg-neutral-500/90 hover:bg-neutral-500"
            type="button"
            aria-label="add jury"
            title="add jury"
            onClick={addJury}
          >
            <div className="flex items-center gap-3 justify-center">
              <FaPlus />
              <p className="hidden md:block">Ajouter un jury</p>
            </div>
          </button>
          <button
            className="bg-accent/90 hover:bg-accent cursor-pointer rounded-md px-4 py-2 w-3/4"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default JuryForm;
