import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import Hero from "@/components/views/Hero";
import ProductCarousel from "@/components/views/ProductCarousel";
import ProductsType from "@/components/views/ProductsType";

async function GetAllProductsData() {
  const res = await fetch(`${BASE_PATH_FORAPI}/api/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const { response } = await GetAllProductsData();
  console.log("response", response);

  return (
    <>
      <div>
        <Hero />
        <ProductsType />
        <ProductCarousel productsData={response} />
      </div>
    </>
  );
}
