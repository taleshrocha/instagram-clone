import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

function Header() {
  const [popOut, setPopOut] = useState(false);
  return (
    <div className="">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/** Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/** Middle - Search input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div
              className="absolute inset-y-0 pl-3 flex items-center
          pointer-events-none "
            >
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300
            focus:ring-black rounded-md focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/** Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="nav-button" />
          <PaperAirplaneIcon className="nav-button" />

          {/** Pop-out menu */}
          <button
            className={`absolute md:hidden p-2 ${
              popOut && "bg-gray-100 rounded-md"
            }`}
            onClick={() => setPopOut(!popOut)}
          >
            <MenuIcon className="h-6" />
          </button>
          {popOut && (
            <div className="mt-12 absolute md:hidden flex bg-gray-100 p-2 rounded-md space-x-2">
              <HomeIcon className="pop-button" />
              <PaperAirplaneIcon className="pop-button" />
              <HomeIcon className="pop-button" />
              <PaperAirplaneIcon className="pop-button" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
