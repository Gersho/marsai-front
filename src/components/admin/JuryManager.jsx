import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import JuryForm from './JuryForm';

function JuryManager() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const api = useApi();

  //TODO add jury form in a component?

  function toggleopover() {
    setIsPopoverVisible(value => !value);
  }

  useEffect(() => {
    // addJury();
    const fetchJuries = async () => {
      const res = await api('/juries');
      if (res) {
        const juries = await res.json();
        console.log(juries);
      }
    };
    fetchJuries();
  }, []);

  return (
    <>
      <div className="flex flex-col items-start">
        <h2>Jury management</h2>
        <button
          type="button"
          onClick={toggleopover}
          className="py-1 px-3 rounded-xl bg-accent/90 hover:bg-accent cursor-pointer"
        >
          Add jury
        </button>
        {isPopoverVisible && <JuryForm toggleVisible={toggleopover} />}
      </div>
    </>
  );
}

export default JuryManager;
