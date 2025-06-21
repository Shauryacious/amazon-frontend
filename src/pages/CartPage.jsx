// src/pages/CartPage.jsx
import React from "react";

export default function CartPage() {
  // Replace with cart context or state
  const cartItems = [];

  return (
    <div className="container-app py-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="bg-app-card p-8 rounded shadow text-center text-app-muted">
          Your cart is empty.
        </div>
      ) : (
        <div className="bg-app-card rounded shadow p-4">
          {/* Map cart items here */}
        </div>
      )}
    </div>
  );
}
