import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function DealerShip() {
  // Arrays for cities and cars
  const cities = [
    "Burdi",
    "Manewada",
    "Dighori",
    "vardhyaman nagar",
    "Somalwada",
    "Friends colony",  
     "Sadar",
    "Katolnaka",
    "Jaripatka",
    "Itwari",
    "Dharampeth",
    "Hudkeshwar",
  ];

  const dealers = [
    { name: 'Citizen Carz', image: '/images/citizen-carz.jpg' },
    { name: 'Chennai Motorss', image: '/images/chennai-motors.jpg' },
    { name: 'Broker Dalal', image: '/images/broker-dalal.jpg' },
    { name: 'Luxury Wheels', image: '/images/luxury-wheels.jpg' }, // Add more dealer items as needed
  ];


  const cars = [
    { name: "Hyundai i20", price: "₹ 2,49,000", image: ".src/assets/tata.jpg" },
    { name: "Hyundai Grand i10", price: "₹ 3,40,930", image: "path-to-image/hyundai-i10.jpg" },
    { name: "Maruti Baleno", price: "₹ 5,00,000", image: "path-to-image/maruti-baleno.jpg" },
    { name: "Hyundai Creta", price: "₹ 8,01,000", image: "path-to-image/hyundai-creta.jpg" },
  ];

  return (
    <div className="relative bg-white">
      {/* Background image with overlay */}
      <div className="relative h-[630px]">
        <img
          src="./src/Img/delership.png" // Background image
          alt="Car background"
          className="w-full h-[630px] object-cover"
        />
        <div className="absolute inset-0 bg-gray-600 h-[630px] bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-[630px] flex flex-col justify-center items-center space-y-8">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
          Helping you connect to <br /> the right used car dealers
        </h1>

        {/* Search box */}
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Nagpur"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <input
            type="text"
            placeholder="Select Locality"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button className="px-6 py-2 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600">
            Search
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-8">Used Car Showrooms in Nagpur</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Popular Cities */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Used Car Dealer in Popular Areas</h2>
              <input
                type="text"
                placeholder="🔍 Search your city"
                className="px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* City Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {cities.map((city) => (
                <div
                  key={city}
                  className="p-4 border rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full"></div>
                  <p className="text-lg font-semibold">{city}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Popular Used Cars */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Popular Used Cars in Nagpur</h2>
            <div className="space-y-4">
              {cars.map((car) => (
                <div
                  key={car.name}
                  className="flex items-center border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{car.name}</h3>
                    <p className="text-gray-600">{car.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

{/* Used Luxury Cars Dealership */}
{/* Used Luxury Cars Dealership with Swiper Carousel */}
      
        <h2 className="text-2xl font-bold mb-4">Used Luxury Cars Dealership</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {dealers.map((dealer) => (
            <SwiperSlide key={dealer.name}>
              <div className="w-72 border rounded-lg shadow hover:shadow-lg transition-shadow">
                <img
                  src={dealer.image}
                  alt={dealer.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center">{dealer.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    

{/* For Your Further Research */}
<section className="p-6 bg-gray-50 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-6">For Your Further Research</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4 p-4 border rounded-lg shadow">
            <img src="/images/icon1.png" alt="Used Cars Icon" className="w-10 h-10" />
            <div>
              <p className="font-semibold">Used Cars In Gurgaon</p>
              <a href="#" className="text-blue-500 hover:underline">View All (2445)</a>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 border rounded-lg shadow">
            <img src="/images/icon2.png" alt="Sell Car Icon" className="w-10 h-10" />
            <div>
              <p className="font-semibold">Sell Your Car For Free</p>
              <a href="#" className="text-blue-500 hover:underline">Upload Car</a>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 border rounded-lg shadow">
            <img src="/images/icon3.png" alt="Price Valuation Icon" className="w-10 h-10" />
            <div>
              <p className="font-semibold">Get The True Price Of Your Car</p>
              <a href="#" className="text-blue-500 hover:underline">Start Valuation</a>
            </div>
          </div>
        </div>
      </section>





      Dealer Ship 
    </div>
  );
}

export default DealerShip;
