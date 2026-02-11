import { useTranslation } from 'react-i18next';
import BasicFormInput from './base/BasicFormInput'
import FormSection from './base/FormSection';
import FormSectionTitle from './base/FormSectionTitle';
import FormTextArea from './base/FormTextArea';

function MovieSubmitInfo({ form }) {
    const { t } = useTranslation();
    const target = "submitMovieForm.info.";
    const errors = "submitMovieForm.formErrors.";

    return (
        <FormSection className="bg-zinc-700 text-zinc-200">
            <FormSectionTitle
                text={t(target + 'title')}
            />

            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
                <BasicFormInput
                    label={t(target + 'originalTitle.label')}
                    id="form-original-title"
                    placeholder={t(target + 'originalTitle.title')}
                    title={t(target + 'originalTitle.title')}
                    form={form}
                    name="originalTitle"
                    autoFocus={true}
                    validation={{
                        required: t(errors + 'required'),
                        minLength: {
                            value: 3,
                            message: t(errors + 'minLength3'),
                        },
                        maxLength: {
                            value: 255,
                            message: t(errors + 'maxLength255'),
                        }
                    }}
                />

                <BasicFormInput
                    label={t(target + 'englishTitle.label')}
                    id="form-english-translation"
                    placeholder={t(target + 'englishTitle.title')}
                    title={t(target + 'englishTitle.title')}
                    form={form}
                    name="englishTitle"
                    validation={{
                        required: t(errors + 'required'),
                        minLength: {
                            value: 3,
                            message: t(errors + 'minLength3'),
                        },
                        maxLength: {
                            value: 255,
                            message: t(errors + 'maxLength255'),
                        }
                    }}
                />

            </div>
            {/* 
            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
                <BasicFormInput
                    label={t(target + 'duration.label')}
                    id="form-duration"
                    placeholder="ex: 60"
                    title={t(target + 'duration.title')}
                    register={register}
                    name="duration"
                    required={true}
                />

                <BasicFormInput
                    label={t(target + 'language.label')}
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
            </div> */}
        </FormSection>
    );
}

export default MovieSubmitInfo;
