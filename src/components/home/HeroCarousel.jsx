import React, { useState, useEffect } from "react";

const banners = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img25/Media/PC_Hero_3000x1200_Asin-toys-2x._CB547414496_.jpg",
    alt: "Fashion Sale – OneCard June",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg",
    alt: "Daily Essentials",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg",
    alt: "Amazon Pay UPI Offer",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30001._CB542120021_.jpg",
    alt: "Shoes Sale",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow mb-6">
      <img
        src={banners[current].img}
        alt={banners[current].alt}
        className="w-full h-[300px] object-cover object-top mt-6 overflow-hidden rounded-lg"
        loading="lazy"
      />
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10
          bg-black/30 hover:bg-black/50 transition
          rounded-full shadow-lg flex items-center justify-center
          w-12 h-12 md:w-14 md:h-14
          border border-white/30
          backdrop-blur-sm
        "
        style={{ outline: "none" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M15.5 19L9.5 12L15.5 5"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10
          bg-black/30 hover:bg-black/50 transition
          rounded-full shadow-lg flex items-center justify-center
          w-12 h-12 md:w-14 md:h-14
          border border-white/30
          backdrop-blur-sm
        "
        style={{ outline: "none" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M8.5 5L14.5 12L8.5 19"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 border border-white/60 ${
              idx === current ? "bg-white" : "bg-gray-400/70"
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
