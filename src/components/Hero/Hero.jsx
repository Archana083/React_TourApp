import React from "react";

const Hero = () => {

  return (
    <div className="h-full flex justify-center items-center">
      <div className="p-4">
        <div className="container text-center">
          <div className="text-white">
            <p data-aos="fade-up" className="text-xl">
              Our Packages
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-6xl"
            >
              Search Your Destination
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="mt-4 text-2xl"
            >
              Find the best travel packages and explore exciting destinations around the world.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="900"
              className="mt-8 px-6 py-3 bg-blue-600 text-white text-xl font-semibold rounded-full hover:bg-blue-700 transition duration-300"
            >
              Explore Packages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
