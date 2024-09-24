import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search, User, ShoppingCart, MapPin, Calendar, Clipboard, Package, Book, FileText, Users, Building, Settings, LogOut } from 'lucide-react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

// Reusable Dropdown Component
const Dropdown = ({ label, items, isOpen, toggleDropdown }) => {
  return (
    <div className="relative group">
      <button
        className="text-blue-900 group-hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
        onClick={toggleDropdown}
      >
        {label}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      <div className={`absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10 ${isOpen ? 'block' : 'hidden'} group-hover:block`}>
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

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isPlacesOpen, setIsPlacesOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [location, setLocation] = useState('');
  const currentLocation = useLocation();

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

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
      <nav className="bg-orange-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center -ml-20">
                <img src="./src/Img/carlogo4.png" alt="CarNagpur Logo" className="h-[65px] w-[250px] -ml-10" />
              </Link>
              <div className="hidden lg:ml-4 lg:flex lg:space-x-8 ">
                {/* <Link to="/new-cars" className="text-blue-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">New Cars</Link> */}
                <Link to="/used-cars" className="text-blue-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Used Cars</Link>
                <Link to="/sell-car" className="text-blue-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Sell Your Car</Link>

                {/* Services Dropdown */}
                <Dropdown
                  label="Services"
                  isOpen={false}
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
                  isOpen={isPlacesOpen}
                  toggleDropdown={() => setIsPlacesOpen(!isPlacesOpen)}
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
                isOpen={isAccountOpen}
                toggleDropdown={() => setIsAccountOpen(!isAccountOpen)}
                items={[
                  {
                    type: 'link',
                    label: 'Log In/Sign Up',
                    href: '/login',
                    icon: User,  // Add User icon here
                    onClick: () => setShowLoginModal(true),
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
                <MapPin className="h-6 w-6" />
                <span className="ml-1 text-sm font-medium">{location || 'Live Location'}</span>
              </button>

              {/* Schedule Test Drive Button */}
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                Schedule Test Drive
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-blue-800 hover:text-orange-600 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/new-cars" className="block pl-3 pr-4 py-2 border-l-4 border-orange-500 text-base font-medium text-orange-700 bg-orange-50">New Cars</Link>
            <Link to="/used-cars" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-blue-800 hover:text-blue-900 hover:bg-orange-50 hover:border-orange-300">Used Cars</Link>
            <Link to="/sell-car" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-blue-800 hover:text-blue-900 hover:bg-orange-50 hover:border-orange-300">Sell Your Car</Link>
            <Link to="/services" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-blue-800 hover:text-blue-900 hover:bg-orange-50 hover:border-orange-300">Services</Link>
            <Dropdown 
              label="Places"
              isOpen={isPlacesOpen}
              toggleDropdown={() => setIsPlacesOpen(!isPlacesOpen)}
              items={[
                { label: 'Showrooms', href: '/showrooms' },
                { label: 'Service Centers', href: '/service-centers' },
                { label: 'Dealerships', href: '/dealerships' },
                { label: 'Test Drive Locations', href: '/test-drive-locations' }
              ]}
            />
            <button 
              onClick={handleLocationClick}
              className="flex items-center w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-blue-800 hover:text-blue-900 hover:bg-orange-50 hover:border-orange-300"
            >
              <MapPin className="h-6 w-6" />
              <span className="ml-2">{location || 'Live Location'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

