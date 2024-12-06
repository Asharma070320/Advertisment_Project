import React from 'react';
import { FaEye, FaHandshake, FaLayerGroup, FaHeadset } from 'react-icons/fa';

const Whyus = () => {
  const features = [
    {
      icon: <FaEye className="text-4xl text-gray-400 mb-4" />,
      title: "MEDIA VISIBILITY",
      description: "More insights and detailed specification about every media along with their reach and visibility."
    },
    {
      icon: <FaHandshake className="text-4xl text-gray-400 mb-4" />,
      title: "BEST PRICE ASSURED",
      description: "Transparent and lowest Pricing. Directly negotiate with the media owner."
    },
    {
      icon: <FaLayerGroup className="text-4xl text-gray-400 mb-4" />,
      title: "2K+ ADVERTISING OPTIONS",
      description: "Don't limit your campaign to few media options. Get one that best works for you out of 2K+ Advertising options."
    },
    {
      icon: <FaHeadset className="text-4xl text-gray-400 mb-4" />,
      title: "CUSTOMER SUPPORT",
      description: "Great customer support. Contact for all your queries."
    }
  ];

  return (
    <div className="py-16 px-4">
      <h2 className="text-center text-3xl font-bold text-red-500 mb-12">
        So Why us ?
      </h2>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
};

export default Whyus;