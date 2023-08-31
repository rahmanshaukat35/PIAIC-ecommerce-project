import React, { FC } from "react";
import { oneProductType } from "../utils/ProductsDataArrayAndType";
import ImageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";

const builder = ImageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const Card: FC<{ singleProduct: oneProductType }> = ({ singleProduct }) => {
  return (
    <div className="max-w-sm min-w-[24rem] space-y-3 select-none hover:scale-110 duration-300">
      <div className="relative w-full">
        <div className="absolute inset-0 z-10" />
        <Image
          width={1000}
          height={1000}
          src={urlFor(singleProduct.image[0]).width(1000).height(1000).url()}
          alt={singleProduct.image[0].alt}
        />
      </div>
      <div className="space-y-1 text-gray-600 font-semibold text-lg select-none">
        <Link href={`/catalog/${singleProduct.slug.current}`}>
          <h6>{singleProduct.productName}</h6>
          <p>${singleProduct.price}</p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
