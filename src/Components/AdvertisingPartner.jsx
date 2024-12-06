import React from 'react';
import { FaUsers, FaUserTie, FaVideo, FaHandshake, FaBullhorn, FaChartBar } from 'react-icons/fa';

const AdvertisingPartner = () => {
  const stats = [
    { icon: <FaUsers className="text-3xl text-white" />, value: '3,000+', label: 'Happy Clients' },
    { icon: <FaUserTie className="text-3xl text-white" />, value: '100+', label: 'Qualified Team Members' },
    { icon: <FaVideo className="text-3xl text-white" />, value: '3,00,000+', label: 'Media Options' },
    { icon: <FaHandshake className="text-3xl text-white" />, value: '10,000+', label: 'Vendor Tie-ups' },
    { icon: <FaBullhorn className="text-3xl text-white" />, value: '1,50,000+', label: 'Campaigns' },
    { icon: <FaChartBar className="text-3xl text-white" />, value: '4', label: 'Verticals' },
  ];

  return (
    <div className=" my-3 bg-gradient-to-b from-red-500 to-red-600 text-white py-8 px-6">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Your Perfect Advertising Partner</h1>
        <p className="max-w-2xl mx-auto text-sm leading-relaxed">
          Blink Beat is forever expanding your brand with high-quality service that combines creativity with value pricing. 
          We enjoy our work because, first – we admire the advertising world, and second, we know that our ideas and strategies 
          make a difference. We play to win, with the primary goal of assisting our customers in promoting their successful brand campaigns.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border-t border-white pt-4"
          >
            {stat.icon}
            <p className="text-xl font-bold mt-2">{stat.value}</p>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-8">
        <button className="text-white underline hover:text-gray-200 transition">
          About us →
        </button>
      </div>
    </div>
  );
};

export default AdvertisingPartner;
