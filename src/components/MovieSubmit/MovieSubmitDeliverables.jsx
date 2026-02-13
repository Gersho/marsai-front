import InputImage from './base/InputImage';
import FormSectionTitle from './base/FormSectionTitle';
import FormSection from './base/FormSection';
import { useTranslation } from 'react-i18next';
import FormErrors from "./base/FormErrors";
// import { MdOutlineCloudUpload } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import InputMovie from './base/InputMovie';

function MovieSubmitDeliverables({ form }) {
  const { t } = useTranslation();
  const target = 'submitMovieForm.deliverables.';
  const errors = "submitMovieForm.formErrors.";

  return (
    <FormSection className=" text-zinc-200">
      <FormSectionTitle text={t(target + 'title')} />

      <div className="flex flex-col gap-2 w-full">


        <InputMovie
          form={form}
        />


        {/* <div className="md:self-center flex flex-col gap-2 items-center w-full">
          <p>{t(target + 'video.label')}</p>

          <label
            className="flex flex-col items-center justify-center bg-zinc-800 rounded-xl outline-2 outline-zinc-300 outline-dashed hover:bg-zinc-900 focus-within:bg-zinc-900 cursor-pointer w-1/2 h-44"
            htmlFor="form-movie-upload">

            <div className='flex flex-col items-center '>
              <BiCameraMovie size={80} />
              <p className='uppercase text-zinc-200 font-bold mt-2 text-center'>Cliquez pour upload</p>
              <p className="py-2 px-4 bg-zinc-700 text-zinc-200 rounded-3xl text-sm mt-2 text-center">MP4 ou MKV • Max 500Mo</p>
            </div>

            <input
              className="sr-only"
              id="form-movie-upload"
              name="movie-upload"
              type="file"
              title={t(target + 'video.title')}
              {...form.register('video', { required: t(errors + 'required') })}
            ></input>

          </label>
          <FormErrors
            form={form}
            name={"video"}
          />

        </div> */}

        <div className='flex flex-col gap-2 pb-10 pt-1 items-center'>
          {/* <p>{t(target + 'hasSubs.header')}</p> */}

          <div className='flex flex-row items'>
            <input
              className="mr-3"
              type="checkbox"
              id="form-has-subtitles"
              name="has-subtitles"
              value="true"
              title={t(target + 'hasSubs.title')}
              {...form.register('hasSubs')}
            ></input>
            <label htmlFor="form-has-subtitles">
              {t(target + 'hasSubs.label')}
            </label>
          </div>


        </div>
      </div>

      <div className="w-5/6 flex flex-col justify-center md:flex-row md:justify-evenly gap-6">
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
            form={form}
            validation={{ required: t(errors + 'required') }}
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
              form={form}
            />
            <InputImage
              className="aspect-3/4 w-20 justify-center"
              label={t(target + 'stills.stillB')}
              id="still-image-b"
              name="stillImageB"
              form={form}
            />
            <InputImage
              className="aspect-3/4 w-20 justify-center"
              label={t(target + 'stills.stillC')}
              id="still-image-c"
              name="stillImageC"
              form={form}
            />
          </div>
        </div>
      </div>
    </FormSection>
  );
}

export default MovieSubmitDeliverables;

