import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";


export default function Etkinlik() {
    const items = [
    "https://gimg2.gateimg.com/image/1710471649643339224TRWebBanner.png?w=384&q=75",
    "https://gimg2.gateimg.com/image/1709880947325387246_web_banner_tr.jpg?w=384&q=75",
    "https://gimg2.gateimg.com/image/1711095679621303755_web-tur.png?w=384&q=75",
    "https://gimg2.gateimg.com/image/1710759485627695523_web_banner_tr.png?w=384&q=75",
    "https://gimg2.gateimg.com/image/1710471649643339224TRWebBanner.png?w=384&q=75",
    "https://gimg2.gateimg.com/image/1709880947325387246_web_banner_tr.jpg?w=384&q=75",
    "https://gimg2.gateimg.com/image/1711095679621303755_web-tur.png?w=384&q=75",
    "https://gimg2.gateimg.com/image/1710759485627695523_web_banner_tr.png?w=384&q=75",
    ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 4 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 4 : prevIndex - 1));
  };

  return (
    <div className="relative mt-10 sm:px-10">
        <div className="mb-10 flex items-center justify-between">
            <span className="text-4xl text-gray-700 font-bold">
                Etkinlikler
            </span>
            <a href="#" className="bg-gray-100 text-sm text-gray-500 hover:text-blue-700 font-semibold p-2 rounded-md">Daha Fazla Etkinlik</a>
        </div>
        <div className="flex overflow-x-auto">
  {items.map((item, index) => (
    <div key={index} className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 rounded-xl flex-shrink-0 pr-4 ${index >= currentIndex && index < currentIndex + 4 ? "block" : "hidden"}`}>
      <img src={item} alt={`Slide ${index}`} className="w-full h-auto rounded-lg" />
    </div>
  ))}
</div>
      <button className="absolute text-2xl top-0 bottom-0 left-0 flex items-center justify-center   text-gray-600" onClick={prevSlide}>
        <IoIosArrowDropleft/>
      </button>
      <button className="absolute text-2xl top-0 bottom-0 right-0 flex items-center justify-center  text-gray-600" onClick={nextSlide}>
      <IoIosArrowDropright/>
      </button>
    </div>
  );
}
