import React from 'react'
import { FaRegHeart } from "react-icons/fa";

function CarsData() {
  return (
    <div className="container mx-auto py-4">
    <div className="grid md:grid-cols-2 gap-6">
      {/* Image Section */}
      <div className="space-y-4">
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden h-[570px] ">
          <img
            src="/src/assets/tata.jpg"
            alt="2022 Tata Harrier XT PLUS 2.0L"
            layout="fill"
            objectFit="cover"
          />
          <span className="absolute bottom-2 left-2 bg-gray-800 bg-opacity-75 text-white px-2 py-1 text-sm rounded">
            1 / 12
          </span>
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex-shrink-0">
              <img
                src="/src/assets/tata.jpg"
                alt={`Thumbnail ${i + 1}`}
                width={100}
                height={100}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">2022 Tata Harrier XT PLUS 2.0L KRYOTEC DARK EDITON</h1>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="bg-gray-100 px-2 py-1 rounded">27,990 KM</span>
          <span className="bg-gray-100 px-2 py-1 rounded">1ST OWNER</span>
          <span className="bg-gray-100 px-2 py-1 rounded">DIESEL</span>
          <span className="bg-gray-100 px-2 py-1 rounded">MANUAL</span>
        </div>
        <div className="space-y-2 text-sm">
          <p>Parked at: M3M Urbana, Golf Course Ext., ...</p>
          <p className="text-blue-600 cursor-pointer hover:underline">View Inspection Report &gt;</p>
          <p className="text-blue-600 cursor-pointer hover:underline">View Service History Report &gt;</p>
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold text-orange-500">₹29,541/month</span>
          <span className="text-green-500 bg-green-100 px-2 py-1 rounded text-sm">₹1.84L off</span>
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-bold">₹15.52 Lakh</p>
          <p className="text-sm text-gray-500 line-through">₹17.36 Lakh</p>
        </div>
        <p className="text-blue-600 cursor-pointer hover:underline">CHECK ELIGIBILITY →</p>
        <div className="flex space-x-2">
          <button className="flex-grow bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300">
            BOOK FREE TEST DRIVE
          </button>
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300">
            <FaRegHeart className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CarsData
