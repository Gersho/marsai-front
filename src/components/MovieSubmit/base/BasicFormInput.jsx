import { ErrorMessage } from "@hookform/error-message"

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

  className = 'flex flex-col sm:w-full gap-2 sm:pb-4 pb-3' + ' ' + className;

  if (!validation) {
    validation = { required: false }
  }

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        className="border border-gray rounded-sm pl-2 py-1"
        id={id}
        type={type}
        placeholder={placeholder}
        title={title}
        {...register(name, validation)}
        autoFocus={autoFocus}
      ></input>

      <ErrorMessage
        errors={form.formState.errors}
        name={name}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      />
    </div>
  );
}

export default BasicFormInput;

