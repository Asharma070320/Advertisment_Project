import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const RecentCampaign = () => {
  const campaigns = [
    { id: 1, image: '/images/m1.jpg', title: 'Narayana Campaign' },
    { id: 2, image: '/images/m2.jpg', title: 'Shop Campaign' },
    { id: 3, image: '/images/m3.jpg', title: 'Newspaper Campaign' },
    { id: 4, image: '/images/m4.jpg', title: 'Yashoda Campaign' },
    { id: 5, image: '/images/m5.jpg', title: 'Final Campaign' },
    { id: 6, image: '/images/m6.jpg', title: 'Narayana Campaign' },
    { id: 7, image: '/images/m1.jpg', title: 'Shop Campaign' },
    { id: 8, image: '/images/m2.jpg', title: 'Newspaper Campaign' },
    { id: 9, image: '/images/m3.jpg', title: 'Yashoda Campaign' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === campaigns.length - 4 ? 0 : prevIndex + 1
    );
  };


  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? campaigns.length - 4 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-red-500">Recent Campaign</h2>
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-red-500">VIEW ALL</button>
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full border border-gray-300 hover:border-red-500 hover:text-red-500"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full border border-gray-300 hover:border-red-500 hover:text-red-500"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div 
          className="flex gap-4 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {campaigns.map((campaign) => (
            <div 
              key={campaign.id} 
              className="min-w-[calc(25%-1rem)] relative group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={campaign.image} 
                  alt={campaign.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-red-500 h-1 top-0" />
                
                {/* Title Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-lg font-semibold text-center px-4">
                    {campaign.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentCampaign;
