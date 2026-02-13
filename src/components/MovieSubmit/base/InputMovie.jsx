import { BiCameraMovie } from "react-icons/bi";
import FormErrors from "./FormErrors";
import { useTranslation } from 'react-i18next';

function InputMovie({
    form,
}) {
    const { t } = useTranslation();
    const target = 'submitMovieForm.deliverables.video.';
    const errors = "submitMovieForm.formErrors.";



    return (

        <div className="md:self-center flex flex-col gap-2 items-center w-full">
            <p>{t(target + 'label')}</p>

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
                    title={t(target + 'title')}
                    {...form.register('video', { required: t(errors + 'required') })}
                ></input>

            </label>
            <FormErrors
                form={form}
                name={"video"}
            />

        </div>);
}

export default InputMovie;