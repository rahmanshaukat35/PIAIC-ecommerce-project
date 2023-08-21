import {
  NavbarArray,
  NavbarItemType,
} from "@/components/utils/NavbarArrayAndTypes";
import React from "react";
import Expand from "./Expand";

const MobileNavbar = () => {
  return (
    <div className="w-full px-4 py-2 bg-gray-200 rounded-md">
      {NavbarArray.map((item: NavbarItemType, index: number) => (
        <Expand key={index} item={item} />
      ))}
    </div>
  );
};

export default MobileNavbar;
