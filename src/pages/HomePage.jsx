import React from "react";
import HeroCarousel from "../components/home/HeroCarousel";
import CategoryLinks from "../components/home/CategoryLinks";
import DealsSection from "../components/home/DealsSection";
import ProductGrid from "../components/home/ProductGrid";

export default function HomePage() {
  return (
    <div className="container-app py-6">
      <HeroCarousel />
      <CategoryLinks />
      <DealsSection />
      <ProductGrid />
    </div>
  );
}
