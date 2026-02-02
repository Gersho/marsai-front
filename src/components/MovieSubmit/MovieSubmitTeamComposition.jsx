function MovieSubmitTeamComposition() {
    return (
        <div>
            <div>
                <h2>04. Composition de l&apos;Équipe</h2>
                <button>+  ajouter collaborateur</button>
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
        </div>
    );
}

export default MovieSubmitTeamComposition;