function MovieSubmitDeliverables() {
    return (
        <div className="border-2 border-gray rounded-md w-5/6 flex flex-col items-center pb-4 gap-3">
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

            <div className="w-5/6 ">

                <label htmlFor="form-cover-image">Vignette Officielle (16:9) *</label>
                <input type="file" id="form-cover-image" name="cover-image"></input>

                <label htmlFor="form-still-image">Galerie Médias (Stills - Max 3)</label>
                <input type="file" id="form-still-image" name="still-image" multiple></input>
            </div>
        </div>
    );
}

export default MovieSubmitDeliverables;