import MovieCertificateOfOwnership from '../components/MovieSubmit/MovieSubmitCertificateOfOwnership';
import MovieSubmitDeclaration from '../components/MovieSubmit/MovieSubmitDeclaration';
import MovieSubmitDeliverables from '../components/MovieSubmit/MovieSubmitDeliverables';
import MovieSubmitInfo from '../components/MovieSubmit/MovieSubmitInfo';
import MovieSubmitTeamComposition from '../components/MovieSubmit/MovieSubmitTeamComposition';

function SubmitMoviePage() {
  return (
    <>
      <div className="py-25 flex flex-col items-center text-white">
        <div className="flex flex-col items-center w-5/6 gap-4 pb-4">
          <h2 className="text-2xl">Appel à Projets 2026</h2>
          <h1 className="text-5xl">soumettre un film</h1>
          <p>
            Transmettez les éléments techniques, l&apos;usage de l&apos;IA et la
            composition de votre équipe. Tous les champs marqués d&apos;une
            étoile (*) sont obligatoires.
          </p>
        </div>
        <form className="flex flex-col items-center gap-7">
          <MovieSubmitInfo />
          <MovieSubmitDeclaration />
          <MovieSubmitDeliverables />
          <MovieSubmitTeamComposition />
          <MovieCertificateOfOwnership />
          <button className="border p-3 rounded-md">
            finaliser ma soumission
          </button>
        </form>
      </div>
    </>
  );
}

export default SubmitMoviePage;
