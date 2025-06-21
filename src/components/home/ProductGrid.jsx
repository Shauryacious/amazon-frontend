import React from "react";

// Updated products with working Amazon India image URLs
const products = [
  {
    id: 1,
    title: "Echo Dot (4th Gen)",
    img: "https://m.media-amazon.com/images/I/61u0y9ADElL._AC_UL320_.jpg",
    price: "₹3,499",
  },
  {
    id: 2,
    title: "Fire TV Stick",
    img: "https://m.media-amazon.com/images/I/51CgKGfMelL._AC_UL320_.jpg",
    price: "₹2,799",
  },
  {
    id: 3,
    title: "Samsung Galaxy M14 5G",
    img: "https://m.media-amazon.com/images/I/81ZSn2rk9WL._AC_UL320_.jpg",
    price: "₹12,990",
  },
  {
    id: 4,
    title: "boAt Airdopes 141",
    img: "https://m.media-amazon.com/images/I/51HBom8xz7L._AC_UL320_.jpg",
    price: "₹1,299",
  },
  {
    id: 5,
    title: "HP 15s Laptop",
    img: "https://m.media-amazon.com/images/I/71YZQa3BTEL._SX679_.jpg",
    price: "₹39,990",
  },
];

export default function ProductGrid() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-app">Best Sellers</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-app-card rounded shadow p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={product.img}
              alt={product.title}
              className="h-28 w-auto mb-2"
              loading="lazy"
            />
            <span className="font-medium text-app text-center mb-1">
              {product.title}
            </span>
            <span className="text-app-accent font-bold">{product.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
