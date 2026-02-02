import MovieCertificateOfOwnership from "../components/MovieSubmit/MovieSubmitCertificateOfOwnership";
import MovieSubmitDeclaration from "../components/MovieSubmit/MovieSubmitDeclaration";
import MovieSubmitDeliverables from "../components/MovieSubmit/MovieSubmitDeliverables";
import MovieSubmitInfo from "../components/MovieSubmit/MovieSubmitInfo";
import MovieSubmitTeamComposition from "../components/MovieSubmit/MovieSubmitTeamComposition";

function SubmitMoviePage() {
    return (
        <>
            <div className="py-25 text-white">
                <div>
                    <p>Appel à Projets 2026</p>
                    <h1>soumettre un film</h1>
                    <p>Transmettez les éléments techniques, l&apos;usage de l&apos;IA et la composition de votre équipe. Tous les champs marqués d&apos;une étoile (*) sont obligatoires.</p>
                </div>
                <form action="">

                    <MovieSubmitInfo />
                    <MovieSubmitDeclaration />
                    <MovieSubmitDeliverables />
                    <MovieSubmitTeamComposition />
                    <MovieCertificateOfOwnership />
                    <button>finaliser ma soumission</button>
                </form>
            </div>
        </>


    );
}

export default SubmitMoviePage;