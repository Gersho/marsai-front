function MovieSubmitTeamComposition({ register }) {
  return (
    <div className="w-11/12 flex flex-col items-center gap-3">
      <h2 className="px-4 py-2 self-start sm:self-center">
        04. Composition de l&apos;Équipe
      </h2>
      <p className="py-2 self-center">Realisateur:</p>
      <div className="flex flex-col w-5/6 sm:flex-row sm:justify-around gap-3">
        <div className="flex flex-col">
          <label htmlFor="form-director-gender">civilité *</label>
          <select
            className="w-fit py-1"
            name="form-director-gender"
            id="director-gender"
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
      <div className="flex flex-col w-5/6 sm:flex-row sm:justify-around gap-3">
        <div className="flex flex-col sm:w-3/7">
          <label htmlFor="form-director-job">métier actuel *</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-director-job"
            type="text"
            name="director-job"
            placeholder=""
            title="métier actuel du realisateur"
            required
          ></input>
        </div>

        <div className="flex flex-col  sm:w-3/7">
          <label htmlFor="form-director-birthdate">date de naissance *</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-director-birthdate"
            type="date"
            name="director-birthdate"
            placeholder=""
            title="date de naissance du realisateur"
            required
          ></input>
        </div>
      </div>
      <div className="flex flex-col w-5/6 sm:flex-row sm:justify-around gap-3">
        <div className="flex flex-col  sm:w-3/7">
          <label htmlFor="form-director-email">email *</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-director-email"
            type="email"
            name="director-email"
            placeholder="exemple@gmail.com"
            title="email du realisateur"
            required
          ></input>
        </div>

        <div className="flex flex-col  sm:w-3/7">
          <label htmlFor="form-director-phone">Telephone *</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-director-phone"
            type="text"
            name="director-phone"
            placeholder="0102030405"
            title="Numero de telephone du realisateur"
            required
          ></input>
        </div>
      </div>
      <div className="w-5/6 sm:px-9">
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
      <div className="flex flex-col w-5/6 sm:flex-row sm:justify-around gap-3">
        <div className="flex flex-col  sm:w-3/7">
          <label htmlFor="form-director-city">Ville *</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-director-city"
            type="text"
            name="director-city"
            placeholder=""
            title="Ville du directeur"
            required
          ></input>
        </div>

        <div className="flex flex-col  sm:w-3/7">
          <label htmlFor="form-director-zipcode">Code Postal</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-director-zipcode"
            type="text"
            name="director-zipcode"
            placeholder=""
            title="Code Postal du realisateur"
          ></input>
        </div>
      </div>
      <div className="flex flex-col w-5/6 sm:flex-row sm:justify-around gap-3">
        <div className="flex flex-col  sm:w-3/7">
          <label htmlFor="form-director-region">Region</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-director-region"
            type="text"
            name="director-region"
            placeholder=""
            title="Region du directeur"
            required
          ></input>
        </div>

        <div className="flex flex-col  sm:w-3/7">
          <label htmlFor="form-director-country">Pays *</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-director-country"
            type="text"
            name="director-country"
            placeholder=""
            title="Pays du realisateur"
          ></input>
        </div>
      </div>
      présence en ligne
      <div className="flex flex-col w-5/6 sm:flex-row sm:justify-around gap-3">
        <div className="flex flex-col  sm:w-3/7">
          <label htmlFor="form-director-facebook">Facebook</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-director-facebook"
            type="text"
            name="director-facebook"
            placeholder=""
            title="facebook du directeur"
          ></input>
        </div>

        <div className="flex flex-col  sm:w-3/7">
          <label htmlFor="form-director-instagram">Instagram</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-director-instagram"
            type="text"
            name="director-instagram"
            placeholder=""
            title="instagram du realisateur"
          ></input>
        </div>
      </div>
      <div className="flex flex-col w-5/6 sm:flex-row sm:justify-around gap-3">
        <div className="flex flex-col  sm:w-3/7">
          <label htmlFor="form-director-youtube">Youtube</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-director-youtube"
            type="text"
            name="director-youtube"
            placeholder=""
            title="youtube du directeur"
          ></input>
        </div>

        <div className="flex flex-col  sm:w-3/7">
          <label htmlFor="form-director-linkedin">LinkedIn</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-director-linkedin"
            type="text"
            name="director-linkedin"
            placeholder=""
            title="Linkedin du directeur"
          ></input>
        </div>
      </div>
      <div className="flex flex-col w-5/6 sm:flex-row">
        <div className="w-full ">
          <label htmlFor="form-director-twitter">Twitter</label>
          <input
            className="border border-gray rounded-sm min-w-full pl-2 py-1 my-2"
            id="form-director-twitter"
            type="text"
            name="director-twitter"
            placeholder=""
            title="Code Postal du realisateur"
          ></input>
        </div>
      </div>
      {/* <div className="w-5/6"> */}
      <p className="py-2 self-center">Collaborateurs:</p>
      <div className="flex flex-col w-5/6 sm:flex-row sm:justify-around gap-3">
        <div className="flex flex-col">
          <label htmlFor="form-collaborator-gender">civilité *</label>
          <select
            className="w-fit py-1"
            name="form-collaborator-gender"
            id="collaborator-gender"
          >
            <option value="mr">Mr.</option>
            <option value="mme">Mme.</option>
            <option value="mx">Mx.</option>
          </select>
        </div>

        <div className="flex flex-col sm:w-full">
          <label htmlFor="form-collaborator-firstname">Prenom *</label>
          <input
            className="border border-gray rounded-sm  pl-2 py-1 my-2"
            id="form-collaborator-firstname"
            type="text"
            name="collaborator-firstname"
            placeholder="Prenom"
            title="Prenom du collaborateur"
            required
          ></input>
        </div>

        <div className="flex flex-col sm:w-full">
          <label htmlFor="form-collaborator-lastname">Nom *</label>
          <input
            className="border border-gray rounded-sm  pl-2 py-1 my-2"
            id="form-collaborator-lastname"
            type="text"
            name="collaborator-lastname"
            placeholder="Nom"
            title="Nom du collaborateur"
            required
          ></input>
        </div>
      </div>
      <div>
        <div className="flex flex-col w-5/6 sm:flex-row sm:justify-around gap-3">
          <div className="flex flex-col sm:w-full">
            <label htmlFor="form-collaborator-job">Profession *</label>
            <input
              className="border border-gray rounded-sm pl-2 py-1 my-2"
              id="form-collaborator-job"
              type="text"
              name="collaborator-job"
              placeholder=""
              title="profession du collaborateur"
              required
            ></input>
          </div>

          <div className="flex flex-col sm:w-full">
            <label htmlFor="form-collaborator-email">e-mail *</label>
            <input
              className="border border-gray rounded-sm pl-2 py-1 my-2"
              id="form-collaborator-email"
              type="email"
              name="collaborator-email"
              placeholder="bob@gmail.com"
              title="email du collaborateur"
              required
            ></input>
          </div>
        </div>
      </div>
      <button className="border border-gray rounded-sm mr-2 mb-3 px-2 py-2 self-center">
        + ajouter collaborateur
      </button>
    </div>
  );
}

export default MovieSubmitTeamComposition;
