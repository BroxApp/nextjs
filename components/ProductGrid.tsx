"use client"
import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/components/types/Product";

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    const isValid = /^[a-zA-Z0-9\u0600-\u06FF\s]*$/.test(val);

    if (!isValid) {
      setError("فقط حروف و اعداد مجاز است");
      return;
    }
    if (val.length > 50) {
      setError("حداکثر ۵۰ کاراکتر مجاز است");
      return;
    }

    setError("");
    setQuery(val);
  }

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return products;
    return products.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, products]);

  return (
    <div>
      <div className="w-full max-w-md mx-auto my-6">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="جستجوی محصول..."
          className={`w-full px-4 py-2 rounded-md border outline-none text-gray-900 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
      </div>

      <div className="grid grid-cols-4 bg-slate-500">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}