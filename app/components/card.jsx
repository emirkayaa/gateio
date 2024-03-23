import React from "react";
import { IoIosAnalytics, IoIosCash, IoIosPerson, IoIosSave } from "react-icons/io";

export default function CardComponent() {
  return (
    <div className="mt-10 sm:px-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div  className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <IoIosPerson className="text-9xl"/>
            </a>
            <div>
            <p className="text-2xl font-bold mb-2">01. Hesabını Oluştur</p>
           <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
           Kaydolun ve başlangıç görevlerini tamamlayın, $6666 kadar kazanın
            </p>
           </div>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-md font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             Kayıt Ol
             
            </a>
          </div>
          <div  className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <IoIosCash className="text-9xl"/>
            </a>
           <div>
            <p className="text-2xl font-bold mb-2">02. Hesabınıza Para Yatırın</p>
           <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
           Kripto yatırım yolculuğunuza başlamak için hesabınıza para ekleyin.
            </p>
           </div>
           <div className="flex space-x-2">
           <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-md font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Kripto Para Yatır
              
            </a>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-md font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Kripto Al
              
            </a>
           </div>
          </div>
          <div  className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <IoIosAnalytics className="text-9xl"/>
            </a>
            <div>
            <p className="text-2xl font-bold mb-2">03. Alım Satıma Başlayın</p>
           <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
           Kripto para alın, satın, alım satım kopyalayın ve daha fazlasını keşfedin
            </p>
           </div>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-md font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             Al-Sat
              
            </a>
          </div>
      </div>
    </div>
  );
}
