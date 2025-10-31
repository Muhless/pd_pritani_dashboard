import Image from "next/image";
import { FiInbox } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import SearchInput from "../ui/input/Search";

const Topbar = () => {
  return (
    <div className="bg-gray-100 p-3 items-center grid grid-cols-3">
          {/* left */}
        <div>
          <SearchInput />
        </div>
        {/* right */}
        <div className="flex space-x-5 col-start-3 items-center">
          <div className="w-10 h-10 justify-center bg-white rounded-full cursor-pointer flex items-center">
            <FiInbox className="text-gray-600 bg-white h-5 w-5 rounded-full" />
          </div>
          <div className="w-10 h-10 justify-center bg-white rounded-full cursor-pointer flex items-center">
            <IoNotifications className="text-gray-600 bg-white h-5 w-5 rounded-full" />
          </div>
          {/* user */}
          <div className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image
                src="/images/1.jpg"
                alt="profile picture"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold">Muhta Nuryadi</h1>
              <p className="text-gray-500 text-sm">nuryadi.muhta@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Topbar;
