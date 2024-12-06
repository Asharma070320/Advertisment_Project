import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clients = [
  { id: 1, logo: '/images/m1.jpg', alt: 'Client 1' },
  { id: 2, logo: '/images/m2.jpg', alt: 'Client 2' },
  { id: 3, logo: '/images/m3.jpg', alt: 'Client 3' },
  { id: 4, logo: '/images/m4.jpg', alt: 'Client 4' },
  { id: 5, logo: '/images/m5.jpg', alt: 'Client 5' },
  // Add more clients as needed
];

const Client = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5, // Show 5 items at once
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2, // Adjust for smaller screens
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <div className="max-w-4xl mx-auto mt-8 my-10 overflow-hidden">
        <h2 className="text-center text-red-500 text-lg font-bold mb-4">OUR HAPPY CLIENTS</h2>
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.id} className="p-4">
              <img src={client.logo} alt={client.alt} className="mx-auto" />
            </div>
          ))}
        </Slider>
        <h1 className="text-center text-gray-500 text-md font-bold italic w-full">
        A Complete Advertising Solution with options of Media, Marketing, Advertising, Event, Entertainment.
        </h1>
      </div>
    );
  };
  
  export default Client;