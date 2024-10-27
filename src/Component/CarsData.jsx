'use client'

import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const CarDetails = {
  title: '2022 Tata Harrier XT PLUS 2.0L KRYOTEC DARK EDITON',
  specs: ['27,990 KM', '1ST OWNER', 'DIESEL', 'MANUAL'],
  monthlyPrice: '₹29,541',
  discount: '₹1.84L',
  totalPrice: '₹15.52 Lakh',
  originalPrice: '₹17.36 Lakh',
  location: 'M3M Urbana, Golf Course Ext., ...',
  managerName: 'Sanjana Kashimkar',
  managerRole: 'Our Project Manager',
  managerPhone: '7303465454',
  hubAddress: '525 hanuman nagr professor colony Nagpur-440023',
  hubName: 'CARSNAGPUR Hub, Sakkardara, Nagpur',
  mapLink: 'https://maps.app.goo.gl/ZXqK8AA7tQTETxUAA'
};

const ImageGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={images[currentImage]}
          alt={`Car image ${currentImage + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={prevImage} className="p-2 bg-black bg-opacity-50 text-white rounded-full">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextImage} className="p-2 bg-black bg-opacity-50 text-white rounded-full">
            <ChevronRight size={24} />
          </button>
        </div>
        <span className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-2 py-1 text-sm rounded">
          {currentImage + 1} / {images.length}
        </span>
      </div>
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`flex-shrink-0 ${currentImage === index ? 'ring-2 ring-blue-500' : ''}`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-20 h-20 object-cover rounded-md"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-[90%] shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Car Location</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <X size={24} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export  function CarsData() {
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  const toggleFavorite = () => setIsFavorite(!isFavorite);

  const carImages = Array(12).fill('https://news24online.com/wp-content/uploads/2024/07/Tata-Nexon-2024.jpg');

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <ImageGallery images={carImages} />

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{CarDetails.title}</h1>
          <div className="flex flex-wrap gap-2">
            {CarDetails.specs.map((spec, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                {spec}
              </span>
            ))}
          </div>
          <div className="space-y-2">
            <button onClick={toggleModal} className="text-blue-600 hover:underline text-sm">
              Parked at: {CarDetails.location}
            </button>
            <p className="text-blue-600 cursor-pointer hover:underline text-sm">
              View Inspection Report &gt;
            </p>
            <p className="text-blue-600 cursor-pointer hover:underline text-sm">
              View Service History Report &gt;
            </p>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-orange-500">{CarDetails.monthlyPrice}/month</span>
            <span className="text-green-500 bg-green-100 px-2 py-1 rounded-full text-sm">
              {CarDetails.discount} off
            </span>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-800">{CarDetails.totalPrice}</p>
            <p className="text-sm text-gray-500 line-through">{CarDetails.originalPrice}</p>
          </div>
          <button className="text-blue-600 font-semibold hover:underline">CHECK ELIGIBILITY →</button>
          <div className="flex space-x-4">
            <button className="flex-grow bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300 font-semibold">
              BOOK FREE TEST DRIVE
            </button>
            <button
              onClick={toggleFavorite}
              className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300"
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              {isFavorite ? (
                <FaHeart className="w-6 h-6 text-red-500" />
              ) : (
                <FaRegHeart className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={toggleModal}>
        <div className="space-y-4">
          <p className="font-semibold">{CarDetails.hubName}</p>
          <p className="text-sm text-gray-600">{CarDetails.hubAddress}</p>
          <a
            href={CarDetails.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            LOCATE HUB
          </a>
          <div className="flex items-center space-x-4">
            <img src="/src/assets/snju.png" alt="Manager" className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-semibold">{CarDetails.managerName}</p>
              <p className="text-sm text-gray-600">{CarDetails.managerRole}</p>
            </div>
          </div>
          <a
            href={`tel:${CarDetails.managerPhone}`}
            className="inline-block text-orange-500 font-semibold hover:underline"
          >
            CALL {CarDetails.managerPhone}
          </a>
        </div>
      </Modal>
    </div>
  );
}

export default CarsData;
