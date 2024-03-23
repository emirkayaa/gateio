import Carousel from "@/app/components/carousel";

export default function Top({}) {
  const slides = [
    "https://gimg2.gateimg.com/image/1710153799173269789_WEB_light_en.png?w=1920&q=75",
    "https://gimg2.gateimg.com/image/1710153799173269789_WEB_light_en.png?w=1920&q=75",
    "https://gimg2.gateimg.com/image/1710153799173269789_WEB_light_en.png?w=1920&q=75",
    "https://gimg2.gateimg.com/image/1710153799173269789_WEB_light_en.png?w=1920&q=75"
  ];
  return (
    <div className="w-full">
      <div className="lg:flex">
        <div className="lg:w-1/2 md:w-full flex justify-center items-center py-5 px-3">
          <div className="flex flex-col space-y-6">
            <span className="text-5xl font-bold">Kriptoya Açılan Kapı</span>
            <span className="text-md font-semibold">
              Güvenli, hızlı ve kolay bir şekilde 1.700’den fazla kripto paraya
              yatırım yapın
            </span>
            <span className="text-md text-gray-400 font-semibold">
              Kaydolun ve 6666$'a varan hoş geldin ödülleri kazanın
            </span>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 ">
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full md:w-auto px-7 py-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="E - Posta veya Telefon"
              />
              <button
                type="button"
                className="text-white -ms-10 bg-blue-700 font-semibold hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-md text-sm px-7 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Hesap Oluştur
              </button>
            </div>
            <div className="flex justify-between md:justify-start space-x-4">
              <div className="text-center md:text-left">
                <a href="#" className="text-2xl font-bold ">
                  $4.68
                </a>
                <p className="text-slate-400 text-xs">24S İşlem Hacmi</p>
              </div>
              <div className="text-center md:text-left">
                <a href="#" className="text-2xl font-bold ">
                  $4.68
                </a>
                <p className="text-slate-400 text-xs">24S İşlem Hacmi</p>
              </div>
              <div className="text-center md:text-left">
                <a href="#" className="text-2xl font-bold ">
                  $4.68
                </a>
                <p className="text-slate-400 text-xs">24S İşlem Hacmi</p>
              </div>
              <div className="text-center md:text-left">
                <a href="#" className="text-2xl font-bold ">
                  $4.68
                </a>
                <p className="text-slate-400 text-xs">24S İşlem Hacmi</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 hidden md:block sm:hidden">
          <Carousel slides={slides}>
          </Carousel>
        </div>
      </div>
      <div className="w-full md:px-10 flex justify-between items-center text-center">
        <div className="w-full flex justify-center border border-slate-300 bg-slate-100 rounded-lg py-2">
          <a href="" className="text-md text-slate-500">
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir.
          </a>
          <span className="mx-7 text-slate-300">|</span>

          <div className="flex items-center">
            <a href="" className="text-md text-slate-500 me-1">
              Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
              metinlerdir.
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
