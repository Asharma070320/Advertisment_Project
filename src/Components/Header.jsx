import { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
  FaStore,
  FaMusic,
} from "react-icons/fa";
import { ImVideoCamera } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
import { GiCeilingLight } from "react-icons/gi";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [isLoginForm, setIsLoginForm] = useState(true); // State to toggle between Login and SignUp forms

  // Open and close modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Toggle between Login and SignUp forms
  const toggleForm = () => setIsLoginForm(!isLoginForm);

  return (
    <header className="bg-white text-white shadow-md">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 lg:px-12 py-4 border-b-2">
        {/* Logo */}
        <div className="flex items-center bg-white rounded-md p-2">
          <img
            src="/images/newLogo.png"
            alt="Blink Beats Logo"
            className="h-16 w-auto rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Search Bar (hidden on small screens) */}
        <div
          className="relative w-full max-w-sm hidden md:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <input
            type="text"
            placeholder="Search Media for Advertising"
            className={`w-full h-10 px-10 rounded-3xl placeholder-gray-200 focus:ring-2 focus:ring-red-400 border-none text-lg transition duration-200 ${
              isHovered ? "bg-teal-600 text-black" : "bg-teal-500 text-black "
            }`}
          />
          <span
            className={`absolute top-1/2 left-3 transform -translate-y-1/2 transition duration-200 ${
              isHovered ? "text-gray-100" : "text-white"
            }`}
          >
            <FaSearch className="text-black" />
          </span>
        </div>

        {/* Buttons (hidden on mobile) */}
        <div className="flex items-center space-x-4 md:space-x-8 text-lg text-black">
          {/* Spotlight Button */}
          <button className="flex items-center font-medium hover:text-teal-500 hover:underline">
            <GiCeilingLight className="mr-2 text-xl" />
            <span className="hidden md:inline">Spotlight</span>
          </button>

          {/* Store Button */}
          <button className="flex items-center font-medium hover:text-teal-500 hover:underline">
            <FaStore className="mr-2 text-xl" />
            <span className="hidden md:inline">Store</span>
          </button>

          {/* Studio Button */}
          <button className="flex items-center font-medium hover:text-teal-500 hover:underline">
            <ImVideoCamera className="mr-2 text-xl" />
            <span className="hidden md:inline">Studio</span>
          </button>

          {/* Login Button */}
          <button
            onClick={openModal}
            className="flex items-center font-medium hover:text-teal-500 hover:underline"
          >
            <FaUser className="mr-2 text-xl" />
            <span className="hidden md:inline">Login</span>
          </button>

          {/* Menu Button */}
          <button className="flex items-center font-medium hover:text-teal-500 hover:underline ">
            <IoMenu className="mr-2 text-xl" />
          </button>

          {/* Burger Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl md:hidden"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg p-8 w-full max-w-sm relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="text-2xl" />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              {isLoginForm ? "Login" : "Sign Up"}
            </h2>

            {/* Login / Sign Up Form */}
            {isLoginForm ? (
              <div>
                <form className="space-y-6">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white rounded-md py-3 hover:bg-blue-600 transition duration-200"
                  >
                    Login
                  </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                  Don't have an account?{" "}
                  <button
                    onClick={toggleForm}
                    className="text-blue-500 hover:underline"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            ) : (
              <div>
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white rounded-md py-3 hover:bg-green-600 transition duration-200"
                  >
                    Sign Up
                  </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={toggleForm}
                    className="text-blue-500 hover:underline"
                  >
                    Login
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
