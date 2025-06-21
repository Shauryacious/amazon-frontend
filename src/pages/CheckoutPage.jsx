// src/pages/CheckoutPage.jsx
import React from "react";

export default function CheckoutPage() {
  // Replace with checkout logic and cart context
  return (
    <div className="container-app py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="bg-app-card rounded shadow p-8">
        <p className="mb-4">
          Checkout flow goes here. (Address, payment, review, etc.)
        </p>
        <button className="bg-app-accent text-app font-bold px-6 py-2 rounded hover:brightness-90 transition">
          Place Order
        </button>
      </div>
    </div>
  );
}
