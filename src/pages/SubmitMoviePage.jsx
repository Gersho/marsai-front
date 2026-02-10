import { useForm } from 'react-hook-form';
import MovieCertificateOfOwnership from '../components/MovieSubmit/MovieSubmitCertificateOfOwnership';
import MovieSubmitDeclaration from '../components/MovieSubmit/MovieSubmitDeclaration';
import MovieSubmitDeliverables from '../components/MovieSubmit/MovieSubmitDeliverables';
import MovieSubmitInfo from '../components/MovieSubmit/MovieSubmitInfo';
import MovieSubmitTeamComposition from '../components/MovieSubmit/MovieSubmitTeamComposition';
import { useTranslation } from 'react-i18next';


function SubmitMoviePage() {
  const form = useForm();
  const { t } = useTranslation();
  const target = "submitMovieForm.page.";

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

    try {
      const res = await fetch('http://localhost:5000/movies', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        console.log();
      } else {
        console.log(data);
      }
    } catch (e) {
      console.error('error: ', e);
    }
  }

  return (
    <>
      <div className="py-25 flex flex-col items-center text-white">
        <div className="flex flex-col items-center w-5/6 gap-4 pb-4">
          <h2 className="text-2xl">{t(target + 'titlePart1')}</h2>
          <h1 className="text-5xl">{t(target + 'titlePart2')}</h1>
          <p>
            {t(target + 'paragraph')}
          </p>
        </div>
        <form
          className="flex flex-col items-center gap-7 w-full"
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <MovieSubmitInfo register={form.register} />
          <MovieSubmitDeclaration register={form.register} />
          <MovieSubmitDeliverables register={form.register} />
          <MovieSubmitTeamComposition form={form} />
          <MovieCertificateOfOwnership />
          <button className="border p-3 rounded-md">
            {t(target + 'submitButton')}
          </button>
        </form>
      </div>
    </>
  );
}

export default SubmitMoviePage;

