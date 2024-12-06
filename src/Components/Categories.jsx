import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Categories = () => {
  const categories = [
    {
      title: "Media",
      description: "At Blink Beats, we offer a comprehensive range of media services designed to amplify your brand's voice across multiple channels.",
      link: "/services/media",
      bgImage: "/images/print-media-bg.jpg"
    },
    {
      title: "Marketing",
      description: "At Blink Beats, we’re dedicated to driving growth through strategic, impactful marketing.",
      link: "/services/media",
      bgImage: "/images/digital-media-bg.jpg"
    },
    {
      title: "Advertising",
      description: "At Blink Beats, we offer dynamic advertising solutions that maximize your brand’s reach and impact.",
      link: "/services/advertising",
      bgImage: "/images/outdoor-bg.jpg"
    },

    {
      title: "Event",
      description: "Our event management services turn ideas into impactful experiences.",
      link: "/services/events",
      bgImage: "/images/events-bg.jpg"
    },

    {
      title: "Entertainment",
      description: "Immerse your audience in engaging content with our entertainment services.",
      link: "/services/marketing",
      bgImage: "/images/content-bg.jpg"
    }
  
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="group relative bg-slate-700 transition-all duration-300 "
            style={{
              backgroundImage: `url(${category.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="h-full flex flex-col p-6 bg-slate-700/80  transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-white/80 text-sm mb-8">
                {category.description}
              </p>
              <div className="mt-auto">
                <div className="w-12 h-0.5 bg-white mb-2"></div>
                <Link 
                  to={category.link}
                  className="inline-flex items-center text-white group-hover:translate-x-2 transition-transform duration-300"
                >
                  View More Detail
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
