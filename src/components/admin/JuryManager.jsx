import { useCallback, useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import JuryForm from './JuryForm';
import { BiPlus } from 'react-icons/bi';

function JuryManager() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [juries, setJuries] = useState([]);
  const api = useApi();

  function toggleopover() {
    setIsPopoverVisible(value => !value);
  }

  const fetchJuries = useCallback(async () => {
    const res = await api('/juries');
    if (res) {
      const juries = await res.json();
      setJuries(juries);
    }
  }, [api]);

  const prct = 70;

  useEffect(() => {
    const loadJuries = async () => {
      fetchJuries();
    };
    loadJuries();
  }, [fetchJuries]);

  return (
    <>
      <div className="flex flex-col items-start p-3 gap-5">
        <h2>Jury management</h2>
        <button
          type="button"
          onClick={toggleopover}
          className="flex items-center gap-2 py-1 px-3 rounded-md bg-accent/90 hover:bg-accent cursor-pointer"
        >
          Add jury
          <BiPlus className="size-5" />
        </button>
        {isPopoverVisible && (
          <JuryForm onSuccess={fetchJuries} toggleVisible={toggleopover} />
        )}
        {juries.length > 0 &&
          juries.map(jury => (
            <div
              className="flex items-center justify-between gap-3 bg-secondary px-4 py-5 rounded-xl w-full"
              key={jury.id}
            >
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center uppercase text-3xl bg-primary size-20 rounded-xl">
                  {jury.firstname?.charAt(0)}
                </div>
                <div className="uppercase font-bold whitespace-nowrap">
                  {jury.firstname} {jury.lastname}
                </div>
              </div>
              <div className="w-1/2 h-3 rounded-2xl bg-white">
                <div
                  className={`bg-accent h-full rounded-2xl`}
                  style={{ width: `${prct}%` }}
                ></div>
              </div>
            </div>
          ))}
        {!juries.length && <div>Aucun jury dans la base de données</div>}
      </div>
    </>
  );
}

export default JuryManager;
