import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import TopPageTwo from "../components/base/TopPageTwo";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import TitlePage from "../components/base/TitlePage";
import { Trans, useTranslation } from "react-i18next";
import MovieSubmitInfo from "../components/MovieSubmit/MovieSubmitInfo";
import MovieSubmitDeclaration from "../components/MovieSubmit/MovieSubmitDeclaration";
import MovieSubmitDeliverables from "../components/MovieSubmit/MovieSubmitDeliverables";
import MovieSubmitTeamComposition from "../components/MovieSubmit/MovieSubmitTeamComposition";
import MovieCertificateOfOwnership from "../components/MovieSubmit/MovieSubmitCertificateOfOwnership";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function EditMoviePage() {
    const { token } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const api = useApi();
    const form = useForm({
        criteriaMode: 'all',
    });
    const {
        formState: { isSubmitting },
    } = form;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const target = 'submitMovieForm.page.';

    async function onSubmit(data) {
        console.log('data: ', data);
        const formData = new FormData();

        for (const [key, value] of Object.entries(data)) {
            if (key === 'director' || key === 'collaborators') {
                formData.append(key, JSON.stringify(value));
            } else if (value instanceof FileList) {
                if (value.length > 0) {
                    formData.append(key, value[0]);
                }
            } else {
                formData.append(key, value);
            }
        }

        console.log(formData);
        try {
            const res = await fetch(import.meta.env.VITE_SERVER_ADDRESS + '/movies/edit/' + movie.id, {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            if (res.ok) {
                toast.success('Form edit OK.');
                navigate('/');
            } else {
                toast.error(data.message + '\n' + data.errors[0].message);
            }
        } catch (e) {
            toast.error('Something went wrong: ' + e);
        }
    }

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
        console.log(movie);
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
        <>
            <TopPageTwo />
            <div className="pb-25 pt-10 flex flex-col items-center text-white">
                <div className="flex flex-col items-center w-5/6 gap-4 pb-4">
                    <div className="flex gap-2 items-center uppercase mb-6">
                        <BsStars className="text-amber-400 text-4xl" />
                        <p className="text-white font-thin text-lg">
                            {t(target + 'titlePart1')}
                        </p>
                    </div>
                    <TitlePage className="">
                        <Trans
                            i18nKey={t(target + 'titlePart2')}
                            components={[<strong key="highlight" className="text-accent" />]}
                        />
                    </TitlePage>
                    <p className="max-w-lg text-center">{t(target + 'paragraph')}</p>
                </div>
                <form
                    className="flex flex-col items-center gap-7 w-full"
                    onSubmit={form.handleSubmit(onSubmit)}
                    encType="multipart/form-data"
                    noValidate
                >
                    <input type="hidden" name="token" value={token}
                        {...form.register("token", { required: true })} />

                    <MovieSubmitInfo form={form} movie={movie} />
                    <MovieSubmitDeclaration form={form} movie={movie} />
                    <MovieSubmitDeliverables form={form} />
                    <MovieSubmitTeamComposition form={form} movie={movie} />
                    <MovieCertificateOfOwnership />
                    <button
                        className="flex justify-center items-center border p-3 w-1/3 rounded-md bg-accent border-red-500 uppercase cursor-pointer font-bold hover:bg-red-600 transition-all disabled:bg-primary disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <AiOutlineLoading3Quarters className="animate-spin size-6" />
                        ) : (
                            t(target + 'submitButton')
                        )}
                    </button>
                </form>
            </div>
        </>
    );

}

export default EditMoviePage;