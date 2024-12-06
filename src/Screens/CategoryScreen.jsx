import Navbar from '../Components/Navbar';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import TemporaryForm from '../Components/TemporaryForm';
const serviceCategories = [
  {
    name: 'Media',
    path: '/services/media',
    description: "At Blink Beats, we offer a comprehensive range of media services designed to amplify your brand's voice across multiple channels. Whether it’s creating a strong presence in traditional print, reaching audiences through broadcast media, or leveraging the power of digital platforms, our team crafts tailored strategies that align with your business goals. Explore our specialized services in print, electronic, and digital media to see how we can elevate your brand and connect you with your target audience effectively.",
    image: '/images/m1.jpg',
    subCategories: [
      {
        name: 'Print Media',
        description: "Reach your audience through newspapers, magazines, and journals",
        image: '/images/m1.jpg',
        features: ['Newspaper Ads', 'Magazine Placements', 'Journal Publications']
      },
      {
        name: 'Electronic Media',
        description: "Engage viewers through television and radio advertising",
        image: '/images/m2.jpg',
        features: ['TV Commercials', 'Radio Spots', 'Broadcast Sponsorships']
      },
      {
        name: 'Digital Media',
        description: "Connect with your audience across digital platforms",
        image: '/images/m3.jpg',
        features: ['Social Media Marketing', 'Web Advertising', 'Email Campaigns']
      }
    ]
  },
  {
    name: 'Marketing',
    path: '/services/marketing',
    description: "At Blink Beats, we're dedicated to driving growth through strategic, impactful marketing.",
    image: '/images/m4.jpg',
    subCategories: [
      {
        name: 'Branding Material',
        description: "Create compelling brand identity materials",
        image: '/images/branding.jpg',
        features: ['Logo Design', 'Brand Guidelines', 'Marketing Collateral']
      },
      {
        name: 'Graphic Design',
        description: "Professional design services for all your needs",
        image: '/images/m6.jpg',
        features: ['Print Design', 'Digital Design', 'Packaging Design']
      },
      {
        name: 'Content Marketing',
        description: "Engage your audience with compelling content",
        image: '/images/m1.jpg',
        features: ['Blog Writing', 'Social Media Content', 'Video Production']
      },
      {
        name: 'Social Media Service',
        description: "Build and manage your social media presence",
        image: '/images/m2.jpg',
        features: ['Platform Management', 'Content Strategy', 'Community Engagement']
      }
    ]
  },
  {
    name: 'Advertising',
    path: '/services/advertising',
    description: "At Blink Beats, we offer dynamic advertising solutions that maximize your brand's reach and impact.",
    image: '/images/m3.jpg',
    subCategories: [
      {
        name: 'Outdoor',
        description: "Strategic outdoor advertising solutions",
        image: '/images/m4.jpg',
        features: ['Billboard Advertising', 'Transit Ads', 'Street Furniture']
      },
      {
        name: 'Non Tradition',
        description: "Innovative non-traditional advertising approaches",
        image: '/images/m5.jpg',
        features: ['Guerrilla Marketing', 'Ambient Advertising', 'Interactive Displays']
      },
      {
        name: 'Corporate Gifting',
        description: "Premium corporate merchandise solutions",
        image: '/images/m6.jpg',
        features: ['Custom Merchandise', 'Premium Gifts', 'Brand Merchandise']
      },
      {
        name: 'Public Relations',
        description: "Strategic PR and communication services",
        image: '/images/m3.jpg',
        features: ['Media Relations', 'Crisis Management', 'Event PR']
      },
      {
        name: 'Sponsorship',
        description: "Strategic sponsorship opportunities",
        image: '/images/m4.jpg',
        features: ['Event Sponsorship', 'Sports Sponsorship', 'Cultural Sponsorship']
      }
    ]
  },
  {
    name: 'Events',
    path: '/services/events',
    description: "Our event management services turn ideas into impactful experiences.",
    image: '/images/m5.jpg',
    subCategories: [
      {
        name: 'Cultural',
        description: "Create memorable cultural experiences",
        image: '/images/m3.jpg',
        features: ['Festivals', 'Art Shows', 'Cultural Celebrations']
      },
      {
        name: 'Shows',
        description: "Professional show management and production",
        image: '/images/m2.jpg',
        features: ['Concert Production', 'Theater Shows', 'Award Ceremonies']
      },
      {
        name: 'Product Launch',
        description: "Launch your products with maximum impact",
        image: '/images/m1.jpg',
        features: ['Launch Events', 'Product Demos', 'Press Launches']
      },
      {
        name: 'Contest',
        description: "Engage audiences through exciting competitions",
        image: '/images/m3.jpg',
        features: ['Online Contests', 'Live Competitions', 'Award Programs']
      },
      {
        name: 'Exhibition',
        description: "Professional exhibition management",
        image: '/images/m4.jpg',
        features: ['Trade Shows', 'Industry Expos', 'Brand Exhibitions']
      }
    ]
  },
  {
    name: 'Entertainment',
    path: '/services/entertainment',
    description: "Immerse your audience in engaging content with our entertainment services.",
    image: '/images/m6.jpg',
    subCategories: [
      {
        name: 'Podcast',
        description: "Professional podcast production services",
        image: '/images/m5.jpg',
        features: ['Podcast Production', 'Audio Content', 'Distribution']
      },
      {
        name: 'Movies',
        description: "Professional video and film production",
        image: '/images/m4.jpg',
        features: ['Film Production', 'Video Content', 'Post-Production']
      }
    ]
  }
];

const CategoryScreen = () => {
  const { categoryId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const category = serviceCategories.find(cat => cat.path.includes(categoryId)) || serviceCategories[0];
  

  //for temp form for lear more remove it afterwards
  const [isFormVisible, setFormVisible] = useState(false);
  const openForm = () => {
    setFormVisible(true);
  };

  const closeForm = () => {
    setFormVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
            <p className="text-xl">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Sub-categories Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.subCategories.map((subCat, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={subCat.image} 
                alt={subCat.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{subCat.name}</h3>
                <p className="text-gray-600 mb-4">{subCat.description}</p>
                <div className="space-y-2">
                  {subCat.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={openForm} 
                  className="mt-6 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
        {isFormVisible && <TemporaryForm onClose={closeForm} />}
      <Footer />
    </div>
  );
};

export default CategoryScreen;