import React, { FC } from "react";
import { oneProductType } from "../utils/ProductsDataArrayAndType";
import ImageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";

const builder = ImageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const Card: FC<{ singleProduct: oneProductType }> = ({ singleProduct }) => {
  return (
    <div className="border max-w-sm min-w-[24rem] space-y-3">
      <div className="w-full">
        <Image
          src={urlFor(singleProduct.image[0]).width(1000).height(1000).url()}
          alt={singleProduct.image[0].alt}
          width={1000}
          height={1000}
        />
      </div>
      <div className="space-y-2 font-semibold text-lg text-gray-800">
        <h6>{singleProduct.productName}</h6>
        <p>${singleProduct.price}</p>
      </div>
    </div>
  );
};

export default Card;
