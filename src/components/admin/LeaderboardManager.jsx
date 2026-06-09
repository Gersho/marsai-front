import React from 'react';

const RANKING_DATA = [
  {
    category: "100% IA",
    films: [
      { rank: 1, title: "L'Ombre du Pixel", score: 9.5, director: "A.I. Alpha", status: "Winner" },
      { rank: 2, title: "Algorithme du silence", score: 9.2, director: "Data Flow", status: "Finalist" },
      { rank: 3, title: "Code Poétique", score: 8.8, director: "Synthèse Studios", status: "Finalist" },
      { rank: 4, title: "Vision Machine", score: 8.5, director: "Neural Dreams", status: "Sélection Officielle" },
    ],
  },
  {
    category: "Hybride",
    films: [
      { rank: 1, title: "L'Héritage Numérique", score: 9.8, director: "Sophie Dupont", status: "Winner" },
      { rank: 2, title: "L'Œil et la Machine", score: 9.6, director: "Marc Ouellet", status: "Finalist" },
      { rank: 3, title: "Terre et Circuits", score: 9.0, director: "Hichem T.", status: "Finalist" },
      { rank: 4, title: "Le Modèle Humain", score: 8.7, director: "Léa Martin", status: "Sélection Officielle" },
    ],
  },
];

const StatusBadge = ({ status }) => {
  let classes = "";
  // Adaptation avec bg-accent et indigo pour rester dans le thème EventsManager
  if (status === "Winner") {
    classes = "bg-accent text-white";
  } else if (status === "Finalist") {
    classes = "bg-indigo-600 text-white";
  } else {
    classes = "bg-gray-700 text-gray-200";
  }
  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${classes}`}>
      {status}
    </span>
  );
};

const RankingTable = ({ films }) => (
  <div className="overflow-x-auto mt-4">
    <table className="min-w-full divide-y divide-indigo-200">
      <thead className="bg-secondary">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-1/12">Rang</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-5/12">Titre du Film</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider hidden sm:table-cell w-3/12">Réalisateur</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-1/12">Score</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-2/12">Statut</th>
        </tr>
      </thead>
      <tbody className="bg-secondary divide-y divide-indigo-200">
        {films.map((film, index) => (
          <tr key={index} className="hover:bg-indigo-900/30 transition duration-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">
              {film.rank}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-200">
              {film.title}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 hidden sm:table-cell">
              {film.director}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-white">
              {film.score.toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              <StatusBadge status={film.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

function LeaderboardManager() {
  return (
    // Utilisation de bg-secondary et du même padding que EventsManager
    <div className="p-4 sm:p-6 lg:p-8 bg-secondary text-white rounded-xl shadow-2xl">
      <h1 className="text-3xl font-bold mb-8 text-white border-b border-indigo-200 pb-3">
        Classement Officiel du Festival
      </h1>

      {RANKING_DATA.map((data, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Catégorie : {data.category}
          </h2>
          <RankingTable films={data.films} />
        </div>
      ))}
    </div>
  );
}

export default LeaderboardManager;