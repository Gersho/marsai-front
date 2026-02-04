import { IoImageOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";


function MovieSubmitDeliverables() {

    const { register, handleSubmit } = useForm()
    const [poster, setPoster] = useState(null);
    const [posterPreview, setPosterPreview] = useState(null);

    function handlePreview(e) {

        console.log(e.target.files)
        setPoster(e.target.files[0])
        // console.log()
    }

    function removePreview(e) {
        e.preventDefault();
        setPosterPreview(null)
    }

    useEffect(() => {
        if (poster) {
            const objectUrl = URL.createObjectURL(poster);
            setPosterPreview(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [poster])

    return (
        <div className="border-zinc-600 rounded-md w-11/12 flex flex-col items-center pb-4 gap-6 bg-zinc-800 text-zinc-200">
            <h2 className="px-4 py-2 self-start">03. Livrables & Accessibilité</h2>
            <div className="w-5/6 flex flex-col gap-2">
                <label htmlFor="form-youtube-url">Lien YouTube * (Public / Non-répertorié)</label>
                <input className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2" id="form-youtube-url" type="text" name="youtube-url" placeholder="https://www.youtube.com/watch?v=..." title="Lien YouTube (Public / Non-répertorié)"
                    required></input>
                <div>
                    <p>Sous-titres (.srt)</p>

                    <input className="mr-3" type="checkbox" id="form-has-subtitles" name="has-subtitles" value="true"></input>
                    <label htmlFor="form-has-subtitles">Voix ou textes nécessitant des sous-titres</label>
                </div>
                <label htmlFor="form-subtitles">Choisir fichier sous-titres

                    <input className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2" id="form-subtitles" type="file" name="subtitles" title="Choisir fichier .SRT"></input>
                </label>
            </div>
            <div className="w-5/6 flex flex-col gap-5">
                <p className="self-start">Vignette Officielle (16:9) *</p>
                <label className="flex flex-col gap-3 items-center" htmlFor="form-cover-image">
                    {posterPreview ?
                        <div className="relative group">
                            <img className="aspect-video object-cover rounded-xl w-full max-w-sm outline-2 outline-dashed outline-zinc-300" src={posterPreview} alt="preview" />
                            <button type="button" className="absolute top-2 right-2 bg-zinc-700 p-0.5 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-zinc-800"
                                onClick={removePreview}>
                                <IoMdClose size={24} />
                            </button>
                        </div>
                        :
                        <div className="flex flex-col items-center justify-center aspect-video gap-5 m-2 w-full max-w-sm bg-zinc-800 rounded-xl outline-2 outline-zinc-300 outline-dashed hover:bg-zinc-900 focus-within:bg-zinc-900">
                            <div>
                                <IoImageOutline className="text-zinc-500" size={80} />
                                <input className="sr-only" type="file" id="form-cover-image" name="cover-image" {...register('poster')} onChange={handlePreview}></input>
                            </div>
                            <p className="uppercase text-zinc-200 font-bold">Cliquez pour upload</p>
                            <p className="py-2 px-4 bg-zinc-700 text-zinc-200 rounded-3xl  text-sm">PNG ou JPG • Max 15Mo</p>
                        </div>}
                </label>
                <div>
                    <p>Galerie Médias (Stills - Max 3)</p>
                    <div className="flex justify-center">
                        <label className="flex justify-center" htmlFor="form-still-image-a" aria-label="Galerie Médias première image">
                            <div className="flex justify-center gap-5 m-2 w-full max-w-sm bg-zinc-800 p-5 rounded-xl border-2 border-zinc-300 border-dashed hover:bg-zinc-900 focus-within:bg-zinc-900">
                                <IoImageOutline className="text-zinc-500" size={40} />
                                <input className="sr-only" type="file" id="form-still-image-a" name="still-image-a"></input>
                            </div>
                        </label>
                        <label className="flex justify-center" htmlFor="form-still-image-b" aria-label="Galerie Médias deuxieme image">
                            <div className="flex justify-center gap-5 m-2 w-full max-w-sm bg-zinc-800 p-5 rounded-xl border-2 border-zinc-300 border-dashed hover:bg-zinc-900 focus-within:bg-zinc-900">
                                <IoImageOutline className="text-zinc-500" size={40} />
                                <input className="sr-only" type="file" id="form-still-image-b" name="still-image-b"></input>
                            </div>
                        </label>
                        <label className="flex justify-center" htmlFor="form-still-image-c" aria-label="Galerie Médias troisieme image">
                            <div className="flex justify-center gap-5 m-2 w-full max-w-sm bg-zinc-800 p-5 rounded-xl border-2 border-zinc-300 border-dashed hover:bg-zinc-900 focus-within:bg-zinc-900">
                                <IoImageOutline className="text-zinc-500" size={40} />
                                <input className="sr-only" type="file" id="form-still-image-c" name="still-image-c"></input>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieSubmitDeliverables;