import { useTranslation } from 'react-i18next';
import FormSectionTitle from './base/FormSectionTitle';

function MovieCertificateOfOwnership() {
  const { t } = useTranslation();
  const target = "submitMovieForm.certificate.";

  return (
    <div className="border-2 border-accent rounded-md p-3 w-5/7 flex flex-col items-center">
      <FormSectionTitle
        className=""
        text={t(target + 'title')} />
      {/* <h2>{t(target + 'title')}</h2> */}
      <p className=''>
        {t(target + 'paragraph')}
      </p>
    </div>
  );
}

export default MovieCertificateOfOwnership;
