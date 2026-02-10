import { useTranslation } from 'react-i18next';
import BasicFormInput from './base/BasicFormInput'
import FormSection from './base/FormSection';
import FormSectionTitle from './base/FormSectionTitle';
import FormTextArea from './base/FormTextArea';

function MovieSubmitInfo({ register }) {
    const { t } = useTranslation();
    const target = "submitMovieForm.info.";

    return (
        <FormSection className="bg-zinc-700 text-zinc-200">
            <FormSectionTitle
                text={t(target + 'title')}
            />

            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
                <BasicFormInput
                    label={t(target + 'originalTitle.label')}
                    type="text"
                    id="form-original-title"
                    placeholder={t(target + 'originalTitle.title')}
                    title={t(target + 'originalTitle.title')}
                    register={register}
                    name="originalTitle"
                    autoFocus={true}
                    required={true} />

                <BasicFormInput
                    label={t(target + 'englishTitle.label')}
                    type="text"
                    id="form-english-translation"
                    placeholder={t(target + 'englishTitle.title')}
                    title={t(target + 'englishTitle.title')}
                    register={register}
                    name="englishTitle"
                    required={true}
                />
            </div>

            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
                <BasicFormInput
                    label={t(target + 'duration.label')}
                    type="text"
                    id="form-duration"
                    placeholder="ex: 60"
                    title={t(target + 'duration.title')}
                    register={register}
                    name="duration"
                    required={true}
                />

                <BasicFormInput
                    label={t(target + 'language.label')}
                    type="text"
                    id="form-language"
                    placeholder={t(target + 'language.placeholder')}
                    title={t(target + 'language.title')}
                    register={register}
                    name="language"
                    required={true}
                />

            </div>

            <div className="flex flex-col items-center w-full sm:flex-row sm:justify-between sm:gap-20">
                <FormTextArea
                    className=""
                    label={t(target + 'originalSynopsis.label')}
                    maxCount={300}
                    id="form-original-synopsis"
                    placeholder={t(target + 'originalSynopsis.placeholder')}
                    title={t(target + 'originalSynopsis.title')}
                    register={register}
                    name="originalSynopsis"
                    required={true}

                />

                <FormTextArea
                    className=""
                    label={t(target + 'englishSynopsis.label')}
                    maxCount={300}
                    id="form-english-synopsis"
                    placeholder={t(target + 'englishSynopsis.placeholder')}
                    title={t(target + 'englishSynopsis.title')}
                    register={register}
                    name="englishSynopsis"
                    required={true}
                />
            </div>
        </FormSection>
    );
}

export default MovieSubmitInfo;
