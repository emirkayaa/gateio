
import { useState } from "react";


export default function Yasam() {
    const [isPlaying, setIsPlaying] = useState(false);
 
    return (
    <div className="mt-10 sm:px-10">
        <div className="mb-10">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Kripto Yaşam Tarzı</h1>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <video
          className="rounded-t-lg"
          poster="https://gimg2.gateimg.com/crypto-life/169138779046827155post_light.mp4"
          onMouseOver={() => {
            setIsPlaying(true);
          }}
          onMouseOut={() => {
            setIsPlaying(false);
          }}
          autoPlay={true}
          loop
          muted
          preload="none"
        >
          <source
            src="https://gimg2.gateimg.com/crypto-life/169138779046827155post_light.mp4"
            type="video/mp4"
          />
          
        </video>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Gate Post
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Kripto Hayatınızı Yatırımcılarla Paylaşın
        </p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          İncele
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <video
          className="rounded-t-lg"
          poster="https://gimg2.gateimg.com/crypto-life/169138779018467413live_light.mp4"
          onMouseOver={() => {
            setIsPlaying(true);
          }}
          onMouseOut={() => {
            setIsPlaying(false);
          }}
          autoPlay={true}
          loop
          muted
          preload="none"
        >
          <source
            src="https://gimg2.gateimg.com/crypto-life/169138779018467413live_light.mp4"
            type="video/mp4"
          />
        </video>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Canlı Yayın
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Sıfır Zaman Farkı ile Canlı Etkileşim.
        </p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          İncele
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <video
          className="rounded-t-lg"
          poster="https://gimg2.gateimg.com/crypto-life/1691387790128970705chat_light.mp4"
          onMouseOver={() => {
            setIsPlaying(true);
          }}
          onMouseOut={() => {
            setIsPlaying(false);
          }}
          autoPlay={true}
          loop
          muted
          preload="none"
        >
          <source
            src="https://gimg2.gateimg.com/crypto-life/1691387790128970705chat_light.mp4"
            type="video/mp4"
          />
          
        </video>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Sohbet Odası
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Kripto traderları ile sohbet edin
        </p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          İncele
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
    </div>
    </div>
  );
}
