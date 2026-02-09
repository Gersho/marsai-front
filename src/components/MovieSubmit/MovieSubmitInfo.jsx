import BasicFormInput from './base/BasicFormInput'
import FormSection from './base/FormSection';
import FormSectionTitle from './base/FormSectionTitle';
import FormTextArea from './base/FormTextArea';

function MovieSubmitInfo({ register }) {
    return (
        <FormSection className="bg-zinc-700 text-zinc-200">
            <FormSectionTitle
                text="01. Identité du film"
            />

            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
                <BasicFormInput
                    label="Titre original *"
                    type="text"
                    id="form-original-title"
                    placeholder="Titre original"
                    title="Titre original"
                    register={register}
                    name="originalTitle"
                    autoFocus={true}
                    required={true} />

                <BasicFormInput
                    label="Traduction anglaise *"
                    type="text"
                    id="form-english-translation"
                    placeholder="Traduction anglaise"
                    title="Traduction anglaise"
                    register={register}
                    name="englishTitle"
                    required={true}
                />
            </div>

            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
                <BasicFormInput
                    label="Dureé exacte * (en secondes)"
                    type="text"
                    id="form-duration"
                    placeholder="ex: 60"
                    title="Dureé exacte (en secondes)"
                    register={register}
                    name="duration"
                    required={true}
                />

                <BasicFormInput
                    label="Langue parlée/Principale du film *"
                    type="text"
                    id="form-language"
                    placeholder="Langue"
                    title="Langue parlée/Principale du film"
                    register={register}
                    name="language"
                    required={true}
                />

            </div>

            <div className="flex flex-col items-center w-full sm:flex-row sm:justify-between sm:gap-20">
                <FormTextArea
                    className=""
                    label="Synopsis langue originale *"
                    maxCount={300}
                    id="form-original-synopsis"
                    placeholder="Résumez l&apos;intention de votre film et l&apos;histoire qu&apos;il raconte en quelques lignes..."
                    title="synopsis langue originale (max. 300 caractères)"
                    register={register}
                    name="originalSynopsis"
                    required={true}

                />

                <FormTextArea
                    className=""
                    label="Synopsis anglais *"
                    maxCount={300}
                    id="form-english-synopsis"
                    placeholder="Traduction en anglais du synopsis"
                    title="synopsis anglais (max. 300 caractères)"
                    register={register}
                    name="englishSynopsis"
                    required={true}
                />
            </div>
        </FormSection>
    );
}

export default MovieSubmitInfo;
