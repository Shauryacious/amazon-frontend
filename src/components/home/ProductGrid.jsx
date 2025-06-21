// src/components/home/ProductGrid.jsx
import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../../api/productApi";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllProducts()
      .then((res) => setProducts(res.data.products || []))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-app">Best Sellers</h2>
      {loading ? (
        <div>Loading products...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
