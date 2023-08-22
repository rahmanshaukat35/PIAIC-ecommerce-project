import { NavbarItemType } from "@/components/utils/NavbarArrayAndTypes";
import Link from "next/link";
import React, { FC, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const Expand: FC<{ item: NavbarItemType }> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isTimeOut, setTimeOut] = useState<boolean>(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    setTimeout(() => {
      setTimeOut(!isTimeOut);
    }, 100);
  };
  return (
    <li className={`${isExpanded ? "h-48" : "h-12"} list-none`}>
      <div
        onClick={handleExpand}
        className="flex items-center justify-between py-2 px-3 hover:bg-purple-300 rounded-md duration-300"
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
      </div>
      <div className=" space-y-1 mt-2 flex flex-col">
        {isExpanded &&
          item.dropDownData?.map((subItem: NavbarItemType, index: number) => (
            <Link
              key={index}
              href={subItem.href}
              className="px-5 rounded-md py-1 hover:bg-gray-50"
            >
              {subItem.label}
            </Link>
          ))}
      </div>
    </li>
  );
};

export default Expand;
