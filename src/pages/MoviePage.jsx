import { useParams } from "react-router";
import TopPageTwo from "../components/base/TopPageTwo";
import { useEffect, useState } from "react";


function MoviePage() {
    let { id } = useParams();
    let [data, setData] = useState({});
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState();

    useEffect(() => {
        async function getMovieData() {
            try {
                const res = await fetch(import.meta.env.VITE_SERVER_ADDRESS + '/movies/' + id, { method: 'GET' });
                const json = await res.json();
                if (res.ok) {
                    console.log(json);
                    setData(json);
                } else {
                    console.log(json);
                    setError(json.message || 'Erreur lors de la récupération des données.');
                }
            } catch (e) {
                console.error('error: ', e);
                setError('Impossible de se connecter au serveur.');
            } finally {
                setIsLoading(false);
            }
        }
        getMovieData();
    }, []);

    const basePageClasses = "min-h-screen bg-gray-900 text-gray-100";

    if (isLoading) {
        return (
            <div className={`${basePageClasses} flex justify-center items-center`}>
                <p className="text-xl text-red-400">Chargement des données du film...</p>
            </div>
        );
    }

    if (error || !data.original_title) {
        return (
            <div className={`${basePageClasses} p-8`}>
                <p className="text-xl text-red-500">
                    {error || "Le film demandé n'a pas été trouvé."}
                </p>
            </div>
        );
    }

    const TechnicalSheet = () => (
        <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
                <h3 className="text-xl font-bold text-red-500 mb-4 border-b border-gray-700 pb-2">
                    Détails Techniques
                </h3>

                <div>
                    <h3 className="text-xl font-bold text-gray-200 mb-2 uppercase tracking-wider border-l-4 border-red-500 pl-3">
                        Synopsis
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                        {data.english_synopsis}
                    </p>
                </div>

                <div className="pt-2 border-t border-gray-700">
                    <p className="font-medium text-gray-400 text-sm uppercase">Soumis le</p>
                    <p className="text-base text-white font-semibold mt-1">
                        {new Date(data.submitted_at).toLocaleDateString('fr-FR')}
                    </p>
                </div>
            </div>
        </div>
    );


    return (
        <div className={basePageClasses}>
            <TopPageTwo />

            <div className="max-w-7xl mx-auto w-full lg:max-w-full p-4 sm:p-8">



                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mx-auto">


                    <div className="md:order-1 md:col-span-1 space-y-4">

                        <h1 className="text-3xl font-extrabold text-white">{data.english_title}</h1>
                        <h2 className="text-xl font-light text-gray-300">{data.original_title}</h2>

                        <div className="flex items-center text-lg text-gray-400 space-x-4 border-b border-gray-700 pb-3">
                            <p className="text-white font-bold">{data.duration} s</p>
                            <span className="text-gray-600">•</span>
                            <span className={data.is_hybrid ? "text-yellow-400 font-bold" : "text-red-400 font-bold"}>
                                {data.is_hybrid ? "Hybrid" : "100% AI"}
                            </span>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <p className="font-medium text-gray-400 text-sm uppercase">Langue</p>
                                <p className="text-lg font-bold text-white">{data.language || 'N/A'}</p>
                            </div>

                        </div>


                        <div className="md:order-2 md:col-span-3 flex justify-center w-full">
                            <div className="bg-black rounded-xl overflow-hidden shadow-2xl w-full">

                                <video
                                    src={data.video_path}
                                    controls
                                    poster={data.cover_path}
                                    className="w-full h-full object-cover"
                                >
                                    Votre navigateur ne supporte pas la balise vidéo.
                                </video>
                            </div>
                        </div>
                        <div className="md:order-3 md:col-span-1">
                            <TechnicalSheet />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviePage;
