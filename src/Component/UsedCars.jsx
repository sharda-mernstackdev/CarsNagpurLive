import React, { useState } from "react"
import Cars from "./Cars"

export default function UsedCars({ onFilterChange }) {
  const [budget, setBudget] = useState([150000, 2500000])
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
  })

  const handleBudgetChange = (e, index) => {
    const newBudget = [...budget]
    newBudget[index] = parseInt(e.target.value)
    setBudget(newBudget)
    onFilterChange({ budget: newBudget, makes })
  }

  const handleMakeChange = (make) => {
    const updatedMakes = { ...makes, [make]: !makes[make] }
    setMakes(updatedMakes)
    onFilterChange({ budget, makes: updatedMakes })
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-4 border-double border-gray-500">
        {/* Left side (Filter section) */}
        <div className="md:col-span-1 bg-white rounded-lg shadow-md p-4 border-4 border-double border-gray-500 sticky top-5 h-fit">
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
        <div className="md:col-span-3 border-4 border-double border-gray-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 21 }, (_, index) => (
            <Cars key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}