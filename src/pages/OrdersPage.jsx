// src/pages/OrdersPage.jsx
import React from "react";

export default function OrdersPage() {
  // Replace with orders fetched from API
  const orders = [];

  return (
    <div className="container-app py-8">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      {orders.length === 0 ? (
        <div className="bg-app-card p-8 rounded shadow text-center text-app-muted">
          You have no orders yet.
        </div>
      ) : (
        <div className="bg-app-card rounded shadow p-4">
          {/* Map orders here */}
        </div>
      )}
    </div>
  );
}
