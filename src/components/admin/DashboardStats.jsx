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
    <div className="p-4 sm:p-6 lg:p-8 bg-secondary text-white rounded-xl shadow-2xl min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-white border-b border-indigo-200 pb-3">
        Dashboard Stats Films IA & Hybrides
      </h1>

      <div className="max-w-xs mx-auto mb-10">
        <div className="bg-accent text-white p-6 rounded-xl shadow-lg text-center">
          <p className="text-lg font-medium">TOTAL DES SOUMISSIONS</p>
          <p className="text-6xl font-bold mt-2">{totalFilms}</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        {stats.map((categoryStats) => (
          <div
            key={categoryStats.category}
            className="flex-1 min-w-[300px] bg-primary border border-indigo-200/20 rounded-xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-5 text-white">
              {categoryStats.category}
            </h2>

            <div className="flex flex-wrap gap-4 justify-center">
              <StatCard
                title="Total"
                value={categoryStats.totalSubmissions}
                bgColor="bg-secondary text-white border border-indigo-200/20"
              />
              <StatCard
                title="Approuvés"
                value={categoryStats.approved}
                bgColor="bg-green-700 text-white"
              />
              <StatCard
                title="En Attente"
                value={categoryStats.pending}
                bgColor="bg-yellow-600 text-white"
              />
              <StatCard
                title="Rejetés"
                value={categoryStats.rejected}
                bgColor="bg-red-700 text-white"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default DashboardStats;