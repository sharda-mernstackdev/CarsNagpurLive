import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

// Mock API call (unchanged)
const fetchCars = async (filters) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const allCars = [
    { id: 1, make: "Tata", model: "Nexon", price: 700000, image: "https://news24online.com/wp-content/uploads/2024/07/Tata-Nexon-2024.jpg" },
    { id: 2, make: "Tata", model: "Curvv ", price: 1400000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80" },
    { id: 3, make: "Tata", model: "Punch", price: 600000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/39015/punch-exterior-right-front-three-quarter-55.jpeg?isig=0&q=80" },
    { id: 4, make: "Tata", model: "Tiago", price: 800000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/39345/tiago-exterior-right-front-three-quarter-28.jpeg?isig=0&q=80" },
    { id: 5, make: "Tata", model: " Harrier", price: 2500000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-facelift-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
    { id: 6, make: "Tata", model: "Safari", price: 1500000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/138895/safari-facelift-exterior-right-front-three-quarter-39.jpeg?isig=0&q=80" },
    { id: 7, make: "Maruti Suzuki", model: "Swift", price: 600000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg?isig=0&q=80" },
    { id: 8, make: "Maruti Suzuki", model: "Fronx", price: 1300000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-110.jpeg?isig=0&q=80" },
    { id: 9, make: "Maruti Suzuki", model: "Grand Vitara", price: 1500000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/123185/grand-vitara-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80" },
    { id: 10, make: "Maruti Suzuki", model: "Brezza", price: 1000000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80" },
    { id: 11, make: "Maruti Suzuki", model: " Alto K10", price: 400000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/127563/alto-k10-exterior-right-front-three-quarter-58.jpeg?isig=0&q=80" },
    { id: 12, make: "Maruti Suzuki", model: " XL6", price: 1100000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/115601/xl6-exterior-right-front-three-quarter-13.jpeg?isig=0&q=80" },
    { id: 13, make: "Hyundai", model: "Creta", price: 1200000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80" },
    { id: 14, make: "Hyundai", model: "Venue", price: 1000000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141113/venue-exterior-right-front-three-quarter-16.jpeg?isig=0&q=80" },
    { id: 15, make: "Hyundai", model: "Exter", price: 900000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/144851/exter-exterior-right-front-three-quarter-29.jpeg?isig=0&q=80" },
    { id: 16, make: "Hyundai", model: " Verna", price: 1700000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-exterior-right-front-three-quarter-101.jpeg?isig=0&q=80" },
    { id: 17, make: "Hyundai", model: "Grand i10 Nios", price: 800000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/136183/grand-i10-nios-exterior-right-front-three-quarter-15.jpeg?isig=0&q=80" },
    { id: 18, make: "Hyundai", model: "i20", price: 1100000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80" },
    { id: 19, make: "Honda", model: "City", price: 1600000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/134287/city-exterior-right-front-three-quarter-77.jpeg?isig=0&q=80" },
    { id: 20, make: "Honda", model: "Elevate", price: 1600000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/142515/elevate-exterior-right-front-three-quarter-21.jpeg?isig=0&q=80" },
    { id: 21, make: "Honda", model: "Amaze", price: 1000000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/45951/amaze-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
    { id: 22, make: "Honda", model: "Honda City Hybrid", price: 1900000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/143275/city-hybrid-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
    { id: 23, make: "Honda", model: "Honda WR-V Price", price: 1200000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/134113/new-wr-v-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80" },
    // { id: 24, make: "Honda", model: "City", price: 1100000, image: "https://os-wordpress-media.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/04/16013440/Honda_City_e_HEV_Announcement_India_1.jpg" },
    { id: 25, make: "Mahindra", model: "XUV700", price: 2500000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
    { id: 26, make: "Mahindra", model: "Thar Roxx", price: 2200000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/124839/thar-roxx-exterior-right-front-three-quarter-24.jpeg?isig=0&q=80" },
    { id: 27, make: "Mahindra", model: " XUV 3XO", price: 1500000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-33.jpeg?isig=0&wm=0&q=80" },
    { id: 28, make: "Mahindra", model: "XUV7Scorpio N00", price: 2400000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80" },
    { id: 29, make: "Mahindra", model: " Scorpio", price: 1700000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-47.jpeg?isig=0&q=80" },
    { id: 30, make: "Mahindra", model: "Bolero", price: 1000000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/131179/bolero-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80" },
    { id: 31, make: "KIA", model: "Seltos", price: 2000000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/174323/seltos-exterior-right-front-three-quarter.jpeg?isig=0&q=80" },
    { id: 32, make: "KIA", model: " Carens", price: 1900000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/174325/carens-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
    { id: 33, make: "KIA", model: "Sonet", price: 1500000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/174423/sonet-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
    { id: 34, make: "KIA", model: " Carens EV", price: 2200000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/174553/carens-ev-exterior-right-side-view.jpeg?isig=0&q=80" },
    { id: 35, make: "KIA", model: "EV3 ", price: 2200000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/176961/ev3-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80" },
    // { id: 36, make: "KIA", model: "Seltos", price: 1800000, image: "https://imgd.aeplcdn.com/642x361/n/cw/ec/176467/kia-seltos-left-front-three-quarter6.jpeg?isig=0&q=75" },
    { id: 37, make: "Nissan", model: "Magnite", price: 600000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/173325/magnite-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80" },
    { id: 38, make: "Nissan", model: "Magnite", price: 1800000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsZ4qOHxqo1c0ByJ6YLjOLbSmhQuSPTpbsg&s" },
    { id: 39, make: "Nissan", model: "Magnite", price: 1800000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsZ4qOHxqo1c0ByJ6YLjOLbSmhQuSPTpbsg&s" },
    { id: 40, make: "Nissan", model: "Magnite", price: 1800000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsZ4qOHxqo1c0ByJ6YLjOLbSmhQuSPTpbsg&s" },
    { id: 41, make: "Nissan", model: "Magnite", price: 1800000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsZ4qOHxqo1c0ByJ6YLjOLbSmhQuSPTpbsg&s" },
    { id: 42, make: "Nissan", model: "Magnite", price: 1800000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsZ4qOHxqo1c0ByJ6YLjOLbSmhQuSPTpbsg&s" },
    { id: 43, make: "Toyota", model: "Innova", price: 1800000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80" },
    { id: 44, make: "Toyota", model: " Urban Cruiser Hyryder", price: 2000000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/124027/urban-cruiser-hyryder-exterior-right-front-three-quarter-72.jpeg?isig=0&q=80" },
    { id: 45, make: "Toyota", model: "Urban Cruiser Taisor", price: 1100000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/132427/taisor-exterior-right-front-three-quarter-2.png?isig=0&q=80" },
    { id: 46, make: "Toyota", model: " Glanza", price: 1900000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/112839/glanza-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
    { id: 47, make: "Toyota", model: "Innova Hycross", price: 1900000, image:  "https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-73.jpeg?isig=0&q=80" },
    { id: 48, make: "Toyota", model: " Rumion", price: 1300000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/105799/rumion-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80" },
    { id: 49, make: "Volkswagen", model: "Polo", price: 600000, image: "https://imgd.aeplcdn.com/370x208/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg" },
    { id: 50, make: "Volkswagen", model: " Taigun", price: 1800000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/144689/taigun-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
    { id: 51, make: "Volkswagen", model: "Virtus", price: 1500000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80" },
    { id: 52, make: "Volkswagen", model: "Polo", price: 1800000, image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volkswagen/Polo/7743/1587972393986/front-left-side-47.jpg?imwidth=420&impolicy=resize" },
    { id: 53, make: "Volkswagen", model: "Polo", price: 1800000, image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volkswagen/Polo/7743/1587972393986/front-left-side-47.jpg?imwidth=420&impolicy=resize" },
    { id: 54, make: "Volkswagen", model: "Polo", price: 1800000, image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volkswagen/Polo/7743/1587972393986/front-left-side-47.jpg?imwidth=420&impolicy=resize" },
  ];

  return allCars.filter(car => 
    car.price >= filters.budget[0] && 
    car.price <= filters.budget[1] &&
    (filters.make === '' || filters.make === car.make)
  );
};

export  function UsedCars() {
  const [budget, setBudget] = useState([150000, 2500000]);
  const [make, setMake] = useState('');
  const [cars, setCars] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const makes = [
    "Tata", "Maruti Suzuki", "Hyundai", "Honda", "Mahindra", 
    "KIA", "Nissan", "Toyota", "Volkswagen",
  ];

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      const filteredCars = await fetchCars({ budget, make });
      setCars(filteredCars);
      // setLoading(false);
    };
    fetchData();
  }, [budget, make]);

  const handleBudgetChange = (e) => {
    setBudget([parseInt(e.target.value), 2500000]);
    if (window.innerWidth < 1024) setShowFilters(false);
  };

  const handleMakeChange = (selectedMake) => {
    setMake(make === selectedMake ? '' : selectedMake);
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
                  checked={make === makeName}
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
          {/* {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : ( */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car) => (
                <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
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
                    <h3 className="font-semibold text-lg mb-2 text-blue-800">{car.make} {car.model}</h3>
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
         
          {/* {!loading && cars.length === 0 && (
            <p className="text-center text-blue-500 mt-8">No cars found matching your criteria.</p>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default UsedCars;