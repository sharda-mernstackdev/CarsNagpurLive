import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className="bg-white text-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <img src="./src/Img/carlogo4.png" alt="CarsNagpur Logo" className="h-12 mr-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">Useful links</h3>
              <ul className="space-y-2">
                {['Contact us', 'Car insurance', 'About us', 'Privacy policy', 'Terms and conditions', 'FAQ', 'Testimonials', 'Blog', 'CarsNagpur finance', 'Explore new cars'].map((item, index) => (
                  <li key={index}><a href="#" className="hover:text-blue-600">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Popular searches</h3>
              <ul className="space-y-2">
                {['Check challan', 'Sell used car', 'Used car valuation'].map((item, index) => (
                  <li key={index}><a href="#" className="hover:text-blue-600">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Other geographies</h3>
              <ul className="space-y-2">
                {['NAGPUR'].map((item, index) => (
                  <li key={index}><a href="#" className="hover:text-blue-600">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Keep in touch</h3>
              <div className="flex space-x-4 mb-4">
                <FaFacebookF className="text-gray-600 hover:text-blue-600 cursor-pointer" />
                <FaTwitter className="text-gray-600 hover:text-blue-400 cursor-pointer" />
                <FaYoutube className="text-gray-600 hover:text-red-600 cursor-pointer" />
                <FaLinkedinIn className="text-gray-600 hover:text-blue-800 cursor-pointer" />
                <FaInstagram className="text-gray-600 hover:text-pink-600 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Navbar added below the terms and conditions part */}
          <nav className="border-t border-gray-200 pt-8 mb-8">
            <ul className="flex flex-wrap justify-center space-x-6 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Buy Car</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Sell Car</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Car Loan</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Car Insurance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>

          <div className="text-center text-sm text-gray-500">
            © 2024 CarsNagpur. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;