// import React from "react";

const SectionProjet = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="mb-16 max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span>LE PROJET MARS.A.I</span>
        </h2>
      </div>
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center md:text-left">
        <div className="border border-white/50 p-6 rounded-3xl h-full">
          <h3 className="text-xl font-bold mb-3 text-white">TITLE</h3>
          <p>DESCRIPTION</p>
        </div>
        <div className="border border-white/50 p-6 rounded-3xl h-full">
          <h3 className="text-xl font-bold mb-3 text-white">TITLE</h3>
          <p>DESCRIPTION</p>
        </div>
        <div className="border border-white/50 p-6 rounded-3xl h-full">
          <h3 className="text-xl font-bold mb-3 text-white">TITLE</h3>
          <p>DESCRIPTION</p>
        </div>
        <div className="border border-white/50 p-6 rounded-3xl h-full">
          <h3 className="text-xl font-bold mb-3 text-white">TITLE</h3>
          <p>DESCRIPTION</p>
        </div>
      </div>
    </section>
  );
};

export default SectionProjet;
