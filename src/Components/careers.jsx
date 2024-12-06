import Navbar from './Navbar';
import { useEffect } from 'react';
import Footer from './Footer';

const Careers = () => {
  const openPositions = [
    { title: 'Creative Director', department: 'Creative', location: 'New York, NY', type: 'Full-time' },
    { title: 'Social Media Manager', department: 'Digital Marketing', location: 'Remote', type: 'Full-time' },
    { title: 'Copywriter', department: 'Content', location: 'Los Angeles, CA', type: 'Full-time' },
    { title: 'Art Director', department: 'Design', location: 'Chicago, IL', type: 'Full-time' },
    { title: 'Account Manager', department: 'Client Services', location: 'Miami, FL', type: 'Full-time' },
    { title: 'Media Planner', department: 'Media', location: 'Remote', type: 'Full-time' },
    { title: 'Opportunity', department: 'Growth', location: 'Remote', type: 'Part-time', isOpportunity: true }
  ];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg py-20 px-6 shadow-2xl">
          <h1 className="text-5xl font-bold text-white mb-4">Join Our Team & Shape the Future of Advertising</h1>
          <p className="text-lg md:text-2xl text-gray-200">Be part of a creative and driven team transforming brands worldwide.</p>
        </div>

        {/* Open Positions */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Current Openings</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {openPositions.map((position, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl border ${position.isOpportunity ? 'bg-yellow-50 border-yellow-400' : 'bg-white border-gray-300'}`}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{position.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">🎯</span> <span className="font-medium">{position.department}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">📍</span> <span className="font-medium">{position.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">⏰</span> <span className="font-medium">{position.type}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Health & Wellness</h3>
              <p className="text-gray-600">Comprehensive medical, dental, and vision coverage for you and your family.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible scheduling and generous paid time off to recharge.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Career Development</h3>
              <p className="text-gray-600">Access to training programs, workshops, and opportunities to grow.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
