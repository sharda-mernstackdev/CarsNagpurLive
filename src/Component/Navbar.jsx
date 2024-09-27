import React, { useState } from 'react';
import { ChevronDown, Search, User, ShoppingCart, MapPin, Calendar, Clipboard, Package, Book, FileText, Users, Building, Settings, LogOut } from 'lucide-react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

// Reusable Dropdown Component
const Dropdown = ({ label, items }) => {
  return (
    <div className="relative group ">
      <button className="text-blue-900 group-hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
        {label}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      {/* Dropdown menu */}
      <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10 opacity-0 group-hover:opacity-100 group-hover:visible invisible group-hover:block transition-all duration-300">
        {items.map((item, index) => (
          React.createElement(React.Fragment, { key: index },
            item.type === 'link' ? (
              <Link to={item.href} className="flex items-center px-4 py-2 text-sm text-blue-800 hover:bg-orange-100">
                {item.icon && <item.icon className="mr-3 h-5 w-5 text-blue-600" />}
                <span className="flex-grow">{item.label}</span>
                {item.tag && <span className="bg-orange-500 text-white px-2 py-1 text-xs rounded ml-2">{item.tag}</span>}
              </Link>
            ) : item.type === 'separator' ? (
              <hr className="my-2 border-gray-200" />
            ) : item.type === 'header' ? (
              <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">{item.label}</h3>
            ) : item.type === 'button' ? (
              <button onClick={item.onClick} className={item.className}>
                {item.label}
              </button>
            ) : null
          )
        ))}
      </div>
    </div>
  );
};

// Navbar Component with Fixed Position
const Navbar = () => {
  const [location, setLocation] = useState('');
  const currentLocation = useLocation();

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocation("Location unavailable");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  };

  return (
    <div>
      <nav className="bg-orange-50 shadow-lg sticky top-0 left-0 w-full z-50"> {/* Changed to fixed */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link to="/home" className="flex-shrink-0 flex items-center -ml-20">
                <img src="./src/Img/carlogo4.png" alt="CarNagpur Logo" className="h-[65px] w-[250px] -ml-10" />
              </Link>
              <div className="hidden lg:ml-4 lg:flex lg:space-x-8">
                <Link to="/usedcars" className="text-blue-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Used Cars</Link>
                <Link to="/sell-car" className="text-blue-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Sell Your Car</Link>

                {/* Services Dropdown */}
                <Dropdown
                  label="Services"
                  items={[
                    { type: 'link', label: 'Financing', href: '/financing', icon: FileText },
                    { type: 'link', label: 'Insurance', href: '/insurance', icon: Clipboard },
                    { type: 'link', label: 'Vehicle History', href: '/vehicle-history', icon: Book },
                    { type: 'link', label: 'Trade-In Value', href: '/trade-in', icon: Package }
                  ]}
                />

                {/* Places Dropdown */}
                <Dropdown
                  label="Places"
                  items={[
                    { type: 'link', label: 'Showrooms', href: '/showrooms', icon: Building },
                    { type: 'link', label: 'Service Centers', href: '/service-centers', icon: Settings },
                    { type: 'link', label: 'Dealerships', href: '/dealerships', icon: Users },
                    { type: 'link', label: 'Test Drive Locations', href: '/test-drive-locations', icon: MapPin }
                  ]}
                />
              </div>
            </div>




            {/* Right Section with Icons */}
            <div className="hidden lg:ml-6 lg:flex lg:items-center space-x-4 -mr-[130px]">
              <button className="p-2 rounded-full text-blue-800 hover:text-orange-600 focus:outline-none">
                <Search className="h-6 w-6" />
              </button>
              <Link to="/cart" className="p-2 rounded-full text-blue-800 hover:text-orange-600">
                <ShoppingCart className="h-6 w-6" />
              </Link>

              {/* Account Dropdown */}
              <Dropdown
                label={
                  <div className="flex items-center">
                    <User className="h-6 w-6 mr-1" />
                    <span className="text-sm font-medium">Account</span>
                  </div>
                }
                items={[
                  {
                    type: 'link',
                    label: 'Log In/Sign Up',
                    href: '/login',
                    icon: User,
                    className: 'block w-full text-center bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 focus:outline-none mb-2',
                  },
                  { type: 'header', label: 'My Activities' },
                  { type: 'link', label: 'My Appointments', href: '/my-appointments', icon: Calendar, tag: 'SELL' },
                  { type: 'link', label: 'My Bookings', href: '/my-bookings', icon: Book, tag: 'BUY' },
                  { type: 'link', label: 'My Orders', href: '/my-orders', icon: Package },
                  { type: 'separator' },
                  { type: 'header', label: 'Account Management' },
                  { type: 'link', label: 'Profile Settings', href: '/profile', icon: Settings },
                  { type: 'link', label: 'RC Transfer Status', href: '/rc-transfer-status', icon: Clipboard },
                  { type: 'separator' },
                  { type: 'header', label: 'Resources' },
                  { type: 'link', label: 'Help Center', href: '/help', icon: FileText },
                  { type: 'link', label: 'FAQ', href: '/faq', icon: FileText },
                  { type: 'separator' },
                  { type: 'header', label: 'Partnerships' },
                  { type: 'link', label: 'Become Our Partner', href: '/become-partner', icon: Users },
                  { type: 'link', label: 'Become a CarNagpur Franchise', href: '/franchise', icon: Building },
                  { type: 'separator' },
                  { type: 'link', label: 'Sign Out', href: '/sign-out', icon: LogOut }
                ]}
              />

              {/* Location Button */}
              <button
                onClick={handleLocationClick}
                className="flex items-center text-blue-800 hover:text-orange-600 focus:outline-none"
              >
                <MapPin className="h-6 w-6 mr-1" />
                <span className="text-sm font-medium">{location || "Nagpur"}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
