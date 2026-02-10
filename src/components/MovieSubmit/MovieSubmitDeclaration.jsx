import { CiCircleInfo } from 'react-icons/ci';
import FormSectionTitle from './base/FormSectionTitle';
import FormSection from './base/FormSection';
import FormTextArea from './base/FormTextArea';
import { useTranslation } from 'react-i18next';

function MovieSubmitDeclaration({ register }) {
  const { t } = useTranslation();
  const target = "submitMovieForm.declaration.";

  return (
    <FormSection className="bg-zinc-800 text-zinc-200">


      <FormSectionTitle
        text={t(target + 'title')}
      />

      <div className="flex flex-col sm:flex-row gap-2 border border-gray rounded-sm w-full p-3 my-4">
        <CiCircleInfo className="text-accent text-4xl" />
        <p>
          {t(target + 'paragraph')}
        </p>
      </div>

      <div className="flex flex-col w-full gap-3">

        <p>{t(target + 'isHybrid.title')}</p>
        <div className="flex flex-row justify-around gap-3 w-full pb-4">
          <label
            className="flex items-center justify-center h-24 border border-gray rounded-sm has-checked:bg-indigo-50 has-checked:text-black w-1/2 p-2 "
            htmlFor="form-full-ai"
          >
            {t(target + 'isHybrid.false.0')}
            <br />
            {t(target + 'isHybrid.false.1')}
            <input
              className=" appearance-none"
              type="radio"
              id="form-full-ai"
              name="ai-classification"
              value={false}
              {...register('isHybrid')}
              required
            ></input>
          </label>
          <label
            className="flex items-center justify-center h-24 border border-gray rounded-sm has-checked:bg-indigo-50 has-checked:text-black w-1/2 p-2 "
            htmlFor="form-hybrid"
          >
            {t(target + 'isHybrid.true.0')}
            <br />
            {t(target + 'isHybrid.true.1')}
            <input
              className=" appearance-none"
              type="radio"
              id="form-hybrid"
              name="ai-classification"
              value={true}
              {...register('isHybrid')}
              required
            ></input>
          </label>
        </div>
      </div>

      <div className="flex flex-col items-center sm:flex-row w-full sm:justify-between sm:gap-20">

        <FormTextArea
          className=""
          label={t(target + 'aiTools.label')}
          maxCount={500}
          id="form-technical-stack"
          placeholder={t(target + 'aiTools.placeholder')}
          title={t(target + 'aiTools.title')}
          register={register}
          name="aiTools"
          required={true}
        />

        <FormTextArea
          className=""
          label={t(target + 'creativeProcess.label')}
          maxCount={500}
          id="form-creative-methodology"
          placeholder={t(target + 'creativeProcess.placeholder')}
          title={t(target + 'creativeProcess.title')}
          register={register}
          name="creativeProcess"
          required={true}
        />

      </div>
    </FormSection>
  );
}

export default MovieSubmitDeclaration;
