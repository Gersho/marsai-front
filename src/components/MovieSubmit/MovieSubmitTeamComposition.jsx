import BasicFormInput from './base/BasicFormInput'
import FormNewCollabotor from './base/FormNewCollaborator';
import FormSection from './base/FormSection';
import FormSectionTitle from './base/FormSectionTitle';

function MovieSubmitTeamComposition() {
    return (
        <FormSection className="bg-zinc-800 text-zinc-200">

            <FormSectionTitle text="04. Composition de l&apos;Équipe" />


            <p className="py-2 self-center">Realisateur:</p>
            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
                <div className="flex flex-col sm:flex-row sm:w-full sm:gap-x-5">

                    <div className="flex flex-col gap-2">
                        <label className="" htmlFor="form-director-gender">civilité *</label>
                        <select
                            className="w-fit py-1 justify-center"
                            name="director-gender"
                            id="form-director-gender"
                        >
                            <option value="mr">Mr.</option>
                            <option value="mme">Mme.</option>
                            <option value="mx">Mx.</option>
                        </select>
                    </div>
                    <div className="flex flex-col sm:w-full">
                        <label htmlFor="form-director-firstname">Prenom *</label>
                        <input
                            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
                            id="form-director-firstname"
                            type="text"
                            name="director-firstname"
                            placeholder="Prenom"
                            title="Prenom du realisateur"
                            required
                        ></input>
                    </div>
                </div>



                <div className="flex flex-col sm:w-full">
                    <label htmlFor="form-director-lastname">Nom *</label>
                    <input
                        className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
                        id="form-director-lastname"
                        type="text"
                        name="director-lastname"
                        placeholder="Nom"
                        title="Nom du realisateur"
                        required
                    ></input>
                </div>
            </div>



            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">

                <BasicFormInput
                    label="métier actuel *"
                    id="form-director-job"
                    type="text"
                    name="director-job"
                    placeholder=""
                    title="métier actuel du realisateur"
                    required={true}
                />

                <BasicFormInput
                    label="date de naissance *"
                    id="form-director-birthdate"
                    type="date"
                    name="director-birthdate"
                    placeholder=""
                    title="date de naissance du realisateur"
                    required={true}


                />
            </div>


            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">


                <BasicFormInput
                    label="email *"
                    id="form-director-email"
                    type="email"
                    name="director-email"
                    placeholder="exemple@gmail.com"
                    title="email du realisateur"
                    required={true}

                />

                <BasicFormInput
                    label="Telephone *"
                    id="form-director-phone"
                    type="text"
                    name="director-phone"
                    placeholder="0102030405"
                    title="Numero de telephone du realisateur"
                    required={true}
                />

            </div>


            <div className="w-full">
                <label htmlFor="form-director-address">Addresse *</label>
                <input
                    className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
                    id="form-director-address"
                    type="text"
                    name="director-address"
                    placeholder=""
                    title="Addresse postale du directeur"
                    required
                ></input>
            </div>



            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">

                <BasicFormInput
                    label="Ville *"
                    // className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
                    id="form-director-city"
                    type="text"
                    name="director-city"
                    placeholder=""
                    title="Ville du directeur"
                    required={true}

                />

                <BasicFormInput
                    label="Code Postal"
                    id="form-director-zipcode"
                    type="text"
                    name="director-zipcode"
                    placeholder=""
                    title="Code Postal du realisateur"
                />

            </div>



            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">

                <BasicFormInput

                    label="Region"
                    id="form-director-region"
                    type="text"
                    name="director-region"
                    placeholder=""
                    title="Region du directeur"
                    required={true}
                />



                <BasicFormInput
                    label="Pays *"
                    id="form-director-country"
                    type="text"
                    name="director-country"
                    placeholder=""
                    title="Pays du realisateur"
                    required={true}
                />



            </div>


            présence en ligne
            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">

                <BasicFormInput
                    label="Facebook"
                    id="form-director-facebook"
                    type="text"
                    name="director-facebook"
                    placeholder=""
                    title="facebook du directeur"
                />


                <BasicFormInput
                    label="Instagram"
                    id="form-director-instagram"
                    type="text"
                    name="director-instagram"
                    placeholder=""
                    title="instagram du realisateur"
                />

            </div>

            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">

                <BasicFormInput
                    label="Youtube"
                    id="form-director-youtube"
                    type="text"
                    name="director-youtube"
                    placeholder=""
                    title="Youtube du directeur"
                />

                <BasicFormInput
                    label="LinkedIn"
                    id="form-director-linkedin"
                    type="text"
                    name="director-linkedin"
                    placeholder=""
                    title="Linkedin du directeur"
                />

            </div>

            <div className="flex flex-col w-full sm:w-1/2 self-start sm:pr-10">
                <label htmlFor="form-director-twitter">Twitter</label>
                <input
                    className="border border-gray rounded-sm pl-2 py-1"
                    type="text"
                    id="form-director-twitter"
                    name="director-twitter"
                    placeholder=""
                    title="Twitter du realisateur"

                />
            </div>

            <p className="py-2 self-center">Collaborateurs:</p>
            <div className="flex flex-col gap-4 w-full pb-5">

                <FormNewCollabotor />
                <FormNewCollabotor />
                <FormNewCollabotor />

            </div>

            <button className="border border-gray rounded-sm mr-2 mb-3 px-2 py-2 self-center">
                + ajouter collaborateur
            </button>
        </FormSection>
    );
}

export default MovieSubmitTeamComposition;
