import Image from "next/image";
import { Product } from "./types/Product";
import ProductBtn from "./ProductBtn";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { title, category, description, price, rating, brand, thumbnail, } = product;

  return (
    <div className="relative border-4 border-amber-200 p-4 m-2">
      <div className="pb-5">
        <Image src={thumbnail} alt={title} width={200} height={200} />
        <h2>{title}</h2>
        <h3>{category}</h3>
        <p>{description}</p>
        <p>{price} $</p>
        <p>{rating} ⭐</p>
        <p>{brand}</p>
      </div>
      <div className="absolute bottom-[5px] md:bottom-[10px] left-1 md:left-3">
        <ProductBtn/>
      </div>
      
    </div>
  );
}