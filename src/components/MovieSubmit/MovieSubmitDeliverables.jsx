function MovieSubmitDeliverables() {
    return (
        <div>
            <h2>03. Livrables & Accessibilité</h2>

            <div>

                <label htmlFor="form-youtube-url">Lien YouTube * (Public / Non-répertorié)</label>
                <input id="form-youtube-url" type="text" name="youtube-url" placeholder="https://www.youtube.com/watch?v=..." title="Lien YouTube (Public / Non-répertorié)"
                    required></input>





                <p>Sous-titres (.srt)</p>
                <label htmlFor="form-has-subtitles">Voix ou textes nécessitant des sous-titres</label>
                <input type="checkbox" id="form-has-subtitles" name="has-subtitles" value="true"></input>


                <label htmlFor="form-subtitles">Choisir fichier sous-titres</label>
                <input id="form-subtitles" type="file" name="subtitles" title="Choisir fichier .SRT"></input>


            </div>
            <div>

                <label htmlFor="form-cover-image">Vignette Officielle (16:9) *</label>
                <input type="file" id="form-cover-image" name="cover-image"></input>

                <label htmlFor="form-still-image">Galerie Médias (Stills - Max 3)</label>
                <input type="file" id="form-still-image" name="still-image" multiple></input>
            </div>
        </div>
    );
}

export default MovieSubmitDeliverables;