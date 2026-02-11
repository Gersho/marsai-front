import { IoImageOutline } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import FormErrors from "./FormErrors";

function InputImage({
  label,
  id,
  name,
  form,
  description,
  subDescription,
  validation = false,
  iconSize = 40,
  className = '',
}) {
  const [preview, setPreview] = useState(null);
  const register = form.register;


  if (!validation) {
    validation = { required: false }
  }


  const { onChange: onFormChange, onBlur, ref } = register(name, validation);

  function handlePreview(e) {
    onFormChange(e);
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  }

  function removePreview(e) {
    e.preventDefault();
    setPreview(null);
  }

  useEffect(() => {
    return () => preview && URL.revokeObjectURL(preview);
  }, [preview]);

  return (
    <>
      {preview ? (
        <div className="relative group w-fit">
          <img
            className={`object-cover rounded-xl outline-2 outline-dashed outline-zinc-300 ${className}`}
            src={preview}
            alt="preview"
          />
          <button
            type="button"
            className="absolute top-2 right-2 bg-zinc-700 p-0.5 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-zinc-800"
            onClick={removePreview}
            aria-label="Remove image"
          >
            <IoMdClose size={24} />
          </button>
        </div>
      ) : (
        <label
          htmlFor={id}
          className={`flex flex-col items-center justify-center bg-zinc-800 rounded-xl outline-2 outline-zinc-300 outline-dashed hover:bg-zinc-900 focus-within:bg-zinc-900 cursor-pointer ${className}`}
        >
          <div className="flex flex-col items-center my-2">
            <IoImageOutline className="text-zinc-500" size={iconSize} />
            <input
              className="sr-only"
              type="file"
              id={id}
              name={name}
              ref={ref}
              onBlur={onBlur}
              onChange={handlePreview}
              accept="image/*"
              aria-label={label}
            />
            {description && (
              <p className="uppercase text-zinc-200 font-bold mt-2 text-center">
                {description}
              </p>
            )}
            {subDescription && (
              <p className="py-2 px-4 bg-zinc-700 text-zinc-200 rounded-3xl text-sm mt-2 text-center">
                {subDescription}
              </p>
            )}
          </div>
        </label>
      )}

      <FormErrors
        form={form}
        name={name}
      />
    </>
  );
}

export default InputImage;

