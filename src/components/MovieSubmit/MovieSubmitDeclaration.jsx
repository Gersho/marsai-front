function MovieSubmitDeclaration() {
    return <div className="border-2 border-gray rounded-md w-5/6 flex flex-col items-center gap-3" >
        <h2 className="px-4 py-2 self-start">02. Déclaration Usage de l&apos;IA</h2>
        <p className="border border-gray rounded-sm w-5/6 pl-2">MARS.A.I exige une transparence totale sur l&apos;utilisation de l&apos;Intelligence Artificielle. Sélectionnez tous les outils génératifs sollicités dans votre processus créatif.</p>

        <div className="w-5/6">
            {/* appearance-none to remove radio btn */}
            <p>Classification de l&apos;Œuvre :* Choix exclusif entre :</p>

            <div className="flex flex-row justify-between gap-3" >
                <label className="border border-gray rounded-sm has-checked:bg-indigo-50 has-checked:text-black w-1/2 pl-2" htmlFor="form-full-ai">Génération intégrale (100% IA)
                    <input className=" appearance-none" type="radio" id="form-full-ai" name="ai-classification" value="ai-full" required></input>
                </label>
                <label className="border border-gray rounded-sm has-checked:bg-indigo-50 has-checked:text-black w-1/2 pl-2" htmlFor="form-hybrid">Production hybride (Prises de vues réelles + apports IA)
                    <input className=" appearance-none" type="radio" id="form-hybrid" name="ai-classification" value="ai-hybrid" required></input>
                </label>
            </div>

        </div>


        <div className="flex flex-col w-5/6 py-1 my-2">
            <div>
                <div className="flex justify-between">
                    <label htmlFor="form-technical-stack">Stack Technologique *</label>
                    <p>0/500</p>
                </div>
                <textarea className="border border-gray rounded-sm pl-2 py-1 my-2 min-w-full" id="form-technical-stack" type="textarea" name="technical-stack" placeholder="Listez les outils utilisés (ex: Midjourney pour les visuels, ElevenLabs pour les voix, Runway pour l'animation...)" title="Stack Technologique (max. 500 caractères)"
                    required></textarea>
            </div>

            <div>
                <div className="flex justify-between">
                    <label htmlFor="form-creative-methodology">Méthodologie Créative *</label>
                    <p>0/500</p>
                </div>
                <textarea className="border border-gray rounded-sm pl-2 py-1 my-2 min-w-full" id="form-creative-methodology" type="textarea" name="creative-methodology" placeholder="Décrivez l'interaction entre l'humain et la machine dans ce processus.." title="Méthodologie Créative (max. 500 caractères)"
                    required></textarea>
            </div>
        </div>



    </div>;
}

export default MovieSubmitDeclaration;