// src/components/home/ProductCard.jsx
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition flex flex-col items-stretch p-3 border border-gray-200 hover:border-[#febd69] group">
      <div className="bg-white rounded flex items-center justify-center h-36 mb-3 overflow-hidden">
        <img
          src={product.images?.[0] || ""}
          alt={product.name}
          className="max-h-32 max-w-[90%] object-contain group-hover:scale-105 transition"
          loading="lazy"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <span className="font-medium text-gray-900 text-sm line-clamp-2 mb-1 min-h-[2.5em]">
          {product.name}
        </span>
        {product.brand && (
          <span className="text-xs text-gray-500 mb-1">{product.brand}</span>
        )}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[#B12704] font-bold text-lg">
            ₹{product.price?.toLocaleString()}
          </span>
        </div>
        <button className="mt-2 bg-[#ffd814] hover:bg-[#f7ca00] text-black text-xs font-bold rounded py-1 px-2 border border-[#fcd200]">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
