function MovieSubmitInfo() {
    return (

        <div >
            <h2>01. Identité du film</h2>
            <div>
                <label htmlFor="form-original-title">Titre original *</label>
                <input id="form-original-title" type="text" name="original-title" placeholder="Titre original" title="Titre original"
                    autoFocus required></input>

                <label htmlFor="form-english-translation">Traduction anglaise *</label>
                <input id="form-english-translation" type="text" name="english-translation" placeholder="Traduction anglaise" title="Traduction anglaise"
                    required></input>
            </div>

            <div>
                <label htmlFor="form-movie-duration">Dureé exacte * (en secondes)</label>
                <input id="form-movie-duration" type="text" name="duration" placeholder="ex: 60" title="Dureé exacte (en secondes)"
                    required></input>

                <label htmlFor="form-main-language">Langue parlée/Principale du film *</label>
                <input id="form-main-language" type="text" name="language" placeholder="Langue" title="Langue parlée/Principale du film"
                    required></input>
            </div>



            <div>
                <label htmlFor="form-movie-synopsis">synopsis langue originale * (max. 300 caractères)</label>
                <p>0/300</p>
                <input id="form-movie-synopsis" type="textarea" name="original-synopsis" placeholder="résumez l’intention de votre film et l’histoire qu’il raconte en quelques lignes..." title="synopsis langue originale (max. 300 caractères)"
                    required></input>
            </div>


            <div>
                <label htmlFor="form-movie-synopsis-english">synopsis anglais * (max. 300 caractères)</label>
                <p>0/300</p>
                <input id="form-movie-synopsis-english" type="textarea" name="english-synopsis" placeholder="résumez l’intention de votre film et l’histoire qu’il raconte en quelques lignes..." title="synopsis anglais* (max. 300 caractères)"
                    required></input>
            </div>


        </div>
    );
}

export default MovieSubmitInfo;