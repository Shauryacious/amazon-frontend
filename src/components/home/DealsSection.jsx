import React from "react";

const deals = [
  {
    title: "Up to 60% off | Electronics",
    img: "https://m.media-amazon.com/images/I/713NySDNqkL._SL1500_.jpg",
    link: "/deals/electronics",
  },
  {
    title: "Fashion Deals",
    img: "https://m.media-amazon.com/images/I/81McKshJlmL._SY879_.jpg",
    link: "/deals/fashion",
  },
  // Add more deals as needed
];

export default function DealsSection() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-app">Today's Deals</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {deals.map((deal) => (
          <a
            href={deal.link}
            key={deal.title}
            className="min-w-[180px] bg-app-card rounded shadow p-3 flex flex-col items-center hover:ring-2 ring-app-accent transition"
          >
            <img
              src={deal.img}
              alt={deal.title}
              className="h-24 w-auto mb-2"
              loading="lazy"
            />
            <span className="text-sm text-app text-center">{deal.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
