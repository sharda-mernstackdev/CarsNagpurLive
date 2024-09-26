import React from 'react'
import { Search, Car, DollarSign, CreditCard, CheckCircle, AlertCircle, Grid } from 'lucide-react'
import { Link } from 'react-router-dom'

const carBrands = [
  { name: 'Maruti Suzuki', logo: '/placeholder.svg?height=30&width=60' },
  { name: 'Hyundai', logo: '/placeholder.svg?height=30&width=60' },
  { name: 'Honda', logo: '/placeholder.svg?height=30&width=60' },
  { name: 'Tata', logo: '/placeholder.svg?height=30&width=60' },
  { name: 'Renault', logo: '/placeholder.svg?height=30&width=60' },
  { name: 'Mahindra', logo: '/placeholder.svg?height=30&width=60' },
  { name: 'Ford', logo: '/placeholder.svg?height=30&width=60' },
  { name: 'Kia', logo: '/placeholder.svg?height=30&width=60' },
]

const services = [
  { icon: <Car className="w-6 h-6" />, label: 'Buy used car' },
  { icon: <DollarSign className="w-6 h-6" />, label: 'Sell car' },
  { icon: <Car className="w-6 h-6" />, label: 'New car' },
  { icon: <CreditCard className="w-6 h-6" />, label: 'Car loan' },
  { icon: <CreditCard className="w-6 h-6" />, label: 'Credit card' },
  { icon: <CheckCircle className="w-6 h-6" />, label: 'Get car checked' },
  { icon: <AlertCircle className="w-6 h-6" />, label: 'Pay challan' },
  { icon: <Grid className="w-6 h-6" />, label: 'More' },
]

export function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70 mt-[160px]"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="mb-8">
          <div className="text-sm mb-2">Welcome to</div>
          <div className="text-2xl font-bold bg-yellow-400 text-black inline-block px-2 py-1 rounded">CARS24</div>
        </header>
        
        <main>
          <h1 className="text-4xl font-bold mb-8">Your all-in-one car universe</h1>
          
          <div className="bg-white bg-opacity-90 rounded-lg p-6 mb-8 shadow-lg">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-gray-100 rounded-full p-3 mb-2">
                    {service.icon}
                  </div>
                  <span className="text-gray-700 text-xs">{service.label}</span>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search cars by model"
                className="w-full p-2 pl-10 border border-gray-300 rounded"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-between items-center">
            {carBrands.map((brand, index) => (
              <img key={index} src={brand.logo} alt={brand.name} className="h-6 mb-4" />
            ))}
            <Link to="/UsedCars" className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
              View all cars
            </Link>
          </div>
        </main>
      </div>




    </div>
  )
}
export default Home;
