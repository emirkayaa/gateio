import { IoIosSearch } from "react-icons/io";

export default function Table() {
    const buttonNames = ["Spot", "Kazan", "Borç", "Yeni", "web3"];
    
    return (
        <div className="mt-10 sm:px-10">
        <div className="mb-2 flex justify-between">
          <span className="text-4xl text-gray-700 font-bold">Kripto Piyasalarında Bugün</span>
          <div className="flex items-center space-x-3">
            <div className="bg-gray-100 p-3 rounded-md">
              <IoIosSearch/>
            </div>
            <div className="bg-gray-100 text-sm text-gray-500 font-semibold p-2 hover:text-blue-700 rounded-md">
              <a href="#">Tüm Kripto Fiyatları</a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="overflow-x-auto border border-gray-200 shadow-md sm:rounded-lg mb-4 w-full lg:w-2/3">
            <table className="text-sm text-center text-gray-500 dark:text-gray-400 w-full">
              <caption className="p-5 text-lg font-semibold text-gray-900 bg-white dark:bg-gray-800">
                <div className="flex flex-wrap justify-between">
                  {buttonNames.map((name, index) => (
                    <button key={index} className="focus:border text-md text-gray-500 focus:border-blue-400 focus:bg-blue-200 px-3 py-2 mt-2 sm:mt-0 mr-2 sm:mr-0 hover:text-blue-500 focus:text-blue-900 rounded-lg">
                      {name}
                    </button>
                  ))}
                  <a href="#" className="focus:border text-md text-gray-500 focus:border-blue-400 focus:bg-blue-200 px-3 py-2 mt-2 sm:mt-0 hover:text-blue-500 focus:text-blue-900 rounded-lg">
                    Puan Tablosu
                  </a>
                </div>
              </caption>
              <thead className="text-xs text-gray-300 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 sm:px-8 sm:py-4">
                    Coin
                  </th>
                  <th scope="col" className="px-6 py-3 sm:px-8 sm:py-4">
                    Fiyatı
                  </th>
                  <th scope="col" className="px-2 py-3 sm:px-8 sm:py-4">
                    24S İşlem Hacmi
                  </th>
                  <th scope="col" className="px-2 py-3 sm:px-8 sm:py-4">
                    24S Değişim
                  </th>
                  <th scope="col" className="px-6 py-3 sm:px-8 sm:py-4">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="bg-white hover:shadow-lg dark:bg-gray-800">
                  <th scope="row" className="px-6 py-4 font-medium hover:shadow-lg text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex space-x-2">
                      <img src="https://www.gate.io/images/coin_icon/64/gt.png?w=32&q=75" width={25} alt="coin" />
                      <span className="text-black text-lg font-bold">GT</span>
                    </div>
                    <span className="text-xs text-gray-300">GateToken</span>
                  </th>
                  <td className="px-6 py-4 text-lg">$6.00</td>
                  <td className="px-2 py-4 text-lg">3.7M</td>
                  <td className="px-2 py-4 text-lg text-red-500">-1.50%</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium bg-blue-100 p-3 rounded-md text-blue-600 dark:text-blue-500  hover:bg-blue-700 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white"
                    >
                      Al-Sat
                    </a>
                  </td>
                </tr>
                <tr className="bg-white hover:shadow-lg dark:bg-gray-800">
                  <th scope="row" className="px-6 py-4 font-medium hover:shadow-lg text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex space-x-2">
                      <img src="https://www.gate.io/images/coin_icon/64/btc.png?w=32&q=75" width={25} alt="coin" />
                      <span className="text-black text-lg font-bold">BTC</span>
                    </div>
                    <span className="text-xs text-gray-300">Bitcoin</span>
                  </th>
                  <td className="px-6 py-4 text-lg">$63565.00</td>
                  <td className="px-2 py-4 text-lg">193.7M</td>
                  <td className="px-2 py-4 text-lg text-red-500">-1.50%</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium bg-blue-100 p-3 rounded-md text-blue-600 dark:text-blue-500  hover:bg-blue-700 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white"
                    >
                      Al-Sat
                    </a>
                  </td>
                </tr>
                {/* Diğer satırlar buraya eklenecek */}
              </tbody>
            </table>
          </div>
          <div className="relative overflow-x-auto border border-gray-200 shadow-md sm:rounded-lg w-full lg:w-1/3">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-lg font-semibold text-gray-900 bg-white dark:bg-gray-800">
                <div className="flex flex-wrap justify-between">
                  <button className="focus:border text-md text-gray-500 focus:border-blue-400 focus:bg-blue-200 px-3 py-2 mt-2 sm:mt-0 mr-2 sm:mr-0 hover:text-blue-500 focus:text-blue-900 rounded-lg">
                    Öne Çıkanlar
                  </button>
                  <button className="focus:border text-md text-gray-500 focus:border-blue-400 focus:bg-blue-200 px-3 py-2 mt-2 sm:mt-0 mr-2 sm:mr-0 hover:text-blue-500 focus:text-blue-900 rounded-lg">
            En Çok Kazananlar
            </button>
          </div>
        </caption>
        <tbody>
          <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div className="flex items-center">
                <img src="https://www.gate.io/images/coin_icon/64/chatai.png?w=32&q=75" width={25} alt="" />
                <span className="text-black text-lg font-bold">CHATAI</span>
              </div>
              <span className="text-gray-400 text-sm">ChatAI</span>
            </th>
            <td className="px-6 py-4 text-md">
              $0,21452
            </td>
            <td className="px-6 py-4 text-emerald-700 text-md">
              +0,26%
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div className="flex items-center">
                <img src="https://www.gate.io/images/coin_icon/64/nada.png?w=32&q=75" width={25} alt="" />
                <span className="text-black text-lg font-bold">NADA</span>
              </div>
              <span className="text-gray-400">Nada Protocol Token</span>
            </th>
            <td className="px-6 py-4 text-md">
              $0,21452
            </td>
            <td className="px-6 py-4 text-emerald-700 text-md">
              +0,12%
            </td>
          </tr>
        </tbody>
      </table>
        </div>
  </div>
</div>

      
    );
  }
  