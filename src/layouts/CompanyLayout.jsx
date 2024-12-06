import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const CompanyLayout = ({ children, title, description }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-gray-300">{description}</p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyLayout; 