import ProductCard from "@/components/ProductCard";
import { Product } from "@/components/types/Product";

export default async function products (){
    const res = await fetch ("https://dummyjson.com/products?limit=12");
    const data = await res.json();
    const products: Product[] = data.products;

    return(
        <div className="grid grid-cols-4">
            {
                products.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))
            }
        </div>
    )
}