import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
     
      <div
        className="absolute top-10 left-0 w-full h-full flex flex-col transition-transform duration-500"
        style={{ transform: `translateY(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-screen flex flex-col justify-center items-center">
            <img  src={slide} alt={`Slide ${index + 1}`} className="max-h-full max-w-full" />
          </div>
        ))}
      </div>
      
      <div>
      <button onClick={prevSlide} className="absolute right-4 bottom-0 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-md">
      <IoIosArrowDown/>
      </button>
      <button onClick={nextSlide} className="absolute bottom-10 right-4 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-md">
      <IoIosArrowUp/>
      </button>
      </div>
    </div>
  );
};

export default Carousel;
