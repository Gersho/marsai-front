function MovieSubmitDeclaration() {
    return <div>
        <h2>02. Déclaration Usage de l&apos;IA</h2>
        <p>MARS.A.I exige une transparence totale sur l&apos;utilisation de l&apos;Intelligence Artificielle. Sélectionnez tous les outils génératifs sollicités dans votre processus créatif.</p>

        <div>

            <p>Classification de l&apos;Œuvre :* Choix exclusif entre :</p>

            <label htmlFor="form-full-ai">Génération intégrale (100% IA)</label>
            <input type="radio" id="form-full-ai" name="ai-classification" value="ai-full" required></input>
            <label htmlFor="form-hybrid">Production hybride (Prises de vues réelles + apports IA)</label>
            <input type="radio" id="form-hybrid" name="ai-classification" value="ai-hybrid" required></input>

        </div>


        <div>
            <label htmlFor="form-technical-stack">Stack Technologique *</label>
            <p>0/500</p>
            <input id="form-technical-stack" type="textarea" name="technical-stack" placeholder="Listez les outils utilisés (ex: Midjourney pour les visuels, ElevenLabs pour les voix, Runway pour l'animation...)" title="Stack Technologique (max. 500 caractères)"
                required></input>


            <label htmlFor="form-creative-methodology">Méthodologie Créative *</label>
            <p>0/500</p>
            <input id="form-creative-methodology" type="textarea" name="creative-methodology" placeholder="Décrivez l'interaction entre l'humain et la machine dans ce processus.." title="Méthodologie Créative (max. 500 caractères)"
                required></input>
        </div>



    </div>;
}

export default MovieSubmitDeclaration;