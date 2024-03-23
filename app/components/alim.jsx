import { IoIosAppstore, IoIosBluetooth, IoIosGitNetwork } from "react-icons/io";


export default function Alim() {
    return(
        <div className="sm:px-10 mt-20">
            <div className="mb-5">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Kolayca Alım Satım</h1>
        </div>
                <div className="w-full flex items-center border rounded-md shadow-md">
                    <div className="lg:w-1/2">
                        <img src="https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/download_pic.7a802798.webp?w=1920&q=75" alt="" />
                    </div>
                    <div className="lg:w-1/2">
                    <div className="">
                        <div className="mb-5">
                            <p className=" text-4xl text-gray-900 hover:text-blue-700">
                                İstediğiniz Yerden Kolayca Erişin
                            </p>
                        </div>
                       <div className="flex justify-between items-center text-center">
                       <div className="flex flex-col justify-center items-center  p-3 hover:bg-gray-100 rounded text-gray-600 hover:text-blue-700  dark:text-white">
                            <IoIosAppstore className="text-5xl"  />
                            <span>App Store</span>
                        </div>
                        <div className="flex flex-col justify-center items-center p-3 hover:bg-gray-100 rounded text-gray-600 hover:text-blue-700 dark:text-white">
                            <IoIosGitNetwork className="text-5xl"  />
                            <span>Git</span>
                        </div>
                        <div className="flex flex-col justify-center items-center p-3 hover:bg-gray-100 rounded text-gray-600 hover:text-blue-700 dark:text-white">
                            <IoIosBluetooth className="text-5xl" />
                            <span>Bluetooth</span>
                        </div>
                       </div>
                       
                    </div>
                    </div>
                </div>
        </div>
    )
}