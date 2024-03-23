import { IoIosClock } from "react-icons/io";

export default function Layout() {
 
  return (
    <div className="mt-20">
      <div className="bg-black w-full p-5">
        <div className="bg-gray-800 p-1 mt-4 w-2/3  rounded-md">
          <ul className="flex flex-wrap text-md font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="me-2">
              <a
                href="#"
                className="inline-block px-4 py-3 text-white bg-gray-600 rounded-lg active"
                aria-current="page"
              >
                Startup
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg  hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                Spot
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                Türev Ürün
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-blue-600  dark:hover:bg-gray-800 dark:hover:text-white"
              >
                Finans
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-blue-600  dark:hover:bg-gray-800 dark:hover:text-white"
              >
                Anlar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-blue-600  dark:hover:bg-gray-800 dark:hover:text-white"
              >
                Copy-trading
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-blue-600  dark:hover:bg-gray-800 dark:hover:text-white"
              >
                NFT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-blue-600  dark:hover:bg-gray-800 dark:hover:text-white"
              >
                Web3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-blue-600  dark:hover:bg-gray-800 dark:hover:text-white"
              >
                Gate Card
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between p-8 mt-10">
  <div className="flex flex-col lg:w-1/2 md:w-full sm:w-full space-y-10">
    <span className="text-white text-4xl font-bold">Startup</span>
    <p className="text-lg lg:w-1/2 md:w-full sm:w-full text-wrap text-gray-500">
      Yeni kripto projeleri için launchpad.Gate Startup aracılığıyla kripto
      airdrop'larını en erken alan siz olun
    </p>

    <div className="bg-gray-800 lg:w-1/2 md:w-full sm:w-full p-4 rounded-lg">
      <span className="text-md text-white font-bold">
        ATH YATIRIM GETİRİSİ
      </span>

      <div className="flex justify-between mt-4 text-green-700">
        <span>8833.33%</span>
        <span>8833.33%</span>
        <span>8833.33%</span>
      </div>
    </div>
    <button className="bg-blue-600 lg:w-1/3 md:w-full sm:w-full p-2 rounded-lg text-white font-bold">
      Ücretsiz Airdrop Alın
    </button>
  </div>
  <div className="flex w-full lg:w-1/2 md:w-full sm:w-full mt-6 lg:mt-0">
    <div className="">
      <div className="shadow-lg rounded-lg mx-2">
        <div className="relative">
          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src="https://gimg2.gateimg.com/startup/1711009500121136091904.jpeg?w=1920&q=75"
            alt="Slider img"
          />
          <div className="absolute bottom-0 w-full ">
            <div className="text-green-700 bg-gray-400 flex justify-center items-center space-x-2 text-md font-semibold px-3">
              <IoIosClock />
              <span>Bitiş için kalan zaman : 1 gün 2 saat 3 Dakika</span>
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
                <p className="text-gray-600 font-bold text-lg">
                  Destekleyenler
                </p>
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
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
