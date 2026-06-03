import { div } from "framer-motion/client";

function DashboardStats() {
  const stats = [
    {
      category: "100% IA",
      totalSubmissions: 150,
      approved: 90,
      pending: 40,
      rejected: 20,
    },
    {
      category: "Hybride",
      totalSubmissions: 230,
      approved: 160,
      pending: 50,
      rejected: 20,
    },
  ];

  const totalFilms = stats.reduce((acc, current) => acc + current.totalSubmissions, 0);

  const StatCard = ({ title, value, bgColor }) => (
    <div
      className={`p-4 rounded-lg shadow-md flex-1 min-w-[150px] text-center transition duration-300 transform hover:scale-[1.02] ${bgColor}`}
    >
      <p className="text-sm font-medium uppercase opacity-90">{title}</p>
      <p className="text-4xl font-extrabold mt-1">{value}</p>
    </div>
  );

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-semibold border-b-2 border-indigo-200 pb-3 mb-8 dark:border-gray-700">
        Dashboard Stats Films IA & Hybrides
      </h1>

      <div className="max-w-xs mx-auto mb-10">
        <div className="bg-indigo-600 text-white p-6 rounded-xl shadow-lg">
          <p className="text-lg font-medium text-indigo-200">TOTAL DES SOUMISSIONS</p>
          <p className="text-6xl font-bold mt-2">{totalFilms}</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        {stats.map((categoryStats) => (
          <div
            key={categoryStats.category}
            className="flex-1 min-w-[300px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-5 text-indigo-700 dark:text-indigo-400">
              {categoryStats.category}
            </h2>

            <div className="flex flex-wrap gap-4 justify-center">
              <StatCard
                title="Total"
                value={categoryStats.totalSubmissions}
                bgColor="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-50"
              />

              <StatCard
                title="Approuvés"
                value={categoryStats.approved}
                bgColor="bg-green-100 text-green-700 dark:bg-green-600 dark:text-white"
              />

              <StatCard
                title="En Attente"
                value={categoryStats.pending}
                bgColor="bg-yellow-100 text-yellow-700 dark:bg-yellow-600 dark:text-white"
              />

              <StatCard
                title="Rejetés"
                value={categoryStats.rejected}
                bgColor="bg-red-100 text-red-700 dark:bg-red-600 dark:text-white"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardStats;
