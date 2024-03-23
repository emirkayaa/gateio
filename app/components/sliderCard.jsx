
import { IoIosClock } from "react-icons/io";
export default function SliderCard() {
    return (
        <div className="shadow-lg rounded-lg mx-2">
        <div className="relative">
          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src="https://gimg2.gateimg.com/startup/1711009500121136091904.jpeg?w=1920&q=75"
            alt="Slider Image"
          />
          <div className="absolute bottom-0 w-full ">
            <div className="text-green-700 bg-gray-400 flex justify-center items-center space-x-2 text-md font-semibold px-3">
              <IoIosClock />
              <span>Bitiş için kalan zaman : 1 gün 2 saat</span>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-800 space-y-4">
          <div className="flex space-x-4">
            <button className="text-sm bg-blue-900 text-white font-bold p-1 rounded-md">
              Airdrop
            </button>
            <button className="text-sm bg-blue-900 text-white font-bold p-1 rounded-md">
              İlk Olmayan
            </button>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="text-white text-2xl font-bold mt-2">
              Gate.io Airdrop
            </h1>
            <div className="bg-gray-900 flex flex-col space-y-3 text-sm mt-2 p-4 rounded-lg">
              <div className="flex items-end">
                <p className="text-2xl font-bold text-white">56,653</p>
                <p className="text-gray-600 font-bold text-lg">Destekleyenler</p>
              </div>
  
              <div className="flex justify-between mb-1">
                <div>
                  <span className="text-base font-medium text-white dark:text-white">
                    149,2458,745/
                  </span>
                  <span className="mx-1 text-base font-bold text-gray-600 dark:text-white">
                    200,000,000
                  </span>
                </div>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  45% arttı
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
               </div>
    )
}