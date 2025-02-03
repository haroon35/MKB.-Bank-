import React from "react";
import NavMenu from "./NavItems";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <div className="bg-black flex">
      <div className="text-white w-11/12 m-auto flex justify-between items-center py-3">
        <div>
          <img src="./mk.webp" alt="" className="h-12 " />
        </div>
        <div className="hidden lg:flex items-center gap-2 font-semi bold ">
          <NavMenu navItemName="why us" Icon={IoIosArrowDown} />
          <NavMenu navItemName="we serve" Icon={IoIosArrowDown} />
          <NavMenu navItemName="we offer" Icon={IoIosArrowDown} />
          <NavMenu navItemName="services" Icon={IoIosArrowDown} />
          <NavMenu navItemName="Insights" />
        </div>
        <div className="flex items-center gap-6">
          <button className="px-4 py-1 border-2  border-white hidden lg:block">
            Become a client
          </button>
          <button className="px-4 py-1 border-2 border-white bg-white text-black hidden lg:block">
            Login
          </button>
          <HiOutlineSearchCircle className=" text-white w-11 h-11 scale-x-[-1] stroke-[1]" />
          <IoMenu className="lg:hidden w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
