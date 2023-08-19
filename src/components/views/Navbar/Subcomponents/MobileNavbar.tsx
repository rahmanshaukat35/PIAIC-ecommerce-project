import {
  NavbarArray,
  NavbarItemType,
} from "@/components/utils/NavbarArrayAndTypes";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const MobileNavbar = () => {
  return (
    <div>
      <div className="w-full px-4 py-2 bg-gray-200 rounded-md">
        {NavbarArray.map((item: NavbarItemType, index: number) => (
          <li
            key={index}
            className="py-2 px-3 hover:bg-purple-300 rounded-md list-none duration-300 flex justify-between"
          >
            <Link href={item.href}>{item.label}</Link>
            {item.isDropDown ? (
              <HiOutlineChevronDown
                size={15}
                className="mt-1 -rotate-180 duration-300 group-hover:rotate-0"
              />
            ) : (
              ""
            )}
          </li>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
