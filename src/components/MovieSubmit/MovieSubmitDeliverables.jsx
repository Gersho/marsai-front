import InputImage from './base/InputImage';
import FormSectionTitle from './base/FormSectionTitle';
import FormSection from './base/FormSection';
import { useTranslation } from 'react-i18next';

function MovieSubmitDeliverables({ register }) {

  return (
    <FormSection className="bg-zinc-700 text-zinc-200">
      <FormSectionTitle text="03. Livrables & Accessibilité" />

      <div className="flex flex-col gap-2 w-full">
        <div className="sm:self-center sm:flex sm:flex-col">
          <label htmlFor="form-movie-upload">Ajout du film</label>
          <input className="border" id="form-movie-upload" name="movie-upload" type="file" {...register('video')} ></input>
        </div>

        <div>
          <p>Sous-titres (.srt)</p>

          <input
            className="mr-3"
            type="checkbox"
            id="form-has-subtitles"
            name="has-subtitles"
            value="true"
            {...register('hasSubs')}
          ></input>
          <label htmlFor="form-has-subtitles">
            La video contient des sous titres incrustés
          </label>
        </div>

      </div>

      <div className="w-5/6 flex flex-col justify-center sm:flex-row sm:justify-evenly gap-6">
        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <p className="">Vignette Officielle (16:9) *</p>
          <InputImage
            className="aspect-video w-full max-w-sm"
            label="Vignette Officielle (16:9) *"
            id="poster"
            name="coverImage"
            iconSize={80}
            description="Cliquez pour upload"
            subDescription="PNG ou JPG • Max 15Mo"
            register={register}
          />
        </div>
        <div className="flex flex-col items-center gap-3 w-full">
          <p>Galerie Médias (Stills - Max 3)</p>
          <div className="flex justify-center items-center gap-3">
            <InputImage
              className="aspect-3/4 w-20 justify-center"
              label="Galerie Médias premiere image"
              id="still-image-a"
              name="stillImageA"
              register={register}
            />
            <InputImage
              className="aspect-3/4 w-20 justify-center"
              label="Galerie Médias deuxieme image"
              id="still-image-b"
              name="stillImageB"
              register={register}
            />
            <InputImage
              className="aspect-3/4 w-20 justify-center"
              label="Galerie Médias troisieme image"
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
