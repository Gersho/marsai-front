import { useForm } from 'react-hook-form';
import InputImage from './base/InputImage';

function MovieSubmitDeliverables({ register }) {
  return (
    <div className="border-zinc-600 rounded-md w-11/12 flex flex-col items-center pb-4 gap-6 bg-zinc-800 text-zinc-200">
      <h2 className="px-4 py-2 self-start">03. Livrables & Accessibilité</h2>
      <div className="w-5/6 flex flex-col gap-2">
        <label htmlFor="form-youtube-url">
          Lien YouTube * (Public / Non-répertorié)
        </label>
        <input
          className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
          id="form-youtube-url"
          type="text"
          name="youtube-url"
          placeholder="https://www.youtube.com/watch?v=..."
          title="Lien YouTube (Public / Non-répertorié)"
          {...register('youtubeUrl')}
          required
        ></input>
        <div>
          <p>Sous-titres (.srt)</p>

          <input
            className="mr-3"
            type="checkbox"
            id="form-has-subtitles"
            name="has-subtitles"
            {...register('hasSubs')}
          ></input>
          <label htmlFor="form-has-subtitles">
            Voix ou textes nécessitant des sous-titres
          </label>
        </div>
        <label htmlFor="form-subtitles">
          Choisir fichier sous-titres
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-subtitles"
            type="file"
            name="subtitles"
            title="Choisir fichier .SRT"
            {...register('srt')}
          ></input>
        </label>
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
    </div>
  );
}

export default MovieSubmitDeliverables;
