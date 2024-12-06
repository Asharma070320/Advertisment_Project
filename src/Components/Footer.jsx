import { Link } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Blink Beats Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Blink Beats</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
            <li><Link to="/company/profile" className="text-gray-300 hover:text-white">Company</Link></li>
            <li><Link to="/careers" className="text-gray-300 hover:text-white">Opportunities</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-white">Our Services</Link></li>
            <li><Link to="/testimonials" className="text-gray-300 hover:text-white">Testimonials</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            <li><Link to="/refund-policy" className="text-gray-300 hover:text-white">Refund Policy</Link></li>
            <li><Link to="/payment" className="text-gray-300 hover:text-white">Payment Gateway</Link></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-white">Media</Link></li>
            <li><Link to="/" className="text-gray-300 hover:text-white">Marketing</Link></li>
            <li><Link to="/" className="text-gray-300 hover:text-white">Advertising</Link></li>
            <li><Link to="/" className="text-gray-300 hover:text-white">Events</Link></li>
            <li><Link to="/" className="text-gray-300 hover:text-white">Entertainment</Link></li>
          </ul>
        </div>

        {/* Partners Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Partners</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-white">Store</Link></li>
            <li><Link to="/" className="text-gray-300 hover:text-white">Studio</Link></li>
            <li><Link to="/" className="text-gray-300 hover:text-white">Delivery</Link></li>
            <li><Link to="/" className="text-gray-300 hover:text-white">ABP</Link></li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">GET IN TOUCH</h3>
          <div className="space-y-2 text-gray-300">
            <p>CALL : +91 8287831221</p>
            <p className="text-sm">
              Corporate Address:<br />
              Unit 1101 Prabhavee Tech Park,<br />
              Baner Road, Pune,<br />
              Maharashtra, 411045<br />
              INDIA
            </p>
            <a 
              href="https://www.google.com/maps/search/Unit+1101+Prabhavee+Tech+Park,+Baner+Road,+Pune,+Maharashtra,+411045+INDIA/@18.5650166,73.7763394,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Facebook Icon with blue hover */}
            <a 
              href="https://www.facebook.com/yourpage" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-600"
            >
              <FaFacebook size={24} />
            </a>
            {/* Instagram Icon with pink hover */}
            <a 
              href="https://www.instagram.com/yourpage" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-pink-600"
            >
              <FaInstagram size={24} />
            </a>
            {/* YouTube Icon with red hover */}
            <a 
              href="https://www.youtube.com/channel/yourchannel" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-red-600"
            >
              <FaYoutube size={24} />
            </a>
          </div>
          
          {/* Get it on Google Play Image */}
          <div className="mt-4">
            <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
                alt="Get it on Google Play" 
                className="max-w-28 h-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 Sharvin Management Pvt Lmtd. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white"><FaYoutube /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTelegram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
