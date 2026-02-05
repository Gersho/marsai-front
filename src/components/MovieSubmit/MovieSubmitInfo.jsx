import BasicFormInput from './base/BasicFormInput'

function MovieSubmitInfo() {
    return (
        // TODO change gray to theme color
        <div className="flex flex-col items-center w-12/14 sm:w-10/14">
            <h2 className="self-start sm:self-center">01. Identité du film</h2>

            <div className="flex flex-col w-full sm:flex-row sm:justify-between">
                <BasicFormInput
                    label="Titre original *"
                    id="form-original-title"
                    type="text"
                    name="original-title"
                    placeholder="Titre original"
                    title="Titre original"
                    autoFocus={true}
                    required={true} />

                <BasicFormInput
                    label="Traduction anglaise *"
                    id="form-english-translation"
                    type="text"
                    name="english-translation"
                    placeholder="Traduction anglaise"
                    title="Traduction anglaise"
                    required={true}
                />
            </div>

            <div className="flex flex-col w-full sm:flex-row sm:justify-around">
                <BasicFormInput
                    label="Dureé exacte * (en secondes)"
                    id="form-movie-duration"
                    type="text"
                    name="duration"
                    placeholder="ex: 60"
                    title="Dureé exacte (en secondes)"
                    required={true}
                />

                <BasicFormInput
                    label="Langue parlée/Principale du film *"
                    id="form-main-language"
                    type="text"
                    name="language"
                    placeholder="Langue"
                    title="Langue parlée/Principale du film"
                    required={true}
                />

            </div>

            <div className="flex flex-col items-center w-full sm:flex-row sm:justify-around">
                <div className="flex flex-col w-full sm:w-3/7">
                    <div className="flex justify-between">
                        <label htmlFor="form-movie-synopsis">
                            synopsis langue originale *
                        </label>
                        <p>0/300</p>
                    </div>
                    <textarea
                        className="border border-gray rounded-sm p-3 my-2 h-36 sm:h-44"
                        id="form-movie-synopsis"
                        type="textarea"
                        name="original-synopsis"
                        placeholder="résumez l’intention de votre film et l’histoire qu’il raconte en quelques lignes..."
                        title="synopsis langue originale (max. 300 caractères)"
                        required
                    ></textarea>
                </div>

                <div className="flex flex-col w-full sm:w-3/7">
                    <div className="flex justify-between">
                        <label htmlFor="form-movie-synopsis-english">
                            synopsis anglais *
                        </label>
                        <p>0/300</p>
                    </div>
                    <textarea
                        className="border border-gray rounded-sm p-3 my-2 h-36 sm:h-44"
                        id="form-movie-synopsis-english"
                        type="textarea"
                        name="english-synopsis"
                        placeholder="résumez l’intention de votre film et l’histoire qu’il raconte en quelques lignes..."
                        title="synopsis anglais* (max. 300 caractères)"
                        required
                    ></textarea>
                </div>
            </div>
        </div>
    );
}

export default MovieSubmitInfo;
