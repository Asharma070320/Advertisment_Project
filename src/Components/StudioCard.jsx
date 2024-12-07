import React, { useState } from "react";

const StudioCard = () => {
  const items = [
    { id: 1, text: "STAR Plus", image: "https://www.themediaant.com/_next/image?url=https%3A%2F%2Fthe-media-ant.mo.cloudinary.net%2Fuploads%2F1728389117804-1.png&w=1920&q=75" },
    { id: 2, text: "Aaj Tak", image: "https://www.themediaant.com/_next/image?url=https%3A%2F%2Fthe-media-ant.mo.cloudinary.net%2Fuploads%2F1728389192027-2.png&w=1920&q=75" },
    { id: 3, text: "Delhi Metro", image: "https://www.themediaant.com/_next/image?url=https%3A%2F%2Fthe-media-ant.mo.cloudinary.net%2Fuploads%2F1722939550331-11.png&w=1920&q=75" },
    { id: 4, text: "India TV", image: "https://www.themediaant.com/_next/image?url=https%3A%2F%2Fthe-media-ant.mo.cloudinary.net%2Fuploads%2F1728389280830-3.png&w=1920&q=75" },
    { id: 5, text: "Times of India, Bombay Times Bandra", image: "https://www.themediaant.com/_next/image?url=https%3A%2F%2Fthe-media-ant.mo.cloudinary.net%2Fuploads%2F1728389313011-4.png&w=1920&q=75" },
    { id: 6, text: "KBC on Sony Liv", image: "https://www.themediaant.com/_next/image?url=https%3A%2F%2Fthe-media-ant.mo.cloudinary.net%2Fuploads%2F1728389387303-5.png&w=1920&q=75" },
    { id: 7, text: "Ahmedabad Metro Train", image: "https://www.themediaant.com/_next/image?url=https%3A%2F%2Fthe-media-ant.mo.cloudinary.net%2Fuploads%2F1728389448389-6.png&w=1920&q=75" },
    { id: 8, text: "Mumbai Metro Train", image: "https://www.themediaant.com/_next/image?url=https%3A%2F%2Fthe-media-ant.mo.cloudinary.net%2Fuploads%2F1728389510825-7.png&w=1920&q=75" },
    { id: 9, text: "Newspaper Inserts Bangalore", image: "https://www.themediaant.com/_next/image?url=https%3A%2F%2Fthe-media-ant.mo.cloudinary.net%2Fuploads%2F1725881641915-8.png&w=1920&q=75" },
    { id: 10, text: "Phonepe App", image: "https://www.themediaant.com/_next/image?url=https%3A%2F%2Fthe-media-ant.mo.cloudinary.net%2Fuploads%2F1728389566659-8.png&w=1920&q=75" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const handleNext = () => {
    if (startIndex + itemsPerPage < items.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <>
    <h1 className="text-2xl font-bold mb-6 p-3">Studio</h1>
    <div className="flex items-center justify-center space-x-4 overflow-hidden w-full">
      {startIndex > 0 && (
        <button
          onClick={handlePrev}
          className="p-2 text-2xl bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          &lt;
        </button>
      )}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(startIndex * 100) / itemsPerPage}%)`,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-20 flex-shrink-0 w-full sm:w-[20%] md:w-[20%] lg:w-[20%] px-2"
            >
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-auto rounded-md"
                />
                <p className="mt-2 text-gray-700">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {startIndex + itemsPerPage < items.length && (
        <button
          onClick={handleNext}
          className="p-2 text-2xl bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          &gt;
        </button>
      )}
    </div>
    </>
  );
};

export default StudioCard;
