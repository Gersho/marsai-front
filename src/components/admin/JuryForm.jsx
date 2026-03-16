import { useFieldArray, useForm } from 'react-hook-form';
import { useApi } from '../../hooks/useApi';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function JuryForm({ onSuccess, toggleVisible }) {
  const [inputValue, setInputValue] = useState('');

  const form = useForm({
    defaultValues: { juries: [] },
    mode: 'onChange',
  });

  const api = useApi();
  const {
    setError,
    clearErrors,
    formState: { isSubmitting, errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    name: 'juries',
    control: form.control,
  });

  const [emailError, setEmailError] = useState('');

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const email = inputValue.trim();

      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const isDuplicate = fields.some(field => field.email === email);

      if (!isValidEmail) {
        setError('emailInput', { message: 'Email invalide' });
        return;
      }

      if (isDuplicate) {
        setError('emailInput', { message: 'Cet email est déjà ajouté' });
        return;
      }

      append({ email });
      setEmailError([]);
      setInputValue('');
      clearErrors('emailInput');
    }
  };

  async function onSubmit(data) {
    const res = await api('/jury-invites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      onSuccess();
      toggleVisible();
    } else if (res.status === 409) {
      const body = await res.json();
      setEmailError(body.error.value);
      setError('emailInput', { message: body.message });
    }
  }

  return (
    <div className="fixed left-0 top-0 h-full w-full flex items-center justify-center bg-neutral-900/5 backdrop-blur-sm z-50">
      <form
        className="flex flex-col w-full max-w-2xl gap-6 bg-secondary p-6 rounded-lg border border-neutral-700 shadow-xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center border-b border-neutral-700 pb-4">
          <h3 className="font-bold uppercase tracking-wide">
            Ajouter des jurys
          </h3>
          <button
            type="button"
            onClick={toggleVisible}
            className="hover:text-red-500 transition-colors"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap w-full items-center gap-2 pb-4 cursor-default">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className={`flex items-center m-0 py-2 px-3 gap-2 bg-primary text-white w-fit rounded-full text-sm transition-all ${emailError === field.email ? 'border border-red-400' : ''}`}
              >
                <span>{field.email}</span>
                <button
                  type="button"
                  onClick={() => {
                    remove(index);
                    setEmailError('');
                    clearErrors();
                  }}
                  className="hover:bg-neutral-400 rounded-full p-0.5 transition-colors cursor-pointer"
                >
                  <IoMdClose size={14} />
                </button>
              </div>
            ))}
          </div>
          <label htmlFor="jury-input" className="text-sm font-medium">
            Emails des jurys à ajouter
          </label>

          <div className="flex p-2 border-2 border-neutral-500 rounded-md bg-white/5 focus-within:border-accent">
            <input
              id="jury-input"
              type="text"
              placeholder={'Entrez un email et appuyez sur Entrée'}
              className="outline-none w-full p-1"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          {errors.emailInput && (
            <span className="text-red-400 text-xs">
              {errors.emailInput.message}
            </span>
          )}
        </div>

        <button
          className="flex justify-center items-center bg-accent hover:bg-accent/80 text-white font-bold py-3 rounded-md transition-all disabled:opacity-50"
          type="submit"
          disabled={isSubmitting || fields.length === 0 || errors.emailInput}
        >
          {isSubmitting ? (
            <AiOutlineLoading3Quarters className="animate-spin size-6" />
          ) : (
            'Envoyer les invitations'
          )}
        </button>
      </form>
    </div>
  );
}

export default JuryForm;
