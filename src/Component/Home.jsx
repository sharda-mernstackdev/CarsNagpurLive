import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Search, Shield, ThumbsUp, Truck, Clock, CreditCard, Zap, FileText, Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion';

export  function Home() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [featuredStartIndex, setFeaturedStartIndex] = useState(0)
  const [currentAd, setCurrentAd] = useState(0)
  const [curatedStartIndex, setCuratedStartIndex] = useState(0)

  const carouselItems = [
    { id: 1, image: 'https://i.pinimg.com/564x/4a/6c/f1/4a6cf1f407c01a6d64b933033c03312e.jpg', alt: 'Car 1' },
    { id: 2, image: 'https://i.pinimg.com/564x/ab/31/a0/ab31a0734b273036e5a232f1f9aa2d5c.jpg', alt: 'Car 2' },
    { id: 3, image: 'https://i.pinimg.com/564x/42/c3/02/42c302bf6d9dc6a9ff08b38e973ec0b6.jpg', alt: 'Car 3' },
  ]

  const featuredCars = [
    { id: 1, name: 'Tata Nexon', price: '₹ 8 - 15.50 Lakh*', image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0' },
    { id: 2, name: 'Mahindra Thar', price: '₹ 11.35 - 17.60 Lakh*', image: 'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/166487/xuv700-right-front-three-quarter-2.jpeg?isig=0&q=80' },
    { id: 3, name: 'Tata Curvy', price: '₹ 10 - 19 Lakh*', image: 'https://media.zigcdn.com/media/model/2024/Jul/tata-curvv.jpg' },
    { id: 4, name: 'Tata Punch', price: '₹ 6.13 - 10 Lakh*', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRlUoZ98Z-GaqHAzHxjCZmBJhp51IOLdBig&s' },
    { id: 5, name: 'Tata Harrier', price: '₹ 15.49 - 26.44 Lakh*', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRlUoZ98Z-GaqHAzHxjCZmBJhp51IOLdBig&s' },
    { id: 6, name: 'Tata Safari', price: '₹ 16.19 - 27.34 Lakh*', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRlUoZ98Z-GaqHAzHxjCZmBJhp51IOLdBig&s' },
    { id: 7, name: 'Tata Altroz', price: '₹ 6.60 - 10.74 Lakh*', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRlUoZ98Z-GaqHAzHxjCZmBJhp51IOLdBig&s' },
    { id: 8, name: 'Tata Tigor', price: '₹ 6.30 - 9.55 Lakh*', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRlUoZ98Z-GaqHAzHxjCZmBJhp51IOLdBig&s' },
  ]

  const curatedServices = [
    {
      title: 'Personal Loan',
      description: 'Make your dreams real with a personal loan',
      color: 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17Lq6Sqo0L9W_KhnZOcoCTm5y4L17euKMeg&s',
      features: [
        'Attractive interest rates',
        'Disbursal in 5 mins',
        'Get upto Rs 10 Lakhs',
      ],
      cta: 'Apply now',
    },
    {
      title: 'Credit Cards',
      description: 'All your credit card options in one place',
      color: 'bg-gradient-to-r from-green-500 via-green-500 to-green-800', // Gradient background
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1UXLu28_fAxiw2NTYz4T1QQw_qdAUIHXsA&s',
      features: [ 
        '30+ Card options',
        'Digital process',
        '100% transparency',
      ],
      cta: 'Apply now',
    },
    
    {
      title: 'Sell Your Car',
      description: 'Trust us to sell your car',
      color: 'bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtoVz0l2pGYMT1qJsQqF1OvnfImlbm297FFymPC41d73Y18n1Lfb2cx3vrEMWbYsQG5c&usqp=CAU',
      features: [
        'Great price',
        'Instant payment',
        'Hassle-free documentation',
      ],
      cta: 'Get car price',
    },
    {
      title: 'Car Financing',
      description: 'Make your dream car a reality',
      color: 'bg-gradient-to-r from-gray-400 via-gray-600 to-gray-700',
      image: 'https://img.freepik.com/premium-vector/business-man-ready-buy-car_37895-188.jpg',
      features: [
        'Competitive rates',
        'Quick approval',
        'Flexible terms',
      ],
      cta: 'Check eligibility',
    },
  
    {
      title: 'Personal Loan',
      description: 'Make your dreams real with a personal loan',
      color: 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17Lq6Sqo0L9W_KhnZOcoCTm5y4L17euKMeg&s',
      features: [
        'Attractive interest rates',
        'Disbursal in 5 mins',
        'Get upto Rs 10 Lakhs',
      ],
      cta: 'Apply now',
    },
  
    {
      title: 'Credit Cards',
      description: 'All your credit card options in one place',
      color: 'bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1UXLu28_fAxiw2NTYz4T1QQw_qdAUIHXsA&s',
      features: [
        '30+ Card options',
        'Digital process',
        '100% transparency',
      ],
      cta: 'Apply now',
    },
  
    {
      title: 'Sell Your Car',
      description: 'Trust us to sell your car',
      color: 'bg-gradient-to-r from-red-400 via-red-500 to-red-600',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtoVz0l2pGYMT1qJsQqF1OvnfImlbm297FFymPC41d73Y18n1Lfb2cx3vrEMWbYsQG5c&usqp=CAU',
      features: [
        'Great price',
        'Instant payment',
        'Hassle-free documentation',
      ],
      cta: 'Get car price',
    },
  
    {
      title: 'Car Financing',
      description: 'Make your dream car a reality',
      color: 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600',
      image: 'https://img.freepik.com/premium-vector/business-man-ready-buy-car_37895-188.jpg',
      features: [
        'Competitive rates',
        'Quick approval',
        'Flexible terms',
      ],
      cta: 'Check eligibility',
    },
  
  
    {
      title: 'Credit Cards',
      description: 'All your credit card options in one place',
      color: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-800', // Gradient background
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1UXLu28_fAxiw2NTYz4T1QQw_qdAUIHXsA&s',
      features: [
        '30+ Card options',
        'Digital process',
        '100% transparency',
      ],
      cta: 'Apply now',
    },
    
  
    {
      title: 'Sell Your Car',
      description: 'Trust us to sell your car',
      color: 'bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtoVz0l2pGYMT1qJsQqF1OvnfImlbm297FFymPC41d73Y18n1Lfb2cx3vrEMWbYsQG5c&usqp=CAU',
      features: [
        'Great price',
        'Instant payment',
        'Hassle-free documentation',
      ],
      cta: 'Get car price',
    },
  
  ];

  const testimonials = [
    {
      name: 'Sanjana kashimkar',
      position: 'Business Owner',
      comment: 'I found my dream car at an unbeatable price. The service was exceptional, and the entire process was smooth and transparent.',
      image: 'https://img.freepik.com/premium-photo/sparkle-shine-with-barbie-pink-blur-shiny-wallpaper-glamorous-room-makeover_974154-242.jpg',
    },
    {
      name: 'Sharda Waghmare',
      position: 'Software Engineer',
      comment: 'The team at this dealership went above and beyond to help me find the perfect car for my needs. I could be happier with my purchase!',
      image: 'https://img.freepik.com/premium-photo/sparkle-shine-with-barbie-pink-blur-shiny-wallpaper-glamorous-room-makeover_974154-242.jpg',
    },
    {
      name: 'Muskan Burde',
      position: 'Marketing Manager',
      comment: 'From the test drive to the financing options, everything was handled professionally. I highly recommend this dealership to anyone in the market for a new car.',
      image: 'https://img.freepik.com/premium-photo/sparkle-shine-with-barbie-pink-blur-shiny-wallpaper-glamorous-room-makeover_974154-242.jpg',
    },
  
    {
      name: 'Pranav Belorkar',
      position: 'Business Owner',
      comment: 'I found my dream car at an unbeatable price. The service was exceptional, and the entire process was smooth and transparent.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLIVWb-DC9dnBdwCaS8aOUXxScKYuQCzfqw&s',
    },
  
    {
      name: 'Gaurav Mohadikar',
      position: 'Software Engineer',
      comment: 'The team at this dealership went above and beyond to help me find the perfect car for my needs. I could be happier with my purchase!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLIVWb-DC9dnBdwCaS8aOUXxScKYuQCzfqw&s',
    },
  
    {
      name: 'Ashwini Thakre',
      position: 'Marketing Manager',
      comment: 'From the test drive to the financing options, everything was handled professionally. I highly recommend this dealership to anyone in the market for a new car.',
      image: 'https://img.freepik.com/premium-photo/sparkle-shine-with-barbie-pink-blur-shiny-wallpaper-glamorous-room-makeover_974154-242.jpg',
    },
  ];


  const reasons = [
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: 'Quality Assurance',
      description: 'All our cars undergo rigorous quality checks before listing.',
    },
    {
      icon: <ThumbsUp className="w-12 h-12 text-orange-500" />,
      title: 'Customer Satisfaction',
      description: 'We prioritize customer satisfaction with our top-notch service.',
    },
    {
      icon: <Truck className="w-12 h-12 text-orange-500" />,
      title: 'Free Delivery',
      description: 'Enjoy free delivery on all purchases within 100 miles.',
    },
  ]

  const advertisements = [
    { id: 1, title: '', description: '', image: './public/Img/sale1.jpg' },
    { id: 2, title: '', description: '', image: './public/Img/sale2.jpg' },
    { id: 3, title: '', description: '', image: './public/Img/sale3.jpg' },
  ]

  const scrollSection = (direction, ref) => {
    if (ref.current) {
      const scrollAmount = 320; // Change the scroll amount based on your card width
      if (direction === 'left') {
        ref.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else if (direction === 'right') {
        ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentHeroSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
    }, 5000)

    const adTimer = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % advertisements.length)
    }, 5000)

    return () => {
      clearInterval(heroTimer)
      clearInterval(adTimer)
    }
  }, [])

  const nextFeaturedSlide = () => {
    setFeaturedStartIndex((prevIndex) => (prevIndex + 1) % featuredCars.length)
  }

  const prevFeaturedSlide = () => {
    setFeaturedStartIndex((prevIndex) => (prevIndex - 1 + featuredCars.length) % featuredCars.length)
  }

  const nextCuratedSlide = () => {
    setCuratedStartIndex((prevIndex) => (prevIndex + 1) % curatedItems.length)
  }

  const prevCuratedSlide = () => {
    setCuratedStartIndex((prevIndex) => (prevIndex - 1 + curatedItems.length) % curatedItems.length)
  }

  const visibleCars = [...featuredCars.slice(featuredStartIndex), ...featuredCars.slice(0, featuredStartIndex)].slice(0, 4)

const curatedServicesRef = useRef(null)

  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Hero Section */}
      <section className="relative h-screen ">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={item.image} alt={item.alt} className="w-full h-[700px] object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r opacity-75 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Car</h1>
            <p className="text-xl md:text-2xl mb-8">Explore our wide range of quality vehicles</p>
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Search for cars..."
                className="px-4 py-2 w-64 md:w-96 rounded-l-md focus:outline-none text-black"
              />
              <button className="bg-orange-600 text-white px-4 py-2 rounded-r-md hover:bg-orange-700">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className=" py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold italic mb-8 text-center">Featured Cars</h2>
          <div className="relative">
            <div className="flex justify-between items-center gap-4 overflow-x-auto pb-4">
              {visibleCars.map((car) => (
                <div key={car.id} className="bg-white rounded-lg shadow-md flex-shrink-0 w-64">
                  <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
                    <p className="text-gray-600 mb-4">{car.price}</p>
                    <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors">
                      Check September Offers
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={prevFeaturedSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextFeaturedSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="text-center mt-8">
            <a href="#" className="text-orange-500 hover:underline">
              View All SUV Cars →
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100 bg-cover" style={{ backgroundImage: `url('https://www.shutterstock.com/image-vector/car-abstract-vector-3d-modern-260nw-1951315810.jpg')`,  }}>
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold italic mb-8 text-center text-white">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold italic mb-8 text-center">Special Offers</h2>
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentAd * 100}%)` }}>
              {advertisements.map((ad, index) => (
                <div key={ad.id} className="w-full flex-shrink-0">
                  <img
                    src={ad.image}
                    alt={ad.title}
                    className="w-full h-[450px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r opacity-75 flex items-center justify-center rounded-lg">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{ad.title}</h3>
                      <p className="text-lg">{ad.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


{/* Curated for You Section */}
<section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold italic mb-8 text-center">Curated for You</h2>
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => scrollSection('left', curatedServicesRef)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 z-10 hover:bg-gray-200 transition duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Curated Services List */}
          <div ref={curatedServicesRef} className="flex space-x-6 overflow-x-scroll scrollbar-hide">
            {curatedServices.map((service, index) => (
              <motion.div
                key={index}
                className={`${service.color} text-white rounded-2xl h-[500px] shadow-md p-6 w-[320px] flex-shrink-0`}
                whileHover={{
                  scale: 1.05,  // Slightly increase size on hover
                  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',  // Add shadow effect
                }}
                transition={{ duration: 0.3 }}  // Animation timing
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-[250px] h-[200px] mb-4 rounded-lg object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <ul className="mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-white text-gray-800 py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
                  {service.cta}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scrollSection('right', curatedServicesRef)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 z-10 hover:bg-gray-200 transition duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>


      {/* Testimonials Section */}
      <section className="py-12 bg-white bg-cover" style={{ backgroundImage: "url('https://cdn.wallpapersafari.com/95/60/xaVJui.jpg') " }}>
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold italic mb-8 text-center text-white">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-lg p-6 shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
     
    </div>
  )
}
export default Home