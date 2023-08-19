export interface NavbarItemType {
  label: string;
  href: string;
  isDropDown?: boolean;
  dropDownData?: Array<this>;
}

export const NavbarArray: Array<NavbarItemType> = [
  {
    label: "Female",
    href: "/female",
    isDropDown: true,
    dropDownData: [
      {
        label: "Dresses",
        href: "/female/dresses",
      },
      {
        label: "Shirts",
        href: "/female/shirts",
      },
      {
        label: "Pents",
        href: "/female/pents",
      },
      {
        label: "Jackets",
        href: "/female/jackets",
      },
    ],
  },
  {
    label: "Male",
    href: "/male",
    isDropDown: true,
    dropDownData: [
      {
        label: "Shorts",
        href: "/male/shorts",
      },
      {
        label: "Shirts",
        href: "/male/shirts",
      },
      {
        label: "Pents",
        href: "/male/pents",
      },
      {
        label: "Jackets",
        href: "/male/jackets",
      },
    ],
  },
  {
    label: "Kids",
    href: "/kids",
    isDropDown: false,
  },
  {
    label: "All Products",
    href: "/allproducts",
    isDropDown: false,
  },
];
