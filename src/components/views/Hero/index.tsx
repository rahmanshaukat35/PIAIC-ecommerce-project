import { heroGirlimg } from "@/components/assets";
import Image from "next/image";
import React from "react";
import { BsCart2 } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="space-y-8 flex justify-between ">
      {/* left side */}
      <div className="space-y-9 py-5 lg:py-20 max-w-sm">
        <button
          aria-label="redirect the user to sale page"
          className="rounded-md px-4 py-2 bg-primaryWhite text-purple-800 font-medium"
        >
          Sale 80%
        </button>
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-gray-800 font-bold">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-gray-800">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button className="flex items-center gap-4 px-8 md:px-6 rounded-sm text-lg font-semibold py-4 md:py-6 bg-gray-800 text-white ring-slate-800 ring-1">
          <BsCart2 size={24} />
          <p className="leading-4">
            Cart
            <br /> Shopping
          </p>
        </button>
        <div className="flex gap-4 flex-wrap">
          <Image
            width={80}
            height={80}
            src={
              "https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252FFeatured2.247cd605.png%26w%3D128%26q%3D75&w=128&q=75"
            }
            alt="bustle"
          />
          <Image
            width={80}
            height={80}
            src={
              "https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252FFeatured3.6076521d.png%26w%3D128%26q%3D75&w=128&q=75"
            }
            alt="verscae"
          />
          <Image
            width={80}
            height={80}
            src={
              "https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252FFeatured4.0489f1fc.png%26w%3D128%26q%3D75&w=128&q=75"
            }
            alt="instyle"
          />
          <Image
            width={80}
            height={80}
            src={
              "https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252FFeatured1.66abddd4.png%26w%3D128%26q%3D75&w=128&q=75"
            }
            alt="bazaar"
          />
        </div>
      </div>
      {/* right side */}
      <div className="hidden lg:flex shrink-0 bg-primaryWhite rounded-full">
        <Image src={heroGirlimg} alt="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
