import { IoImageOutline } from "react-icons/io5";


function MovieSubmitDeliverables() {
    return (
        <div className=" border-zinc-600 rounded-md  flex flex-col items-center pb-4 gap-3 bg-zinc-800 text-zinc-200">
            <h2 className="px-4 py-2 self-start">03. Livrables & Accessibilité</h2>

            <div className="w-5/6 flex flex-col">

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

            <div className="w-5/6">

                <label className="flex flex-col items-center" htmlFor="form-cover-image">
                    <p className="self-start">Vignette Officielle (16:9) *</p>
                    <div className="flex flex-col items-center gap-5 m-2 w-full max-w-sm bg-zinc-800 p-5 rounded-xl border-2 border-zinc-300 border-dashed hover:bg-zinc-900" >
                        <div>
                            <IoImageOutline className="text-zinc-500" size={80} />
                            <input className="hidden" type="file" id="form-cover-image" name="cover-image"></input>
                        </div>
                        <p className="uppercase text-zinc-200 font-bold">Cliquez pour upload</p>
                        <p className="py-2 px-4 bg-zinc-700 text-zinc-200 rounded-3xl  text-sm">PNG ou JPG • Max 15Mo</p>
                    </div>
                </label>

                <label htmlFor="form-still-image-a">Galerie Médias (Stills - Max 3)</label>
                <input type="file" id="form-still-image-a" name="still-image-a"></input>
                <label htmlFor="form-still-image-b" hidden>Galerie Médias deuxieme image</label>
                <input type="file" id="form-still-image-b" name="still-image-b"></input>
                <label htmlFor="form-still-image-c" hidden>Galerie Médias troisieme image</label>
                <input type="file" id="form-still-image-c" name="still-image-c"></input>
            </div>
        </div>
    );
}

export default MovieSubmitDeliverables;