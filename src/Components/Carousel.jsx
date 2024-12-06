import PropTypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Carousel = () => {
    // Custom arrow components
    const PrevArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all"
        >
            <FaChevronLeft size={24} />
        </button>
    );
    PrevArrow.propTypes = {
        onClick: PropTypes.func
    };

    const NextArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all"
        >
            <FaChevronRight size={24} />
        </button>
    );
    NextArrow.propTypes = {
        onClick: PropTypes.func
    };

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    const slides = [
        {
            url: '/images/Entertainment.jpg',  // Replace with category-specific images later
            title: "Print Media",
           description: "Book your ad space in leading newspapers and magazines.",
           link: "/services/media"
        },
        {
            url: '/images/MediaMarketing.webp',
            title: "Digital Media",
      description: "Reach your audience through digital platforms and social media.",
      link: "/services/media"
        },
       
        {
            url: '/images/event.webp',
            title: "Event Management",
            description: "Create memorable experiences with our event solutions.",
            link: "/services/events"
        },
        {
            url: '/images/event.webp',
            title: "Product Launch",
      description: "Launch your products with maximum impact and reach.",
      link: "/services/events"
        },
        {
            url: '/images/Marketingg.jpg',
            title: "Content Marketing",
            description: "Engage your audience with compelling content strategies.",
            link: "/services/marketing"
        },
       
        {
            url: '/images/advertising.jpg',
            title: "NonTraditional Advertising",
            description: "Innovative way of Advertising through All BTL Activity..",
            link: '/services/non-traditional'
        }
    ];

    return (
        <div className="relative mt-0 ">
        <Slider {...carouselSettings}>
            {slides.map((slide, index) => (
                <div key={index}>
                    <div
                        className="relative"
                        style={{ height: "calc(100vh - 200px)" }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${slide.url})`,
                            }}
                        >
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8">
                            <Link 
                                to={slide.link}
                                className="text-center max-w-4xl mx-auto"
                            >
                                <h2 className="text-white text-3xl md:text-5xl font-bold hover:text-red-500 transition-colors duration-300 mb-4">
                                    {slide.title}
                                </h2>
                                <p className="text-white text-lg md:text-xl opacity-90">
                                    {slide.description}
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
    );
};

export default Carousel;