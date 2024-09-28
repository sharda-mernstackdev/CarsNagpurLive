import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa";

function CarsData() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [click,setClick]=useState(true)

  return (
    <div className="container mx-auto py-4">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-gray-200 rounded-lg  h-[560px] ">
            <img
              src="/src/assets/tata.jpg"
              alt="2022 Tata Harrier XT PLUS 2.0L"
              layout="fill"
              objectFit="cover"
              
            />
            <span className="absolute bottom-2 left-2 bg-gray-800 bg-opacity-75 text-white px-2  text-sm rounded">
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
          <h1 className="text-2xl font-bold">
            2022 Tata Harrier XT PLUS 2.0L KRYOTEC DARK EDITON
          </h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-gray-100 px-2 py-1 rounded">27,990 KM</span>
            <span className="bg-gray-100 px-2 py-1 rounded">1ST OWNER</span>
            <span className="bg-gray-100 px-2 py-1 rounded">DIESEL</span>
            <span className="bg-gray-100 px-2 py-1 rounded">MANUAL</span>
          </div>
          <div className="space-y-2 text-sm">
            <p className="cursor-pointer text-blue-600 hover:underline" onClick={toggleModal}>
              Parked at: M3M Urbana, Golf Course Ext., ...
            </p>
            <p className="text-blue-600 cursor-pointer hover:underline" onClick={toggleModal}>
              View Inspection Report &gt;
            </p>
            <p className="text-blue-600 cursor-pointer hover:underline" onClick={toggleModal}>
              View Service History Report &gt;
            </p>
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
            <button onClick={()=>setClick((preve)=>!preve)} className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300">
            {
          
          click ? (
          <FaRegHeart className="w-8 h-8 " />

        ): (
          <FaHeart className="w-8 h-8   text-red-500"/>
        )
        }
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Car parked at</h2>
              <button onClick={toggleModal} className="text-gray-600 hover:text-gray-800">
                &#10005;
              </button>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">
                <strong>CARSNAGPUR Hub, Sakkardara, Nagpur</strong>
              </p>
              {/* <p className="text-sm text-gray-500">Time: 11:00 AM - 08:00 PM</p> */}
              <p className="text-sm text-gray-500">
              525 hanuman nagr professor colony Nagpur-440023
              </p>
              <button className=' bg-orange-400 mt-3 rounded-lg outline-none p-1 '>
                <a href="https://maps.app.goo.gl/ZXqK8AA7tQTETxUAA">
                LOCATE HUB 
                </a>
              </button>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/src/assets/snju.png"
                alt="Manager"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-sm font-bold">Sanjana Kashimkar</p>
                <p className="text-sm text-gray-500">Our Project Manager</p>
              </div>
            </div>
            <button className="text-orange-500 font-bold text-sm hover:underline">
              CALL 7303465454
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarsData;
