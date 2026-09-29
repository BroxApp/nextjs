import ProductGrid from "@/components/ProductGrid";
import { Product } from "@/components/types/Product";

export default async function Shoping() {
  const res = await fetch("https://dummyjson.com/products?limit=48");
  const data = await res.json();
  const products: Product[] = data.products;

  return <ProductGrid products={products} />;
}