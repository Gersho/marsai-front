
import toast from 'react-hot-toast';
import { useApi } from '../../../hooks/useApi';

function MovieStatusButton({
    movie,
    text,
    adminText,
    newStatus,
    setMovie,
    className = ""
}) {
    const api = useApi();

    async function updateMovieStatus(status) {
        try {
            const res = await api('/movies/' + movie.id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    status: status,
                    adminData: {
                        adminText: adminText,
                        adminStatus: status
                    }
                })
            });
            if (res.ok) {
                toast.success('Movie Status change OK.');
                setMovie({ ...movie, status: newStatus });
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
        <button onClick={() => updateMovieStatus(newStatus)} className={`text-black button  ${newStatus === movie.status ? "line-through bg-gray-600 cursor-not-allowed" : ` cursor-pointer ${className} `} `} disabled={newStatus === movie.status}>{text}</button>
    );
}

export default MovieStatusButton;