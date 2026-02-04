function MovieSubmitInfo() {
    return (
        // TODO change gray to theme color
        <div className=" rounded-md w-11/12 flex flex-col items-center pb-4">
            <h2 className="px-4 py-2 self-start sm:self-center">01. Identité du film</h2>

            <div className="flex flex-col w-5/6 sm:flex-row sm:justify-around">
                <div className="flex flex-col  sm:flex sm:flex-col sm:w-3/7">
                    <label htmlFor="form-original-title">Titre original *</label>
                    <input className="border border-gray rounded-sm pl-2 py-1 my-2" id="form-original-title" type="text" name="original-title" placeholder="Titre original" title="Titre original"
                        autoFocus required></input>
                </div>
                <div className="flex flex-col  sm:flex sm:flex-col  sm:w-3/7">

                    <label htmlFor="form-english-translation">Traduction anglaise *</label>
                    <input className="border border-gray rounded-sm pl-2 py-1 my-2" id="form-english-translation" type="text" name="english-translation" placeholder="Traduction anglaise" title="Traduction anglaise"
                        required></input>
                </div>
            </div>

            <div className="flex flex-col w-5/6 sm:flex-row sm:justify-around">

                <div className="flex flex-col  sm:flex sm:flex-col sm:w-3/7">
                    <label htmlFor="form-movie-duration">Dureé exacte * (en secondes)</label>
                    <input className="border border-gray rounded-sm pl-2 py-1 my-2" id="form-movie-duration" type="text" name="duration" placeholder="ex: 60" title="Dureé exacte (en secondes)"
                        required></input>
                </div>
                <div className="flex flex-col  sm:flex sm:flex-col sm:w-3/7">

                    <label htmlFor="form-main-language">Langue parlée/Principale du film *</label>
                    <input className="border border-gray rounded-sm pl-2 py-1 my-2" id="form-main-language" type="text" name="language" placeholder="Langue" title="Langue parlée/Principale du film"
                        required></input>
                </div>
            </div>


            <div className="flex flex-col items-center w-full sm:flex-row sm:w-5/6 sm:justify-around">

                <div className="flex flex-col w-5/6 sm:w-3/7">
                    <div className="flex justify-between">
                        <label htmlFor="form-movie-synopsis">synopsis langue originale *</label>
                        <p >0/300</p>
                    </div>
                    <textarea className="border border-gray rounded-sm pl-2 py-1 my-2" id="form-movie-synopsis" type="textarea" name="original-synopsis" placeholder="résumez l’intention de votre film et l’histoire qu’il raconte en quelques lignes..." title="synopsis langue originale (max. 300 caractères)"
                        required></textarea>
                </div>


                <div className="flex flex-col w-5/6 sm:w-3/7">
                    <div className="flex justify-between">
                        <label className="self-start" htmlFor="form-movie-synopsis-english">synopsis anglais *</label>
                        <p>0/300</p>
                    </div>
                    <textarea className="border border-gray rounded-sm pl-2 py-1 my-2" id="form-movie-synopsis-english" type="textarea" name="english-synopsis" placeholder="résumez l’intention de votre film et l’histoire qu’il raconte en quelques lignes..." title="synopsis anglais* (max. 300 caractères)"
                        required></textarea>
                </div>
            </div>


        </div>
    );
}

export default MovieSubmitInfo;