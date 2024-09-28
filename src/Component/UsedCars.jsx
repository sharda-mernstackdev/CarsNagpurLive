import React, { useState } from "react";
import Cars from "./Cars";

function UsedCars({ onFilterChange }) {
  const [budget, setBudget] = useState([150000, 2500000]);
  const [makes, setMakes] = useState({
    Tata: false,
    "Maruti Suzuki": false,
    Hyundai: false,
    Honda: false,
    Mahindra: false,
    Renault: false,
    KIA: false,
    Ford: false,
    Nisan: false,
    Toyota: false,
    Volkswagen: false,
    Datsun: false,
    MG: false,
    Jeep: false,
    Skoda: false,
  });

  const handleBudgetChange = (e, index) => {
    const newBudget = [...budget];
    newBudget[index] = parseInt(e.target.value);
    setBudget(newBudget);
    onFilterChange({ budget: newBudget, makes });
  };

  const handleMakeChange = (make) => {
    const updatedMakes = { ...makes, [make]: !makes[make] };
    setMakes(updatedMakes);
    onFilterChange({ budget, makes: updatedMakes });
  };

  return (
    <div className="container mt-10">
      <div className="grid grid-cols-12 gap-4">
        {/* Left side (Filter section) */}
        <div
          className="bg-white rounded-lg shadow-md p-4 col-span-12 md:col-span-3 border-double border-4 border-gray-500"
          style={{
            position: "sticky", // Makes the element sticky
            top: "20px", // Distance from the top of the viewport
            height: "fit-content", // Ensures the content height doesn't stretch the container
          }}
        >
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Budget</h3>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="150000"
                max="2500000"
                step="50000"
                value={budget[0]}
                onChange={(e) => handleBudgetChange(e, 0)}
                className="w-full"
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>₹{(budget[0] / 100000).toFixed(2)}L</span>
              <span>₹{(budget[1] / 100000).toFixed(2)}L</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Make</h3>
            {Object.keys(makes).map((make) => (
              <div key={make} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={make}
                  checked={makes[make]}
                  onChange={() => handleMakeChange(make)}
                  className="mr-2"
                />
                <label htmlFor={make} className="text-sm text-gray-700">
                  {make}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Right side (Cars display section) */}
        <div className="col-span-12 md:col-span-9 border-double border-4 border-gray-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {(() => {
            const carsArray = [];
            for (let index = 0; index < 21; index++) {
              carsArray.push(<Cars key={index} />);
            }
            return carsArray;
          })()}
        </div>
      </div>
    </div>
  );
}

export default UsedCars;
