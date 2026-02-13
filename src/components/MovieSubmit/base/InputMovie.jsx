import { BiCameraMovie } from "react-icons/bi";
import FormErrors from "./FormErrors";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';


function InputMovie({
    form,
}) {
    const { t } = useTranslation();
    const target = 'submitMovieForm.deliverables.video.';
    const errors = "submitMovieForm.formErrors.";

    const [preview, setPreview] = useState(null);
    const {
        register,
        resetField
    } = form;

    const { onChange: onFormChange, onBlur, ref } = register('video', { required: t(errors + 'required') });

    function handlePreview(e) {
        onFormChange(e);
        console.log(e);
        const file = e.target.files[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
        }
    }

    function removePreview(e) {
        e.preventDefault();
        resetField(name);
        setPreview(null);
    }

    useEffect(() => {
        return () => preview && URL.revokeObjectURL(preview);
    }, [preview]);

    return (
        <>
            {preview ? (

                <div className="relative group w-fit self-center">
                    <video
                        className={`rounded-xl outline-2 outline-dashed outline-zinc-300 aspect-video object-scale-down w-full max-w-sm`}
                        src={preview}
                        autoPlay
                        alt="preview"
                    />
                    <button
                        type="button"
                        className="absolute top-2 right-2 bg-zinc-700 p-0.5 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-zinc-800"
                        onClick={removePreview}
                        aria-label="Remove image"
                    >
                        <IoMdClose size={24} />
                    </button>
                </div>



            ) : (
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
                            type="file"
                            id="form-movie-upload"
                            name="video"
                            ref={ref}
                            onBlur={onBlur}
                            onChange={handlePreview}
                            accept="video/*"
                            title={t(target + 'title')}
                        ></input>
                    </label>
                </div>)}

            <FormErrors
                className="self-center"
                form={form}
                name={"video"}
            />
        </>
    );


}

export default InputMovie;
