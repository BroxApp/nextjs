"use client";
import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/components/types/Product";

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    const isValid = /^[a-zA-Z0-9\u0600-\u06FF\s]*$/.test(val);

    if (!isValid) {
      setError("فقط حروف و اعداد مجاز است");
      return;
    }
    if (val.length > 20) {
      setError("حداکثر ۲۰ کاراکتر مجاز است");
      return;
    }

    setError("");
    setQuery(val);
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
     
      const matchesCategory = category ? product.category === category : true;

      const matchesQuery = query.trim()
        ? product.title.toLowerCase().includes(query.toLowerCase())
        : true;

      return matchesCategory && matchesQuery;
    });
  }, [query, category, products]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full mx-auto my-3 gap-2">
        <select
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-300"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All categories</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="kitchen-accessories">Kitchen accessories</option>
          <option value="laptops">Laptops</option>
          <option value="mens-shirts">Mens shirts</option>
          <option value="mens-shoes">Mens shoes</option>
          <option value="mens-watches">Mens watches</option>
          <option value="mens-watches">Mens watches</option>
          <option value="home-decoration">Home decoration</option>
          <option value="groceries">Groceries</option>
        </select>

        <div className="flex flex-col w-full max-w-md">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search ..."
            className={`w-full px-4 py-2 rounded-md border placeholder:text-gray-300 outline-none text-gray-100 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}