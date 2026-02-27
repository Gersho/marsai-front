import { IoMdClose } from 'react-icons/io';

function JuryFormInput({ index, form, remove }) {
  const {
    formState: { errors },
  } = form;

  return (
    <div className="relative flex gap-6 p-3 pt-10 bg-neutral-700 rounded-md outline-1 outline-neutral-500">
      {index > 0 && (
        <button
          className="absolute right-1 top-1 p-0.5 rounded-full transition bg-none hover:bg-neutral-300 hover:text-black cursor-pointer"
          type="button"
          onClick={() => remove(index)}
          title="remove jury"
        >
          <IoMdClose size={20} />
        </button>
      )}
      <div className="">
        <label className="sr-only" htmlFor={`juries.${index}.email`}>
          email
        </label>
        <input
          className="p-2 outline-2 outline-neutral-400 focus:outline-neutral-100 rounded-md w-full min-w-0"
          type="email"
          id={`juries.${index}.email`}
          placeholder="john.doe@example.com"
          {...form.register(`juries.${index}.email`, {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.juries?.[index]?.email && (
          <p className="text-red-400 text-sm mt-1">
            {errors.juries[index]?.email?.message}
          </p>
        )}
      </div>
      <div className="">
        <label className="sr-only" htmlFor={`juries.${index}.firstname`}>
          firstname
        </label>
        <input
          className="p-2 outline-2 outline-neutral-400 focus:outline-neutral-100 rounded-md w-full min-w-0"
          type="text"
          placeholder="John"
          id={`juries.${index}.firstname`}
          {...form.register(`juries.${index}.firstname`, {
            required: 'Firstname is required',
          })}
        />
        {errors.juries?.[index]?.firstname && (
          <p className="text-red-400 text-sm mt-1">
            {errors.juries[index]?.firstname?.message}
          </p>
        )}
      </div>
      <div className="">
        <label className="sr-only" htmlFor={`juries.${index}.lastname`}>
          lastname
        </label>
        <input
          className="p-2 outline-2 outline-neutral-400 focus:outline-neutral-100 rounded-md w-full min-w-0"
          type="text"
          placeholder="Doe"
          id={`juries.${index}.lastname`}
          {...form.register(`juries.${index}.lastname`, {
            required: 'Lastname is required',
          })}
        />
        {errors.juries?.[index]?.lastname && (
          <p className="text-red-400 text-sm mt-1">
            {errors.juries[index]?.lastname?.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default JuryFormInput;
