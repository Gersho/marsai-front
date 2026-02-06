import BasicFormInput from './base/BasicFormInput'
import FormSection from './base/FormSection';
import FormSectionTitle from './base/FormSectionTitle';
import FormTextArea from './base/FormTextArea';

function MovieSubmitInfo() {
    return (
        <FormSection className="bg-zinc-700 text-zinc-200">
            <FormSectionTitle
                text="01. Identité du film"
            />

            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
                <BasicFormInput
                    label="Titre original *"
                    type="text"
                    name="original-title"
                    placeholder="Titre original"
                    title="Titre original"
                    autoFocus={true}
                    required={true} />

                <BasicFormInput
                    label="Traduction anglaise *"
                    type="text"
                    name="english-translation"
                    placeholder="Traduction anglaise"
                    title="Traduction anglaise"
                    required={true}
                />
            </div>

            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
                <BasicFormInput
                    label="Dureé exacte * (en secondes)"
                    type="text"
                    name="duration"
                    placeholder="ex: 60"
                    title="Dureé exacte (en secondes)"
                    required={true}
                />

                <BasicFormInput
                    label="Langue parlée/Principale du film *"
                    type="text"
                    name="language"
                    placeholder="Langue"
                    title="Langue parlée/Principale du film"
                    required={true}
                />

            </div>

            <div className="flex flex-col items-center w-full sm:flex-row sm:justify-between sm:gap-20">
                <FormTextArea
                    className=""
                    label="Synopsis langue originale *"
                    currentCount={0}
                    maxCount={300}
                    name="original-synopsis"
                    placeholder="Résumez l&apos;intention de votre film et l&apos;histoire qu&apos;il raconte en quelques lignes..."
                    title="synopsis langue originale (max. 300 caractères)"
                    required={true}

                />

                <FormTextArea
                    className=""
                    label="Synopsis anglais *"
                    currentCount={0}
                    maxCount={300}
                    name="english-synopsis"
                    placeholder="Traduction en anglais du synopsis"
                    title="synopsis anglais (max. 300 caractères)"
                    required={true}
                />
            </div>
        </FormSection>
    );
}

export default MovieSubmitInfo;
