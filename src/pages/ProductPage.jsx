// src/pages/ProductPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();

  // Fetch product data here using id (useEffect + fetch/axios/query)
  // For now, show placeholder
  return (
    <div className="container-app py-8">
      <div className="bg-app-card rounded shadow p-8 flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-64 h-64 bg-gray-100 rounded flex items-center justify-center">
            <span className="text-app-muted">Product Image</span>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">Product Title (ID: {id})</h1>
          <p className="text-lg text-app-accent font-semibold mb-4">₹Price</p>
          <p className="mb-6 text-app-muted">
            Product description goes here. Replace with real data.
          </p>
          <button className="bg-app-accent text-app font-bold px-6 py-2 rounded hover:brightness-90 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
