import { useTranslation } from 'react-i18next';

function MovieCertificateOfOwnership() {
  const { t } = useTranslation();
  const target = "submitMovieForm.certificate.";

  return (
    <div className="border-2 border-gray rounded-md pl-2 pr-1 py-1 w-5/6">
      <h2>{t(target + 'title')}</h2>
      <p>
        {t(target + 'paragraph')}
      </p>
    </div>
  );
}

export default MovieCertificateOfOwnership;
