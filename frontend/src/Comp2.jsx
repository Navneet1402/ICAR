import React from 'react';

const Comp2 = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      {/* Agriculture Statistics Header */}
      <h2 className="text-green-700 text-4xl font-bold text-center mb-8">
        Agriculture Statistics
      </h2>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div className="border border-green-500 p-6 text-center shadow-md bg-white">
          <h3 className="text-3xl font-bold text-green-700">4</h3>
          <p className="text-gray-700 uppercase font-semibold">Active Schemes</p>
        </div>
        <div className="border border-green-500 p-6 text-center shadow-md bg-white">
          <h3 className="text-3xl font-bold text-green-700">106</h3>
          <p className="text-gray-700 uppercase font-semibold">Soil Testing Laboratory</p>
        </div>
        <div className="border border-green-500 p-6 text-center shadow-md bg-white">
          <h3 className="text-3xl font-bold text-green-700">11,25,369</h3>
          <p className="text-gray-700 uppercase font-semibold">Unified Farmers</p>
        </div>
        <div className="border border-green-500 p-6 text-center shadow-md bg-white">
          <h3 className="text-3xl font-bold text-green-700">15,70,585</h3>
          <p className="text-gray-700 uppercase font-semibold">Soil Health Card</p>
        </div>
      </div>
    </div>
  );
};

export default Comp2;
