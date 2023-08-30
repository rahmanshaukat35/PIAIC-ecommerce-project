"use client";
import {
  NavbarArray,
  NavbarItemType,
} from "@/components/utils/NavbarArrayAndTypes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import DropDown from "./Subcomponents/DropDown";
import MobileNavbar from "./Subcomponents/MobileNavbar";
const Navbar = () => {
  const [isNabarOpen, setIsNabarOpen] = useState<boolean>(false);
  const [cartItemNumber, setCartItemNumber] = useState<number>(0);

  return (
    <div className="sticky top-0 z-50 bg-opacityDown backdrop-blur-lg rounded-md">
      <div className="py-6 flex justify-between items-center space-x-12">
        <Link href="/" className="w-36 flex-shrink-0">
          <Image width={500} height={500} src={"/Logo.webp"} alt="main-logo" />
        </Link>
        <div className="hidden lg:flex justify-around items-center w-full">
          <ul className="flex space-x-8 font-medium text-xl text-purple-900">
            {NavbarArray.map((item: NavbarItemType, index: number) => (
              <li
                key={index}
                className=" group flex items-center relative cursor-pointer px-3 py-1  rounded-md hover:bg-gray-100"
              >
                <Link className="hover:underline" href={item.href}>
                  {item.label}
                </Link>
                {item.isDropDown ? (
                  <HiOutlineChevronDown
                    size={15}
                    className="mt-1 -rotate-180 duration-300 group-hover:rotate-0"
                  />
                ) : (
                  ""
                )}
                {item.isDropDown && (
                  <div
                    className={`invisible group-hover:visible absolute left-0 top-8 py-2 px-6 bg-gray-100 font-light min-w-[7.8rem]`}
                  >
                    <DropDown item={item} />
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center text-gray-600 px-3 rounded-md">
            <BiSearch />
            <input
              type="text"
              className="focus:outline-none pl-1 pr-5 py-1 w-80"
              placeholder="Search In Our Store"
            />
          </div>
          <div className="relative w-11 h-11 rounded-full bg-gray-200 flex justify-center flex-shrink-0 items-center">
            <div className="w-4 h-4 rounded-full bg-pink-400 absolute top-1 right-2 flex justify-center items-center text-xs font-light">
              {cartItemNumber}
            </div>
            <BsCart2 size={24} />
          </div>
        </div>
        <div onClick={() => setIsNabarOpen(!isNabarOpen)}>
          {!isNabarOpen ? (
            <div className="flex lg:hidden">
              <GiHamburgerMenu size={25} />
            </div>
          ) : (
            <div className="flex lg:hidden">
              <IoMdClose size={25} />
            </div>
          )}
        </div>
      </div>
      {isNabarOpen && <MobileNavbar />}
    </div>
  );
};

export default Navbar;
