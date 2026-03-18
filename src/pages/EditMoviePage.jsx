import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

function EditMoviePage() {
    const { token } = useParams();
    // const [movie, setMovie] = useState({});
    const [movieId, setMovieId] = useState(0);
    const api = useApi();

    useEffect(() => {
        const fetchMovieIdFromToken = async () => {
            try {
                console.log("token " + token);
                const res = await api(
                    '/movie-update/' + token
                );
                if (res && res.ok) {
                    const data = await res.json();
                    console.log("data movie id in fetchMovieIdFromToken " + data.movie_id);
                    console.log("data in fetchMovieIdFromToken");
                    console.log(data);
                    // setMovieId(data.movie_id);
                    setMovieId(5);
                    console.log("movieId from state " + movieId);
                }
            } catch (e) {
                console.error('error: ', e);
            };
        }

        const fetchMovie = async () => {
            try {
                console.log(movieId);
                const res = await api(
                    '/movie/id/' + movieId
                );
                if (res && res.ok) {
                    const data = await res.json();
                    console.log(" movie data " + data);
                }
            } catch (e) {
                console.error('error: ', e);
            }
        };


        const fetchData = async () => {
            await fetchMovieIdFromToken();
            console.log("plop");
            // await fetchMovie();
        }
        fetchData();
    }, []);


    return (
        <div>
            <p></p>
        </div>
    );

}

export default EditMoviePage;