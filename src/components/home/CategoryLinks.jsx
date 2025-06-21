import React from "react";

const categories = [
  {
    name: "Mobiles",
    img: "https://m.media-amazon.com/images/I/41Z6HmfzIML._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "Fashion",
    img: "https://m.media-amazon.com/images/I/51cc5nslUzL.jpg",
  },
  {
    name: "Electronics",
    img: "https://m.media-amazon.com/images/I/61Q5TPiBh2L._SX679_.jpg",
  },
  {
    name: "Home",
    img: "https://m.media-amazon.com/images/I/61Od6H8sZzL._SY300_SX300_QL70_FMwebp_.jpg",
  },
];

export default function CategoryLinks() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="bg-app-card rounded shadow p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
        >
          <img
            src={cat.img}
            alt={cat.name}
            className="h-20 w-auto mb-2"
            loading="lazy"
          />
          <span className="font-semibold text-app">{cat.name}</span>
        </div>
      ))}
    </div>
  );
}
