import { IoMdClose } from 'react-icons/io';

function JuryFormInput({ index, form, remove }) {
  return (
    <div className="relative flex gap-6 p-3 pt-10 bg-neutral-700 rounded-md outline-1 outline-neutral-500">
      {index > 0 && (
        <button
          className="absolute right-1 top-1 p-0.5 rounded-full transition bg-secondary hover:bg-neutral-300 hover:text-black cursor-pointer"
          type="button"
          onClick={() => remove(index)}
          title="remove jury"
        >
          <IoMdClose size={20} />
        </button>
      )}
      <div className="">
        <label className="sr-only" htmlFor="email">
          email
        </label>
        <input
          className="p-2 outline-2 outline-neutral-400 focus:outline-neutral-100 rounded-md w-full min-w-0"
          type="email"
          id="email"
          placeholder="john.doe@example.com"
          {...form.register(`juries.${index}.email`)}
        />
      </div>
      <div className="">
        <label className="sr-only" htmlFor="firstname">
          firstname
        </label>
        <input
          className="p-2 outline-2 outline-neutral-400 focus:outline-neutral-100 rounded-md w-full min-w-0"
          type="text"
          placeholder="John"
          id="firstname"
          {...form.register(`juries.${index}.firstname`)}
        />
      </div>
      <div className="">
        <label className="sr-only" htmlFor="lastname">
          lastname
        </label>
        <input
          className="p-2 outline-2 outline-neutral-400 focus:outline-neutral-100 rounded-md w-full min-w-0"
          type="text"
          placeholder="Doe"
          id="lastname"
          {...form.register(`juries.${index}.lastname`)}
        />
      </div>
    </div>
  );
}

export default JuryFormInput;
