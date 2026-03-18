import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import TopPageTwo from "../components/base/TopPageTwo";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function EditMoviePage() {
    const { token } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const api = useApi();

    useEffect(() => {
        const fetchMovieIdFromToken = async () => {
            try {
                const res = await api(
                    '/movie-update/' + token
                );
                if (res && res.ok) {
                    const data = await res.json();
                    return data.movie_id;
                }
            } catch (e) {
                console.error('error: ', e);
            };
        }

        const fetchMovie = async (movieId) => {
            try {
                const res = await api(
                    '/movies/id/' + movieId
                );
                if (res && res.ok) {
                    const data = await res.json();
                    return data;
                }
            } catch (e) {
                console.error('error: ', e);
            }
        };

        const fetchData = async () => {
            setMovie(await fetchMovie(await fetchMovieIdFromToken()));
            setLoading(false);
        }
        fetchData();
    }, []);


    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center h-screen gap-12 text-neutral-300">
                <p>Loading...</p>
                <AiOutlineLoading3Quarters className="animate-spin size-24" />
            </div>
        );
    }

    return (
        <div>
            <TopPageTwo />
            <div className="text-white">
                <p> test</p>
                <p>{movie.english_title}</p>
            </div>

        </div>
    );

}

export default EditMoviePage;