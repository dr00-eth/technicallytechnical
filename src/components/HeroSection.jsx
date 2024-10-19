import React from 'react';
import { ChevronDown } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index} className="w-full h-screen">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
      ))}
    </Slider>
  );
};

const HeroSection = ({ scrollToSection, aboutRef }) => {
  const heroImages = [
    '/images/tech1.png',
    '/images/tech2.png',
    '/images/tech3.png',
    '/images/tech4.png',
    '/images/tech5.png'
  ];

  return (
    <section className="relative h-screen">
      <HeroSlider images={heroImages} />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center px-4 w-full max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
            Technically Technical
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-yellow-300">
            Where Technology Gets... Technical!
          </h2>
          <p className="text-xl sm:text-2xl mb-8 text-white">
            Making AI & Automation as Funny as They Sound. Trust Us, It's Possible!
          </p>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="bg-yellow-400 text-blue-600 font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:bg-yellow-300"
          >
            Let's Get Technical!
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ChevronDown
          onClick={() => scrollToSection(aboutRef)}
          className="text-white animate-bounce cursor-pointer"
          size={36}
        />
      </div>
    </section>
  );
};

export default HeroSection;