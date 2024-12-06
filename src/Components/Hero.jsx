import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import {
    FaYoutube,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaFacebook,
    FaTelegram,
    FaPhone,
    FaSearch,
    FaBars,
    FaTimes,
    FaHome,
    FaBuilding,
    FaCogs,
    FaStore,
    FaVideo,
    FaShoppingCart,
    FaUser
} from 'react-icons/fa';


const navLinks = [
    { name: 'HOME', path: '/', icon: <FaHome size={20} /> },
    { 
        name: 'COMPANY', 
        path: '/company', 
        icon: <FaBuilding size={20} />,
        hasDropdown: true,
        dropdownType: 'company'
    },
    { 
        name: 'SERVICES', 
        path: '/services', 
        icon: <FaCogs size={20} />,
        hasDropdown: true,
        dropdownType: 'services'
    },
    { name: 'STORE', path: '/services/media', icon: <FaStore size={20} /> },
    { name: 'STUDIO', path: '/studio', icon: <FaVideo size={20} /> },
    { name: 'CART', path: '/cart', icon: <FaShoppingCart size={20} /> }
];

import Carousel from './Carousel';

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [openServiceSubmenu, setOpenServiceSubmenu] = useState(null);
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false); 
    const toggleLoginForm = () => {
        setIsLoginFormOpen(!isLoginFormOpen); // Toggle the login form visibility
    };
    const serviceDropdownItems = [
        {
            name: 'Media',
            path: '/services/media',
            subItems: [
                { name: 'Print Media', path: '/services/media/print' },
                { name: 'Electronic Media', path: '/services/media/electronic' },
                { name: 'Digital Media', path: '/services/media/digital' }
            ]
        },
        {
            name: 'Marketing',
            path: '/services/marketing',
            subItems: [
                { name: 'Branding Material', path: '/services/marketing/branding' },
                { name: 'Graphic Design', path: '/services/marketing/graphic-design' },
                { name: 'Content Marketing', path: '/services/marketing/content' },
                { name: 'Social Media Service', path: '/services/marketing/social-media' }
            ]
        },
        {
            name: 'Advertising',
            path: '/services/advertising',
            subItems: [
                { name: 'Outdoor', path: '/services/advertising/outdoor' },
                { name: 'Non Tradition', path: '/services/advertising/non-tradition' },
                { name: 'Corporate Gifting', path: '/services/advertising/corporate-gifting' },
                { name: 'Public Relations', path: '/services/advertising/pr' },
                { name: 'Sponsorship', path: '/services/advertising/sponsorship' }
            ]
        },
        {
            name: 'Events',
            path: '/services/events',
            subItems: [
                { name: 'Cultural', path: '/services/events/cultural' },
                { name: 'Shows', path: '/services/events/shows' },
                { name: 'Product Launch', path: '/services/events/product-launch' },
                { name: 'Contest', path: '/services/events/contest' },
                { name: 'Exhibition', path: '/services/events/exhibition' }
            ]
        },
        {
            name: 'Entertainment',
            path: '/services/entertainment',
            subItems: [
                { name: 'Podcast', path: '/services/entertainment/podcast' },
                { name: 'Movies', path: '/services/entertainment/movies' }
            ]
        }
    ];

    // Add this new dropdown structure after serviceDropdownItems
    const companyDropdownItems = [
        { name: 'Profile', path: '/company/profile' },
        { name: 'Ventures', path: '/company/ventures' },
        { name: 'Blogs', path: '/company/blogs' },
        { name: 'Opportunity', path: '/careers' },
        { name: 'Ping Us', path: '/components/footer' }
    ];

    return (
        <div className="relative min-h-screen">
            {/* Top Bar - Hidden on mobile */}
            <div className="hidden md:block bg-black text-white py-2">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <a href="#" className="hover:text-red-500"><FaYoutube size={20} /></a>
                        <a href="#" className="hover:text-red-500"><FaInstagram size={20} /></a>
                        <a href="#" className="hover:text-red-500"><FaTwitter size={20} /></a>
                        <a href="#" className="hover:text-red-500"><FaLinkedin size={20} /></a>
                        <a href="#" className="hover:text-red-500"><FaFacebook size={20} /></a>
                        <a href="#" className="hover:text-red-500"><FaTelegram size={20} /></a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaPhone className="text-red-500" />
                        <span>QUESTIONS? CALL: +91 900 400 1000</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
    <img 
        src="/images/logofinal2.jpeg" 
        alt="Company Logo" 
        className="h-13 w-auto md:h-20" // Adjust the height for larger size
    />
</div>


                        {/* Search Bar - Hidden on mobile */}
                        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                            <div className="flex w-full">
                                <select className="px-4 py-2 border-2 border-r-0 border-gray-300 rounded-l">
                                    <option>All Categories</option>
                                    <option>Media</option>
                                    <option>Marketing</option>
                                    <option>Advertising</option>
                                    <option>Events</option>
                                    <option>Entertainment</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="Search Product or Location Name ..."
                                    className="flex-1 px-4 py-2 border-2 border-gray-300"
                                />
                                <button className="px-6 py-2 bg-red-500 text-white rounded-r hover:bg-red-600">
                                    <FaSearch className="inline-block" />
                                    <span className="ml-2">SEARCH</span>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-600"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>

                        {/* Right Buttons - Hidden on mobile */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="text-gray-700 hover:text-white hover:bg-red-500 px-4 py-2 rounded-md">SUPPORT</button>
                            <button onClick={toggleLoginForm} className="text-white hover:bg-white hover:border-2 hover:text-gray-500 bg-red-500 px-4 py-2 rounded-md">LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`fixed top-0 right-0 w-[80%] max-w-sm h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Mobile Menu Header */}
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                        <FaTimes className="w-5 h-5" />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="overflow-y-auto h-[calc(100%-8rem)]">
                    <div className="flex flex-col">
                        {navLinks.map((item) => (
                            <div key={item.name}>
                                <div
                                    className="flex items-center justify-between px-4 py-3 border-b border-gray-200 hover:bg-gray-50"
                                    onClick={() => {
                                        if (item.hasDropdown) {
                                            setOpenSubmenu(openSubmenu === item.name ? null : item.name);
                                            setOpenServiceSubmenu(null); // Reset service submenu when main menu changes
                                        } else {
                                            setIsMenuOpen(false); // Close menu for non-dropdown items
                                        }
                                    }}
                                >
                                    <div className="flex items-center gap-2">
                                        <span>{item.name}</span>
                                    </div>
                                    {item.hasDropdown && (
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-300 ${
                                                openSubmenu === item.name ? 'rotate-180' : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </div>

                                {/* Dropdown Content */}
                                {item.hasDropdown && (
                                    <div 
                                        className={`bg-gray-50 overflow-hidden transition-all duration-300 ${
                                            openSubmenu === item.name ? 'max-h-[1000px]' : 'max-h-0'
                                        }`}
                                    >
                                        {item.dropdownType === 'services' ? (
                                            // Services Dropdown
                                            serviceDropdownItems.map((service) => (
                                                <div key={service.name}>
                                                    <div
                                                        className="flex items-center justify-between px-6 py-2 border-b border-gray-200 hover:bg-gray-100"
                                                        onClick={() => setOpenServiceSubmenu(openServiceSubmenu === service.name ? null : service.name)}
                                                    >
                                                        <span className="text-gray-700">{service.name}</span>
                                                        {service.subItems && (
                                                            <svg
                                                                className={`w-4 h-4 transition-transform duration-300 ${
                                                                    openServiceSubmenu === service.name ? 'rotate-180' : ''
                                                                }`}
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                    {/* Service Subitems */}
                                                    {service.subItems && openServiceSubmenu === service.name && (
                                                        <div className="bg-gray-100">
                                                            {service.subItems.map((subItem) => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    to={subItem.path}
                                                                    className="block px-8 py-2 text-sm text-gray-700 border-b border-gray-200"
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))
                                        ) : (
                                            // Company Dropdown
                                            companyDropdownItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.path}
                                                    className="block px-6 py-2 text-gray-700 border-b border-gray-200"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </nav>

                {/* Updated Mobile Buttons Section */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4 space-y-2">
                    <button className="w-full py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                        SUPPORT
                    </button>
                    <button onClick={toggleLoginForm} className="w-full py-2 text-white bg-red-500 rounded-md hover:bg-red-600">
                        LOGIN
                    </button>
                </div>
            </div>

            {/* Desktop Navigation Menu */}
            <div className="hidden md:block bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-center items-center h-12">
                        <nav className="flex items-center space-x-8">
                            {navLinks.map((item) => (
                                <div key={item.name} className="relative group">
                                    <Link
                                        to={item.path}
                                        className="group flex items-center gap-2 px-3 py-1 text-sm"
                                    >
                                        <span className="text-gray-600 transition-colors duration-200 group-hover:text-red-500">
                                            {React.cloneElement(item.icon, { size: 16 })}
                                        </span>
                                        <span className="font-medium text-gray-700 transition-colors duration-200 group-hover:text-red-500">
                                            {item.name}
                                        </span>
                                        {item.hasDropdown && (
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                                    </Link>
                                    
                                    {/* Dropdowns */}
                                    {item.hasDropdown && (
                                        <div className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                            <div className="py-1">
                                                {item.dropdownType === 'services' ? (
                                                    // Services dropdown
                                                    serviceDropdownItems.map((service) => (
                                                        <div key={service.name} className="relative group/submenu">
                                                            <Link
                                                                to={service.path}
                                                                className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                                                            >
                                                                <span>{service.name}</span>
                                                                {service.subItems && (
                                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                    </svg>
                                                                )}
                                                            </Link>
                                                            
                                                            {/* Services Submenu */}
                                                            {service.subItems && (
                                                                <div className="absolute left-full top-0 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
                                                                    <div className="py-1">
                                                                        {service.subItems.map((subItem) => (
                                                                            <Link
                                                                                key={subItem.name}
                                                                                to={subItem.path}
                                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                                                                            >
                                                                                {subItem.name}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))
                                                ) : (
                                                    // Company dropdown
                                                    companyDropdownItems.map((companyItem) => (
                                                        <Link
                                                            key={companyItem.name}
                                                            to={companyItem.path}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                                                        >
                                                            {companyItem.name}
                                                        </Link>
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Hero Content */}
            <Carousel />

            {/* Render LoginForm if isLoginFormOpen is true */}
            {isLoginFormOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <LoginForm onClose={toggleLoginForm} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;
