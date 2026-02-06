import BasicFormInput from "./BasicFormInput";

function FormNewCollabotor({
    // number = 0,
    className = "",

}) {

    className = "w-full bg-zinc-700 p-5 rounded-sm" + " " + className;

    return (
        <div className={className}>
            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">
                <div className="flex flex-col sm:flex-row sm:w-full sm:gap-x-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="form-collaborator-gender">civilité *</label>
                        <select
                            className="w-fit py-1 justify-center"
                            name="collaborator-gender"
                            id="form-collaborator-gender"
                        >
                            <option value="mr">Mr.</option>
                            <option value="mme">Mme.</option>
                            <option value="mx">Mx.</option>
                        </select>
                    </div>
                    <div className="flex flex-col sm:w-full">
                        <label htmlFor="form-collaborator-firstname">Prenom *</label>
                        <input
                            className="border border-gray rounded-sm  min-w-full pl-2 py-1 my-2"
                            id="form-collaborator-firstname"
                            type="text"
                            name="collaborator-firstname"
                            placeholder="Prenom"
                            title="Prenom du collaborateur"
                            required
                        ></input>
                    </div>
                </div>

                <div className="flex flex-col sm:w-full">
                    <label htmlFor="form-collaborator-lastname">Nom *</label>
                    <input
                        className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
                        id="form-collaborator-lastname"
                        type="text"
                        name="collaborator-lastname"
                        placeholder="Nom"
                        title="Nom du collaborateur"
                        required
                    ></input>
                </div>
            </div>




            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:gap-20">

                <BasicFormInput
                    label="Profession *"
                    id="form-collaborator-job"
                    type="text"
                    name="collaborator-job"
                    placeholder=""
                    title="profession du collaborateur"
                    required={true}
                />

                <BasicFormInput
                    label="e-mail *"
                    id="form-collaborator-email"
                    type="email"
                    name="collaborator-email"
                    placeholder="bob@gmail.com"
                    title="email du collaborateur"
                    required={true}
                />
            </div>
        </div>

    );

}

export default FormNewCollabotor;