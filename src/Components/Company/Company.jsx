import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { FaAward, FaGlobe, FaUsers, FaChartLine } from 'react-icons/fa';

const Company = () => {
  const stats = [
    { icon: <FaGlobe />, value: '5000+', label: 'Brands Served' },
    { icon: <FaUsers />, value: '6', label: 'Global Offices' },
    { icon: <FaAward />, value: '12+', label: 'Years Experience' },
    { icon: <FaChartLine />, value: '100+', label: 'Team Members' }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We Craft Creativity.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            At Blink Beats, we are dedicated to elevating your brand through exceptional service that merges creativity with cost-effectiveness.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-red-500 text-3xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                We Produce, We Share, We Fulfill!
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2011 with a fresh perspective, Blink Beats is an award-winning advertising agency specializing in digital, offline, sports, and gifting solutions. With experience spanning over 5,000 brands across various sectors, we have demonstrated our expertise in the industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our strong presence in India, with offices in Mumbai, Delhi, Pune, Ahmedabad, and Dubai, positions us among the largest advertising agencies in the country and one of the few with a global footprint.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/company-about.jpg" 
                alt="Company Overview" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-red-500 opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Gujarat's Young Achievers",
              "Mumbai City Icon 2018",
              "Top 100 Promising Marketing and Advertising Companies"
            ].map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-red-500 text-4xl mb-4">
                  <FaAward />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {award}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Company; 