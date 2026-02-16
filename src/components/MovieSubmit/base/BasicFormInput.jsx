import FormErrors from './FormErrors';

function BasicFormInput({
  label,
  placeholder,
  title,
  id,
  name,
  form,
  validation = false,
  type = 'text',
  className = '',
  autoFocus = false,
}) {
  const register = form.register;

  className = 'flex flex-col md:w-full gap-2 md:pb-4 pb-3' + ' ' + className;

  if (!validation) {
    validation = { required: false };
  }

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        className="outline-2 outline-neutral-400 rounded-sm pl-2 py-1 border-0 focus:outline-neutral-100"
        id={id}
        type={type}
        placeholder={placeholder}
        title={title}
        {...register(name, validation)}
        autoFocus={autoFocus}
      ></input>

      <FormErrors form={form} name={name} />
    </div>
  );
}

export default BasicFormInput;
