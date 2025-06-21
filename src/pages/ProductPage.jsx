import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/productApi";

// Dummy for ratings (replace with real data as needed)
const renderStars = (rating = 4) => (
  <span className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <polygon points="10,1 12,7 18,7 13,11 15,17 10,13 5,17 7,11 2,7 8,7" />
      </svg>
    ))}
  </span>
);

const PrimeBadge = () => (
  <span className="inline-flex items-center ml-2">
    <svg
      width="44"
      height="16"
      viewBox="0 0 44 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4"
    >
      <text
        x="0"
        y="12"
        fontFamily="Amazon Ember, Arial, sans-serif"
        fontWeight="bold"
        fontSize="12"
        fill="#00A8E1"
      >
        prime
      </text>
      <polygon points="36,8 44,8 40,15" fill="#F6A800" />
    </svg>
  </span>
);

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProductById(id)
      .then((res) => setProduct(res.data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!product) return <div className="p-8">Product not found.</div>;

  const images =
    product.images && product.images.length > 0 ? product.images : [""];
  const maxQty = Math.max(1, Math.min(product.stock || 1, 10));

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-6 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Large Image */}
        <div className="w-full md:w-[35%] flex flex-col items-center">
          <div className="bg-white flex items-center justify-center h-[420px] w-full mb-3 overflow-hidden">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="max-h-[400px] object-contain mx-auto transition-transform duration-200 hover:scale-105"
            />
          </div>
          {images.length > 1 && (
            <div className="flex gap-2 mt-2">
              {images.map((img, idx) => (
                <button
                  key={img + idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`border rounded p-1 bg-white ${
                    idx === selectedImage
                      ? "border-[#febd69] ring-2 ring-[#febd69]"
                      : "border-gray-200"
                  }`}
                >
                  <img src={img} alt="" className="h-10 w-10 object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Center: Details */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-xs text-blue-700 font-semibold mb-1">
            Brand: {product.brand}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          <div className="flex items-center gap-2 mb-2">
            {renderStars(4)}
            <span className="text-sm text-blue-600 underline cursor-pointer">
              521 ratings
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-bold text-[#B12704]">-50%</span>
            <span className="text-2xl font-bold text-[#B12704]">
              ₹{product.price?.toLocaleString()}
            </span>
            <PrimeBadge />
          </div>
          <div className="text-xs text-gray-600 mb-2">
            M.R.P.:{" "}
            <span className="line-through">
              ₹{(product.price * 2)?.toLocaleString()}
            </span>
          </div>
          <div className="text-xs text-gray-600 mb-2">
            Inclusive of all taxes
          </div>
          <div className="mb-3">
            <div className="font-semibold mb-1">Offers</div>
            <div className="flex flex-wrap gap-2">
              <div className="border rounded px-3 py-1 text-xs bg-white">
                Cashback Upto ₹14 as Amazon Pay
              </div>
              <div className="border rounded px-3 py-1 text-xs bg-white">
                Bank Offer: Upto ₹1,250 off on select cards
              </div>
            </div>
          </div>
          <div className="flex gap-4 text-xs text-gray-500 mb-2">
            <span>10 days Return</span>
            <span>Pay on Delivery</span>
            <span>Free Delivery</span>
            <span>Top Brand</span>
          </div>
          <div className="text-gray-700 mb-2">{product.description}</div>
        </div>

        {/* Right: Buy Box */}
        <div className="w-full md:w-[320px] flex-shrink-0">
          <div className="border rounded-lg shadow p-5 flex flex-col gap-4 bg-[#fafafa]">
            <div className="text-2xl font-bold text-[#B12704]">
              ₹{product.price?.toLocaleString()}
            </div>
            <div className="text-xs text-blue-700 mb-1">
              FREE delivery{" "}
              <span className="font-semibold">Thursday, 26 June.</span> Order
              within 20 hrs 18 mins.
            </div>
            <div className="text-xs text-gray-700 mb-1">
              Delivering to Indore 453331 -{" "}
              <span className="underline cursor-pointer">Update location</span>
            </div>
            <div className="text-green-700 font-semibold">
              {product.stock > 0 ? "In stock" : "Out of stock"}
            </div>
            <div className="text-xs text-gray-700 mb-1">
              Ships from <span className="font-semibold">Amazon</span>
            </div>
            <div className="text-xs text-gray-700 mb-1">
              Sold by <span className="font-semibold">Cocoblu Retail</span>
            </div>
            <div className="text-xs text-blue-700 mb-1">
              Payment{" "}
              <span className="underline cursor-pointer">
                Secure transaction
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <label htmlFor="qty" className="text-sm font-medium">
                Quantity:
              </label>
              <select
                id="qty"
                className="border rounded px-2 py-1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                disabled={product.stock === 0}
              >
                {Array.from({ length: maxQty }, (_, i) => i + 1).map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-black text-base font-bold rounded py-2 border border-[#fcd200] shadow"
              disabled={product.stock === 0}
            >
              Add to Cart
            </button>
            <button
              className="w-full bg-[#ffa41c] hover:bg-[#ff9900] text-black text-base font-bold rounded py-2 border border-[#fcd200] shadow"
              disabled={product.stock === 0}
            >
              Buy Now
            </button>
            <div className="flex items-center gap-2 text-xs mt-1">
              <input type="checkbox" id="gift" />
              <label htmlFor="gift">Add gift options</label>
            </div>
            <button className="w-full border border-gray-300 rounded py-2 text-xs mt-2 hover:bg-gray-100">
              Add to Wish List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
