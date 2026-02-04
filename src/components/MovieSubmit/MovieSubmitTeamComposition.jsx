function MovieSubmitTeamComposition() {
    return (
        <div className="border-2 border-gray rounded-md w-5/6 flex flex-col items-center gap-3">
            <h2 className="px-4 py-2 self-start">04. Composition de l&apos;Équipe</h2>


            <div className="flex flex-col w-5/6 bg-primary">
                <p className="py-2 self-center">Realisateur:</p>
                <div className="flex flex-col">
                    <label htmlFor="form-director-gender">civilité *</label>
                    <select className="w-fit py-1" name="form-director-gender" id="director-gender">
                        <option value="mr">Mr.</option>
                        <option value="mme">Mme.</option>
                        <option value="mx">Mx.</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="form-director-firstname">Prenom *</label>
                    <input className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2" id="form-director-firstname" type="text" name="director-firstname" placeholder="Prenom" title="Prenom du realisateur"
                        required></input>
                </div>
                <label htmlFor="form-director-lastname">Nom *</label>
                <input className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2" id="form-director-lastname" type="text" name="director-lastname" placeholder="Nom" title="Nom du realisateur"
                    required></input>
            </div>


            <div className="flex flex-col w-5/6 bg-secondary">
                <label htmlFor="form-director-email">email *</label>
                <input className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2" id="form-director-email" type="email" name="director-email" placeholder="exemple@gmail.com" title="email du realisateur"
                    required></input>

                <label htmlFor="form-director-phone">Telephone *</label>
                <input className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2" id="form-director-phone" type="text" name="director-phone" placeholder="0102030405" title="Numero de telephone du realisateur"
                    required></input>
            </div>

            <div className="w-5/6 bg-primary">

                <label htmlFor="form-director-job">métier actuel *</label>
                <input className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2" id="form-director-job" type="text" name="director-job" placeholder="" title="métier actuel du realisateur"
                    required></input>

            </div>



            <div>

                <label htmlFor="form-collaborator-gender">civilité *</label>
                <select name="form-collaborator-gender" id="collaborator-gender">
                    <option value="mr">Mr.</option>
                    <option value="mme">Mme.</option>
                    <option value="mx">Mx.</option>
                </select>

                <label htmlFor="form-collaborator-name">prénom et nom *</label>
                <input id="form-collaborator-name" type="text" name="collaborator-name" placeholder="Ex: Jean Dupont" title="prénom et nom du collaborateur"
                    required></input>

                <label htmlFor="form-collaborator-job">Profession *</label>
                <input id="form-collaborator-job" type="text" name="collaborator-job" placeholder="" title="profession du collaborateur"
                    required></input>

                <label htmlFor="form-collaborator-email">e-mail *</label>
                <input id="form-collaborator-email" type="email" name="collaborator-email" placeholder="bob@gmail.com" title="email du collaborateur"
                    required></input>

            </div>
            <button className="border border-gray rounded-sm mr-2 px-2 self-center">+  ajouter collaborateur</button>
        </div>
    );
}

export default MovieSubmitTeamComposition;