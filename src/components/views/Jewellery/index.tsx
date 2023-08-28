import Image from "next/image";
import React from "react";

const Jewellery = () => {
  return (
    <div className="px-1 text-gray-600">
      <div className=" font-bold text-4xl flex justify-end py-2">
        <h6 className="max-w-xs">
          Unique and Authentic Vintage Designer Jewellery
        </h6>
      </div>
      <div className="flex justify-between py-4">
        <div className=" relative grid gap-10 basis-1/2 grid-cols-2 grid-rows-2">
          <div className="absolute text-gray-200 inset-0 -z-50">
            <h6 className="text-[9rem] leading-[6.5rem] tracking-wide font-medium">
              Different from others
            </h6>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="text-xl font-semibold ">
              Using Good Quality Materials
            </h6>
            <p className="text-lg leading-5">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="text-xl font-semibold ">100% Handmade Products</h6>
            <p className="text-lg leading-5">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="text-xl font-semibold ">Modern Fashion Design</h6>
            <p className="text-lg leading-5">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="max-w-[13rem] space-y-2">
            <h6 className="text-xl font-semibold ">Discount for Bulk Orders</h6>
            <p className="text-lg leading-5">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="flex basis-1/2">
          <div className="w-80">
            <Image
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature.1118a2f3.png&w=384&q=75"
              }
              alt="Designer"
              width={1000}
              height={1000}
            />
          </div>
          <div className="p-6">
            <p
              style={{ wordSpacing: "0.8rem" }}
              className="max-w-[15rem] h-[90%]"
            >
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <button className="py-2 px-9 bg-gray-800 text-white">
              See All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewellery;
