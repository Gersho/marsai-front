import InputImage from './base/InputImage';
import FormSectionTitle from './base/FormSectionTitle';
import FormSection from './base/FormSection';
import { useTranslation } from 'react-i18next';

function MovieSubmitDeliverables({ register }) {
  const { t } = useTranslation();
  const target = 'submitMovieForm.deliverables.';
  {
    t(target + 'titlePart1');
  }
  return (
    <FormSection className="bg-zinc-700 text-zinc-200">
      <FormSectionTitle text={t(target + 'title')} />

      <div className="flex flex-col gap-2 w-full">
        <div className="sm:self-center sm:flex sm:flex-col">
          <label htmlFor="form-movie-upload">{t(target + 'video.label')}</label>
          <input
            className="border"
            id="form-movie-upload"
            name="movie-upload"
            type="file"
            title={t(target + 'video.title')}
            {...register('video')}
          ></input>
        </div>

        <div>
          <p>{t(target + 'hasSubs.header')}</p>

          <input
            className="mr-3"
            type="checkbox"
            id="form-has-subtitles"
            name="has-subtitles"
            value="true"
            title={t(target + 'hasSubs.title')}
            {...register('hasSubs')}
          ></input>
          <label htmlFor="form-has-subtitles">
            {t(target + 'hasSubs.label')}
          </label>
        </div>
      </div>

      <div className="w-5/6 flex flex-col justify-center sm:flex-row sm:justify-evenly gap-6">
        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <p className="">{t(target + 'coverImage.header')}</p>
          <InputImage
            className="aspect-video w-full max-w-sm"
            label={t(target + 'coverImage.label')}
            id="poster"
            name="coverImage"
            iconSize={80}
            description={t(target + 'coverImage.description')}
            subDescription={t(target + 'coverImage.subDescription')}
            register={register}
          />
        </div>
        <div className="flex flex-col items-center gap-3 w-full">
          <p>{t(target + 'stills.header')}</p>
          <div className="flex justify-center items-center gap-3">
            <InputImage
              className="aspect-3/4 w-20 justify-center"
              label={t(target + 'stills.stillA')}
              id="still-image-a"
              name="stillImageA"
              register={register}
            />
            <InputImage
              className="aspect-3/4 w-20 justify-center"
              label={t(target + 'stills.stillB')}
              id="still-image-b"
              name="stillImageB"
              register={register}
            />
            <InputImage
              className="aspect-3/4 w-20 justify-center"
              label={t(target + 'stills.stillC')}
              id="still-image-c"
              name="stillImageC"
              register={register}
            />
          </div>
        </div>
      </div>
    </FormSection>
  );
}

export default MovieSubmitDeliverables;

