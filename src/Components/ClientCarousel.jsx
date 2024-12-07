import React from "react";

const ClientCarousel = () => {
  const clients = [
    { name: "Liebherr", logo: "https://www.excellentpublicity.com/assets/clientle/liebherr.png" },
    { name: "Hitachi", logo: "https://www.excellentpublicity.com/assets/clientle/hitachi.png" },
    { name: "Honda", logo: "https://www.excellentpublicity.com/assets/clientle/honda.png" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Swiggy", logo: "https://www.excellentpublicity.com/assets/clientle/swiggy.png" },
    { name: "Hero", logo: "https://www.excellentpublicity.com/assets/clientle/hero.png" },
    { name: "Sophos", logo: "https://www.excellentpublicity.com/assets/clientle/sophos.png" },
    { name: "Casio", logo: "https://www.excellentpublicity.com/assets/clientle/casio.png" },
    { name: "Red Chilli", logo: "https://www.excellentpublicity.com/assets/clientle/red-chillies-entertainment.png" },
    { name: "Flipkart", logo: "https://www.excellentpublicity.com/assets/clientle/flipkart.png" },
    { name: "Aditya Birla", logo: "https://www.excellentpublicity.com/assets/clientle/abfrl.png" },
    { name: "Wipro", logo: "https://www.excellentpublicity.com/assets/clientle/wipro-enterprises-pvt-ltd.png" },
  ];

  return (
    <section className="container py-16 px-4 mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Clients</h2>
        <p className="text-gray-500">Brands that trust us for successful marketing strategies.</p>
      </div>
      <div className="overflow-hidden">
        <div className="flex space-x-24 animate-marquee">
          {clients.map((client, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={client.logo}
                alt={client.name}
                className="w-32 h-20 object-contain md:w-40 md:h-24 lg:w-48 lg:h-32 transition-all duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
