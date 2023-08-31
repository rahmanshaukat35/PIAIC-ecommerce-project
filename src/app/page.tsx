import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import { responseType } from "@/components/utils/ProductsDataArrayAndType";
import Hero from "@/components/views/Hero";
import Jewellery from "@/components/views/Jewellery";
import NewsLetter from "@/components/views/NewsLetter";
import ProductCarousel from "@/components/views/ProductCarousel";
import ProductsType from "@/components/views/ProductsType";

async function GetAllProductsData() {
  // const res = await fetch(`${BASE_PATH_FORAPI}/api/products`);
  const res = await fetch("http://localhost:3000/api/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const { response }: any = await GetAllProductsData();
  console.log("result", response);

  return (
    <>
      <div>
        <Hero />
        <ProductsType />
        <ProductCarousel ProductData={response} />
        <Jewellery />
        <NewsLetter />
      </div>
    </>
  );
}
