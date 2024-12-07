import { useState } from "react";
import { FaWhatsapp, FaSearchPlus } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";

const Cards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // State for carousel index
  const [modalType, setModalType] = useState(null); // State to differentiate modal types

  const cardData = [
    {
      category: "Media",
      price: "₹ 120,000.00",
      imageUrl: "/images/MediaMarketing.webp",
      whatsappMessage: "I am interested in Media advertising.",
    },
    {
      category: "Marketing",
      price: "₹ 300,000.00",
      imageUrl: "/images/Marketingg.jpg",
      whatsappMessage: "I am interested in Marketing campaigns.",
    },
    {
      category: "Advertising",
      price: "₹ 100,000.00",
      imageUrl: "/images/advertising.jpg",
      whatsappMessage: "I am interested in Advertising in Metro.",
    },
    {
      category: "Events",
      price: "₹ 200,000.00",
      imageUrl: "/images/event.webp",
      whatsappMessage: "I am interested in Event Sponsorship.",
    },
    {
      category: "Entertainment",
      price: "₹ 150,000.00",
      imageUrl: "/images/Entertainment.jpg",
      whatsappMessage: "I am interested in Entertainment campaigns.",
    },
  ];

  const openModal = (type, card) => {
    setModalType(type);
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
    setModalType(null);
  };

  return (
    <div className="max-w-7xl mx-auto  p-4">
      <h1 className="text-2xl font-bold mb-6">Spotlight</h1>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 relative flex flex-col transform transition-all duration-700 ease-out hover:scale-105"
          >
            {/* Image Section */}
            <div className="w-full h-36 bg-gray-100">
              <img
                src={card.imageUrl}
                alt={card.category}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h2 className="text-sm font-semibold text-gray-800">{card.category}</h2>
              <p className="text-base font-bold text-gray-800 mt-2">{card.price}</p>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-4">
                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(card.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-green-700 rounded-full p-2 shadow hover:bg-green-800 transition"
                >
                  <FaWhatsapp className="text-lg" />
                </a>

                {/* Book Now Button */}
                <button
                  onClick={() => openModal("book", card)}
                  className="text-white bg-[#706768] rounded-full p-2 shadow hover:bg-[#524c4d] transition"
                >
                  <CiBookmarkPlus />
                </button>

                {/* More Button */}
                <button
                  onClick={() => openModal("inquiry", card)}
                  className="text-white bg-[#cf4d53] rounded-full p-2 shadow hover:bg-[#a8373c] transition"
                >
                  <FaSearchPlus className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            {modalType === "book" && (
              <>
                <h2 className="text-xl font-semibold mb-4">Book Now</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter your booking details"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="text-white bg-gray-500 rounded px-4 py-2"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="text-white bg-blue-500 rounded px-4 py-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </>
            )}

            {modalType === "inquiry" && (
              <>
                <h2 className="text-xl font-semibold mb-4">Inquiry Form</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter your inquiry"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="text-white bg-gray-500 rounded px-4 py-2"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="text-white bg-blue-500 rounded px-4 py-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
