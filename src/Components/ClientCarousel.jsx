import React from "react";

const ClientCarousel = () => {
  const clients = [
    { name: "Liebherr", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Liebherr_logo.svg" },
    { name: "Hitachi", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Hitachi_logo.svg" },
    { name: "Honda", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Honda_logo_%28Honda%29.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Swiggy", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Swiggy_logo_2019.png" },
    { name: "Hero", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Hero_Motocorp_logo.png" },
    { name: "Sophos", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Sophos_logo.svg" },
    { name: "Casio", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Casio_logo.svg" },
    { name: "Red Chilli", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Red_Chillies_Entertainment_logo.svg" },
    { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flipkart_logo_2018.svg" },
    { name: "Aditya Birla", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Aditya_Birla_Group_logo.svg" },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Wipro_logo.png" },
  ];

  return (
    <section className="container py-16 px-4 mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Clients</h2>
        <p className="text-gray-500">Brands that trust us for successful marketing strategies.</p>
      </div>
      <div className="overflow-hidden">
        <div className="flex space-x-12 animate-marquee">
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
