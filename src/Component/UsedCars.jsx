import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

// Mock API call (unchanged)
const fetchCars = async (filters) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  

  return car.filter(car => 
    car.price >= filters.budget[0] && 
    car.price <= filters.budget[1] &&
    (filters.brand === '' || filters.brand === car.brand)
  );
};

export  function UsedCars() {
  const [budget, setBudget] = useState([150000, 2500000]);
  const [brand, setBrand] = useState('');
  const [cars, setCars] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);


// Rename the fetchData function to avoid conflicts
async function fetchCarsData(budget, brand) {
  try {
    const response = await fetch(`/api/cars/cars?budgetMin=${budget[0]}&budgetMax=${budget[1]}&make=${brand}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

const makes = [
  "Tata", "Maruti Suzuki", "Hyundai", "Honda", "Mahindra", 
  "KIA", "Nissan", "Toyota", "Volkswagen",
];

useEffect(() => {
  const fetchData = async () => {
    const filteredCars = await fetchCarsData(budget, brand); // Use the renamed function here
    setCars(filteredCars);
  };
  
  fetchData();
}, [budget, brand]);

  const handleBudgetChange = (e) => {
    setBudget([parseInt(e.target.value), 2500000]);
    if (window.innerWidth < 1024) setShowFilters(false);
  };

  const handleMakeChange = (selectedMake) => {
    setBrand(brand === selectedMake ? '' : selectedMake);
    if (window.innerWidth < 1024) setShowFilters(false);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const toggleWishlist = (carId) => {
    setWishlist(prev => 
      prev.includes(carId) 
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  return (
    <div className="container mx-auto mt-10 px-4 mb-20">
      <button
        onClick={toggleFilters}
        className="lg:hidden mb-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-500 transition-colors"
      >
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filter section */}
        <div className={`col-span-1 lg:sticky lg:top-20 h-fit bg-gray-100 rounded-lg shadow-md p-4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <h2 className="text-lg font-semibold mb-4 text-blue-800">Filters</h2>
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2 text-blue-700">Budget</h3>
            <input
              type="range"
              min="150000"
              max="2500000"
              step="50000"
              value={budget[0]}
              onChange={handleBudgetChange}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-sm text-blue-600">
              <span>₹{(budget[0] / 100000).toFixed(2)}L</span>
              <span>₹{(budget[1] / 100000).toFixed(2)}L</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2 text-blue-700">Make</h3>
            {makes.map((makeName) => (
              <div key={makeName} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={makeName}
                  checked={brand === makeName}
                  onChange={() => handleMakeChange(makeName)}
                  className="mr-2 form-checkbox text-orange-500 focus:ring-orange-500"
                />
                <label htmlFor={makeName} className="text-sm text-blue-700">
                  {makeName}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Cars display section */}
        <div className="col-span-1 lg:col-span-3">
         
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car) => (
                <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
                  <img
                    src={car.image}
                    alt={`${car.make}${car.model}`}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => toggleWishlist(car.id)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
                    aria-label={wishlist.includes(car.id) ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart
                      className={`h-6 w-6 ${
                        wishlist.includes(car.id) ? 'text-red-500 fill-current' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-blue-800">{car.carName} {car.brand} {car.owner}</h3>
                    <p className="text-orange-600 font-bold">₹{(car.price / 100000).toFixed(2)}L</p>
                    <Link to="/cardetails">
                      <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors w-full">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default UsedCars;