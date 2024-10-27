import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, User, ShoppingCart, MapPin, Calendar, Clipboard, Package, Book, FileText, Users, Building, Settings, LogOut, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../public/Img/carlogo4.png'
// Assuming you have a logo image file
// const logo = "/path/to/your/logo.png"; // Update this path to your actual logo file

// Simulating a user context
const useUser = () => {
  const [user, setUser] = useState(null);
  const logout = () => setUser(null);
  return { user, logout };
};

const Dropdown = ({ label, items, isMobile, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    if (onItemClick) onItemClick();
    if (item.onClick) item.onClick();
    setIsOpen(false);
  };

  return (
    <div 
      className={`relative dropdown-container ${isMobile ? 'w-full' : ''}`}
      ref={dropdownRef}
    >
      <button 
        className="text-black-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center w-full justify-between"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className={`bg-white rounded-md shadow-lg overflow-hidden ${isMobile ? 'w-full' : 'absolute w-64 right-0'}`}
          aria-label={`${label} submenu`}
          role="menu"
        >
          <div className="py-1 w-full">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {item.type === 'link' && (
                  <Link 
                    to={item.href} 
                    className="flex items-center px-4 py-2 text-sm text-gray-900 hover:bg-orange-100 transition-colors duration-200" 
                    onClick={() => handleItemClick(item)}
                    role="menuitem"
                  >
                    {item.icon && <item.icon className="mr-3 h-5 w-5 text-gray-900" aria-hidden="true" />}
                    <span className="flex-grow">{item.label}</span>
                    {item.tag && <span className="bg-orange-500 text-white px-2 py-1 text-xs rounded ml-2">{item.tag}</span>}
                  </Link>
                )}
                {item.type === 'separator' && (
                  <hr className="my-2 border-gray-200" role="separator" />
                )}
                {item.type === 'header' && (
                  <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider" role="presentation">{item.label}</h3>
                )}
                {item.type === 'button' && (
                  <button 
                    onClick={() => handleItemClick(item)} 
                    className={item.className}
                    role="menuitem"
                  >
                    {item.label}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [location, setLocation] = useState('');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useUser();
  const mobileMenuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    if (isMobile) {
      handleMobileLinkClick();
    }
  };

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
  };

  const servicesItems = [
    { type: 'link', label: 'Financing', href: '/financing', icon: FileText },
    { type: 'link', label: 'Insurance', href: '/insurance', icon: Clipboard },
  ];

  const placesItems = [
    { type: 'link', label: 'Showrooms', href: '/showrooms', icon: Building },
    { type: 'link', label: 'Service Centers', href: '/service', icon: Settings },
    { type: 'link', label: 'Dealerships', href: '/dealerships', icon: Users },
  ];

  const accountItems = [
    ...(user ? [] : [{
      type: 'link',
      label: 'Log In/Sign Up',
      href: '/login',
      icon: User,
      className: 'block w-full text-center bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 focus:outline-none mb-2 transition-colors duration-200',
    }]),
    { type: 'header', label: 'My Activities' },
    { type: 'link', label: 'My Appointments', href: '/my-appointments', icon: Calendar, tag: 'SELL' },
    { type: 'link', label: 'My Bookings', href: '/my-bookings', icon: Book, tag: 'BUY' },
    { type: 'link', label: 'My Orders', href: '/my-orders', icon: Package },
    { type: 'separator' },
    { type: 'header', label: 'Account Management' },
    { type: 'link', label: 'Profile Settings', href: '/carup', icon: Settings },
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
    ...(user ? [{
      type: 'button',
      label: 'Sign Out',
      onClick: logout,
      icon: LogOut,
      className: 'flex items-center px-4 py-2 text-sm text-gray-900 hover:bg-orange-100 w-full transition-colors duration-200'
    }] : [])
  ];

  return (
    <div className='mb-[80px] lg:mb-20'>
      <nav className="bg-orange-50 shadow-lg fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center" onClick={handleMobileLinkClick}>
                <img src={logo} alt="CarNagpur Logo" className="h-[50px] w-auto" />
              </Link>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="flex lg:hidden">
              <button
                className="text-blue-900 hover:text-orange-600 p-2 rounded-md transition-colors duration-200"
                onClick={() => setMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/usedcars" className="text-black-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Used Cars</Link>
              <Link to="/sell-car" className="text-black-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Sell Your Car</Link>
              <Dropdown label="Services" items={servicesItems} isMobile={false} />
              <Dropdown label="Places" items={placesItems} isMobile={false} />
            </div>

            {/* Right Section with Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/cart" className="p-2 rounded-full text-black-800 hover:text-orange-600 transition-colors duration-200">
                <ShoppingCart className="h-6 w-6" />
                <span className="sr-only">Shopping Cart</span>
              </Link>
              <Dropdown
                label={
                  <div className="flex items-center">
                    <User className="h-6 w-6 mr-1" />
                    <span className="text-sm font-medium">
                      {user ? `Welcome, ${user.email}` : 'Account'}
                    </span>
                  </div>
                }
                items={accountItems}
                isMobile={false}
              />
              <button
                onClick={handleLocationClick}
                className="flex items-center text-black-800 hover:text-orange-600 focus:outline-none transition-colors duration-200"
              >
                <MapPin className="h-6 w-6 mr-1" />
                <span className="text-sm font-medium">{location || "Nagpur"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (visible on smaller screens) */}
        <div 
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-orange-50 overflow-y-auto transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
          aria-label="Mobile menu"
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col space-y-2 px-4 pb-4">
            <Link to="/usedcars" className="text-blue-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200" onClick={handleMobileLinkClick}>Used Cars</Link>
            <Link to="/sell-car" className="text-blue-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200" onClick={handleMobileLinkClick}>Sell Your Car</Link>
            <Dropdown
              label="Services"
              items={servicesItems}
              isMobile={true}
              onItemClick={handleMobileLinkClick}
            />
            <Dropdown
              label="Places"
              items={placesItems}
              isMobile={true}
              onItemClick={handleMobileLinkClick}
            />
            <Dropdown
              label={
                <div className="flex items-center">
                  <User className="h-6 w-6 mr-1" />
                  <span className="text-sm font-medium">
                    {user ?` Welcome, ${user.email} `: 'Account'}
                  </span>
                </div>
              }
              items={accountItems}
              isMobile={true}
              onItemClick={handleMobileLinkClick}
            />
            <button
              onClick={handleLocationClick}
              className="flex items-center text-black-800 hover:text-orange-600 focus:outline-none px-3 py-2 transition-colors duration-200"
            >
              <MapPin className="h-6 w-6 mr-1" />
              <span className="text-sm font-medium">{location || "Nagpur"}</span>
            </button>
            <Link to="/cart" className="flex items-center text-black-800 hover:text-orange-600 px-3 py-2 transition-colors duration-200" onClick={handleMobileLinkClick}>
              <ShoppingCart className="h-6 w-6 mr-2" />
              <span className="text-sm font-medium">Cart</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;