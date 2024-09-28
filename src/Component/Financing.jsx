import React from 'react'
import { UserCircle, FileText, Briefcase, Gauge , ArrowUpRight, Coins, BarChart3  } from 'lucide-react'



const LoanFeature = ({ title, value, subtitle } ) => (
  <div className="bg-gray-800 rounded-lg p-4 text-center">
    <p className="text-gray-400 text-sm mb-2">{title}</p>
    <p className="text-4xl font-bold mb-1">{value}</p>
    <p className="text-gray-400 text-sm">{subtitle}</p>
  </div>
)

function Financing() {
  return (
    
    <div>
      <div className="bg-gray-900 h-[620px] text-white p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
        Drive your dream car with ease – Quick <br />
        and <span className="text-orange-500">Simple Car Loans</span>
        </h1>
        <br/>
 
        <p className="text-gray-400 mb-10">
        Your dream car is just a quick loan away – approved in minutes!
        </p>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <LoanFeature title="Get up to" value="0" subtitle="Down payment" />
          <LoanFeature title="Tenure up to" value="72" subtitle="Months" />
          <LoanFeature title="Interest from" value="12%" subtitle="p.a." />
        </div>
        <br/>
        
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
          Check eligibility in 2 min
        </button>
        {/* <p className="text-sm text-gray-400 mt-4">
          Get Free CIBIL score with your offer!
        </p> */}
        </div>
       <div className="md:w-1/2">
        <img
          src="./src/Img/loan image.png"
          // alt="Car Loan Illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </div>



    <div className="bg-gray-700 h-[300px] text-white p-8 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/4 mb-8 md:mb-0">
        <h1 className="text-5xl md:text-5xl font-bold mb-4">
            Financing by <br />
             <span className="text-orange-500"> CarsNagpur </span>
        </h1>
        </div>




       
        <div className="md:w-3/4">
        <p className="mb-4 text-sm leading-relaxed">
          Finance your dream car the way you want! Secure a pre-owned car loan up to Zero down payment., loan tenures of up to 6 years,
          and up to 100% on-road financing. Say goodbye to the hassles of paperwork—we'll give you a loan offer in minutes with same
          day, paperless approval.
        </p>
        <p className="text-sm leading-relaxed">
          Regardless of your profession or background, our loan offers extend to individuals with incomes as low as ₹15,000/month. Get
          360° support during the loan process and after, and discover the joy of owning your own car.
        </p>
      </div>
    </div>

<br/>
<br/>




    <div className="bg-white w-[950px]  font-sans ml-[150px]">
      <h2 className="text-5xl font-bold mb-8">
        <span className="text-[#ff7043]">Eligibility criteria</span>{' '}
        <span className="text-[#1e3a8a]">and documents required</span>
      </h2>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 w-[1210px]">
        {[
          {
            icon: <UserCircle className="w-12 h-12 text-[#ff7043] " />,
            title: 'Profile',
            description: 'Indian nationals aged between 21-65 years',
          },
          {
            icon: <FileText className="w-12 h-12 text-[#ff7043]" />,
            title: 'Documents',
            description: 'Aadhaar/Passport/Voter ID, PAN and Bank statement',
          },
          {
            icon: <Briefcase className="w-12 h-12 text-[#ff7043]" />,
            title: 'Employment',
            description: 'Salaried/Self-employed Monthly income > ₹15,000',
          },
          // {
          //   icon: <Gauge className="w-12 h-12 text-[#ff7043]" />,
          //   title: 'CIBIL score',
          //   description: 'Greater than 650 is recommended',
          // },
        ].map((item, index) => (
          <div key={index} className="bg-white p-10 rounded-lg shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff7043] opacity-10 transform rotate-45 translate-x-8 -translate-y-8"></div>
            <div className="relative z-10">
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-[#ff7043] text-white font-bold py-3 px-12 rounded-full hover:bg-[#ff5722] transition duration-300 ml-[520px]">
        KNOW MORE
      </button>
    </div>
      
<br/>

<div className='bg-gray-200'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Used car loan <span className="text-orange-500">interest and charges</span>
          </h1>
          <p className="text-lg text-gray-600">
            We have outlined the various charges that might be applicable when applying for or availing a used car loan
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Pre-sales charges",
                description: "These are expenses and fees that are incurred before the actual sale or purchase of a used vehicle"
              },
              {
                title: "Post-sales charges",
                description: "These refer to the expenses and fees incurred after the sale or purchase of a vehicle has been completed"
              },
              {
                title: "Collection and legal charges",
                description: "These charges are applicable when a car is repossessed by the lender in case of a loan default"
              },
              {
                title: "Miscellaneous charges & fees",
                description: "There are certain miscellaneous charges and fees that may apply during a used car loan process"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <button className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300 ml-[220px]">
            KNOW MORE
          </button>
        </div>
        <div className="relative h-96 lg:h-full">
          {/* <div className="absolute inset-0 bg-orange-100 rounded-3xl overflow-hidden">
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4">
              <div className="relative h-full">
                <ArrowUpRight className="absolute top-1/4 left-1/4 text-orange-500 w-16 h-16 transform -rotate-45" />
                <Coins className="absolute bottom-1/4 right-1/4 text-orange-400 w-12 h-12" />
                <BarChart3 className="absolute top-1/2 right-1/3 text-orange-300 w-10 h-10" />
                <div className="absolute inset-y-0 right-0 w-1/2 bg-orange-500 transform skew-x-6" />
                <div className="absolute bottom-0 left-1/4 w-16 h-32 bg-orange-400 rounded-t-lg" />
                <div className="absolute bottom-0 left-1/2 w-16 h-48 bg-orange-300 rounded-t-lg" />
                <div className="absolute bottom-0 left-3/4 w-16 h-24 bg-orange-200 rounded-t-lg" />
              </div>
            </div>
            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full" />
            </div>
          </div> */}

        <div className="md:w-8/6 mt-[80px] ">
        <img
          src="./src/Img/Screenshot_2024-09-28_114214-removebg-preview.png"
          // alt="Car Loan Illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>

        </div>
      </div>
    </div>

    </div>

    </div>
  )
}

export default Financing