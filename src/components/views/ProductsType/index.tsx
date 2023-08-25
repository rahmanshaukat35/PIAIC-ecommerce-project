import Image from "next/image";
import React from "react";
import card1 from "@/components/assets/images/card1.webp";
import card3 from "@/components/assets/images/card3.webp";
import card4 from "@/components/assets/images/card4.webp";

const ProductsType = () => {
  return (
    <div className="py-16 px-2">
      <div className="text-center space-y-3">
        <p className="text-blue-800 text-sm">PROMOTIONS</p>
        <h3 className="text-3xl font-bold text-gray-800">
          Our Promotions Events
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* card1 */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between py-5 px-10 col-span-1 md:col-span-2 bg-card1">
          <div className="text-gray-800">
            <h4 className="text-4xl font-bold">GET UP TO 60%</h4>
            <p className="text-xl">For the summer season</p>
          </div>
          <div className="w-72">
            <Image width={1000} height={1000} src={card1} alt="summer-image" />
          </div>
        </div>
        {/* card3 */}
        <div className="w-full row-span-1 md:row-span-2 bg-card3">
          <div className="p-6 text-lg text-center md:text-start">
            <p>Flex Sweatshirt</p>
            <p className="">
              <del>$100.00</del>
              <span className="px-2 font-bold">$75.00</span>
            </p>
          </div>
          <div className="w-72 mx-auto">
            <Image width={1000} height={1000} src={card3} alt="sweater" />
          </div>
        </div>
        {/* card4 */}
        <div className="w-full row-span-1 md:row-span-2 h-full bg-card4">
          <div className="p-6 text-lg text-center md:text-start">
            <p>Flex Push Button Bomber</p>
            <p className="">
              <del>$225.00</del>
              <span className="px-2 font-bold">$190.00</span>
            </p>
          </div>
          <div className="w-72 mx-auto">
            <Image width={1000} height={1000} src={card4} alt="sweater" />
          </div>
        </div>
        {/* card2 */}
        <div className="w-full text-white col-span-1 md:col-span-2 flex flex-col justify-center items-center space-y-3 bg-card2">
          <h3 className="font-extrabold text-4xl">GET 30% Off</h3>
          <p>USE PROMO CODE</p>
          <button
            aria-label="Redirect user to Dine week end sale"
            className="font-semibold py-1 px-6 rounded-lg text-lg tracking-widest bg-card2_button"
          >
            DINEWEEKENDSALE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsType;
