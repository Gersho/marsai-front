import { useParams } from "react-router-dom";
import TopPageTwo from "../components/base/TopPageTwo";
import { useApi } from "../hooks/useApi";
import { useEffect, useState } from "react";
import AdminMoviePanel from "../components/admin/AdminMoviePanel";

function AdminMovieTest() {
    const { slug } = useParams();
    const [movie, setMovie] = useState({});
    const api = useApi();


    useEffect(() => {
        const fetchMovie = async () => {
            try {
                // setLoading(true);

                const res = await api(
                    '/movies/' + slug
                );
                if (res && res.ok) {
                    const data = await res.json();
                    setMovie(data);
                }
            } catch (e) {
                console.error('error: ', e);
            } finally {
                // setLoading(false);
            }
        };
        fetchMovie();
    }, [api, slug]);

    return (
        <>
            <TopPageTwo />
            <AdminMoviePanel movie={movie} setMovie={setMovie} />
        </>
    );
}

export default AdminMovieTest;
