import React, { useEffect, useState } from "react";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; 
    const intervalTime = 30; 
    const step = Math.ceil(target / (duration / intervalTime)); 

    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count.toLocaleString()}</span>;
};

const Comp2 = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <h2 className="text-green-700 text-4xl font-bold text-center mb-8 transition-transform duration-700 ease-in-out translate-y-[-10px] opacity-100">
        Agriculture Statistics
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          { label: "Active Schemes", value: 4 },
          { label: "Soil Testing Laboratory", value: 106 },
          { label: "Unified Farmers", value: 1125369 },
          { label: "Soil Health Card", value: 1570585 },
        ].map((item, index) => (
          <div
            key={index}
            className="border border-green-500 p-6 text-center shadow-md bg-white transform transition-all duration-700 ease-in-out hover:scale-105 opacity-100"
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <h3 className="text-3xl font-bold text-green-700">
              <Counter target={item.value} />
            </h3>
            <p className="text-gray-700 uppercase font-semibold">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comp2;
