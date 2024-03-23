import { useState } from "react";

export default function Header({}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 left-0 right-0 z-20">
      <nav className="bg-gray-800 sticky top-0 left-0 right-0 z-20 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobil menü butonu */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={mobileMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                {/* Menü kapalıyken gösterilecek simge */}
                {!mobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  // Menü açıldığında gösterilecek simge
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
              <div className="flex items-center justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-4 w-auto"
                    
                    src="https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/open_sesame_night.47e06968.png?w=750&q=75"
                    alt="Gateio"
                  />
                </div>
                <div className="hidden sm:block">
                  <a
                    href="#"
                    className="bg-blue-800 rounded-md px-3 py-1 ms-1 text-white text-sm font-medium"
                    aria-current="page"
                  >
                    Alım-Satım
                  </a>
                  <a
                    href=""
                    aria-current="page"
                    className="text-white border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium -ms-2 text-sm px-3 py-[3px] text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  >
                    Web3
                  </a>
                </div>
              </div>
              {/* Büyük ekran menüsü */}
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Giriş Yap
                  </a>
                  <a
                    href="#"
                    className="bg-blue-800 rounded-md px-3 py-2 text-white text-sm font-medium"
                    aria-current="page"
                  >
                    Hesap Oluştur
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Alım - Satım
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Kripto Piyasası
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobil menü çekmecesi */}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-8 space-y-1">
          <a
            href="#"
            className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            Giriş Yap
          </a>
          <a
            href="#"
            className="bg-blue-800 rounded-md px-3 py-2 text-white text-sm font-medium"
            aria-current="page"
          >
            Hesap Oluştur
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Calendar
          </a>
        </div>
      </div>
    </div>
  );
}
