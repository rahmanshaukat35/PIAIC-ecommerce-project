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
        href: "/female/dress",
      },
      {
        label: "T-Shirts",
        href: "/female/t-shirt",
      },
      {
        label: "Pents",
        href: "/female/pent",
      },
      {
        label: "Jackets",
        href: "/female/jacket",
      },
      {
        label: "Sweaters",
        href: "/female/sweater",
      },
    ],
  },
  {
    label: "Male",
    href: "/male",
    isDropDown: true,
    dropDownData: [
      {
        label: "Sweaters",
        href: "/male/sweater",
      },
      {
        label: "Jackets",
        href: "/male/jacket",
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
