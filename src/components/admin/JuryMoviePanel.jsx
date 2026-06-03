import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import toast from "react-hot-toast";

function JuryMoviePanel({ movie }) {
    const [textContent, setTextContent] = useState('');
    const [value, setValue] = useState(1)
    const api = useApi();

    async function rateMovie() {
        try {
            const res = await api('/movies/' + movie.id + "/ratings", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    note: value,
                    comment: textContent
                })
            });
            if (res.ok) {
                toast.success('Movie Vote OK.');
            }
            else {
                toast.error('Something went wrong: ');
            }
        }
        catch (e) {
            toast.error('Something went wrong: ' + e);
        }
    }

    return (

        <div className="bg-primary flex flex-col items-center text-white">
            <p className="">Jury Vote Panel</p>
            <div className="flex flex-col text-white bg-primary  w-5/7 items-center gap-4">
                <textarea className="h-50 w-full bg-white text-black rounded-xl p-3" name=" admin-response" id="admin-response"
                    // &#10; is newline
                    value={textContent} placeholder="Jury comment (optional)" onChange={e => setTextContent(e.target.value)} ></textarea>
                <div>
                    <input type="range" onChange={e => setValue(e.target.value)} id="score" name="score" min="1" max="10" defaultValue={1} />
                    <label htmlFor="score"></label>
                </div>
                <button onClick={() => rateMovie()} className="text-white bg-orange-500 button   cursor-pointer">Vote {" " + value} </button>

            </div >
        </div>


    );
}

export default JuryMoviePanel;