import ProductGrid from "@/components/ProductGrid";
import { Product } from "@/components/types/Product";
import ProductBanner from "@/components/Product-banner";

export default async function Shoping() {
  const res = await fetch("https://dummyjson.com/products?limit=96");
  const data = await res.json();
  const products: Product[] = data.products;

  return (
    <>
    <ProductBanner/>
    <ProductGrid products={products} />
    </>
  )
}